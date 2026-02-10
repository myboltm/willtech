import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LenisScroll from "@/components/lenis";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Metadata } from "next";

const outfit = Outfit({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "WillTech Engineering Ltd | Engineering & Quantity Surveying",
        template: "%s | WillTech Engineering",
    },
    description:
        "WillTech Engineering Ltd provides professional engineering and quantity surveying services. We support governments, institutions, and private clients with construction advisory, cost management, and infrastructure programme support.",
    keywords: [
        "WillTech Engineering",
        "quantity surveying",
        "engineering advisory",
        "construction management",
        "cost control",
        "infrastructure support",
        "public programme support",
        "project monitoring",
    ],
    authors: [{ name: "WillTech Engineering Ltd" }],
    creator: "WillTech Engineering Ltd",
    publisher: "WillTech Engineering Ltd",

    openGraph: {
        title: "WillTech Engineering Ltd | Engineering & Quantity Surveying Services",
        description:
            "Professional engineering and quantity surveying firm supporting infrastructure development, construction planning, and programme advisory.",
        siteName: "WillTech Engineering",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "WillTech Engineering Ltd",
        description:
            "Engineering and quantity surveying services for governments, institutions, and private clients.",
        creator: "@willtecheng",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen">
                <LenisScroll />
                <Navbar />
                {children}
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
