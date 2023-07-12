import styles from "./ProfileCard.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { selectProfileData } from "app/entities/Profile/model/selectors/selectProfileData/selectProfileData"
import { Text } from "shared/ui/Text/Text"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"


interface ProfileCardProps {
  className?: string
}


export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation("profile")

  const data = useSelector(selectProfileData)
  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t("Профиль")}   />
        <Button variant={ButtonVariant.OUTLINE}
          className={styles.editBtn}
        >
          {t("Редактировать")}
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.firstname}
          placeholder={t("Ваше имя")}
          className={styles.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
          className={styles.input}
        />

      </div>
    </div>
  )
}


