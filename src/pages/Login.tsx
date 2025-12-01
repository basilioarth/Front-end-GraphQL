import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {

    }

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)] items-center justify-center gap-6">
            <img src={logo} className="w-64 h-22" />
            <Card className="w-full max-w-md rounded-xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        Acesse a plataforma
                    </CardTitle>
                    <CardDescription>
                        Entre usando seu e-mail e senha cadastrados
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Entrar
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <Card className="w-full max-w-md rounded-xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        Ainda não tem uma conta?
                    </CardTitle>
                    <CardDescription>
                        Cadastre-se agora mesmo
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                        <Link to="/signup">
                            Criar conta
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
