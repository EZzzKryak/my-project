import { lazy } from 'react';

const ProfilePageLazy = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 1000);
}));

export default ProfilePageLazy;
