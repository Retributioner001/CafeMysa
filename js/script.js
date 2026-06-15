// ===============================
// LOADING SCREEN
// ===============================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (!loader) {
        return;
    }
    
    // Fade out loader after 1.5 seconds
    setTimeout(() => {
        loader.classList.add('fade-out');
        
        // Remove loader from DOM after fade animation
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 800);
});



// ===============================
// MOBILE NAVIGATION TOGGLE
// ===============================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

const resetHamburgerIcon = () => {
    if (!navToggle) {
        return;
    }

    const spans = navToggle.querySelectorAll('span');
    if (spans.length < 3) {
        return;
    }

    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
};

// Toggle mobile menu
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        if (spans.length < 3) {
            return;
        }

        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            resetHamburgerIcon();
        }
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!navMenu) {
            return;
        }

        navMenu.classList.remove('active');
        resetHamburgerIcon();
    });
});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Initial check on page load
revealOnScroll();

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (!navbar) {
        return;
    }
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// ===============================
// HORIZONTAL IMAGE STRIP INFINITE SCROLL
// ===============================
const imageStrip = document.getElementById('imageStrip');
const stripContainer = document.querySelector('.image-strip-container');

if (imageStrip) {
    // Store original HTML
    const originalContent = imageStrip.innerHTML;
    
    // Duplicate content 3 times for seamless loop
    imageStrip.innerHTML = originalContent + originalContent + originalContent;
    
    // Calculate the width of one set of items
    const calculateResetPoint = () => {
        const stripWidth = imageStrip.scrollWidth / 3; // Divide by 3 since duplicated.
        imageStrip.style.setProperty('--strip-width', `${stripWidth}px`);
    };
    
    // Calculate on load and resize
    calculateResetPoint();
    window.addEventListener('resize', calculateResetPoint);
}

// Pause animation on hover
if (stripContainer) {
    stripContainer.addEventListener('mouseenter', () => {
        if (!imageStrip) {
            return;
        }
        imageStrip.style.animationPlayState = 'paused';
    });
    
    stripContainer.addEventListener('mouseleave', () => {
        if (!imageStrip) {
            return;
        }
        imageStrip.style.animationPlayState = 'running';
    });
}

// ===============================
// MENU BUTTON ACTIONS
// ===============================
const menuButtons = document.querySelectorAll('.menu-button');

// Menu PDF links 
const menuLinks = {
    breakfast: './assets/BreakfastMenu.pdf',
    Sips: './assets/SipsOfMysa.pdf',
    FullMenu: './assets/FullMenu.pdf',
    SummerSpeciale: './assets/Summer-Speciale!.pdf'
};

menuButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const menuType = button.getAttribute('data-menu');
        const menuLink = menuLinks[menuType];
        
        if (menuLink) {
            // Add click animation
            button.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                button.style.transform = 'scale(1)';
                
                // Open PDF in new tab
                window.open(menuLink, '_blank');
            }, 150);
        }
    });
});

// ===============================
// DELIVERY PLATFORM LINKS
// ===============================
const deliveryCards = document.querySelectorAll('.delivery-card');

// Delivery platform links
const deliveryLinks = {
    zomato: 'https://www.zomato.com/ranchi/cafe-mysa-doranda',
    swiggy: 'https://www.swiggy.com/city/ranchi/cafe-mysa-vip-road-dibdih-rest714662',
    easydiner: 'https://www.eazydiner.com/ranchi/cafe-mysa-daud-nagar-ranchi-690850',
    district: 'https://www.district.in/dining/ranchi/cafe-mysa-doranda'
};

deliveryCards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        
        const platform = card.getAttribute('data-platform');
        const platformLink = deliveryLinks[platform];
        
        if (platformLink) {
            // Add click animation
            card.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                card.style.transform = 'scale(1)';
                
                // Open platform in new tab
                window.open(platformLink, '_blank');
            }, 150);
        }
    });
});

// ===============================
// SMOOTH SCROLL TO SECTIONS
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        
        if (target) {
            const navHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===============================
// INTERACTIVE HOVER EFFECTS
// ===============================

// Add subtle scale effect to cards
const interactiveCards = document.querySelectorAll('.menu-card, .info-card, .delivery-card, .signature-item');

interactiveCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ===============================
// PARALLAX SCROLL EFFECT (SUBTLE)
// ===============================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Subtle parallax on hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// ===============================
// ACCESSIBILITY ENHANCEMENTS
// ===============================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        resetHamburgerIcon();
    }
});

// ===============================
// PERFORMANCE OPTIMIZATION
// ===============================

// Throttle scroll events for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        revealOnScroll();
    });
}, { passive: true });

// ===============================
// BLOG MODAL FUNCTIONALITY
// ===============================

