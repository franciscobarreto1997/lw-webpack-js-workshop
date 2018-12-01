import 'bootstrap';
import './application.css';
// import { toggleIcons } from '../components/bookmarking';
import { typedText } from '../components/banner';
import { changeNavbar } from '../components/navbar';
import { initAutoComplete } from '../components/autocomplete';
import { initBookMark} from '../components/bookmarking';
import { initFlatPickr } from '../components/booking';

typedText();
changeNavbar();
initAutoComplete();
initBookMark();
initFlatPickr();
