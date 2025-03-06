type LabelProps = {
  labelName: string;
};

export default function Label({ labelName }: LabelProps) {
  return <label className="text-white">{labelName}:</label>;
}
