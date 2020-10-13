import React, {useCallback} from 'react';
import RegisterButton from "@components/RegisterButton/RegisterButton";
import {setSupportForm} from "@store/slices/supportSlice";
import {useDispatch} from "react-redux";
import {useSupportState} from "@store/index";
import {youtubeLink} from "@resources/data";

interface RegisterSupportButtonProps {}

const RegisterSupportButton: React.FC<RegisterSupportButtonProps> = React.memo(() => {
  const dispatch = useDispatch();
  const { currentUser } = useSupportState();
  const onRegister = useCallback((evt) => {
    evt.preventDefault();
    // dispatch(setSupportForm(true));
    location.href = youtubeLink;
  }, [currentUser]);
  return (
    <RegisterButton onClick={onRegister}>
      알림 설정하기
    </RegisterButton>
  );
});

export default RegisterSupportButton;
