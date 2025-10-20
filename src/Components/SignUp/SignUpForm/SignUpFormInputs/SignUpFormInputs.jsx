import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "src/Features/formsSlice";
import ShowHidePassword from "../../../Shared/MiniComponents/ShowHidePassword/ShowHidePassword";
import s from "./SignUpFormInputs.module.scss";

const SignUpFormInputs = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username,
    email_id,
    first_name,
    last_name,
    password_hash,
    referred_by_code,
  } = useSelector((state) => state.forms.signUp || {});

  function updateInputOnChange(e) {
    dispatch(
      updateInput({
        formName: "signUp",
        key: e.target.name,
        value: e.target.value,
      })
    );
  }

  return (
    <div className={s.inputs}>
      <div className={s.row}>
        <input
          type="text"
          name="first_name"
          value={first_name || ""}
          placeholder="First name"
          onChange={updateInputOnChange}
          required
          aria-required="true"
        />
        <input
          type="text"
          name="last_name"
          value={last_name || ""}
          placeholder="Last name"
          onChange={updateInputOnChange}
          required
          aria-required="true"
        />
      </div>

      <input
        type="text"
        name="username"
        value={username || ""}
        placeholder="Username"
        onChange={updateInputOnChange}
        required
        aria-required="true"
      />

      <input
        type="email"
        name="email_id"
        value={email_id || ""}
        placeholder="Email"
        onChange={updateInputOnChange}
        required
        aria-required="true"
      />
      <input
        type="text"
        name="referred_by_code"
        value={referred_by_code || ""}
        placeholder="Referral code"
        onChange={updateInputOnChange}
      />
      <div className={s.input}>
        <input
          type="password"
          name="password_hash"
          value={password_hash || ""}
          placeholder="Password"
          onChange={updateInputOnChange}
          required
          aria-required="true"
        />
        <ShowHidePassword targetInputName="password_hash" />
      </div>
    </div>
  );
};
export default SignUpFormInputs;
