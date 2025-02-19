interface NavbarButtonProps {
  label: string;
  path: string;
}

function NavbarButton(props: NavbarButtonProps) {
  return (
    <div className="p-4 font-semibold uppercase">
      <a href={props.path}>{props.label}</a>
    </div>
  );
}

export default NavbarButton;
