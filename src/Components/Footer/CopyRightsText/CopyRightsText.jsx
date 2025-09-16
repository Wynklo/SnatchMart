import { useTranslation } from "react-i18next";
import s from "./CopyRightsText.module.scss";

const CopyRightsText = () => {
  const designerProfile = "https://www.linkedin.com/in/pulkit-giddu-223780206/";
  const copyRightTrans = "footer.copyRightsText";
  const { t } = useTranslation();

  return (
    <p className={s.copyRights}>
      <span>{t(`${copyRightTrans}.designedBy`)}</span>
      <a href={designerProfile} target="_blank">
        Pulkit Giddu
      </a>
    </p>
  );
};
export default CopyRightsText;
