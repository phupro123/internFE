import { Outlet } from 'react-router-dom';

function DefaultLayout() {
    return (
        <>
            <div className="content">
                <Outlet />
            </div>
        </>
    );
}

export default DefaultLayout;
