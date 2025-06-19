document.addEventListener('DOMContentLoaded', function() {
    let switchingDetails = false;
    let currentOpenDetails = null;
    let lastSummaryInfo = '';

    // Helper to show/hide info box and close button
    function showInfoBox(content, showClose) {
        document.getElementById('infoContent').innerHTML = content;
        document.getElementById('infoBox').style.display = 'block';
        document.getElementById('infoClose').style.display = showClose ? 'inline' : 'none';
        let defaultBox = document.getElementById('defaultInfoBox');
        if (defaultBox) defaultBox.style.display = 'none';
    }

    // Helper to show default info box
    function showDefaultBox() {
        document.getElementById('infoBox').style.display = 'none';
        let defaultBox = document.getElementById('defaultInfoBox');
        if (defaultBox) defaultBox.style.display = 'block';
    }

    // Only allow one <details> open at a time and show summary info
    document.querySelectorAll('summary.dButton').forEach(function(summary) {
        summary.addEventListener('click', function() {
            switchingDetails = true;

            // Close all other details
            document.querySelectorAll('details.directory').forEach(function(details) {
                if (details !== summary.parentElement) {
                    details.open = false;
                }
            });

    // Show the new summary info
            let info = '';
            switch (summary.textContent.trim()) {
                case 'Cronika':
                    info = '<span class="summaryLabel">CRONIKA:</span><br>This section covers all things related to Cronika, my game project.';
                    break;
                case 'Servers':
                    info = '<span class="summaryLabel">SERVERS:</span><br>All information pertaining to my dedicated servers can be found here.';
                    break;
                case 'Workshop':
                    info = '<span class="summaryLabel">WORKSHOP:</span><br>Explore my curated Steam Workshop Collections.';
                    break;
                case 'Toolbox':
                    info = '<span class="summaryLabel">TOOLBOX:</span><br>Quick links and tools for your workflow.';
                    break;
                case 'Contact':
                    info = '<span class="summaryLabel">CONTACT:</span><br>Get in touch with me or my team via email and/or Discord.';
                    break;
                case 'About':
                    info = '<span class="summaryLabel">ABOUT:</span><br>Learn more about Uncoolocat and this site.';
                    break;
                default:
                    info = '';
            }

        if (info) {
                lastSummaryInfo = info;
                currentOpenDetails = summary.parentElement;
                showInfoBox(info, false); // Hide close button for summary
            }

            setTimeout(() => { switchingDetails = false; }, 0);
        });
    });

    // Show dAction info and keep track of parent details
    document.querySelectorAll('.dAction').forEach(function(el) {
        el.addEventListener('click', function(event) {
            // If it's an <a> with mailto: or target="_blank", let the browser handle it
            if (
                el.tagName.toLowerCase() === 'a' &&
                (el.href.startsWith('mailto:') || el.target === '_blank')
            ) {
                // Do not prevent default, let browser handle
                return;
            }
            // Otherwise, handle as info box
            event.preventDefault();
            event.stopPropagation();

            let info = '';
        switch (el.textContent.trim()) {
            case 'The Game':
                info = 'Cronika is an Open World RPG that is set in a Dark Fantasy world, where magic is outlawed and the gods have been forgotten. The game will feature rich lore, character customization, and a dynamic world that reacts to player choices.';
                break;
            case 'The Lore':
                info = 'This is where you will find the lore of Cronika, including the history of the world, its gods, and the magic that once existed.';
                break;
            case 'The Team':
                info = 'Eventually you will find the members of the team here and a way to apply!';
                break;
            case 'The Art':
                info = '<img src="https://imgur.com/p4L9drh.png" alt="Oops!"><img src="https://i.imgur.com/XcTQ1f0.png"><br>Here you will find the art of Cronika, including concept art, character designs, and more.';
                break;
            case 'Color Palette':
                info = '<img src="Pictures/palette.png" alt="Oops!">';
                break;
            case 'World of Cabbage':
                info = `<span class="summaryLabel">World of Cabbage:</span><br><br>
                            This is my dedicated server for Project Zomboid!<br>
                            The server features custom collections curated by Uncoolocat to enhance the gameplay experience.<br>
                            You can find the collections linked in the Workshop category of the navigation menu.<br>
                            Core collections and current theme are required to play on the server.<br>
                            If you have any questions or need help, feel free to contact me on Discord/Email.<br>
                        <div class="sInfo open">
                            <button class="sInfo-toggle">Server Info</button>
                                <div class="sInfo-content">
                                    <b>IP Address:</b> 208.75.182.163<br>
                                    <b>Port:</b> 27130<br>
                                    <b>Max Players:</b> 4<br>
                                    <b>Region:</b> North America
                                </div>
                        </div>

                        <div class="sInfo">
                            <button class="sInfo-toggle">World Settings</button>
                                <div class="sSettings-content">
                                    <b>Nights:</b> Pitch Black<br>
                                    <b>XP Multiplier:</b> 3x + Passive Skills)<br>
                                    <b>Free Character Creation Points:</b> 22<br>
                                    <b>Mini-Map:</b> True<br>
                                    <b>Map:</b> True (Not Known)<br>
                                    <b>Stat Decrease:</b> Slow<br>
                                    <b>Clothing Degradation:</b> Slow<br>
                                    <b>Food Rot:</b> Slow<br>
                                    <b>Fridge Factor:</b> High<br>
                                    <b>Farming + Composting:</b> Fast<br>
                                    <b>Nature Abundance:</b> Abundant<br>
                                    <b>Cars/Houses Locks & Alarms:</b> Sometimes<br>
                                    <b>Loot Respawn:</b> 24 Hour (In-game) - if location unvisited for 24 hours (In-game)<br>
                                    <b>Car Spawn Rate:</b> Normal<br>
                                    <b>Condition:</b> Normal<br>
                                    <b>Has Gas:</b> Normal<br>
                                    <b>Initial Gas:</b> Normal<br>
                                    <b>Damage to Player/Car on Crash:</b> Low
                                </div>
                        </div>

                        <div class="sInfo">
                            <button class="sInfo-toggle">Zombie Settings</button>
                                <div class="sSettings-content">
                                    <b>Population:</b> High<br>
                                    <b>Speed:</b> Fast Shamblers<br>
                                    <b>Strength:</b> Normal<br>
                                    <b>Toughness:</b> Fragile<br>
                                    <b>Memory:</b> Short<br>
                                    <b>Sight:</b> Poor<br>
                                    <b>Hearing:</b> Normal<br>
                                    <b>Cognition:</b> Basic Navigation<br>
                                    <b>Transmission:</b> Saliva Only<br>
                                    <b>Infection Mortality:</b> 0 - 12 Hours<br>
                                    <b>Reanimate:</b> Instantly<br>
                                    <b>Crawl Under Vehicle:</b> Sometimes<br>
                                    <b>Multi-Hit:</b> True
                                </div>
                        </div>
                `;
                break;
            case 'Homebound':
                info = `This will eventually be my dedicated server for Minecraft!<br>It is currently under construction, but I'll eventually add some server information below.`;
                break;
            case 'Project Zomboid':
                info = `
                    <img class="wAvatar" src="https://projectzomboid.com/blog/content/uploads/2022/10/Spiffo_Teach_Frame_final.png">
                    <p>All collections are clickable!<br>
                    Highlighted are active on the World of Cabbage server!</p>
                    <strong>Core Collections:</strong><br>
                    <div class="coreC cRow">
                        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3488287180" class="collection" target="_blank">Uncoolocore</a>
                        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3488614891" class="collection" target="_blank">Maps & Vehicles</a>
                        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3472758969" class="collection" target="_blank">True Music</a>
                    </div>
                    <strong>Theme Collections:</strong><br>
                    <div class="themeC cRow">
                        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3487547837" class="collection" target="_blank">S.T.A.L.K.E.R.</a>
                        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3468692890" class="collection" target="_blank">Playhouse</a>
                        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2750271179" class="collection" target="_blank">We Are Legend</a>
                    </div>
                `;
                break;
            case 'Darkest Dungeon':
                info = 'Darkest Dungeon is a challenging gothic RPG...';
                break;
            case 'RimWorld':
                info = 'RimWorld is a sci-fi colony sim driven by an intelligent AI storyteller...';
                break;
            case 'Uncoolocat':
                info = 'Contact me at: dakotasemailnospaces@gmail.com';
                break;
            case 'Team':
                info = 'Contact me at: Uncoolocom@gmail.com';
                break;
            case 'Art Submissions':
                info = 'Contact me at: Uncoolocom@gmail.com';
                break;
            case 'Who is Uncoolocat':
                info = "Hey, everybody! My name is Dakota; otherwise known as Uncoolocat. I'm an ancient 30-year-old Goblin from Minnesota, but I've lived in Texas, Alaska and currently Florida. I've got my first child on the way, and I've found myself wondering what I really wanted to do with my life. Not only that, but how can I do what I want and still support a family? I haven't quite figured out that supporting a family while living my dream life, but I feel like starting to do the things that I actually want to do would be a good start. Video games are a huge passion of mine, and I've always dreamed of making my own games. I've had all kinds of ideas, but the idea of a world/campaign setting has always stuck with me the most. Instead of drawing up this world in yet another failed D&D campaign, I decided I'd give coding another go. When I started these projects, I had previously worked with HTML, CSS, and C#, but it had only ever been a little and most of it as a youngster.";
                break;
            case 'What is Uncoolocom':
                info = 'Uncoolocom is a hub for all things related to Uncoolocat. It includes my projects, workshop collections, and contact information. The goal is to create a space where I can share my journey, projects, and everything else with others who share similar interests.';
                break;
            default:
                info = 'More information coming soon!';
        }
            showInfoBox(info, true); // Show close button for dAction
            currentOpenDetails = el.closest('details.directory');
        });
    });

    // Info box close button handler
    var infoClose = document.getElementById('infoClose');
    if (infoClose) {
        infoClose.onclick = function() {
            // If a details is open, restore summary info
            if (currentOpenDetails && currentOpenDetails.open && lastSummaryInfo) {
                showInfoBox(lastSummaryInfo, false); // Hide close button for summary
            } else {
                showDefaultBox();
            }
        };
    }

    // When a details is closed, show the default info box (unless switching)
    document.querySelectorAll('details.directory').forEach(function(details) {
        details.addEventListener('toggle', function() {
            if (!details.open) {
                if (switchingDetails) return;
                showDefaultBox();
                if (currentOpenDetails === details) {
                    currentOpenDetails = null;
                    lastSummaryInfo = '';
                }
            }
        });
    });

    // Event delegation for sInfo-toggle button
    document.getElementById('infoContent').addEventListener('click', function(event) {
        if (event.target.classList.contains('sInfo-toggle')) {
            const sInfoDiv = event.target.closest('.sInfo');
            sInfoDiv.classList.toggle('open');
        }
    });
});