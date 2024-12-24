import { ArrowRight, Check, ExternalLink, Star } from "lucide-react";
import { Button } from "../ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="grid grid-cols-2 max-w-4xl w-full mx-auto min-h-[50pc]">
            <div className="col-span-1 flex flex-col gap-5 justify-center items-start">
                {/* Kicker */}
                <div className="text-xs">
                    <div className="flex gap-1 items-center justify-start">
                        <div className="flex items-center justify-center">
                            <Star
                                fill="#FFDF00"
                                size={12}
                            />
                            <Star
                                fill="#FFDF00"
                                size={12}
                            />
                            <Star
                                fill="#FFDF00"
                                size={12}
                            />
                            <Star
                                fill="#FFDF00"
                                size={12}
                            />
                            <Star
                                fill="#FFDF00"
                                size={12}
                            />
                        </div>
                        <p>3343 reviews</p>{" "}
                    </div>
                    <p>Don&apos;t keep your students waiting!</p>
                </div>
                {/* Super Clear Heading */}
                <h1 className="text-4xl">
                    A TTRPG for kids designed to get them collaborating
                </h1>
                {/* Extra Context */}
                <p>
                    Foster teamwork, critical thinking, problem solving, and
                    math skills with this open source TTRPG for kids that aligns
                    with Common Core and IB standards.
                </p>
                {/* Clear Doubts */}
                <div>
                    <div className="flex justify-start items-center gap-1">
                        {" "}
                        <Check size={16} /> Class abilities that foster teamwork
                    </div>
                    <div className="flex justify-start items-center gap-1">
                        {" "}
                        <Check size={16} /> Class abilities that require a
                        teammate
                    </div>
                    <div className="flex justify-start items-center gap-1">
                        {" "}
                        <Check size={16} /> Adventure framework to engage
                        critical thinking
                    </div>

                    <div className="flex justify-start items-center gap-1">
                        {" "}
                        <Check size={16} /> Different versions for different
                        reading levels and ages
                    </div>
                </div>
                {/* Call to Action */}
                <div className="space-x-2">
                    <Button>
                        Start playing <ArrowRight size={24} />
                    </Button>
                    <Button variant={"ghost"}>Learn More</Button>
                </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
                <Card className="max-w-xs">
                    <CardHeader>
                        <CardTitle>Beta Testers Wanted!</CardTitle>
                        <CardDescription>
                            Submit your email to the below Google Form to sign
                            up for the beta!
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Link
                            href={""}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant={"secondary"}>
                                Sign up for the beta <ExternalLink size={16} />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
