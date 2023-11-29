//#region Common

export type WithChildren = { children?: React.ReactNode }
export type Provider = ({ children }: WithChildren) => React.ReactElement

//#endregion

//#region Dialog

export interface DialogProps {
  [key: string]: any
  closeDialog: () => void
}

export type DialogComponentType = React.ComponentType<DialogProps>

export interface OpenDialogParams {
  components: DialogComponentType
  props?: Record<string, any>
  options?: any
}

export interface DialogContextType {
  dialog: OpenDialogParams | undefined
  openDialog: (components: DialogComponentType, props?: Record<string, any>, options?: any) => void
}

//#endregion