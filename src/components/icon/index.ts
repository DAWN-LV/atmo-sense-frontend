import Gauge from "@/components/icon/svg/gauge.svg?raw"
import Bell from "@/components/icon/svg/bell.svg?raw"
import Microchip from "@/components/icon/svg/microchip.svg?raw"
import BoxArchive from "@/components/icon/svg/box-archive.svg?raw"
import Eye from "@/components/icon/svg/eye.svg?raw"
import EyeSlash from "@/components/icon/svg/eye-slash.svg?raw"
import CircleNotch from "@/components/icon/svg/circle-notch.svg?raw"
import Google from "@/components/icon/svg/google.svg?raw"
import ChevronRight from "@/components/icon/svg/chevron-right.svg?raw"
import Plus from "@/components/icon/svg/plus.svg?raw"
import Xmark from "@/components/icon/svg/xmark.svg?raw"
import CircleCheck from "@/components/icon/svg/circle-check.svg?raw"
import CircleExclamation from "@/components/icon/svg/circle-exclamation.svg?raw"
import CircleXmark from "@/components/icon/svg/circle-xmark.svg?raw"
import CircleUser from "@/components/icon/svg/circle-user.svg?raw"

const icons = {
  gauge: Gauge,
  bell: Bell,
  microchip: Microchip,
  box_archive: BoxArchive,
  eye: Eye,
  eye_slash: EyeSlash,
  circle_notch: CircleNotch,
  google: Google,
  chevron_right: ChevronRight,
  plus: Plus,
  xmark: Xmark,
  circle_check: CircleCheck,
  circle_exclamation: CircleExclamation,
  circle_xmark: CircleXmark,
  circle_user: CircleUser,
}

export type IconName = keyof typeof icons

export { icons }
