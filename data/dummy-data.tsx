import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Engineering & Construction Advisory',
        desc: 'Pre-construction planning, technical reviews, and construction methodology advisory.',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600&auto=format&fit=crop'
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
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600&auto=format&fit=crop'
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
        question: 'What services does WillTech Engineering provide?',
        answer: 'We provide engineering and quantity surveying services including construction advisory, cost management, infrastructure support, and project monitoring and oversight.'
    },
    {
        question: 'Do you work with governments and private clients?',
        answer: 'Yes, we support governments, institutions, and private clients to plan, cost, and deliver projects that are technically sound, financially disciplined, and socially impactful.'
    },
    {
        question: 'What is your approach to project delivery?',
        answer: 'Our approach combines engineering discipline with cost control to ensure that projects are well-defined, affordable, and responsibly delivered with transparency and long-term community benefit.'
    },
    {
        question: 'Do you provide monitoring services after project launch?',
        answer: 'Yes. We offer independent monitoring, progress verification, and risk identification services to ensure projects are delivered on time, within budget, and to required standards.'
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