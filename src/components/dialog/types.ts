export interface DialogProps {
  closeDialog: () => void
  [key: string]: any
}

export type DialogComponentType = React.ComponentType<DialogProps>;

export interface OpenDialogParams {
  components: DialogComponentType
  props?: DialogProps
  options?: any
}

export interface DialogContextType {
  dialog: OpenDialogParams | undefined
  openDialog: (components: DialogComponentType, props?: DialogProps, options?: any) => void
  closeDialog: () => void
}