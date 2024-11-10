import Link from 'next/link';
import { AnimationContainer, Icons } from "@/components"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">

            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-start">
                            <Icons.logo className="w-7 h-7" />
                        </div>
                        <p dir='rtl' className="text-muted-foreground font-persian mt-4 text-sm text-start">
                            بهترین شرایط بازار.
                        </p>
                        <span className="mt-4 text-neutral-200 text-sm flex items-center">
                            Made by <Link href="https://alima.agency/" className="font-semibold ml-1">Alima</Link>
                        </span>
                    </div>
                </AnimationContainer>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div dir='rtl' className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.2}>
                            <div className="">
                                <h3 className="text-base font-persian text-white">
                                دسترسی سریع
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground font-persian transition-all duration-300">
                                            لن تک ها
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground font-persian transition-all duration-300">
                                            بانک ها
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground font-persian transition-all duration-300">
                                            فروشندگان
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground font-persian transition-all duration-300">
                                            محصولات
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.3}>
                            <div dir='rtl' className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-persian text-white">
                                قوانین و مقررات
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="" className="hover:text-foreground font-persian transition-all duration-300">
                                        قوانین و مقررات
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground font-persian transition-all duration-300">
                                        حریم خصوصی کاربران
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground font-persian transition-all duration-300">
                                        راهنمای خرید
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground font-persian transition-all duration-300">
                                        سوالات متداول
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.4}>
                            <div dir='rtl' className="">
                                <h3 className="text-base font-persian text-white">
                                پیش از خرید
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="/resources/blog" className="hover:text-foreground font-persian transition-all duration-300">
                                        راهنمای خرید اقساطی
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/resources/help" className="hover:text-foreground font-persian transition-all duration-300">
                                        بلاگ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.5}>
                            <div dir='rtl' className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-persian text-white">
                                درباره ما
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="" className="hover:text-foreground font-persian transition-all duration-300">
                                        پلنو پی در یک نگاه
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/privacy" className="hover:text-foreground font-persian transition-all duration-300">
                                        اهداف و تعهدهای ما
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/terms" className="hover:text-foreground font-persian transition-all duration-300">
                                        تماس با ما
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <AnimationContainer delay={0.6}>
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} Plano Pay INC. All rights reserved.
                    </p>
                </AnimationContainer>
            </div>

            <div className="h-[20rem] w-full lg:h-[20rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="PlanoPay" />
            </div>
        </footer>
    )
}

export default Footer
