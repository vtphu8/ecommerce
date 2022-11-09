import { useDispatch } from "react-redux";
import { popupActions } from "../store/popupRedux";
const ClosePopup = () => {
  useDispatch(popupActions.HIDE_POPUP()); // gọi dispatch ẩn popup
};

export default ClosePopup;
