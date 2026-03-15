import fs from 'fs';
import path from 'path';

const map = [
    {
        group: 'about', file: 'components/about/about-content.tsx', links: [
            { id: 'history', href: '/about/history' },
            { id: 'vision', href: '/about/vision' },
            { id: 'tools', href: '/about/tools' },
            { id: 'focus', href: '/about/focus' },
        ]
    },
    {
        group: 'services', file: 'components/services/services-content.tsx', links: [
            { id: 'training', href: '/services/training' },
            { id: 'elearning', href: '/services/elearning' },
            { id: 'virtual', href: '/services/virtual' },
            { id: 'campaigns', href: '/services/campaigns' },
            { id: 'calendar', href: '/services/calendar' },
            { id: 'publication', href: '/services/publication' },
        ]
    },
    {
        group: 'rating-system', file: 'components/rating-system/rating-content.tsx', links: [
            { id: 'scheme', href: '/rating-system/scheme' },
            { id: 'levels', href: '/rating-system/levels' },
            { id: 'benefits', href: '/rating-system/benefits' },
            { id: 'recognition', href: '/rating-system/recognition' },
            { id: 'lab-partners', href: '/rating-system/lab-partners' },
            { id: 'validity', href: '/rating-system/validity' },
        ]
    },
    {
        group: 'membership', file: 'components/membership/membership-content.tsx', links: [
            { id: 'benefits', href: '/membership/benefits' },
            { id: 'professional', href: '/membership/professional' },
            { id: 'student', href: '/membership/student' },
            { id: 'associate', href: '/membership/associate' },
            { id: 'affiliate', href: '/membership/affiliate' },
            { id: 'chartered', href: '/membership/chartered' },
            { id: 'chartered-professional', href: '/membership/chartered-professional' },
            { id: 'application', href: '/membership/application' },
            { id: 'conduct', href: '/membership/conduct' },
            { id: 'fees', href: '/membership/fees' },
            { id: 'downloads', href: '/membership/downloads' },
        ]
    },
    {
        group: 'certification', file: 'components/certification/certification-content.tsx', links: [
            { id: 'board', href: '/certification/board' },
            { id: 'scheme', href: '/certification/scheme' },
            { id: 'professional', href: '/certification/professional' },
            { id: 'wgba', href: '/certification/wgba' },
            { id: 'wgbap', href: '/certification/wgbap' },
            { id: 'wgbaap', href: '/certification/wgbaap' },
            { id: 'benefits', href: '/certification/benefits' },
            { id: 'cpd', href: '/certification/cpd' },
            { id: 'policies', href: '/certification/policies' },
            { id: 'application', href: '/certification/application' },
        ]
    },
    {
        group: 'awards', file: 'components/awards/awards-content.tsx', links: [
            { id: 'awards', href: '/awards/details' },
            { id: 'sponsorship', href: '/awards/sponsorship' },
        ]
    },
];

const basePath = 'd:/GBAC';

map.forEach(group => {
    const sourceFilePath = path.join(basePath, group.file);
    const sourceContent = fs.readFileSync(sourceFilePath, 'utf8');

    // extract imports
    const importRegex = /import\s+\{[\s\S]*?\}\s+from\s+["']lucide-react["']/g;
    const importsMatch = sourceContent.match(importRegex);
    const imports = importsMatch ? importsMatch[0] : '';

    group.links.forEach(link => {
        const searchStr = '<section id="' + link.id + '"';
        const startIndex = sourceContent.indexOf(searchStr);
        if (startIndex === -1) {
            console.error('Could not find section ' + link.id + ' in ' + group.file);
            return;
        }

        let openTags = 0;
        let p = startIndex;
        let endIndex = -1;
        while (p < sourceContent.length) {
            if (sourceContent.startsWith('<section', p)) {
                openTags++;
            }
            if (sourceContent.startsWith('</section>', p)) {
                openTags--;
                if (openTags === 0) {
                    endIndex = p + '</section>'.length;
                    break;
                }
            }
            p++;
        }

        let sectionContent = sourceContent.substring(startIndex, endIndex);

        const pagePath = path.join(basePath, 'app', link.href, 'page.tsx');
        if (!fs.existsSync(pagePath)) {
            console.log('Path does not exist: ' + pagePath);
            return;
        }

        let existingPage = fs.readFileSync(pagePath, 'utf8');

        const mainRegex = /<main[\s\S]*?<\/main>/;
        existingPage = existingPage.replace(mainRegex, '<main className="min-h-screen bg-gray-50/10 flex flex-col items-center w-full grow pt-4 pb-12">\\n                ' + sectionContent + '\\n            </main>');

        if (!existingPage.includes('lucide-react') && imports) {
            existingPage = existingPage.replace('import { Footer } from "@/components/footer"', 'import { Footer } from "@/components/footer"\\n' + imports);
        }

        fs.writeFileSync(pagePath, existingPage);
        console.log('Updated ' + pagePath);
    });
});
