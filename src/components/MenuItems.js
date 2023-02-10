import {
	faHouseUser, faAddressBook, faCircleInfo, faBrain
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
  title: 'Quiz',
  url: '/quiz',
  cName: 'nav-links',
  icon: faBrain
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