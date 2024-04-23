import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo.png'
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center w-full align-middle flex-row">
            <div className="">
                <Image
                    className="min-w-full"
                    src={Logo}
                    alt="Logo"
                    width="120"
                    height="50"
                />
            </div>
            <div className="hidden md:flex text-c_blue font-semibold">
                <div>
                    <Link href="/" className="p-5">
                        الرئيسية
                    </Link>
                </div>
                <div>
                    <Link href="/" className="p-5">
                        من نحن
                    </Link>
                </div>
                <div>
                    <Link href="/" className="p-5">
                        اتصل بنا
                    </Link>
                </div>
                <div>
                    <Link href="/" className="p-5">
                        الدعم الفني
                    </Link>
                </div>
                <div>
                    <Link href="/" className="p-5">
                        أرقام التشغيل
                    </Link>
                </div>
                <div>
                    <Link href="/" className="p-5">
                        سياسية الخصويصية
                    </Link>
                </div>
            </div >
            <button>
                <Bars3Icon width="40" className="text-c_blue" />
            </button>
        </nav >
    );
}