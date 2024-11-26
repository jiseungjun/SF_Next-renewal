"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
/** UI 컴포넌트 */
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label } from "@/components/ui";
import { Eye } from "@/public/assets/icons";

function SignUpPage() {
    const router = useRouter();

    const handleSignUp = async () => {};

    return (
        <div className="page">
            <div className="page__container">
                {/* 소개 문구 */}
                <div className="flex flex-col items-center mt-10">
                    <h4 className="text-lg font-semibold">안녕하세요 👋🏻</h4>
                    <div className="flex flex-col items-center justify-center mt-2 mb-4">
                        <div className="text-sm text-muted-foreground">
                            <small className="text-sm text-[#e79057] font-medium leading-none">TASK 관리 앱</small>에 방문해주셔서 감사합니다.
                        </div>
                        <p className="text-sm text-muted-foreground">서비스를 이용하려면 로그인을 진행해주세요.</p>
                    </div>
                </div>
                <Card className="w-[400px]">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">회원가입</CardTitle>
                        <CardDescription>계정을 생성하기 위해 아래 정보를 입력해주세요.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        {/* <div className="grid gap-2">
                            <Label htmlFor="email">휴대폰 번호</Label>
                            <Input id="phone_number" placeholder="휴대폰 번호를 입력하세요." required />
                        </div> */}
                        <div className="grid gap-2">
                            <Label htmlFor="email">이메일</Label>
                            <Input id="email" type="email" placeholder="이메일을 입력하세요." required />
                        </div>
                        <div className="relative grid gap-2">
                            <Label htmlFor="password">비밀번호</Label>
                            <Input id="password" type="password" placeholder="비밀번호를 입력하세요." required />
                            <Button size={"icon"} className="absolute top-8 right-2 -translate-y-1/4 bg-transparent hover:bg-transparent">
                                <Eye className="h-5 w-5 text-muted-foreground" />
                            </Button>
                        </div>
                    </CardContent>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">간편 회원가입을 원하시면 이전 버튼을 누르세요.</span>
                        </div>
                    </div>
                    <CardFooter className="w-full flex flex-col mt-6">
                        <div className="w-full flex items-center gap-4">
                            <Button variant={"outline"} className="w-full" onClick={() => router.push("/")}>
                                이전
                            </Button>
                            <Button className="w-full text-white bg-[#E79057] hover:bg-[#E26F24] hover:ring-1 hover:ring-[#E26F24] hover:ring-offset-1 active:bg-[#D5753D] hover:shadow-lg">회원가입</Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            이미 계정이 있으신가요?{" "}
                            <Link href={"/"} className="underline text-sm ml-1">
                                로그인
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default SignUpPage;
