import Gauge from "@/components/icon/internal/svg/gauge.svg?raw"
import Bell from "@/components/icon/internal/svg/bell.svg?raw"
import Microchip from "@/components/icon/internal/svg/microchip.svg?raw"
import BoxArchive from "@/components/icon/internal/svg/box-archive.svg?raw"
import Eye from "@/components/icon/internal/svg/eye.svg?raw"
import EyeSlash from "@/components/icon/internal/svg/eye-slash.svg?raw"
import CircleNotch from "@/components/icon/internal/svg/circle-notch.svg?raw"
import Google from "@/components/icon/internal/svg/google.svg?raw"
import ChevronRight from "@/components/icon/internal/svg/chevron-right.svg?raw"
import Plus from "@/components/icon/internal/svg/plus.svg?raw"
import Xmark from "@/components/icon/internal/svg/xmark.svg?raw"
import CircleCheck from "@/components/icon/internal/svg/circle-check.svg?raw"
import CircleExclamation from "@/components/icon/internal/svg/circle-exclamation.svg?raw"
import CircleXmark from "@/components/icon/internal/svg/circle-xmark.svg?raw"
import CircleUser from "@/components/icon/internal/svg/circle-user.svg?raw"
import Sun from "@/components/icon/internal/svg/sun.svg?raw"
import Moon from "@/components/icon/internal/svg/moon.svg?raw"
import EllipsisVertical from "@/components/icon/internal/svg/ellipsis-vertical.svg?raw"
import Trash from "@/components/icon/internal/svg/trash.svg?raw"
import RightFromBracket from "@/components/icon/internal/svg/right-from-bracket.svg?raw"
import PenToSquare from "@/components/icon/internal/svg/pen-to-square.svg?raw"
import Bars from "@/components/icon/internal/svg/bars.svg?raw"
import Clipboard from "@/components/icon/internal/svg/clipboard.svg?raw"

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
  sun: Sun,
  moon: Moon,
  ellipsis_vertical: EllipsisVertical, 
  trash: Trash,
  right_from_bracket: RightFromBracket,
  pen_to_square: PenToSquare,
  bars: Bars,
  clipboard: Clipboard,
}

export type IconName = keyof typeof icons

export { icons }
export { default } from "@/components/icon/internal/Icon"
