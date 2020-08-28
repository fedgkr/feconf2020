import React, {useCallback, useState} from 'react';
import css from './PrivateInfoConfirmation.module.scss';
import classcat from "classcat";
import {useRouter} from "next/router";
import {useFirebase} from "@utils/hooks/use-firebase";

interface PrivateInfoConfirmationProps {}

const useSignIn = () => {
  const router = useRouter();
  const { fireStoreRef } = useFirebase();
  return useCallback(() => {
    try {
      router.replace('/', '/?loginRedirect=github');
      fireStoreRef.fireStore?.signIn();
    } catch(err) {
      console.log('err : ', err.message);
      router.replace('/', '/');
    }
  }, []);
};

const PrivateInfoConfirmation: React.FC<PrivateInfoConfirmationProps> = () => {
  const [checked, setChecked] = useState(false);
  const signIn = useSignIn();
  return (
    <div className={css.PrivateInfoConfirmation}>
      <div className={css.infoConfirm}>
        <h4 className={css.confirmTitle}>
          개인정보 수집 및 이용 동의
        </h4>
        <p className={css.confirmContent}>
          1. 수집항목: 이메일, GitHub 유저네임, GitHub 이름, GitHub 프로필 이미지 <br/>
          2. 수집 및 이용목적: 참가자 본인 및 참가 의사 확인,  이메일로 행사 내용 전달 <br/>
          3. 보관 기간: 행사 종료 후 즉시 파기
        </p>
        <div className={css.checkWrap}>
          <input id="cb" type="checkbox" onChange={(evt) => setChecked(evt.target.checked)}/>
          <label htmlFor="cb"/>
          <span>개인정보 수집 및 이용에 동의합니다.</span>
        </div>
      </div>
      <button className={classcat([css.signInBtn, checked ? css.checked : ''])} onClick={checked ? signIn : null}>
        GitHub으로 사전 등록하기
      </button>
    </div>
  );
}

export default PrivateInfoConfirmation;
