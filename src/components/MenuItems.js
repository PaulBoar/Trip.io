import {
	faHouseUser, faBriefcase, faAddressBook, faCircleInfo
} from '@fortawesome/free-solid-svg-icons';


export const MenuItems = [
 {
  title: 'Home',
  url: '/',
  cName: 'nav-links',
  icon: faHouseUser
 },
 {
  title: 'About',
  url: '/about',
  cName: 'nav-links',
  icon: faCircleInfo
 },
 {
  title: 'Service',
  url: '/service',
  cName: 'nav-links',
  icon: faBriefcase
 },
 {
  title: 'Contact',
  url: '/contact',
  cName: 'nav-links',
  icon: faAddressBook
 },
 {
  title: 'Sign Up',
  url: '/signup',
  cName: 'nav-link-mobile',
 }
]