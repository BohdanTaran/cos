import { Button, ButtonProps } from 'antd';
import { FC } from 'react';
import styles from './AppButton.module.scss';

interface AppButtonProps extends ButtonProps {
  appProp?: string;
}
const AppButton: FC<AppButtonProps> = ({ appProp, ...restProps }) => {
  // const className = styles.appBtn;

  return (
    <>
      <Button
        className={styles.appBtn}
        type="primary"
        size="middle"
        {...restProps}
      >
        Button
      </Button>

      <br />

      {/*<Input className={styles.appBtn} placeholder="Outlined" />*/}
      {/*<Input placeholder="Filled" variant="filled" />*/}
      {/*<Input placeholder="Borderless" variant="borderless" />*/}

      {/*<br/>*/}

      {/*<Modal className={styles.appBtn} title="Basic Modal" open>*/}
      {/*  <p>Some contents...</p>*/}
      {/*  <p>Some contents...</p>*/}
      {/*  <p>Some contents...</p>*/}
      {/*</Modal>*/}
    </>
  );
};

export default AppButton;
