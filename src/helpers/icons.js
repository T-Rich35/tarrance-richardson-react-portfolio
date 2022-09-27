import {
  faTrash,
  faSignOutAlt,
  faPenToSquare,
  faGear,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faPenToSquare,
    faGear,
    faCirclePlus
  );
};

export default Icons;
