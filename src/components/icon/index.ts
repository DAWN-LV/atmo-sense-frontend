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
}

export type IconName = keyof typeof icons

export { icons }
