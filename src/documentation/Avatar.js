import { ComponentWrapper } from "./../documentation";
import { Avatar as AvatarComponents } from "./../components";

const Avatar = () => {
  return (
    <ComponentWrapper
      headerText="Avatar"
      descriptionText="The Avatar component displays an image representing a user or entity, along with a name."
      components={<AvatarComponents />}
    />
  );
};

export { Avatar };
