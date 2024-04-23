import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo.png'
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center w-full align-middle flex-row">
            <Link href="/">
                <Image
                    className="min-w-full"
                    src={Logo}
                    alt="Logo"
                    width="120"
                    height="50"
                />
            </Link>
            <div className="hidden md:flex text-c_blue font-semibold text-sm gap-2 lg:gap-8">
                <div>
                    <Link href="/">
                        الرئيسية
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        من نحن
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        اتصل بنا
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        الدعم الفني
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        أرقام التشغيل
                    </Link>
                </div>
                <div>
                    <Link href="/">
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