// Initialize blog modal functionality
function initBlogModal() {
 
    const blogContent = {
        blog1: {
            title: "The Window Seat at 8:10 AM",
            body: `
                <p>Every weekday morning, without fail, a school teacher walks in at 8:10 AM. She always takes the window seat on the left—not because it has the best light, but because it faces the street and she likes watching the city figure itself out.</p>
 
                <p>She places a steel tiffin beside her cup. Old habit, she once explained. She carries it everywhere, even when she's not planning to eat from it. It's just one of those objects that makes a bag feel complete.</p>
 
                <p>She calls this twenty-minute pause her "quiet class before class." Twenty minutes where no one is raising their hand, no one needs help spelling anything, and no question needs an answer. Just her, the cappuccino, and a notebook that's more underlined than written in.</p>
 
                <p>She doesn't scroll her phone. She doesn't earphone herself out of the room. She just sits there and watches people arrive and leave, the way you watch rain without any particular reason.</p>
 
                <p>Over time, the team figured out her rhythm. The cup started reaching the table just as sunlight touches the edge of that chair. Not because anyone planned it consciously—it just happened. You notice things about people when they come in every day. You start moving around their routine without even meaning to.</p>
 
                <p>She never asked for this. She never mentioned it. One day, one of the team realized it was happening and pointed it out quietly, and everyone sort of smiled and went back to work.</p>
 
                <p>That's most of what good hospitality is, honestly. Not announcements. Not gestures. Just paying attention and acting on it before someone has to say anything.</p>
 
                <p>She told us once, in passing, that this is the only part of her day where no one needs anything from her. That landed quietly. A teacher spends nine hours being needed in every possible direction—patience, explanations, encouragement, discipline, compassion—and she comes here just to exist for twenty minutes without any of that weight.</p>
 
                <p>We don't take that lightly. A person choosing to spend their only free moment in your space is not a small thing. It means the place felt safe enough, quiet enough, consistent enough to become part of someone's daily architecture.</p>
 
                <p>If you have your own "8:10 seat" here—if there's a corner or a table or a chair by the window that you've quietly decided is yours—we see it. We're glad you found it. And we'll keep it warm.</p>
            `
        },
        blog2: {
            title: "How the Strawberry Matcha Became a Ritual",
            body: `
                <p>It started with someone pointing at the menu and saying, "I'm not sure I'll like this, but okay, let me try."</p>
 
                <p>That's it. That's the whole origin story of what is now, by a significant margin, the most talked-about drink we make.</p>
 
                <p>She took a sip. Made a small face—not a bad face, just a thinking face, the kind people make when something is different from what they expected but in a way they haven't decided about yet. Then she took another sip. Then she sat back and said, "Okay. This is actually something."</p>
 
                <p>She came back two days later with three friends. Ordered four of the same thing before anyone had even sat down properly. The friends were skeptical. Then they weren't.</p>
 
                <p>A week later, they were a Friday group. Same table, roughly same time, slightly different chaos depending on the week. Then they brought cousins who were visiting from out of town. Then coworkers who'd heard about it. Then classmates from college who'd moved to Ranchi for work and needed something that felt like catching up.</p>
 
                <p>Now we sometimes hear "same table, same drink, same Friday" said like it's a password. And in a way, it is. It means: this is the place where we decompress. This is where we stop being our weekday selves for a couple of hours.</p>
 
                <p>People always ask what makes it work as a flavor. And the matcha and strawberry combination is genuinely well-balanced—there's a bitterness from the matcha that the sweetness doesn't just cover but actually plays against, and the result is something that doesn't taste like either ingredient alone. It tastes like both of them being better because the other one is there.</p>
 
                <p>But that's not really why it became what it became.</p>
 
                <p>It became a ritual because of that first Friday. Because four friends needed a reason to sit together at the end of a week that had been too long, and this drink was on the table when they finally exhaled. The body makes associations. The next time you're exhausted and you want that feeling again, you come back for the thing that was there.</p>
 
                <p>Some drinks quench thirst. Every once in a while, one of them becomes the taste of a specific kind of relief. This one did both, and we're glad it did.</p>
            `
        },
        blog3: {
            title: "After 11 PM: The Quiet Crowd",
            body: `
                <p>After 11 PM, the cafe becomes a slightly different place. Not dramatically different—the chairs are the same, the menu is the same—but the mood shifts in a way that's hard to describe without sounding vague. It gets quieter, obviously. But it also gets more honest.</p>
 
                <p>People are tired. They've been performing their daytime selves for twelve, fourteen hours. By 11 PM, they've stopped holding their posture together. Bags go on chairs instead of laps. Shoes sometimes come half off under the table. Conversations move slower and land differently.</p>
 
                <p>We see nurses after duty. Not still in scrubs, usually, but you can tell—there's a particular kind of tired that a full hospital shift produces and it sits in the shoulders and eyes in a specific way. They usually want tea and something warm to eat and a table where nobody will bother them.</p>
 
                <p>We see developers who've been staring at one problem for six hours and need to be in a room with other humans before going home. They don't want to talk about the problem. They want to sit in ambient noise and let their brain stop grinding.</p>
 
                <p>We see friends who haven't been in the same city at the same time in months. They always arrive slightly breathless, slightly disbelieving that this is actually happening. The conversation starts in the middle of something, because they've been having it in their heads for weeks already.</p>
 
                <p>Nobody at this hour is in a hurry. Nobody is performing for anyone. A table of four at 11:30 PM is completely different from a table of four at 7 PM. The laughter is shorter, more sudden, more genuine. The silences between talking are comfortable instead of awkward.</p>
 
                <p>The orders change too. More tea. More of the warm things. Less of the elaborate. People want something that doesn't require much decision-making because they've already made too many decisions today and their brain is done.</p>
 
                <p>These hours remind us that good hospitality is often quiet. It's a glass of water brought before someone asks. It's not hovering when a table goes silent for a while. It's the small, considered things that people don't notice until they're somewhere that doesn't do them.</p>
 
                <p>By midnight, the city outside has mostly decided to stop. In here, for a few more hours, there are still people who aren't ready to let the day end. We're glad they have somewhere to come.</p>
            `
        },
        blog4: {
            title: "A Birthday for Twelve, Planned in Forty Minutes",
            body: `
                <p>The call came in at 7:20 in the evening. One of the group was on the phone, speaking in the specific hushed voice of someone standing in a bathroom or a stairwell trying not to be heard.</p>
 
                <p>"We have about forty minutes. Twelve people. It's her birthday. She has no idea. We have a cake. We have literally nothing else. Can you help us?"</p>
 
                <p>Here's the thing about surprise birthdays: by the time someone calls asking for help, they're already panicking, and the panic is contagious. You have to stay calm enough for both of you or the whole thing falls apart before anyone's even arrived.</p>
 
                <p>"Come in. We'll sort it."</p>
 
                <p>Two tables became one long arrangement in about four minutes. Spare candles came out—the proper ones, not the emergency backup ones. Someone found a playlist that felt celebratory without being generic, which is harder to do than it sounds. Someone else sorted a small area near the table so the group could stand together without blocking the rest of the room.</p>
 
                <p>Nothing was expensive. Nothing was elaborate. It was just a series of small things done quickly by people who genuinely wanted it to work.</p>
 
                <p>The birthday girl arrived thinking it was just dinner. She'd had a long week and was slightly relieved it was just going to be a low-key evening. She walked in, looked at the table, looked at the faces, and then the lights shifted slightly and everyone stood up and the song started and she cried before the first line ended.</p>
 
                <p>Not sad crying. The kind that happens when something catches you off guard in the best way—when you realize people went out of their way for you on a Tuesday evening when everyone had their own things to deal with.</p>
 
                <p>The group stayed until close. The cake was finished. The table looked like a celebration had happened on it, which is exactly what it should look like.</p>
 
                <p>What worked that night wasn't budget or décor. It was the group's decision to try, the forty-minute scramble, and the team's willingness to move quickly and care about the outcome. Everyone brought one small thing to the right moment.</p>
 
                <p>That's our favorite kind of evening. The ones nobody planned perfectly but everybody felt completely.</p>
            `
        },
        blog5: {
            title: "Notes from the Kitchen Pass",
            body: `
                <p>Most guests see the finished plate. That's the point—that's what the plate is for. But the story of how it got there starts earlier, at the kitchen pass, where every dish goes through one last moment of assessment before it leaves.</p>
 
                <p>There's a question that gets asked repeatedly, sometimes out loud and sometimes just internally: "Would this feel comforting if someone ordered it after a long day?" Not "Is it technically correct?" Not "Does it look good?" Those matter, but they're earlier questions. This one is the final one.</p>
 
                <p>If the answer is uncertain, something changes. Sometimes it's the spice balance—something that reads fine on its own can feel harsh when you're already tired and your nerves are a bit frayed. Sometimes it's texture, because comfort food has a specific relationship with texture that isn't about technique but about how it feels to eat. Sometimes it's proportion—whether the dish has enough of the thing that made someone want it in the first place.</p>
 
                <p>We design a lot of the menu with sharing in mind because that's how most tables here actually eat. Someone orders, someone else points at it, someone asks for a second fork. The food should work for that—it should be portioned and structured so it reaches the middle of the table naturally rather than feeling like a dish that demands individual possession.</p>
 
                <p>There are things on the menu that look simple and took a long time to get right. Not because the technique is complicated but because "simple" is unforgiving. When there are only three things in a dish, every single one of them has to be exactly as good as it should be. There's nothing to lean on.</p>
 
                <p>The chicken lasagna took a while. Not the construction of it—that's consistent and precise—but the balance. Getting it to feel rich without being heavy, satisfying without being the kind of meal that makes you want to stop moving for two hours afterwards. The fish fingers took a while too, mostly around the seasoning, which sounds like a minor thing until you've tasted the version before we got it right and then the version after.</p>
 
                <p>Comfort food is not accidental. It is not just cooking something familiar and hoping muscle memory does the rest. It is built through small decisions, made consistently, by people who are paying attention. We are paying attention.</p>
            `
        },
        blog6: {
            title: "The People Behind the Counter",
            body: `
                <p>Most guests remember the food first. That's fair. That's usually why people come back—because something tasted right and they want it to taste right again.</p>
 
                <p>But regulars remember people. They remember the person who asked "usual?" without checking any notes, just from memory. They remember the one who noticed they looked like they'd had a rough week and suggested something lighter without making it a whole thing. They remember the small moments where someone saw them instead of just their order.</p>
 
                <p>The team here includes people across very different timings. The early-shift openers arrive before most of the city has started making decisions about the day. They set up alone or in pairs, in a quiet that only exists in cafes in the hour before the first guests arrive. The afternoon runners handle the bulk of the traffic—the lunch crowd, the post-class groups, the midday meetings. The late-night closers are a specific kind of person: patient, unhurried, good at reading when a table wants company and when it wants to be left alone.</p>
 
                <p>Different timings, same intention. Make every single person who walks in feel like they belong here.</p>
 
                <p>A lot of this work is invisible in the way that all good work is invisible. Timing a refill so it arrives before someone consciously notices they want one. Resetting a table quickly and quietly while the next guests are still coming through the door. Handling a mistake—a wrong order, a longer wait than expected—with honesty and calm, without over-explaining, without making the guest feel like they've caused a problem by having a problem.</p>
 
                <p>There's also something that doesn't get talked about enough: the energy of showing up, shift after shift, and choosing warmth on purpose. Not performed warmth, not scripted warmth—the real kind, where you're genuinely curious about how someone's day is going and you mean it when you say you're glad they came in. That's harder than it sounds. It requires actually caring, and caring is not a resource that replenishes automatically.</p>
 
                <p>The team here cares. You might not notice it explicitly. You're probably not supposed to. But you'll feel it—in the texture of the hour you spend here, in the fact that you left in a slightly better mood than you arrived in. That's them. That's what they do on purpose, every single day.</p>
            `
        },
        blog7: {
            title: "Rainy Day at Mysa",
            body: `
                <p>Monsoon afternoons in Ranchi announce themselves in a particular way. The air gets heavy and still, then the sky shifts to a specific shade of grey-green that people who've grown up here recognize immediately, and then usually within about four minutes, the rain starts and it means it.</p>
 
                <p>On one afternoon, the first few people through the door were still laughing from running. Wet bags. Damp dupattas folded over chair backs. One person with an inside-out umbrella that had clearly lost a fight. Everyone looked slightly chaotic in the way that unexpected rain makes everyone look—slightly undignified and completely fine with it.</p>
 
                <p>The team had pulled extra chairs near the entrance without being asked, because this happens enough that everyone knows what to do. Tissues appeared on the tables near the door. A pair of shoes ended up drying by the entryway and nobody made it a thing.</p>
 
                <p>The orders shifted naturally. More soup. More of the hot drinks. The cold frappes that usually move quickly on warm afternoons barely got ordered. People wanted warm things to hold. The food that went out was mostly the heavier, more comforting items—the kind of meal that feels like a reason to stay put.</p>
 
                <p>Nobody was in a hurry. The rain outside made that simple. Nobody wants to leave into a monsoon downpour before they have to, which meant tables stayed occupied longer, conversations deepened, and the usual lunch-hour energy mellowed into something more Sunday-afternoon.</p>
 
                <p>At one point, a guest offered to share her charging socket with the person at the next table. They got talking. It turned out they'd both lived abroad for a while and moved back to Ranchi around the same time for similar reasons. By the time the rain slowed down, they'd exchanged book recommendations and agreed on a café they both wanted to try in Lalpur.</p>
 
                <p>That's the thing about shared bad weather. It's a social leveler. Everyone's a little damp, everyone's schedule has been disrupted by something nobody planned for, and somehow that makes it easier to talk to the person next to you.</p>
 
                <p>By evening, the streets were wet and clean and the air had that specific post-rain smell that's one of the better smells a city can produce. People left in better moods than they'd arrived in, which had nothing to do with us and everything to do with the rain and the way a monsoon afternoon can, if you're somewhere comfortable when it happens, feel like an unexpected gift.</p>
            `
        },
        blog8: {
            title: "The Long Table Diaries",
            body: `
                <p>There's a long table near the back that has, in any given week, hosted: a mock job interview, a startup pitch rehearsal (with one person playing three different types of skeptical investor), a group assignment that was due in six hours, a product launch plan on three sticky-note covered pages, a very long breakup debrief between two friends, and one person who sat alone for four hours writing something they wouldn't tell us about.</p>
 
                <p>It's become the table that people come to when they need to actually do something, not just be somewhere. The seating works for groups and pairs. The layout means you can spread out without inconveniencing the next group. It has the right angle to the power outlets.</p>
 
                <p>Students use it for the kind of group study that starts as studying and becomes mostly talking, then becomes studying again around the third hour when the deadline starts feeling real. Freelancers use it for deep work—the kind where they put headphones on and you don't see them surface for two hours and then they suddenly pack up and leave with the specific speed of someone who has just finished something.</p>
 
                <p>Founders use it for planning sessions. These are identifiable because there's always at least one person talking with their hands a lot, and the table ends up with a ring of cups around a central zone of notebooks and phones propped at odd angles showing reference material.</p>
 
                <p>What all of them need is the same short list of things. Wi-Fi that works consistently. Service that checks in without hovering. An environment where staying for another hour doesn't feel like an imposition—where nobody is giving you looks or clearing your cup before it's empty just to signal that your time is up.</p>
 
                <p>We have watched two people start talking at that table because they were both working on problems in adjacent industries and one of them asked the other a question about something they overheard. They left with each other's contact details and, from what we understand, ended up collaborating on something a few months later.</p>
 
                <p>We've watched a group of three friends turn a table of notebooks into a business plan over the course of several Sundays. They still come in, less frantically now, and the notebooks have been replaced by a laptop and a more settled energy.</p>
 
                <p>Sometimes all progress needs is a table that doesn't rush you, decent coffee, and enough hours to think something through properly. We have all three. The rest is up to whoever sits down.</p>
            `
        },
        blog9: {
            title: "Sundays with Families",
            body: `
                <p>Sunday afternoon tables are a completely different kind of occupation. They arrive in waves—usually the grandparents first because they've been ready since noon, then the middle generation managing children and parking simultaneously, then whoever was running late and has already texted three apologies.</p>
 
                <p>The children choose seats by a logic that has nothing to do with the adults around them. The window because there's something outside. The corner because it feels like their own territory. The seat next to the grandparent because they know that's where the best snacks and the most lenient opinions live.</p>
 
                <p>Someone always asks for an extra plate "just in case." We learned early on that "just in case" usually means "definitely yes" and started bringing it without being asked. It's a small thing that saves a whole back-and-forth that nobody really wants to have.</p>
 
                <p>These tables are not about efficiency. Nothing about them is efficient and that's exactly as it should be. The menu takes a while to settle because everyone has an opinion and the children have changed their minds twice. The meal arrives over a span of time because different things cook at different speeds and families eat at different speeds anyway. The bill discussion at the end is an entire ritual in itself, with the kind of insistence and counter-insistence that suggests this conversation has been happening at every family table for at least two generations.</p>
 
                <p>There are always stories being told that someone at the table has heard before but listens to again, because the story isn't really the point—the telling of it is. The grandmother explaining something about how things used to be done. The father's version of an event that the mother's version is slightly different from. The children not fully listening but absorbing more than they realize.</p>
 
                <p>By the end of it, someone is packing food to take home for someone who couldn't make it. Someone is already suggesting next Sunday. Someone is still finishing the last sip of their tea because they're not ready to let the afternoon end.</p>
 
                <p>This is hospitality at its most fundamental: giving people a comfortable place to spend time together. Not a particularly glamorous version of what we do, but honestly, one of the most important. Good family afternoons don't happen by accident. They need a room that's okay with the noise, patient enough for the pace, and set up to make sharing easy. We try to be all of that, every Sunday, without making a fuss about it.</p>
            `
        },
        blog10: {
            title: "What Home Means Here",
            body: `
                <p>"Where every moment feels like home" is on the wall. People read it when they walk in, and occasionally someone asks what it actually means in practice. It's a fair question. Slogans are easy. Living one is the harder part.</p>
 
                <p>For us it means, practically, a short list of behaviors that get repeated without exception.</p>
 
                <p>Home means remembering. Not just orders, though that too—but the preferences around the order. The person who always wants less ice. The one who prefers the pasta with a specific small modification they mentioned once, three months ago, as if it was a minor thing. The couple who shares one dessert and always needs two spoons without having to ask. Remembering these things is not a skill. It's a decision to pay attention and keep paying attention.</p>
 
                <p>Home means handling mistakes honestly. Things go wrong in any kitchen, in any service. Dishes take longer than they should. An order comes out different from what was asked for. The honest response—"I'm sorry, here's what happened, here's what we're going to do about it"—is the only one that works. Excuses, redirection, excessive apology that turns the guest's problem into managing your feelings about the problem—none of that is what home does. Home admits the mistake and fixes it.</p>
 
                <p>Home means the same welcome on a quiet Tuesday afternoon as on a packed Friday night. It means not making people who come in during a rush feel like they've arrived at a bad time. It means not making solo diners feel like their table is a loss. It means consistency of warmth, which is harder than consistency of any technical thing, because warmth requires energy and energy requires genuine care and genuine care has to be chosen deliberately, every single day.</p>
 
                <p>Home also means you can be different versions of yourself here and all of them are welcome. Loud, celebrating, a table of twelve versions. Quiet, working, headphones in, don't-talk-to-me versions. Halfway through crying about something and needing a cup of tea and fifteen minutes before you're ready to go back outside versions. All of these have sat at these tables. All of them left without feeling like they were too much, or not enough, or the wrong kind of guest.</p>
 
                <p>If people leave feeling lighter than when they arrived—not because anything dramatic happened, but because for an hour or two they were somewhere that felt like it was on their side—then the sign on the wall is doing its job. That's what we're trying to build. Not the most impressive place in the city. Just the one that feels most like it was made for you.</p>
            `
        },
        blog11: {
            title: "Why Café Mysa's Mango Menu is Ranchi's Ultimate Summer Obsession",
            body: `
                <p>There's a particular kind of magic that descends on Ranchi when summer arrives. The air thickens with heat, the afternoons slow down to a golden crawl, and somewhere in the back of every mind, a single word surfaces like a craving you can't shake — mango. Not just any mango. The kind that smells like your grandmother's kitchen, that drips down your wrist before you can catch it, that turns an ordinary Tuesday into something worth remembering.</p>

                <p>At Café Mysa, we took that feeling — raw, nostalgic, sun-drenched — and built a menu around it. The Summer Mango Menu isn't just a seasonal offering. It's a love letter to every Ranchi summer you've ever lived through.</p>

                <p>Ranchi summers are no joke. The mercury climbs, the streets shimmer, and by noon, all you want is shade, something cold, and something that tastes like relief. But there's also something deeply beautiful about it — the laughter outside, the mangoes piled high in the markets near Firayalal, the particular golden quality of evening light at Dimna Lake. Summer in Ranchi is intense and gorgeous and absolutely worth celebrating.</p>

                <p>When the team started building this menu, the goal wasn't to simply add mango flavour to existing items. The vision was bigger — to create an entire experience. Drinks that cool you from the inside out. Desserts that feel like a reward for surviving the heat. Food that's nourishing, beautiful, and completely craveable. The result is ten unique mango-forward creations that span every mood, every hunger, and every hour of your summer day.</p>

                <p>Let's start with what's going to get you through those brutal Ranchi afternoons. The Mango Basil Mojito is where it all begins — fresh mango pulp muddled with aromatic basil, a hit of citrus, and enough sparkle to make your taste buds do a double take. It's equal parts elegant and refreshing, the kind of drink that looks as good as it tastes.</p>

                <p>For those who want something deeper, the Mango Matcha Frappe is a revelation — tropical sweetness colliding with the earthy depth of Japanese matcha in the most unexpected and beautiful way. Then there's the Mango Boba, which has quickly become a Café Mysa cult favourite. Add in the Mango Smoothie (thick, honest, pure mango bliss) and the Mango Iced Tea (light, fragrant, and endlessly drinkable), and you have five reasons to stay at the café longer than you planned.</p>

                <p>The mango experience at Café Mysa doesn't stop at drinks. The kitchen has gone all in. The Mango Granola Bowl is how warm mornings should begin — vibrant, wholesome, and packed with texture and sweetness that doesn't feel guilty. The Mango Avocado Toast is the kind of dish that makes you stop and take a photo before you eat it, because it looks like a painting. And the Mango Avocado Salad with Hummus turns simple ingredients into something that feels gourmet, balanced, and bright.</p>

                <p>For those with a serious sweet tooth, the café's dessert menu is where things get truly indulgent. Mango Tres Leches — a cloud of mango-soaked cake that melts before it even reaches your tongue — and Mango French Toast — golden, crispy, crowned with ripe mango — are the kinds of desserts people come back for again and again.</p>

                <p>Café Mysa has always believed that a great café doesn't just serve food. It creates a world you want to step into. The space in Ranchi was designed to feel like a retreat — aesthetic, calm, and full of light — and the Summer Mango Menu was built with the same intention. Every item on this menu was crafted to make you feel something: refreshed, indulged, happy, nostalgic.</p>

                <p>Mango season is short. Ranchi summers are long and demanding. The best thing you can do is make them count — and Café Mysa is here to help you do exactly that. Visit Café Mysa, pull up a chair, let the ceiling fan hum above you, and let us bring you everything summer should feel like — in a glass, on a plate, in every single bite. Your summer obsession is waiting. Café Mysa, Ranchi.</p>
            `
        },
        blog12: {
            title: "Dessert Heaven: The Most Indulgent Mango Desserts to Try at Café Mysa",
            body: `
                <p>There are moments in summer that deserve to be stretched out — golden, slow, and absolutely indulgent. You've walked in from the Ranchi heat, the overhead fan is doing its best, and across the room you catch a glimpse of something being carried to a table. It's pale and cream-coloured and crowned with the vivid orange of ripe mango. Your plans for the afternoon quietly dissolve.</p>

                <p>Café Mysa's summer dessert offerings are not simply menu items. They are experiences dressed up as food — rich, emotional, and unforgettable in the way that only the best desserts can be. This summer, two creations stand above the rest.</p>

                <p>If there's a dessert in Ranchi right now that is capable of making you forget the heat outside, it's the Mango Tres Leches at Café Mysa. Tres leches is a Latin American classic — a sponge cake soaked in three kinds of milk until it becomes something entirely transcendent, hovering between liquid and solid in the most luxurious way. Café Mysa takes that already-perfect foundation and layers in fresh mango — in the soak, in the cream, in every bite — so that each forkful is cool, silky, and alive with tropical sweetness.</p>

                <p>The texture is the thing. Press your fork gently and the cake yields immediately, releasing cream, releasing mango, releasing something that can only be described as pure comfort. It's dense and yet somehow weightless. Rich without being heavy. Sweet without being cloying. It hits that rare, perfect note where dessert stops being a choice and becomes an inevitability.</p>

                <p>The mango at Café Mysa is always the real thing — never artificial, never flat. You taste the actual fruit: the slight floral edge, the honeyed depth, the warmth of a proper Indian summer mango doing exactly what it was born to do. Order the Mango Tres Leches on a slow afternoon. Order it when you want to feel looked after. Order it because you deserve it.</p>

                <p>There's a version of breakfast that exists somewhere between nourishment and indulgence, and Café Mysa's Mango French Toast lives right at that intersection. Thick-cut brioche bread, soaked in a custardy egg mixture and cooked until the outside is perfectly golden and just barely crisp. The inside stays soft — pillowy, warm, fragrant with vanilla. And then comes the mango. Not hidden beneath or mixed in, but right there on top: sliced generous and ripe, each piece glistening, sun-coloured, and impossibly sweet.</p>

                <p>Add a drizzle of honey or a reduction, and the whole thing becomes something you're not sure you should be eating as a casual morning café order. It feels too good for that. Too thoughtful. Too beautiful on the plate, the mango gleaming against the golden toast like a painting someone at Café Mysa spent time composing.</p>

                <p>Warm and sweet and slightly custard-rich from the toast, then suddenly bright and juicy from the mango — the contrast is the magic. The golden warmth of the bread against the cool freshness of the fruit. By the time you're halfway through, you're already planning when you'll come back.</p>

                <p>What makes Café Mysa's desserts different isn't just the quality of the ingredients or the skill in the kitchen — though both are exceptional. It's the intention behind them. Every dessert is designed to make you feel something: the Mango Tres Leches makes you slow down and savour; the Mango French Toast makes an ordinary morning feel like a celebration.</p>

                <p>Don't let summer pass without visiting Café Mysa for at least one of these desserts. Better yet, come with someone worth sharing with and order both — the Mango Tres Leches and the Mango French Toast — and work your way through them slowly, the way all good things in life should be experienced. Café Mysa is where Ranchi's summer gets its sweetest. Come find out why.</p>
            `
        },
        blog13: {
            title: "5 Refreshing Mango Drinks You Need This Summer at Café Mysa",
            body: `
                <p>Step outside in Ranchi between April and June and you'll understand immediately why a cold drink isn't a luxury — it's a lifeline. The heat sits thick and heavy, the sun bounces off the roads, and by the time you find shade, all you want is something cold, something real, and something that tastes like this season actually has an upside.</p>

                <p>Café Mysa heard you. The Summer Mango Drinks Menu is five different answers to one question: how do you make Ranchi's summer not just bearable, but beautiful? Here's your complete guide to every mango drink on the menu.</p>

                <p>The Mango Basil Mojito is the most sophisticated drink on the Café Mysa mango menu, and also one of the most instantly craveable. Fresh mango pulp is muddled with whole basil leaves — releasing that herbaceous, slightly peppery depth — then brightened with citrus and topped with a fine effervescent fizz that seems to pop against your tongue. It's refreshing in the way that a good book is refreshing — it pulls you in and keeps surprising you.</p>

                <p>Sometimes you don't want complexity. Sometimes you want mango, undiluted, in its full tropical glory. The Mango Smoothie at Café Mysa is exactly that — an honest, thick, deeply satisfying pour of real mango, blended to a consistency that's rich without being heavy. It coats your glass, it fills your mouth, it tastes like the market mangoes your family used to buy in bulk. No tricks, no distractions. Just the fruit, doing what it does best.</p>

                <p>The Mango Iced Tea is the underdog of the menu — the one people walk past to order something more dramatic, and then spend the rest of the afternoon coveting from across the table. It's brewed tea — proper, fragrant, lightly tannic — chilled and married with fresh mango in a way that is subtle and beautiful. The mango doesn't overpower; instead, it sits underneath the tea like a warm suggestion. This is the drink for long afternoons.</p>

                <p>If drinks had personalities, the Mango Matcha Frappe would be the most interesting person at the table. This is a collision of worlds — vibrant Japanese matcha, earthy and slightly bitter, blended cold with sweet tropical mango and turned into a frappe that's simultaneously cooling, energizing, and visually striking. Beyond the aesthetics, the flavour is genuinely revelatory. The matcha brings depth and a slight bitterness that keeps the sweetness in check. The mango brings brightness and warmth.</p>

                <p>And then there's the Mango Boba — the drink that has, without any question, become the most ordered item at Café Mysa since the Summer Menu launched. Mango tea base — sweet, tropical, perfectly balanced — with those dark tapioca pearls resting at the bottom, waiting to be drawn up through an oversized straw in a moment that is deeply satisfying every single time. It's the drink that makes people smile. The one college students order between classes, that couples share on afternoon dates, that food bloggers photograph from every conceivable angle.</p>

                <p>Come taste all five. Café Mysa is waiting, and so is mango season.</p>
            `
        },
        blog14: {
            title: "Summer Dates in Ranchi? Café Mysa's Mango Menu Sets the Mood Perfectly",
            body: `
                <p>There's something about summer evenings in Ranchi that holds a particular kind of magic. The sky turns into gradients of orange and rose. The heat softens, just slightly, and the air carries the smell of rain that might come or might not — that perfect tension of late afternoon. It's the kind of evening that deserves good company, a beautiful space, and something in your hands that tastes as good as everything around you looks.</p>

                <p>Café Mysa was made for evenings like this. And the Summer Mango Menu? That was made for you — for the slow, romantic hours that summer evenings in Ranchi gift us when we're paying attention.</p>

                <p>Let's start with the space, because it matters. A date is only as good as the place you choose to have it — and Café Mysa is the kind of place that does half the work for you the moment you walk in. Soft light, thoughtful design, a palette that's warm without being loud, and music that sits at exactly the right volume — present enough to fill the silence, low enough that you can talk without leaning in.</p>

                <p>Every good date needs a drink to start with — something that marks the shift from ordinary time to deliberate, unhurried togetherness. Order two Mango Basil Mojitos and let the evening begin. Watch them arrive, green-sprigged and gorgeous, fizzing gently in the glass. Take the first sip. Let the mango and basil and citrus do their work — surprising, layered, refreshing.</p>

                <p>As the evening settles and you order something else — perhaps the Mango Matcha Frappe for its striking appearance and bold, surprising flavor — the conversation deepens in the way that conversations do when time stops being a pressure and starts being a gift. The Matcha Frappe is layered and interesting and slightly unexpected — not unlike the best conversations.</p>

                <p>Somewhere between the second drink and the moment you realize you've lost track of time, a dessert should arrive. The Mango Tres Leches at Café Mysa is the perfect date dessert — that pale, cream-soaked cake with mango shining on top, two spoons resting against the dish. It requires sharing. It rewards slowing down. Each bite is a small indulgence, and there are enough bites that the dessert stretches into a conversation of its own.</p>

                <p>Alternatively, arrive in the morning for a brunch date and let the Mango French Toast set the mood — golden, warm, sweet, and just indulgent enough to feel like an occasion. Café Mysa's morning light does something to that dish that makes it feel like the start of something very good.</p>

                <p>Great dates need great settings. In Ranchi, Café Mysa stands apart as the café that understands what people actually want from a date experience — not just good food, but an environment that supports connection. The food creates conversation. The ambience creates comfort. The mango menu creates delight. Come to Café Mysa this summer, Ranchi. Make the evening count.</p>
            `
        },
        blog15: {
            title: "Healthy Meets Delicious: Café Mysa's Mango Specials for Guilt-Free Summer Eating",
            body: `
                <p>Here's a truth about summer eating that doesn't get said enough: healthy food doesn't have to be sad food. It doesn't have to taste like a compromise or look like an afterthought. And when it's done right — when real, fresh, nourishing ingredients are treated with creativity and care — it can be the most satisfying food you eat all season.</p>

                <p>Café Mysa's Summer Mango Menu proves this beautifully. Alongside the indulgent drinks and desserts, the café has crafted a set of healthy mango specialties that are vibrant, nourishing, and as beautiful on the plate as they are good for you.</p>

                <p>If you're not a morning person, the Mango Granola Bowl at Café Mysa might change your position on the matter. Picture this: a wide bowl, pale and clean, layered first with thick yogurt — cool, slightly tangy, the kind that has real substance to it. Then a generous scatter of granola, toasted golden and full of crunch, releasing its nutty, caramel warmth into the cool yogurt below. And on top of it all: fresh mango, cut into thick, jewel-like pieces, catching the morning light like something that was always meant to look this beautiful.</p>

                <p>The taste is everything the appearance promises. The yogurt brings creaminess and a gentle tartness. The granola brings warmth, crunch, and a toasty sweetness. The mango brings brightness — that clean, fruity, intensely summer-forward flavour that makes everything else around it feel more alive.</p>

                <p>Avocado toast has been many things since it entered the café conversation. At Café Mysa, it becomes something more: a genuinely exciting dish elevated by the addition of mango in a way that is both intuitive and transformative. The Mango Avocado Toast starts with good bread — the kind with structure and a proper crust, toasted until it has bite. The avocado is mashed generously across it, seasoned well. And then: mango piled on top with the confidence of someone who knows that tropical fruit and creamy avocado were always going to be best friends.</p>

                <p>The Mango Avocado Salad with Hummus is Café Mysa's most surprising dish — the one that makes sceptics into believers. The salad is fresh and carefully composed: greens that are crisp, avocado that is ripe and silky, mango that adds pops of juicy sweetness. And the hummus — served alongside, smooth and rich — grounds the whole dish in something creamy, satisfying, and genuinely filling.</p>

                <p>These three dishes share something important: they all feel like treats. Not like punishments disguised as health food. Café Mysa understands that healthy eating in a café context should feel abundant — generous portions, beautiful presentation, bold and satisfying flavours. This is the café philosophy that's changing how Ranchi thinks about summer eating.</p>

                <p>The mango season is short and the healthy specials at Café Mysa are available only while it lasts. Come in, order the Granola Bowl for breakfast, the Avocado Toast for brunch, or the Salad for lunch. Feel good, eat beautifully, live the summer — at Café Mysa, Ranchi.</p>
            `
        },
        blog16: {
            title: "Why Mango Season Feels Incomplete Without Café Mysa",
            body: `
                <p>Ask anyone in Ranchi about mango season and watch something shift in their expression. It's a particular kind of softness — the kind that only nostalgia produces. Suddenly they're somewhere else: back in a courtyard, back at a kitchen table, back in a summer that ended too soon. There's an aunty cutting mangoes into perfect hedgehog patterns. There's the smell of ripe fruit warming in afternoon sunlight. There's a particular stickiness on the fingers that no one minded because summer meant you were allowed to be a little bit free.</p>

                <p>Mango in India isn't a fruit. It's a feeling. It's the flavour of childhood summers, of school holidays, of evening conversations that stretched long after dark. At Café Mysa, we didn't just add mango to a menu. We tried to bottle that feeling.</p>

                <p>Ranchi is a city that experiences summer with full commitment. The heat arrives with authority, the city slows into a particular rhythm, and the mangoes — the beautiful, heavy, sun-baked mangoes — arrive in the markets with a kind of ceremony that the whole city quietly participates in.</p>

                <p>There's something specific about sitting under a ceiling fan in Ranchi's summer, about the quality of afternoon light, about the fact that going somewhere beautiful and sitting down and having something good feels more meaningful in summer than in any other season. It's as if the heat makes you more conscious of where you are and what you're doing with your time. Café Mysa was designed for exactly this consciousness.</p>

                <p>Every great café has a memory attached to it. Not just the memory of a single visit, but the memory it creates in aggregate over time — the sense that this place is woven into the fabric of your life during a particular season or chapter. Café Mysa's Summer Mango Menu is building those memories right now, in real time, for everyone who comes through the door.</p>

                <p>There's the memory of the first time you tried the Mango Tres Leches — how you weren't expecting something so extraordinary and how it completely recalibrated your idea of what a Ranchi café could offer. There's the memory of sitting with a Mango Iced Tea and realising that you'd been there for two hours without noticing. These aren't just food memories. They're summer memories.</p>

                <p>There's a bigger story here about what cafés do for a city — and particularly for a city like Ranchi, which is growing and developing its own premium café culture with energy and ambition. Café Mysa has positioned itself at the heart of that story. It's not just a business. It's a space that gives Ranchi's young professionals, college students, couples, and families somewhere beautiful to be.</p>

                <p>Mango season is always too short. It arrives in a rush of colour and sweetness and then it's gone, leaving only the memory of how good it was and the quiet resolution to make more of it next year. Come to Café Mysa. Order the mango drink that calls to you. Sit with someone you love. Let the afternoon stretch. Because mango season without Café Mysa is just summer. With it, it becomes something worth remembering.</p>
            `
        },
        blog17: {
            title: "The Ultimate Instagrammable Summer Menu in Ranchi",
            body: `
                <p>There's a moment every food photographer knows — when a dish or drink arrives at the table and everything stops. The conversation pauses. The phone comes out. The light is checked. And before the first sip or the first bite, there is documentation, because what's sitting in front of you is simply too beautiful to consume without first preserving it.</p>

                <p>Café Mysa's Summer Mango Menu was made for this moment. Every single item on this menu was designed to be extraordinary — in taste, yes, absolutely, but also in appearance. In colour. In texture. In the way it looks when the Ranchi afternoon light catches it just right.</p>

                <p>Let's talk about colour — because Café Mysa's mango menu is, among other things, a masterclass in it. Mango brings a particular shade into the world: warm, golden, somewhere between amber and tangerine, with an almost luminous quality that photographs like a dream. Against the clean white ceramics and neutral tones of the Café Mysa aesthetic, the orange-gold of mango doesn't just appear on the plate — it glows.</p>

                <p>Start with the Mango Basil Mojito — possibly the most photogenic glass in Ranchi right now. The fresh basil sprig rising from golden mango liquid, the rim of the glass just catching moisture, the colour so warm and vibrant it looks like summer itself. The Mango Matcha Frappe is its own kind of visual event — that unusual, striking green-gold that happens when matcha meets mango is not something you see every day. The Mango Boba photographs with an almost unfair ease: dark pearls resting at the bottom of a cup filled with golden mango.</p>

                <p>The Mango Avocado Toast is the brunch photo that people travel to cafés for. The green of the avocado, the golden bread, the vivid mango on top — every element has been placed with a designer's eye. It looks curated, it looks premium, it looks exactly like the kind of thing you see on the feeds of your favourite food accounts and think: I need to find somewhere like this. Café Mysa made it. In Ranchi. And it's available right now.</p>

                <p>The Mango Granola Bowl offers a top-down photo opportunity that is genuinely irresistible — the ceramics, the layers of texture, the mango arranged on top like a still-life painting. And the Mango Tres Leches photographs with a rich, pale-gold quality that communicates luxury and sweetness before a single word of caption is written.</p>

                <p>What Café Mysa understands — and what separates it from ordinary cafés in Ranchi — is that for a large part of its audience, the aesthetic experience is inseparable from the dining experience. You eat and you document. You taste and you share. The offline and online experience of a café visit are one continuous event, not two separate ones.</p>

                <p>The truth is, the photos will bring you in — and the food will make you stay. Café Mysa's mango menu is as delicious as it is beautiful, and that's the combination that turns a one-time visitor into a regular. Come create something worth posting at Café Mysa, Ranchi.</p>
            `
        },
        blog18: {
            title: "Mango Lovers, This Menu Was Made for You",
            body: `
                <p>If mangoes have ever made you emotional — if you've stood in front of the fruit vendor and felt something too large to explain — if you believe, genuinely, that mango season is the best time of year and that everything else is simply waiting — then this blog post is for you. And more importantly, Café Mysa's Summer Mango Menu is for you.</p>

                <p>This is not a menu where mango makes a casual appearance. This is not a mango element added to an otherwise unrelated dish to cash in on a season. This is a menu that takes mango seriously — that treats it with the reverence it deserves — and then turns that reverence into ten extraordinary things to eat and drink.</p>

                <p>If you're the kind of mango lover who doesn't want the fruit tampered with too much — who wants to taste the mango clearly, honestly, without distraction — then the Mango Smoothie and the Mango Granola Bowl are your entry points. The smoothie is nothing but the fruit in its best liquid form: thick, intensely flavoured, sweet in the way that only real mango can be sweet. The granola bowl uses fresh mango as the starring ingredient, letting it sit atop yogurt and granola with the confidence of something that knows it needs no embellishment.</p>

                <p>Once you've honoured the pure mango, it's time to see what happens when it meets other extraordinary ingredients. The Mango Basil Mojito is where the adventure begins — fresh basil changes mango in a way that is completely counterintuitive and completely wonderful, adding a herbaceous, slightly peppery dimension that makes the fruit taste more complex and sophisticated.</p>

                <p>The Mango Matcha Frappe takes it even further. Japanese matcha — one of the most nuanced, earthy, and complex flavours in the world — paired with the tropical sweetness of mango. The matcha keeps the mango from becoming cloying; the mango keeps the matcha from becoming austere. They make each other better, the way great pairings always do.</p>

                <p>The Mango Tres Leches is, without exaggeration, one of the most extraordinary desserts being served in Ranchi right now — soaked in mango-enriched milk until it becomes something silky and otherworldly, topped with mango so fresh and bright it seems to vibrate with flavour. The Mango French Toast occupies a sweeter, warmer space — thick brioche toast golden and custardy, topped with ripe mango that adds a cool, fresh counterpoint to the warm bread.</p>

                <p>Here's our suggested approach for the dedicated mango enthusiast: Start with the Mango Smoothie — pure, honest, grounding. If it's morning, move to the Granola Bowl or Avocado Toast. If it's afternoon, let the Basil Mojito or Mango Iced Tea carry you through. End, always, with the Tres Leches. This is the full mango experience at Café Mysa. The menu was made for you. This mango season, come home.</p>
            `
        },
        blog19: {
            title: "Beat the Ranchi Heat with Café Mysa's Tropical Mango Creations",
            body: `
                <p>It happens every year, and every year it's still a surprise. The temperature climbs past 38°C, the asphalt shimmers, the ceiling fans work overtime, and stepping outside between 11am and 4pm becomes an act of genuine courage. Ranchi in peak summer is no small thing — it's a full-body experience, relentless and golden and occasionally brutal.</p>

                <p>And the only appropriate response? Find somewhere cool, order something tropical, and wait it out in style. Café Mysa is exactly that somewhere. And the Summer Mango Menu is exactly that something.</p>

                <p>In Ranchi's summer heat, a truly great cold drink isn't a luxury — it's a necessity. The Mango Iced Tea is the first line of defence — light, fragrant, brewed with actual care, married to fresh mango in a way that creates something delicately tropical and endlessly refreshing. The Mango Smoothie is thicker, more substantial — the cool, dense fruit drink that feels like actual nourishment after a walk in the sun. The Mango Boba brings joy to the equation, because surviving summer should be fun.</p>

                <p>There's a particular pleasure in Ranchi's summer that only people who've lived through it understand: the pleasure of stepping inside somewhere cool and well-designed when outside is actively unkind. Café Mysa offers that refuge. The moment you come through the door, the temperature drops, the noise of the city softens, and everything around you is thoughtful and comfortable and beautiful.</p>

                <p>The Mango Granola Bowl is the perfect hot-afternoon choice for those who want something cool, fresh, and genuinely energizing without the heaviness that sends you into a heat-induced food coma. Cold yogurt, crunchy granola, fresh mango — all of it cool and alive and vibrant. It's the kind of bowl that makes you feel refreshed from the inside out.</p>

                <p>When the afternoon has been truly relentless, when you've earned the indulgence, the Mango Tres Leches awaits — served cool, that cold, cream-soaked cake with its vivid mango crown feels like restoration. Like summer handing you something beautiful to compensate for everything it put you through earlier. It's the dessert equivalent of the first cool breeze of evening: relief, pleasure, and gratitude all at once.</p>

                <p>Ranchi summers are demanding. They ask a lot of you every day. But Café Mysa is where you convert summer from an endurance test into an experience worth having. Beat the heat. Beat it deliciously. Come to Café Mysa, Ranchi — your tropical refuge is ready.</p>
            `
        },
        blog20: {
            title: "From Smoothies to Tres Leches: Exploring Café Mysa's Complete Mango Experience",
            body: `
                <p>Some menus need no guidance — you scan, you choose, you eat, you leave. And then there are menus like Café Mysa's Summer Mango Collection, where every item is genuinely extraordinary, where the combinations and sequences and pairings matter, and where someone who has spent real time with the menu can make the difference between a good visit and a great one.</p>

                <p>If this is your first time at Café Mysa and you're standing at the counter looking at the menu and feeling genuinely torn, here's what to do: order the Mango Basil Mojito. It's the drink that introduces you to Café Mysa's philosophy in a single glass. It's unexpected — the basil catches you off-guard in the most delightful way — and it's immediately, unmistakably excellent.</p>

                <p>If you're visiting Café Mysa in the morning — and Ranchi's early summer mornings, before the heat arrives, are a genuinely lovely time — the ideal sequence begins with the Mango Granola Bowl. Cool, layered, beautiful — it's the morning dish that sets the right tone for everything that follows. Then, if you want to extend the morning, follow it with the Mango French Toast — warm, sweet, golden, and generous in a way that makes the whole Café Mysa visit feel like a proper occasion.</p>

                <p>For the curious and the hungry, here are our favourite combinations. The Mango Basil Mojito with the Mango Granola Bowl is the perfect light morning pairing. The Mango Matcha Frappe with the Mango Avocado Toast is the best afternoon pairing — one drink that's complex and energizing, one dish that's satisfying and fresh. The Mango Tres Leches with the Mango Iced Tea is the ultimate dessert pairing — the richness of the cake balanced by the delicate, lightly tannic tea.</p>

                <p>Here is what a perfect Café Mysa mango season visit looks like: You arrive mid-morning as the Ranchi heat is beginning to build. You order a Mango Basil Mojito and a Granola Bowl. You settle in. You stay longer than you planned. Somewhere around noon, you add a Mango Avocado Salad. The afternoon arrives and with it, a Mango Matcha Frappe. Evening light fills the café and you order — because how could you not — the Mango Tres Leches.</p>

                <p>You leave having experienced something that felt, genuinely, like a whole summer afternoon. You already know you'll be back. This is what Café Mysa does. This is what the mango menu makes possible. This is why, in Ranchi, mango season now has a home. Come explore every item. Come find your favourite. Come experience Café Mysa's Complete Mango Summer.</p>
            `
        }
    };


    // Get modal elements
    const blogModal = document.getElementById('blogModal');
    const blogTitle = document.getElementById('blogTitle');
    const blogBody = document.getElementById('blogBody');
    const closeModal = document.getElementById('closeModal');

    // Check if modal elements exist (they might not exist on all pages)
    if (!blogModal || !blogTitle || !blogBody || !closeModal) {
        return; // Exit if modal doesn't exist on this page
    }

    // Get all blog cards
    const blogCards = document.querySelectorAll('.blog-card');

    // Open modal when clicking on a blog card
    blogCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent opening modal if clicking directly on the button
            // (let button handle its own click if needed)
            const blogId = card.getAttribute('data-blog');
            const blog = blogContent[blogId];
            
            if (blog) {
                blogTitle.textContent = blog.title;
                blogBody.innerHTML = blog.body;
                blogModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modal when clicking the X button
    closeModal.addEventListener('click', () => {
        blogModal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modal when clicking outside the content
    blogModal.addEventListener('click', (e) => {
        if (e.target === blogModal) {
            blogModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && blogModal.classList.contains('active')) {
            blogModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Initialize blog modal when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlogModal);
} else {
    // DOM is already loaded
    initBlogModal();
}

// ===============================
// CONSOLE MESSAGE (Optional)
// ===============================
console.log('%cCafe Mysa', 'color: #1a4d3e; font-size: 24px; font-weight: bold;');
console.log('%cWhere Every Moment Feels Like Home', 'color: #9fb968; font-size: 14px; font-style: italic;');
console.log('%cWebsite crafted with care', 'color: #6b7280; font-size: 12px;');

// ===============================
// INITIALIZATION MESSAGE
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    console.log('[OK] All systems loaded successfully');
    console.log('[OK] Navigation initialized');
    console.log('[OK] Scroll animations ready');
    console.log('[OK] Interactive elements active');
});

// ===============================
// MICRO-INTERACTIONS PACK
// ===============================

// Small utility helpers used by the interaction features below.
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const throttle = (fn, wait = 100) => {
    let inThrottle = false;
    let lastArgs;

    return (...args) => {
        if (inThrottle) {
            lastArgs = args;
            return;
        }

        fn(...args);
        inThrottle = true;

        setTimeout(() => {
            inThrottle = false;
            if (lastArgs) {
                fn(...lastArgs);
                lastArgs = null;
            }
        }, wait);
    };
};

const isTouchDevice = () => {
    return window.matchMedia('(pointer: coarse)').matches;
};

function initScrollProgressRail() {
    const pageRoot = document.documentElement;
    if (!pageRoot) {
        return;
    }

    const rail = document.createElement('div');
    rail.setAttribute('aria-hidden', 'true');
    rail.id = 'scrollProgressRail';
    rail.style.position = 'fixed';
    rail.style.top = '0';
    rail.style.left = '0';
    rail.style.width = '4px';
    rail.style.height = '100vh';
    rail.style.background = 'rgba(159, 185, 104, 0.12)';
    rail.style.zIndex = '9998';
    rail.style.pointerEvents = 'none';

    const thumb = document.createElement('div');
    thumb.id = 'scrollProgressThumb';
    thumb.style.width = '100%';
    thumb.style.height = '0%';
    thumb.style.background = 'linear-gradient(180deg, #1a4d3e 0%, #9fb968 100%)';
    thumb.style.transition = 'height 120ms linear';
    thumb.style.boxShadow = '0 0 12px rgba(26, 77, 62, 0.35)';
    rail.appendChild(thumb);

    document.body.appendChild(rail);

    const updateProgress = () => {
        const scrollTop = window.pageYOffset || pageRoot.scrollTop || 0;
        const docHeight = Math.max(
            pageRoot.scrollHeight,
            document.body.scrollHeight,
            pageRoot.offsetHeight,
            document.body.offsetHeight,
            pageRoot.clientHeight
        ) - window.innerHeight;

        const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
        thumb.style.height = `${clamp(ratio, 0, 1) * 100}%`;
    };

    updateProgress();
    window.addEventListener('scroll', throttle(updateProgress, 80), { passive: true });
    window.addEventListener('resize', throttle(updateProgress, 100));
}

function initPointerGlowCards() {
    if (isTouchDevice()) {
        return;
    }

    const glowTargets = document.querySelectorAll(
        '.menu-card, .info-card, .delivery-card, .signature-item, .blog-card'
    );

    if (glowTargets.length === 0) {
        return;
    }

    glowTargets.forEach((card) => {
        const computedPosition = window.getComputedStyle(card).position;
        if (computedPosition === 'static') {
            card.style.position = 'relative';
        }

        const glow = document.createElement('div');
        glow.setAttribute('aria-hidden', 'true');
        glow.style.position = 'absolute';
        glow.style.inset = '0';
        glow.style.borderRadius = 'inherit';
        glow.style.pointerEvents = 'none';
        glow.style.opacity = '0';
        glow.style.transition = 'opacity 220ms ease';
        glow.style.background =
            'radial-gradient(140px circle at var(--mx, 50%) var(--my, 50%), rgba(159, 185, 104, 0.17), transparent 70%)';
        card.appendChild(glow);

        card.addEventListener('mouseenter', () => {
            glow.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            glow.style.opacity = '0';
        });

        card.addEventListener('mousemove', (event) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            glow.style.setProperty('--mx', `${x}px`);
            glow.style.setProperty('--my', `${y}px`);
        });
    });
}

function initBlogCardReadTime() {
    const blogCards = document.querySelectorAll('.blog-card');
    if (blogCards.length === 0) {
        return;
    }

    blogCards.forEach((card) => {
        if (card.querySelector('.blog-read-meta')) {
            return;
        }

        const preview = card.querySelector('.blog-preview');
        if (!preview) {
            return;
        }

        const text = preview.textContent || '';
        const words = text.trim().split(/\s+/).filter(Boolean).length;
        const readMinutes = Math.max(1, Math.round(words / 160));

        const meta = document.createElement('p');
        meta.className = 'blog-read-meta';
        meta.textContent = `${readMinutes} min read`;
        meta.style.marginTop = '0.6rem';
        meta.style.fontSize = '0.82rem';
        meta.style.letterSpacing = '0.02em';
        meta.style.color = '#6b7280';
        card.appendChild(meta);
    });
}

function initKeyboardShortcutsPanel() {
    const isBlogPage = Boolean(document.querySelector('#blog-home') || document.querySelector('#blog-posts'));
    const panelSeenStorageKey = 'mysaShortcutPanelSeenV1';

    const sections = isBlogPage
        ? [
            { key: '1', label: 'Blog Top', selector: '#blog-home' },
            { key: '2', label: 'Posts', selector: '#blog-posts' },
            { key: '3', label: 'Contact', selector: '#contact' }
        ]
        : [
            { key: '1', label: 'Home', selector: '#home' },
            { key: '2', label: 'Menu', selector: '#menu' },
            { key: '3', label: 'Order', selector: '#order' },
            { key: '4', label: 'Blog', selector: '#blog' },
            { key: '5', label: 'Contact', selector: '#contact' }
        ];

    const availableSections = sections.filter((item) => document.querySelector(item.selector));
    if (availableSections.length === 0) {
        return;
    }

    const panel = document.createElement('aside');
    panel.id = 'shortcutPanel';
    panel.setAttribute('aria-label', 'Keyboard shortcuts');
    panel.style.position = 'fixed';
    panel.style.right = '16px';
    panel.style.bottom = '16px';
    panel.style.zIndex = '9999';
    panel.style.padding = '10px 12px';
    panel.style.borderRadius = '12px';
    panel.style.background = 'rgba(255, 255, 255, 0.9)';
    panel.style.border = '1px solid rgba(26, 77, 62, 0.15)';
    panel.style.backdropFilter = 'blur(8px)';
    panel.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
    panel.style.fontSize = '12px';
    panel.style.lineHeight = '1.3';
    panel.style.color = '#1f2937';
    panel.style.maxWidth = '220px';
    panel.style.transition = 'opacity 180ms ease, transform 180ms ease';

    const title = document.createElement('strong');
    title.textContent = 'Jump keys';
    title.style.display = 'block';
    title.style.marginBottom = '6px';
    panel.appendChild(title);

    const list = document.createElement('div');
    availableSections.forEach((item) => {
        const row = document.createElement('div');
        row.textContent = `${item.key}: ${item.label}`;
        row.style.opacity = '0.85';
        row.style.marginBottom = '2px';
        list.appendChild(row);
    });

    const hint = document.createElement('div');
    hint.textContent = 'Press H to hide/show';
    hint.style.marginTop = '6px';
    hint.style.opacity = '0.65';
    hint.style.fontSize = '11px';

    panel.appendChild(list);
    panel.appendChild(hint);
    document.body.appendChild(panel);

    let hasSeenPanel = false;
    try {
        hasSeenPanel = window.localStorage.getItem(panelSeenStorageKey) === '1';
    } catch (error) {
        hasSeenPanel = false;
    }

    const applyPanelVisibility = (isHidden) => {
        panel.style.opacity = isHidden ? '0' : '1';
        panel.style.transform = isHidden ? 'translateY(8px)' : 'translateY(0)';
        panel.style.pointerEvents = isHidden ? 'none' : 'auto';
    };

    // Show on first-ever visit only; afterward keep hidden unless user presses H.
    let hidden = hasSeenPanel;
    applyPanelVisibility(hidden);

    if (!hasSeenPanel) {
        try {
            window.localStorage.setItem(panelSeenStorageKey, '1');
        } catch (error) {
            // Ignore storage failures (private mode/restricted storage).
        }
    }

    document.addEventListener('keydown', (event) => {
        const targetTag = event.target && event.target.tagName ? event.target.tagName.toLowerCase() : '';
        const isTypingTarget = targetTag === 'input' || targetTag === 'textarea' || Boolean(event.target && event.target.isContentEditable);

        if (isTypingTarget) {
            return;
        }

        if (event.key.toLowerCase() === 'h') {
            hidden = !hidden;
            applyPanelVisibility(hidden);
            return;
        }

        const match = availableSections.find((item) => item.key === event.key);
        if (!match) {
            return;
        }

        const section = document.querySelector(match.selector);
        if (!section) {
            return;
        }

        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = section.offsetTop - navHeight - 14;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
}

function initStaggerRevealWithObserver() {
    const targets = document.querySelectorAll('.reveal');
    if (targets.length === 0 || !('IntersectionObserver' in window)) {
        return;
    }

    targets.forEach((el, index) => {
        el.style.transitionDelay = `${(index % 6) * 50}ms`;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px'
    });

    targets.forEach((target) => observer.observe(target));
}

function initMicroInteractions() {
    initScrollProgressRail();
    initPointerGlowCards();
    initBlogCardReadTime();
    initKeyboardShortcutsPanel();
    initStaggerRevealWithObserver();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMicroInteractions);
} else {
    initMicroInteractions();
}



