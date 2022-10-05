import {
  faTrash,
  faSignOutAlt,
  faPenToSquare,
  faGear,
  faCirclePlus,
  faPhone,
  faEnvelope,
  faMapLocation,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faPenToSquare,
    faGear,
    faCirclePlus,
    faPhone,
    faEnvelope,
    faMapLocation,
    faKey
  );
};

export default Icons;
