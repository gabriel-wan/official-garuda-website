import NavButtonProps from "../../props/NavButtonProps";

function NavButton(props: NavButtonProps) {
    return (
        <li>
        <a className={`
            group
            flex items-center py-3 nav-link
            ${
            props.activeSection === props.requiredSection
                ? "text-black"          // Darker text when active
                : "text-slate-400"      // Lighter text when inactive
            }
        `}
        href={`#${props.requiredSection}`}
        >
  <span
    className={`
      nav-indicator
      mr-4 
      h-0.5
      transition-all motion-reduce:transition-none
      group-hover:w-16 group-hover:bg-black
      group-focus-visible:w-16 group-focus-visible:bg-slate-200
      ${
        props.activeSection === props.requiredSection
          ? "w-16 bg-black"     // Darker + wider indicator when active
          : "w-8 bg-slate-300"  // Narrow + lighter indicator when inactive
      }
    `}
  ></span>
  <span
    className={`
      nav-text
      font-bold uppercase tracking-widest
      group-hover:text-black
      group-focus-visible:text-slate-200
      ${
        props.activeSection === props.requiredSection
          ? "text-black text-xl" // Larger + darker text when active
          : "text-slate-500 text-sm"     // Lighter text when inactive
      }
    `}
  >
    {props.label}
  </span>
</a>

        </li>
    );
}

export default NavButton;
