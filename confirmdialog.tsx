import * as React from "react";
import {
  Dialog,
  DialogType,
  DialogFooter
} from "office-ui-fabric-react/lib/Dialog";
import {
  PrimaryButton,
  DefaultButton
} from "office-ui-fabric-react/lib/Button";
import * as strings from "ProjectSpaceWebPartStrings";

export interface IConfirmDialogProps {
  onValidation: () => void;
  onRejection: () => void;
  title: string;
  description?: string;
  hideDialog: boolean;

}
export interface IConfirmDialogState { }

export class ConfirmDialog extends React.Component<
  IConfirmDialogProps,
  IConfirmDialogState
  > {
  constructor(props: IConfirmDialogProps) {
    super(props);
    this.state = {
      hideDialog: true
    };
  }

  public render() {
    return (
      <Dialog
        isBlocking={true}
        isDarkOverlay={true}
        hidden={this.props.hideDialog}
        dialogContentProps={{
          type: DialogType.normal,
          title: this.props.title,
          subText: this.props.description || ""
          
        }}
        modalProps={{
          className:'deleteConfirm'
        }}

      >
        <DialogFooter>
        <DefaultButton
            onClick={this.props.onRejection}
            text={strings.Common_Action_Cancel}
          />
          <PrimaryButton
            onClick={this.props.onValidation}
            text={strings.Common_Action_OK}
          />
         
        </DialogFooter>
      </Dialog>
    );
  }
}
