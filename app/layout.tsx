import './globals.css'
import {Nunito} from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal';

export const metadata = {
  title: 'AirBnB Clone',
  description: 'Clone version of AirBnB using nextjs 13',
}

const font = Nunito({
  subsets: ['latin']
})

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <RentModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
