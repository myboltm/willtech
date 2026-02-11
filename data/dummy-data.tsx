import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Engineering & Construction Advisory',
        desc: 'Pre-construction planning, technical reviews, and construction methodology advisory.',
        image: '/image1.jpg'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Quantity Surveying & Cost Management',
        desc: 'Cost planning, budgeting, bills of quantities, and financial control.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Infrastructure & Programme Support',
        desc: 'Support for public and private infrastructure initiatives from concept to implementation.',
        image: '/image2.jpg'
    }
];

export const detailedServicesData = [
    {
        id: 'construction',
        title: 'Construction & Civil Works Support',
        description: 'We provide practical technical support for building and small infrastructure projects, helping clients move from planning to construction with better coordination and oversight.',
        services: [
            'Pre-construction planning support',
            'Review of drawings and specifications',
            'Contractor coordination',
            'Site supervision visits',
            'Quality and progress checks',
            'Renovation and small project support'
        ]
    },
    {
        id: 'surveying',
        title: 'Quantity Surveying & Cost Control',
        description: 'Our quantity surveying services help clients understand and control project costs before and during construction.',
        services: [
            'Preliminary cost estimates',
            'Bill of Quantities (BOQ) preparation',
            'Budget planning and cost advice',
            'Contractor quotation review',
            'Valuation of work done',
            'Cost monitoring and reporting'
        ],
        ideal: 'Individuals, developers and organisations who want financial clarity before building.'
    },
    {
        id: 'advisory',
        title: 'Project & Programme Advisory',
        description: 'We offer independent advisory support for clients who require structured planning and delivery guidance for capital projects.',
        services: [
            'Project planning support',
            'Procurement and documentation advice',
            'Contractor selection guidance',
            'Programme scheduling',
            'Delivery oversight',
            'Risk and cost review'
        ]
    },
    {
        id: 'infrastructure',
        title: 'Infrastructure & Community Projects',
        description: 'WillTech supports planning and delivery of community and institutional projects across Nigeria.',
        services: [
            'Schools and education facilities',
            'Health and maternal care projects',
            'Community infrastructure',
            'Transport support projects',
            'Public and NGO-led initiatives'
        ]
    }
];

export const clientTypesData = [
    'Private clients',
    'Developers',
    'Organisations',
    'Public sector'
];

export const costPlanStepsData = [
    'Cost estimate',
    'BOQ',
    'Project advice'
];

export const plansData = [
    {
        id: 'advisory',
        name: 'Engineering Advisory',
        price: 'Custom',
        desc: 'Technical planning and construction advisory.',
        credits: 'Project-based',
        features: [
            'Pre-construction planning',
            'Technical reviews',
            'Construction methodology',
            'Risk assessment',
            'Professional consultation'
        ]
    },
    {
        id: 'surveying',
        name: 'Quantity Surveying',
        price: 'Custom',
        desc: 'Comprehensive cost management and control.',
        credits: 'Project-based',
        features: [
            'Cost planning & budgeting',
            'Bills of quantities',
            'Financial control',
            'Budget monitoring',
            'Value engineering'
        ],
        popular: true
    },
    {
        id: 'monitoring',
        name: 'Project Monitoring',
        price: 'Custom',
        desc: 'Independent oversight and verification.',
        credits: 'Project-based',
        features: [
            'Progress verification',
            'Independent monitoring',
            'Risk identification',
            'Compliance review',
            'Reporting & documentation'
        ]
    }
];

export const faqData = [
    {
        question: 'How does WillTech protect diaspora investors from fraud?',
        answer: 'We provide independent oversight through our on-ground teams in Nigeria. We conduct regular site inspections, verify all financial transactions, monitor contractor performance, and provide detailed reports and photo documentation. This ensures complete transparency and prevents scams.'
    },
    {
        question: 'Can you oversee my construction project in Nigeria while I\'m abroad?',
        answer: 'Yes, that\'s exactly what we do. Whether you\'re in the UK, US, or anywhere globally, our teams in Nigeria handle all aspects of project monitoring, quality control, and progress tracking. You receive regular updates and reports.'
    },
    {
        question: 'What if the contractor tries to inflate costs or cut corners?',
        answer: 'Our cost control services include invoice verification, budget monitoring, and independent quality inspections. We catch overcharges, prevent budget inflation, and ensure work meets agreed standards. We\'re your advocate protecting your investment.'
    },
    {
        question: 'How often will I receive updates on my project?',
        answer: 'We provide regular progress reports with site photos, financial summaries, and quality assessments. Communication frequency depends on your project needs, but you\'ll always have visibility into what\'s happening with your investment.'
    },
    {
        question: 'What types of projects do you oversee?',
        answer: 'We handle residential construction, commercial projects, community infrastructure, health facilities, educational institutions, and any other construction or infrastructure project in Nigeria. Size doesn\'t matter—we protect your investment.'
    }
];

export const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "Home", url: "/" },
            { name: "About", url: "#about" },
            { name: "Services", url: "/services" },
            { name: "Contact", url: "#contact" }
        ]
    },
    {
        title: "Services",
        links: [
            { name: "Engineering Advisory", url: "/services" },
            { name: "Quantity Surveying", url: "/services" },
            { name: "Project Monitoring", url: "/services" },
            { name: "Infrastructure Support", url: "/services" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    }
];

export const contactInfo = {
    company: "WillTech Engineering Ltd",
    email: "info@willtechengineering.com",
    phone: ["+44 (UK)", "+234 (Nigeria)"],
    locations: ["Nigeria", "United Kingdom"],
    description: "A registered engineering and quantity surveying company supporting infrastructure development, construction planning, and programme advisory services with technical excellence and cost discipline."
};

export const teamData = [
    {
        id: 'lead',
        name: 'Lead Administrator',
        role: 'Founder & Chief Executive',
        description: 'Brings extensive experience in engineering and project management with both Nigerian and UK industry background.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 'technical',
        name: 'Technical Lead',
        role: 'Chief Engineering Officer',
        description: 'Oversees all engineering advisory and technical delivery with focus on quality and innovation.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 'operations',
        name: 'Operations Manager',
        role: 'Project Operations Lead',
        description: 'Manages project coordination and ensures seamless delivery across all client engagements.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop'
    }
];