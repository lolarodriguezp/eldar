import Alert from "./Alert";

interface Props {
  open: boolean;
  handleCancel: () => void;
  handleAccept: () => void;
  itemDescrip: string;
}

export default function DeleteAlert({
  open,
  handleAccept,
  handleCancel,
  itemDescrip,
}: Props) {
  return (
    <Alert
      title="Está seguro?"
      contentText={`Si continúa, se eliminará ${itemDescrip}`}
      open={open}
      handleAccept={handleAccept}
      handleCancel={handleCancel}
    />
  );
}
