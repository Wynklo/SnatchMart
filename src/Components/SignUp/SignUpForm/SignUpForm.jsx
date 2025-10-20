import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "src/Features/alertsSlice";
import { newSignUp, setLoginData } from "src/Features/userSlice";
import useOnlineStatus from "src/Hooks/Helper/useOnlineStatus";
import SignUpButtons from "./SignUpButtons/SignUpButtons";
import s from "./SignUpForm.module.scss";
import SignUpFormInputs from "./SignUpFormInputs/SignUpFormInputs";
import { REGEX_PATTERNS } from "src/Data/constants";

const SignUpForm = () => {
  const { signedUpUsers } = useSelector((state) => state.user);
  const isWebsiteOnline = useOnlineStatus();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function validateForm(formData) {
    // Username: at least 3 chars, no spaces
    if (!formData.username || formData.username.length < 3 || /\s/.test(formData.username)) {
      dispatch(showAlert({
        alertText: "Username must be at least 3 characters and contain no spaces.",
        alertState: "error",
        alertType: "alert"
      }));
      return false;
    }
    // First name and last name: not empty
    if (!formData.first_name || !formData.last_name) {
      dispatch(showAlert({
        alertText: "First and last name are required.",
        alertState: "error",
        alertType: "alert"
      }));
      return false;
    }
    // Email: must match regex
    if (!formData.email_id || !REGEX_PATTERNS.email.test(formData.email_id)) {
      dispatch(showAlert({
        alertText: "Please enter a valid email address.",
        alertState: "error",
        alertType: "alert"
      }));
      return false;
    }
    // Password: at least 6 chars
    if (!formData.password_hash || formData.password_hash.length < 6) {
      dispatch(showAlert({
        alertText: "Password must be at least 6 characters.",
        alertState: "error",
        alertType: "alert"
      }));
      return false;
    }
    return true;
  }

  async function signUp(e) {
    e.preventDefault();

    const inputs = e.target.querySelectorAll("input");
    const formDataObj = new FormData(e.target);
    const formData = {};

    for (let pair of formDataObj.entries()) formData[pair[0]] = pair[1];

    // Validate form
    if (!validateForm(formData)) return;

    if (!isWebsiteOnline) {
      internetConnectionAlert();
      return;
    }

    const payload = {
      email_id: formData.email_id,
      username: formData.username,
      first_name: formData.first_name,
      last_name: formData.last_name,
      password_hash: formData.password_hash,
      referred_by_code: formData.referred_by_code || "",
    };

    try {
      // Call backend API to register user
      const response = await fetch("http://localhost:8081/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        dispatch(showAlert({
          alertText: errorText || "Signup failed. Please try again.",
          alertState: "error",
          alertType: "alert"
        }));
        return;
      }

      dispatch(newSignUp([
        ...signedUpUsers,
        {
          username: payload.username,
          emailOrPhone: payload.email_id,
          password: payload.password_hash,
          first_name: payload.first_name,
          last_name: payload.last_name,
        }
      ]));
      dispatch(setLoginData({
        username: payload.username,
        emailOrPhone: payload.email_id,
        password: payload.password_hash,
        first_name: payload.first_name,
        last_name: payload.last_name,
        isSignIn: true,
      }));
      signInAlert(t, dispatch);
    } catch (err) {
      dispatch(showAlert({
        alertText: "Signup failed. Please try again.",
        alertState: "error",
        alertType: "alert"
      }));
    }
  }

  function internetConnectionAlert() {
    const alertText = t("toastAlert.loginFailed");
    const alertState = "error";
    dispatch(showAlert({ alertText, alertState, alertType: "alert" }));
  }

  return (
    <form action="POST" className={s.form} onSubmit={signUp}>
      <h2>{t("loginSignUpPage.createAccount")}</h2>
      <p>{t("loginSignUpPage.enterDetails")}</p>
      <SignUpFormInputs />
      <SignUpButtons />
    </form>
  );
};
export default SignUpForm;

export function signInAlert(t, dispatch) {
  const alertText = t("toastAlert.signInSuccess");
  const alertState = "success";
  setTimeout(() => {
    dispatch(showAlert({ alertText, alertState, alertType: "alert" }));
  }, 1500);
}