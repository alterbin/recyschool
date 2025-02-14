import { ReactNode } from 'react';
import Typography from './typography';

export default function WIP({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="d-none d-lg-block">
        {children}
      </div>

      <div className="d-flex d-lg-none justify-content-center align-items-center" style={{ height: 200 }}>
        <Typography color="main-color" variant="h5">
          Mobile view n/a
        </Typography>
      </div>
    </>
  );
}
