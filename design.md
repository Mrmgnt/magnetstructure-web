<!-- Design System -->
<!DOCTYPE html>

<html class="light" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Magnetstructure - Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Geist:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary-fixed": "#002109",
                        "on-secondary": "#ffffff",
                        "on-error": "#ffffff",
                        "on-background": "#131b2e",
                        "tertiary-fixed": "#ffdcc3",
                        "secondary-container": "#7cf994",
                        "surface": "#faf8ff",
                        "on-surface-variant": "#434655",
                        "surface-variant": "#dae2fd",
                        "on-tertiary-fixed": "#2f1500",
                        "tertiary-fixed-dim": "#ffb77d",
                        "on-secondary-container": "#007230",
                        "surface-bright": "#faf8ff",
                        "secondary-fixed": "#7ffc97",
                        "surface-tint": "#0053db",
                        "on-tertiary": "#ffffff",
                        "inverse-primary": "#b4c5ff",
                        "surface-container-low": "#f2f3ff",
                        "on-primary": "#ffffff",
                        "surface-container": "#eaedff",
                        "background": "#faf8ff",
                        "error": "#ba1a1a",
                        "inverse-surface": "#283044",
                        "on-tertiary-fixed-variant": "#6e3900",
                        "on-primary-container": "#eeefff",
                        "on-primary-fixed-variant": "#003ea8",
                        "on-tertiary-container": "#ffede1",
                        "secondary": "#006e2d",
                        "primary-fixed": "#dbe1ff",
                        "primary-container": "#2563eb",
                        "inverse-on-surface": "#eef0ff",
                        "tertiary-container": "#a65900",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed-variant": "#005320",
                        "primary": "#004ac6",
                        "tertiary": "#824500",
                        "surface-container-high": "#e2e7ff",
                        "on-primary-fixed": "#00174b",
                        "surface-dim": "#d2d9f4",
                        "surface-container-highest": "#dae2fd",
                        "on-surface": "#131b2e",
                        "secondary-fixed-dim": "#62df7d",
                        "error-container": "#ffdad6",
                        "on-error-container": "#93000a",
                        "primary-fixed-dim": "#b4c5ff",
                        "outline": "#737686",
                        "outline-variant": "#c3c6d7"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "sm": "8px",
                        "container-max": "1440px",
                        "sidebar-width": "260px",
                        "md": "16px",
                        "lg": "24px",
                        "xl": "32px",
                        "unit": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Inter"],
                        "body-lg": ["Inter"],
                        "code": ["Geist"],
                        "label-md": ["Geist"],
                        "headline-md": ["Inter"],
                        "display": ["Inter"],
                        "body-md": ["Inter"]
                    },
                    "fontSize": {
                        "headline-lg": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "code": ["13px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "label-md": ["13px", {"lineHeight": "18px", "fontWeight": "500"}],
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "display": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}]
                    }
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #faf8ff;
            color: #131b2e;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .sidebar-active {
            border-left: 2px solid #004ac6;
            background-color: #f2f3ff;
            color: #004ac6;
            font-weight: 700;
        }
        .status-pill {
            padding: 2px 10px;
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 600;
        }
        .scroll-hide::-webkit-scrollbar { display: none; }
    </style>
</head>
<body class="bg-surface text-on-surface">
<!-- Top Navigation Bar -->
<header class="fixed top-0 z-40 w-full bg-surface border-b border-outline-variant">
<div class="flex justify-between items-center w-full px-lg h-16 max-w-container-max mx-auto">
<div class="flex items-center gap-md">
<span class="text-headline-md font-headline-md font-bold text-primary">Magnetstructure</span>
</div>
<nav class="hidden md:flex items-center gap-xl">
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="#">Dashboard</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Planning Baru</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Template</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Dokumentasi</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">GitHub</a>
</nav>
<div class="flex items-center gap-md">
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span class="material-symbols-outlined">help</span>
</button>
<div class="h-8 w-8 rounded-full bg-primary-fixed overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a software engineer in a bright, modern studio. The subject wears a minimalist dark shirt, and the background is a clean, corporate slate-50 color. High-key lighting emphasizes a sharp, technical look, consistent with a modern developer environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3zjiUVJBdeWRLJ1IuaeIYDzFazfHX1u0pen6aMQy11xVX-cL0iHJj1dgi9qwxcejjPJkNS1GSjQ1h-kASqPs84pQuA16OmwyZqke0GlbNeNNG91JhDTS-KBI5SzsuHUzsmPkB8oxOp-tVl7UvFNs53IOSXrgCdgHuEn5uCdj0idIxb2yu9o4OG5yxYgeiZ6K0Et9wOEEVeIOMX9yMkNm5CFvuCf_HZW4xEH7kv2HK74XzdevqZ6amjWe6Q1z2PkFm8nq4UR46mGU"/>
</div>
</div>
</div>
</header>
<div class="flex pt-16 min-h-screen">
<!-- Sidebar Navigation -->
<aside class="hidden md:flex flex-col py-lg w-[260px] h-[calc(100vh-64px)] fixed left-0 border-r border-outline-variant bg-surface overflow-y-auto scroll-hide">
<div class="px-md mb-lg">
<div class="flex items-center gap-sm mb-1">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">account_tree</span>
<h2 class="text-headline-sm font-headline-sm font-bold text-on-surface">Project Planning</h2>
</div>
<p class="text-label-md font-label-md text-on-surface-variant ml-8">Workflow Stepper</p>
</div>
<div class="flex flex-col">
<a class="flex items-center gap-md text-on-surface-variant hover:bg-surface-container transition-all pl-4 py-3 font-label-md text-label-md" href="#">
<span class="material-symbols-outlined" data-icon="upload_file">upload_file</span>
                    Referensi
                </a>
<a class="flex items-center gap-md text-on-surface-variant hover:bg-surface-container transition-all pl-4 py-3 font-label-md text-label-md" href="#">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
                    Discovery
                </a>
<a class="flex items-center gap-md text-on-surface-variant hover:bg-surface-container transition-all pl-4 py-3 font-label-md text-label-md" href="#">
<span class="material-symbols-outlined" data-icon="quiz">quiz</span>
                    Pertanyaan
                </a>
<a class="flex items-center gap-md text-on-surface-variant hover:bg-surface-container transition-all pl-4 py-3 font-label-md text-label-md" href="#">
<span class="material-symbols-outlined" data-icon="account_tree">account_tree</span>
                    Struktur
                </a>
<a class="flex items-center gap-md text-on-surface-variant hover:bg-surface-container transition-all pl-4 py-3 font-label-md text-label-md" href="#">
<span class="material-symbols-outlined" data-icon="visibility">visibility</span>
                    Preview
                </a>
<a class="flex items-center gap-md text-on-surface-variant hover:bg-surface-container transition-all pl-4 py-3 font-label-md text-label-md" href="#">
<span class="material-symbols-outlined" data-icon="download">download</span>
                    Generate
                </a>
</div>
<div class="mt-auto px-md pt-lg">
<div class="p-md bg-primary-container text-on-primary-container rounded-xl">
<p class="font-bold text-label-md mb-xs">Upgrade Plan</p>
<p class="text-xs opacity-90 mb-md">Dapatkan akses ke template premium dan ekspor unlimited.</p>
<button class="w-full bg-white text-primary px-sm py-xs rounded-lg font-bold text-xs hover:bg-opacity-90 transition-all">Lihat Detail</button>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 md:ml-[260px] p-lg bg-surface">
<div class="max-w-6xl mx-auto">
<!-- Welcome Header -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-lg mb-xl">
<div>
<h1 class="text-display font-display text-on-surface mb-xs">Selamat Datang, User</h1>
<p class="text-body-lg font-body-lg text-on-surface-variant">Kelola arsitektur project dan otomatisasi workflow Anda di sini.</p>
</div>
<button class="flex items-center gap-sm bg-primary text-on-primary px-lg py-3 rounded-xl font-bold shadow-sm hover:opacity-90 transition-all transform active:scale-95">
<span class="material-symbols-outlined">add_circle</span>
                        Planning Baru
                    </button>
</div>
<!-- Bento Grid Summary Cards -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
<!-- Total Project -->
<div class="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex flex-col gap-sm">
<div class="flex justify-between items-start">
<span class="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Total Project</span>
<span class="material-symbols-outlined text-primary">folder</span>
</div>
<div class="flex items-baseline gap-xs">
<span class="text-display font-display text-on-surface">12</span>
<span class="text-xs text-secondary font-semibold">+2 bulan ini</span>
</div>
</div>
<!-- Draft -->
<div class="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex flex-col gap-sm">
<div class="flex justify-between items-start">
<span class="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Draft</span>
<span class="material-symbols-outlined text-tertiary">edit_note</span>
</div>
<div class="flex items-baseline gap-xs">
<span class="text-display font-display text-on-surface">4</span>
<span class="text-xs text-on-surface-variant">Perlu review</span>
</div>
</div>
<!-- Siap Generate -->
<div class="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex flex-col gap-sm">
<div class="flex justify-between items-start">
<span class="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Siap Generate</span>
<span class="material-symbols-outlined text-secondary">verified</span>
</div>
<div class="flex items-baseline gap-xs">
<span class="text-display font-display text-on-surface">3</span>
<span class="text-xs text-secondary">Finalisasi OK</span>
</div>
</div>
<!-- ZIP Terakhir -->
<div class="bg-primary-container text-on-primary-container p-lg rounded-xl flex flex-col gap-sm relative overflow-hidden group">
<div class="flex justify-between items-start relative z-10">
<span class="text-label-md font-label-md opacity-80 uppercase tracking-wider">ZIP Terakhir</span>
<span class="material-symbols-outlined">waves</span>
</div>
<div class="relative z-10">
<p class="font-bold text-body-md truncate">arch_v2.0.zip</p>
<p class="text-xs opacity-70">2 Jam yang lalu</p>
</div>
<button class="mt-xs bg-white/20 hover:bg-white/30 text-white rounded-lg py-1 px-2 text-xs font-bold transition-all relative z-10 w-fit">Download Ulang</button>
<!-- Decorative background element -->
<div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>
</div>
</div>
<!-- Planning History Section -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
<!-- Table Header Actions -->
<div class="p-lg flex flex-col md:flex-row gap-md justify-between items-center border-b border-outline-variant">
<h3 class="text-headline-md font-headline-md text-on-surface">Riwayat Perencanaan</h3>
<div class="flex gap-sm w-full md:w-auto">
<div class="relative flex-1 md:w-64">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
<input class="w-full pl-10 pr-4 py-2 bg-surface-container border-none rounded-lg text-body-md focus:ring-2 focus:ring-primary" placeholder="Cari project..." type="text"/>
</div>
<button class="flex items-center gap-xs px-md py-2 border border-outline-variant rounded-lg font-bold text-label-md hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-sm">filter_list</span>
                                Filter
                            </button>
</div>
</div>
<!-- Table -->
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container-low border-b border-outline-variant">
<th class="px-lg py-4 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Project Name</th>
<th class="px-lg py-4 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Created Date</th>
<th class="px-lg py-4 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Reference</th>
<th class="px-lg py-4 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Module/Menu</th>
<th class="px-lg py-4 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
<th class="px-lg py-4 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-lowest/50 transition-colors">
<td class="px-lg py-4">
<div class="flex flex-col">
<span class="font-bold text-body-md">E-Commerce Platform Redesign</span>
<span class="text-xs text-on-surface-variant">v1.4.2</span>
</div>
</td>
<td class="px-lg py-4 text-body-md">12 Okt 2023</td>
<td class="px-lg py-4">
<div class="flex -space-x-2">
<div class="w-6 h-6 rounded bg-blue-100 border border-white flex items-center justify-center"><span class="text-[10px] font-bold text-blue-600">PDF</span></div>
<div class="w-6 h-6 rounded bg-amber-100 border border-white flex items-center justify-center"><span class="text-[10px] font-bold text-amber-600">DOC</span></div>
<div class="w-6 h-6 rounded bg-slate-200 border border-white flex items-center justify-center text-[10px] font-bold">+1</div>
</div>
</td>
<td class="px-lg py-4 text-body-md">12 Modul / 45 Menu</td>
<td class="px-lg py-4">
<span class="status-pill bg-secondary/10 text-secondary">Siap Generate</span>
</td>
<td class="px-lg py-4 text-right">
<div class="flex justify-end gap-sm">
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined text-md">visibility</span></button>
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined text-md">download</span></button>
<button class="p-2 text-on-surface-variant hover:text-error transition-colors"><span class="material-symbols-outlined text-md">delete</span></button>
</div>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-lowest/50 transition-colors">
<td class="px-lg py-4">
<div class="flex flex-col">
<span class="font-bold text-body-md">Internal CRM Tool</span>
<span class="text-xs text-on-surface-variant">v0.1.0</span>
</div>
</td>
<td class="px-lg py-4 text-body-md">15 Okt 2023</td>
<td class="px-lg py-4">
<div class="flex">
<div class="w-6 h-6 rounded bg-blue-100 border border-white flex items-center justify-center"><span class="text-[10px] font-bold text-blue-600">PDF</span></div>
</div>
</td>
<td class="px-lg py-4 text-body-md">4 Modul / 12 Menu</td>
<td class="px-lg py-4">
<span class="status-pill bg-tertiary/10 text-tertiary">Draft</span>
</td>
<td class="px-lg py-4 text-right">
<div class="flex justify-end gap-sm">
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined text-md">edit</span></button>
<button class="p-2 text-on-surface-variant hover:text-error transition-colors"><span class="material-symbols-outlined text-md">delete</span></button>
</div>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-lowest/50 transition-colors">
<td class="px-lg py-4">
<div class="flex flex-col">
<span class="font-bold text-body-md">Warehouse Management System</span>
<span class="text-xs text-on-surface-variant">v2.0.0</span>
</div>
</td>
<td class="px-lg py-4 text-body-md">18 Okt 2023</td>
<td class="px-lg py-4">
<div class="flex -space-x-2">
<div class="w-6 h-6 rounded bg-emerald-100 border border-white flex items-center justify-center"><span class="text-[10px] font-bold text-emerald-600">XLS</span></div>
<div class="w-6 h-6 rounded bg-amber-100 border border-white flex items-center justify-center"><span class="text-[10px] font-bold text-amber-600">DOC</span></div>
</div>
</td>
<td class="px-lg py-4 text-body-md">24 Modul / 110 Menu</td>
<td class="px-lg py-4">
<span class="status-pill bg-primary/10 text-primary">Selesai</span>
</td>
<td class="px-lg py-4 text-right">
<div class="flex justify-end gap-sm">
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined text-md">visibility</span></button>
<button class="p-2 text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined text-md">download</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<div class="p-lg border-t border-outline-variant flex items-center justify-between">
<span class="text-body-md text-on-surface-variant">Menampilkan 1-3 dari 12 project</span>
<div class="flex gap-sm">
<button class="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-colors disabled:opacity-30" disabled="">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold">1</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-colors">2</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-colors">3</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>
<!-- Mobile Navigation Bar -->
<nav class="md:hidden fixed bottom-0 w-full bg-surface border-t border-outline-variant flex justify-around py-sm z-50">
<a class="flex flex-col items-center gap-1 text-primary" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">dashboard</span>
<span class="text-[10px] font-bold">Dashboard</span>
</a>
<a class="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
<span class="material-symbols-outlined">add_box</span>
<span class="text-[10px]">Planning</span>
</a>
<a class="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
<span class="material-symbols-outlined">library_books</span>
<span class="text-[10px]">Template</span>
</a>
<a class="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-[10px]">Settings</span>
</a>
</nav>
<script>
        // Simple micro-interaction for sidebar links
        document.querySelectorAll('aside a').forEach(link => {
            link.addEventListener('click', (e) => {
                document.querySelectorAll('aside a').forEach(l => l.classList.remove('sidebar-active'));
                e.currentTarget.classList.add('sidebar-active');
            });
        });

        // Search bar focus effect
        const searchInput = document.querySelector('input[type="text"]');
        if(searchInput) {
            searchInput.addEventListener('focus', () => {
                searchInput.parentElement.classList.add('ring-2', 'ring-primary/20');
            });
            searchInput.addEventListener('blur', () => {
                searchInput.parentElement.classList.remove('ring-2', 'ring-primary/20');
            });
        }
    </script>
</body></html>

<!-- Dashboard & History -->
<!DOCTYPE html>

<html class="light" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Magnetstructure - Planning Wizard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Geist:wght@400;500&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .drag-active {
            border-color: #0053db;
            background-color: #f2f3ff;
        }
        /* Custom scrollbar for high-density feel */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #faf8ff;
        }
        ::-webkit-scrollbar-thumb {
            background: #c3c6d7;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #737686;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary-fixed": "#002109",
                        "on-secondary": "#ffffff",
                        "on-error": "#ffffff",
                        "on-background": "#131b2e",
                        "tertiary-fixed": "#ffdcc3",
                        "secondary-container": "#7cf994",
                        "surface": "#faf8ff",
                        "on-surface-variant": "#434655",
                        "surface-variant": "#dae2fd",
                        "on-tertiary-fixed": "#2f1500",
                        "tertiary-fixed-dim": "#ffb77d",
                        "on-secondary-container": "#007230",
                        "surface-bright": "#faf8ff",
                        "secondary-fixed": "#7ffc97",
                        "surface-tint": "#0053db",
                        "on-tertiary": "#ffffff",
                        "inverse-primary": "#b4c5ff",
                        "surface-container-low": "#f2f3ff",
                        "on-primary": "#ffffff",
                        "surface-container": "#eaedff",
                        "background": "#faf8ff",
                        "error": "#ba1a1a",
                        "inverse-surface": "#283044",
                        "on-tertiary-fixed-variant": "#6e3900",
                        "on-primary-container": "#eeefff",
                        "on-primary-fixed-variant": "#003ea8",
                        "on-tertiary-container": "#ffede1",
                        "secondary": "#006e2d",
                        "primary-fixed": "#dbe1ff",
                        "primary-container": "#2563eb",
                        "inverse-on-surface": "#eef0ff",
                        "tertiary-container": "#a65900",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed-variant": "#005320",
                        "primary": "#004ac6",
                        "tertiary": "#824500",
                        "surface-container-high": "#e2e7ff",
                        "on-primary-fixed": "#00174b",
                        "surface-dim": "#d2d9f4",
                        "surface-container-highest": "#dae2fd",
                        "on-surface": "#131b2e",
                        "secondary-fixed-dim": "#62df7d",
                        "error-container": "#ffdad6",
                        "on-error-container": "#93000a",
                        "primary-fixed-dim": "#b4c5ff",
                        "outline": "#737686",
                        "outline-variant": "#c3c6d7"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "sm": "8px",
                        "container-max": "1440px",
                        "sidebar-width": "260px",
                        "md": "16px",
                        "lg": "24px",
                        "xl": "32px",
                        "unit": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Inter"],
                        "body-lg": ["Inter"],
                        "code": ["Geist"],
                        "label-md": ["Geist"],
                        "headline-md": ["Inter"],
                        "display": ["Inter"],
                        "body-md": ["Inter"]
                    },
                    "fontSize": {
                        "headline-lg": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "code": ["13px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "label-md": ["13px", {"lineHeight": "18px", "fontWeight": "500"}],
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "display": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}]
                    }
                },
            },
        }
    </script>
</head>
<body class="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
<!-- TopNavBar Shell -->
<header class="fixed top-0 z-50 w-full bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline">
<div class="flex justify-between items-center w-full px-lg h-16 max-w-container-max mx-auto">
<div class="flex items-center gap-md">
<span class="material-symbols-outlined text-primary text-headline-md" data-icon="architecture">architecture</span>
<h1 class="text-headline-md font-headline-md font-bold text-primary dark:text-inverse-primary">Magnetstructure</h1>
</div>
<nav class="hidden md:flex gap-lg items-center">
<a class="text-on-surface-variant dark:text-surface-variant font-body-md hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="text-primary dark:text-inverse-primary font-bold border-b-2 border-primary dark:border-inverse-primary pb-1 font-body-md" href="#">Planning Baru</a>
<a class="text-on-surface-variant dark:text-surface-variant font-body-md hover:text-primary transition-colors" href="#">Template</a>
<a class="text-on-surface-variant dark:text-surface-variant font-body-md hover:text-primary transition-colors" href="#">Dokumentasi</a>
<a class="text-on-surface-variant dark:text-surface-variant font-body-md hover:text-primary transition-colors" href="#">GitHub</a>
</nav>
<div class="flex items-center gap-md">
<button class="p-2 rounded-full hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
</button>
<button class="p-2 rounded-full hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="help">help</span>
</button>
<div class="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a software architect in a minimalist workspace, wearing clean business casual attire. The background is a brightly lit, high-end corporate office with soft glass partitions and a neutral grey and white color palette, reflecting a modern light-mode engineering aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuBzR4sLe8GZKZjq8b175RC1rZInyUVhnnrqUtlimlRA3rmxu628goZQC9XImT_vOlMQdNtQ3UAQqwReC11wOtkKJIZ4eRl0jDLerVnjJ_kx94bkpO9jrWoJdne-ZKscW9rFUrm6trBA5P47rKhqeMwrXjbFVH7-ZNOSLYjcxdUmlv2aGmPjuLh1jzAm7qctSpeXRswuG4xZn7PY0syleyfC3pOYdwzQvnXgdONC7bY38CGG3b8e7Yul4CcTKyTDd9vH0u4o2rpRE"/>
</div>
</div>
</div>
</header>
<div class="pt-16 flex min-h-screen">
<!-- SideNavBar / WorkflowStepper Shell -->
<aside class="fixed left-0 top-16 h-full w-[260px] bg-surface dark:bg-inverse-surface border-r border-outline-variant dark:border-outline flex flex-col py-lg overflow-y-auto">
<div class="px-md mb-lg">
<div class="flex items-center gap-sm p-sm rounded-lg bg-surface-container-low border border-outline-variant">
<div class="w-10 h-10 rounded bg-primary flex items-center justify-center">
<span class="material-symbols-outlined text-white" data-icon="edit_note">edit_note</span>
</div>
<div>
<p class="text-label-md font-bold text-on-surface leading-tight">Project Planning</p>
<p class="text-[11px] text-on-surface-variant">Workflow Stepper</p>
</div>
</div>
</div>
<nav class="flex flex-col">
<!-- Step 1: Active -->
<div class="flex items-center gap-md text-primary dark:text-inverse-primary font-bold border-l-2 border-primary dark:border-inverse-primary pl-4 py-3 bg-surface-container-low dark:bg-surface-container-highest transition-all">
<span class="material-symbols-outlined" data-icon="upload_file">upload_file</span>
<span class="font-label-md text-label-md">Referensi</span>
</div>
<!-- Step 2 -->
<div class="flex items-center gap-md text-on-surface-variant dark:text-surface-variant pl-4 py-3 hover:bg-surface-container transition-all cursor-not-allowed opacity-60">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
<span class="font-label-md text-label-md">Discovery</span>
</div>
<!-- Step 3 -->
<div class="flex items-center gap-md text-on-surface-variant dark:text-surface-variant pl-4 py-3 hover:bg-surface-container transition-all cursor-not-allowed opacity-60">
<span class="material-symbols-outlined" data-icon="quiz">quiz</span>
<span class="font-label-md text-label-md">Pertanyaan</span>
</div>
<!-- Step 4 -->
<div class="flex items-center gap-md text-on-surface-variant dark:text-surface-variant pl-4 py-3 hover:bg-surface-container transition-all cursor-not-allowed opacity-60">
<span class="material-symbols-outlined" data-icon="account_tree">account_tree</span>
<span class="font-label-md text-label-md">Struktur</span>
</div>
<!-- Step 5 -->
<div class="flex items-center gap-md text-on-surface-variant dark:text-surface-variant pl-4 py-3 hover:bg-surface-container transition-all cursor-not-allowed opacity-60">
<span class="material-symbols-outlined" data-icon="visibility">visibility</span>
<span class="font-label-md text-label-md">Preview</span>
</div>
<!-- Step 6 -->
<div class="flex items-center gap-md text-on-surface-variant dark:text-surface-variant pl-4 py-3 hover:bg-surface-container transition-all cursor-not-allowed opacity-60">
<span class="material-symbols-outlined" data-icon="download">download</span>
<span class="font-label-md text-label-md">Generate</span>
</div>
</nav>
<div class="mt-auto px-md py-lg border-t border-outline-variant">
<div class="p-sm bg-surface-container-highest rounded-lg">
<div class="flex justify-between items-center mb-xs">
<span class="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Penyimpanan</span>
<span class="text-[11px] text-primary font-bold">75%</span>
</div>
<div class="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
<div class="bg-primary h-full w-[75%]"></div>
</div>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 ml-[260px] p-xl bg-background">
<div class="max-w-4xl mx-auto">
<!-- Page Header -->
<header class="mb-xl">
<div class="flex items-center gap-sm text-on-surface-variant mb-xs">
<span class="text-label-md font-label-md">Planning Wizard</span>
<span class="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
<span class="text-label-md font-label-md text-primary">Langkah 1: Referensi</span>
</div>
<h2 class="font-headline-lg text-headline-lg text-on-surface">Unggah Referensi Proyek</h2>
<p class="text-body-md text-on-surface-variant mt-xs">Berikan konteks teknis atau dokumen PRD untuk memulai analisis struktur aplikasi.</p>
</header>
<div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
<!-- Left Column: Form & Upload -->
<div class="md:col-span-2 space-y-lg">
<!-- Project Identity Card -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
<label class="block text-label-md font-bold text-on-surface mb-sm" for="project_name">Nama Proyek</label>
<div class="relative">
<input class="w-full pl-xl pr-md py-sm bg-surface rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md text-on-surface" id="project_name" placeholder="Contoh: E-Commerce Architecture v2" type="text"/>
<span class="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="folder">folder</span>
</div>
</div>
<!-- Dropzone Area -->
<div class="relative group cursor-pointer bg-surface-container-lowest border-2 border-dashed border-outline-variant rounded-xl p-xl flex flex-col items-center justify-center text-center transition-all hover:border-primary hover:bg-surface-container-low min-h-[280px]" id="dropzone">
<div class="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-[32px]" data-icon="cloud_upload">cloud_upload</span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-xs">Seret & Lepas Berkas</h3>
<p class="text-body-md text-on-surface-variant max-w-sm mb-lg">Mendukung PRD, dokumentasi teknis, atau skema database dalam format .md, .pdf, atau .txt</p>
<div class="flex flex-wrap justify-center gap-sm">
<button class="flex items-center gap-xs px-md py-sm bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm">
<span class="material-symbols-outlined text-[18px]" data-icon="upload">upload</span>
                                    Upload File
                                </button>
<button class="flex items-center gap-xs px-md py-sm bg-surface-container-high text-on-surface border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-all">
<span class="material-symbols-outlined text-[18px]" data-icon="create_new_folder">create_new_folder</span>
                                    Pilih Folder
                                </button>
<button class="flex items-center gap-xs px-md py-sm bg-surface-container-high text-on-surface border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-all">
<span class="material-symbols-outlined text-[18px]" data-icon="content_paste">content_paste</span>
                                    Tempel Konteks
                                </button>
</div>
</div>
<!-- File List Section -->
<div class="space-y-sm">
<div class="flex justify-between items-center px-xs">
<h4 class="text-label-md font-bold text-on-surface uppercase tracking-tight">Daftar Berkas (3)</h4>
<button class="text-error text-label-md font-bold hover:underline">Hapus Semua</button>
</div>
<!-- File Card 1 -->
<div class="group flex items-center gap-md p-md bg-surface-container-lowest border border-outline-variant rounded-lg hover:bg-surface-container-low transition-all">
<div class="w-10 h-10 rounded bg-tertiary-fixed flex items-center justify-center">
<span class="material-symbols-outlined text-tertiary" data-icon="description">description</span>
</div>
<div class="flex-1 min-w-0">
<p class="font-bold text-on-surface truncate">PRD_Magnetstructure_V1.md</p>
<div class="flex items-center gap-sm text-[12px] text-on-surface-variant">
<span>Markdown</span>
<span class="w-1 h-1 rounded-full bg-outline-variant"></span>
<span>24.5 KB</span>
</div>
</div>
<div class="flex items-center gap-lg">
<div class="flex items-center gap-xs px-sm py-1 rounded-full bg-secondary-container/20 border border-secondary/20">
<span class="material-symbols-outlined text-secondary text-[14px]" data-icon="check_circle" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="text-[11px] font-bold text-secondary uppercase">Selesai</span>
</div>
<button class="p-1 rounded hover:bg-error-container hover:text-error transition-colors">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="close">close</span>
</button>
</div>
</div>
<!-- File Card 2 (Processing) -->
<div class="group flex items-center gap-md p-md bg-surface-container-lowest border border-outline-variant rounded-lg hover:bg-surface-container-low transition-all">
<div class="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center">
<span class="material-symbols-outlined text-primary" data-icon="picture_as_pdf">picture_as_pdf</span>
</div>
<div class="flex-1 min-w-0">
<p class="font-bold text-on-surface truncate">Skema_Database_Final.pdf</p>
<div class="flex items-center gap-sm text-[12px] text-on-surface-variant">
<span>PDF</span>
<span class="w-1 h-1 rounded-full bg-outline-variant"></span>
<span>2.1 MB</span>
</div>
</div>
<div class="flex items-center gap-lg">
<div class="flex items-center gap-xs px-sm py-1 rounded-full bg-surface-container-highest border border-outline-variant">
<div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span class="text-[11px] font-bold text-on-surface-variant uppercase">Menganalisis...</span>
</div>
<button class="p-1 rounded hover:bg-error-container hover:text-error transition-colors">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="close">close</span>
</button>
</div>
</div>
<!-- File Card 3 -->
<div class="group flex items-center gap-md p-md bg-surface-container-lowest border border-outline-variant rounded-lg hover:bg-surface-container-low transition-all">
<div class="w-10 h-10 rounded bg-tertiary-fixed flex items-center justify-center">
<span class="material-symbols-outlined text-tertiary" data-icon="text_snippet">text_snippet</span>
</div>
<div class="flex-1 min-w-0">
<p class="font-bold text-on-surface truncate">Catatan_Rapat_Teknis.txt</p>
<div class="flex items-center gap-sm text-[12px] text-on-surface-variant">
<span>Text</span>
<span class="w-1 h-1 rounded-full bg-outline-variant"></span>
<span>12.0 KB</span>
</div>
</div>
<div class="flex items-center gap-lg">
<div class="flex items-center gap-xs px-sm py-1 rounded-full bg-secondary-container/20 border border-secondary/20">
<span class="material-symbols-outlined text-secondary text-[14px]" data-icon="check_circle" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="text-[11px] font-bold text-secondary uppercase">Selesai</span>
</div>
<button class="p-1 rounded hover:bg-error-container hover:text-error transition-colors">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="close">close</span>
</button>
</div>
</div>
</div>
</div>
<!-- Right Column: Settings & Summary -->
<div class="space-y-lg">
<!-- Output Settings -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
<h4 class="text-label-md font-bold text-on-surface mb-md">Format Output</h4>
<div class="space-y-sm">
<label class="flex items-center gap-sm p-sm rounded-lg border-2 border-primary bg-surface-container-low cursor-pointer transition-all">
<input checked="" class="text-primary focus:ring-primary w-4 h-4" name="output_type" type="radio"/>
<div class="flex-1">
<p class="font-bold text-on-surface leading-none">ZIP Archive</p>
<p class="text-[11px] text-on-surface-variant">Terkompresi, siap unduh</p>
</div>
<span class="material-symbols-outlined text-primary" data-icon="inventory_2">inventory_2</span>
</label>
<label class="flex items-center gap-sm p-sm rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer transition-all">
<input class="text-primary focus:ring-primary w-4 h-4" name="output_type" type="radio"/>
<div class="flex-1">
<p class="font-bold text-on-surface leading-none">Folder Langsung</p>
<p class="text-[11px] text-on-surface-variant">Struktur direktori lokal</p>
</div>
<span class="material-symbols-outlined text-on-surface-variant" data-icon="folder_open">folder_open</span>
</label>
<label class="flex items-center gap-sm p-sm rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer transition-all">
<input class="text-primary focus:ring-primary w-4 h-4" name="output_type" type="radio"/>
<div class="flex-1">
<p class="font-bold text-on-surface leading-none">ZIP + Folder</p>
<p class="text-[11px] text-on-surface-variant">Salinan ganda (Aman)</p>
</div>
<span class="material-symbols-outlined text-on-surface-variant" data-icon="library_add">library_add</span>
</label>
</div>
</div>
<!-- Summary / Info Card -->
<div class="bg-inverse-surface text-inverse-on-surface rounded-xl p-lg shadow-xl relative overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
<h4 class="text-label-md font-bold text-inverse-primary uppercase tracking-wider mb-md">Status Analisis</h4>
<ul class="space-y-sm mb-lg">
<li class="flex items-center gap-xs">
<span class="material-symbols-outlined text-secondary text-[18px]" data-icon="done_all">done_all</span>
<span class="text-body-md">Konteks teknis terdeteksi</span>
</li>
<li class="flex items-center gap-xs">
<span class="material-symbols-outlined text-secondary text-[18px]" data-icon="done_all">done_all</span>
<span class="text-body-md">Meta-data berkas valid</span>
</li>
<li class="flex items-center gap-xs opacity-50">
<span class="material-symbols-outlined text-[18px]" data-icon="pending">pending</span>
<span class="text-body-md">Menunggu restrukturisasi</span>
</li>
</ul>
<button class="w-full py-md bg-primary text-on-primary rounded-lg font-headline-md text-headline-md font-bold hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-sm shadow-lg shadow-primary/20" id="mainAction">
                                Analisis Referensi
                                <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<!-- Pro Tip -->
<div class="p-md bg-surface-container-highest border border-outline-variant rounded-xl flex gap-sm">
<span class="material-symbols-outlined text-primary" data-icon="lightbulb">lightbulb</span>
<p class="text-[12px] leading-relaxed text-on-surface-variant">
<strong>Tips:</strong> Semakin detail PRD yang Anda berikan, semakin akurat struktur file dan dependensi yang dihasilkan oleh Magnetstructure.
                            </p>
</div>
</div>
</div>
</div>
</main>
</div>
<script>
        // Simple Interaction logic
        const dropzone = document.getElementById('dropzone');
        const mainAction = document.getElementById('mainAction');

        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('drag-active');
        });

        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('drag-active');
        });

        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('drag-active');
            // Mock file add
            alert('File berhasil ditambahkan ke antrian!');
        });

        mainAction.addEventListener('click', () => {
            mainAction.innerHTML = `
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Memproses...
            `;
            setTimeout(() => {
                window.location.reload(); // Reset just for demo
            }, 2000);
        });
    </script>
</body></html>

<!-- New Planning - Upload -->
<!DOCTYPE html>

<html class="light" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Magnetstructure - Planning project lengkap sebelum mulai coding</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Geist:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-secondary-fixed": "#002109",
                    "on-secondary": "#ffffff",
                    "on-error": "#ffffff",
                    "on-background": "#131b2e",
                    "tertiary-fixed": "#ffdcc3",
                    "secondary-container": "#7cf994",
                    "surface": "#faf8ff",
                    "on-surface-variant": "#434655",
                    "surface-variant": "#dae2fd",
                    "on-tertiary-fixed": "#2f1500",
                    "tertiary-fixed-dim": "#ffb77d",
                    "on-secondary-container": "#007230",
                    "surface-bright": "#faf8ff",
                    "secondary-fixed": "#7ffc97",
                    "surface-tint": "#0053db",
                    "on-primary": "#ffffff",
                    "surface-container-low": "#f2f3ff",
                    "on-primary-container": "#eeefff",
                    "background": "#faf8ff",
                    "error": "#ba1a1a",
                    "inverse-surface": "#283044",
                    "on-tertiary-fixed-variant": "#6e3900",
                    "on-primary-fixed-variant": "#003ea8",
                    "on-tertiary-container": "#ffede1",
                    "secondary": "#006e2d",
                    "primary-fixed": "#dbe1ff",
                    "primary-container": "#2563eb",
                    "inverse-on-surface": "#eef0ff",
                    "tertiary-container": "#a65900",
                    "surface-container-lowest": "#ffffff",
                    "on-secondary-fixed-variant": "#005320",
                    "primary": "#004ac6",
                    "tertiary": "#824500",
                    "surface-container-high": "#e2e7ff",
                    "on-primary-fixed": "#00174b",
                    "surface-dim": "#d2d9f4",
                    "surface-container-highest": "#dae2fd",
                    "on-surface": "#131b2e",
                    "secondary-fixed-dim": "#62df7d",
                    "error-container": "#ffdad6",
                    "on-error-container": "#93000a",
                    "primary-fixed-dim": "#b4c5ff",
                    "outline": "#737686",
                    "outline-variant": "#c3c6d7"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "sm": "8px",
                    "container-max": "1440px",
                    "sidebar-width": "260px",
                    "md": "16px",
                    "lg": "24px",
                    "xl": "32px",
                    "unit": "8px",
                    "xs": "4px"
            },
            "fontFamily": {
                    "headline-lg": ["Inter"],
                    "body-lg": ["Inter"],
                    "code": ["Geist"],
                    "label-md": ["Geist"],
                    "headline-md": ["Inter"],
                    "display": ["Inter"],
                    "body-md": ["Inter"]
            },
            "fontSize": {
                    "headline-lg": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "code": ["13px", {"lineHeight": "20px", "fontWeight": "400"}],
                    "label-md": ["13px", {"lineHeight": "18px", "fontWeight": "500"}],
                    "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                    "display": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}]
            }
          }
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        body { font-family: 'Inter', sans-serif; }
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .file-tree-guide {
            border-left: 1px solid var(--tw-outline-variant);
        }
        .gradient-text {
            background: linear-gradient(135deg, #004ac6 0%, #2563eb 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
</head>
<body class="bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
<!-- TopNavBar -->
<header class="bg-surface sticky top-0 z-50 border-b border-outline-variant">
<nav class="flex justify-between items-center w-full px-lg h-16 max-w-container-max mx-auto">
<div class="flex items-center gap-xl">
<span class="text-headline-md font-headline-md font-bold text-primary">Magnetstructure</span>
<div class="hidden md:flex gap-lg items-center">
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="#">Dashboard</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Planning Baru</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Template</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Dokumentasi</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">GitHub</a>
</div>
</div>
<div class="flex items-center gap-md">
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
<span class="material-symbols-outlined">help</span>
</button>
<div class="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A clean, professional headshot of a software developer in a bright studio environment. Soft side lighting highlights the features, set against a neutral gray background. The style is modern and corporate, matching a high-end tech SaaS aesthetic with clear focus and high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs34fpq78jLG75pl4udsRfpwOKQjnl_E0WChSlpFQhFESlROWG-urqi2J3x8JAlV_Mwa2B4JCPxCIlhbn51PAS0VruVNFVRYXorqs9WOVz9tH8IxYVp7fSIOG8UjL1oX159wqANsAnJNGTX20qroWK5fm6FWZuYtZYQqU6CYODxUqk6VrpmobW8jooPxlwu5j-VsxvRyM_v31_SjvuoY6iavdSZbTWdS1KXKXW9w1AvpA_uOuBsbWVispUXcp4O-Ixj-KRWFAczEU"/>
</div>
</div>
</nav>
</header>
<main>
<!-- Hero Section -->
<section class="relative pt-24 pb-32 px-md overflow-hidden">
<div class="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
<div class="lg:col-span-6 z-10">
<span class="inline-flex items-center px-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mb-lg">
<span class="material-symbols-outlined text-[16px] mr-1" data-weight="fill">verified</span>
                        V1.0 is now live
                    </span>
<h1 class="font-display text-display text-on-surface mb-md leading-tight">
                        Planning project lengkap sebelum mulai <span class="gradient-text">coding.</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-lg">
                        Upload referensi PRD dan desain, jawab pertanyaan adaptif, dan dapatkan ZIP dokumentasi docs/planning yang terstruktur rapi untuk workflow engineering Anda.
                    </p>
<div class="flex flex-wrap gap-md">
<button class="px-xl py-lg bg-primary text-on-primary rounded-lg font-headline-md text-headline-md hover:shadow-lg transition-all active:scale-[0.98]">
                            Buat Planning Baru
                        </button>
<button class="px-xl py-lg bg-surface border border-outline text-on-surface rounded-lg font-headline-md text-headline-md hover:bg-surface-container transition-all">
                            Lihat Contoh Output
                        </button>
</div>
</div>
<!-- Planning Preview (Bento-like Hero Element) -->
<div class="lg:col-span-6 relative">
<div class="glass-card rounded-xl shadow-2xl p-lg border border-outline-variant max-h-[500px] overflow-hidden">
<div class="flex items-center gap-sm mb-lg border-b border-outline-variant pb-md">
<span class="w-3 h-3 rounded-full bg-error"></span>
<span class="w-3 h-3 rounded-full bg-tertiary"></span>
<span class="w-3 h-3 rounded-full bg-secondary"></span>
<span class="ml-auto font-code text-code text-on-surface-variant">magnetstructure-project.zip</span>
</div>
<div class="font-code text-code space-y-sm">
<div class="flex items-center gap-sm text-on-surface font-bold">
<span class="material-symbols-outlined text-primary" data-weight="fill">folder_open</span>
                                docs/planning
                            </div>
<div class="ml-6 pl-4 border-l border-outline-variant py-xs flex flex-col gap-xs">
<div class="flex items-center gap-sm p-1 hover:bg-surface-container-low rounded transition-colors group">
<span class="material-symbols-outlined text-tertiary" data-weight="fill">description</span>
<span>01-architecture-overview.md</span>
<span class="ml-auto text-xs opacity-0 group-hover:opacity-100 text-outline">Preview</span>
</div>
<div class="flex items-center gap-sm p-1 hover:bg-surface-container-low rounded transition-colors group">
<span class="material-symbols-outlined text-primary-container" data-weight="fill">schema</span>
<span>02-data-models.md</span>
</div>
<div class="flex items-center gap-sm p-1 hover:bg-surface-container-low rounded transition-colors group">
<span class="material-symbols-outlined text-secondary" data-weight="fill">api</span>
<span>03-api-endpoints.md</span>
</div>
<div class="flex items-center gap-sm p-1 hover:bg-surface-container-low rounded transition-colors group">
<span class="material-symbols-outlined text-error" data-weight="fill">checklist</span>
<span>04-test-plan.md</span>
</div>
<div class="flex items-center gap-sm p-1 hover:bg-surface-container-low rounded transition-colors group">
<span class="material-symbols-outlined text-tertiary" data-weight="fill">code_blocks</span>
<span>05-agent-prompts/</span>
</div>
</div>
</div>
<!-- Code Snippet Float -->
<div class="absolute -bottom-4 -right-4 w-64 glass-card p-md rounded-lg shadow-xl border border-primary/20 bg-primary/5 animate-pulse">
<div class="flex items-center gap-2 mb-2">
<span class="w-2 h-2 rounded-full bg-primary"></span>
<span class="text-[10px] font-bold text-primary uppercase tracking-wider">Auto-Generated PRD</span>
</div>
<pre class="text-[11px] font-code text-on-surface"><code>## User Auth Flow
- Method: OAuth2.0
- Providers: Google, GitHub
- Middleware: JWT validation
...</code></pre>
</div>
</div>
</div>
</div>
<!-- Atmospheric BG -->
<div class="absolute top-0 right-0 -z-10 opacity-40">

</div>
</section>
<!-- Features Grid -->
<section class="py-xl bg-surface-container-lowest">
<div class="max-w-container-max mx-auto px-md">
<div class="text-center mb-xl">
<h2 class="font-display text-headline-lg text-on-surface mb-sm">Tools andalan tim Engineering modern</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Hilangkan keraguan teknis dengan dokumentasi yang matang.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
<!-- Feature 1 -->
<div class="p-lg bg-surface border border-outline-variant rounded-xl hover:border-primary transition-all group shadow-sm">
<div class="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-md group-hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined text-primary group-hover:text-on-primary">analytics</span>
</div>
<h3 class="font-headline-md text-headline-md mb-sm">Analisis Referensi</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Unggah screenshot desain (Figma/PNG) atau PRD mentah. AI kami mengekstrak logika bisnis dan pola UI secara instan.</p>
</div>
<!-- Feature 2 -->
<div class="p-lg bg-surface border border-outline-variant rounded-xl hover:border-primary transition-all group shadow-sm">
<div class="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-md group-hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined text-primary group-hover:text-on-primary">quiz</span>
</div>
<h3 class="font-headline-md text-headline-md mb-sm">Pertanyaan Adaptif</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Sistem memberikan kuesioner cerdas untuk mengisi gap logika yang sering terlewatkan sebelum development dimulai.</p>
</div>
<!-- Feature 3 -->
<div class="p-lg bg-surface border border-outline-variant rounded-xl hover:border-primary transition-all group shadow-sm">
<div class="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-md group-hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined text-primary group-hover:text-on-primary">account_tree</span>
</div>
<h3 class="font-headline-md text-headline-md mb-sm">Struktur Modul &amp; Menu</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Dapatkan mapping arsitektur folder, relasi database, dan hierarki navigasi yang optimal untuk aplikasi Anda.</p>
</div>
<!-- Feature 4 -->
<div class="p-lg bg-surface border border-outline-variant rounded-xl hover:border-primary transition-all group shadow-sm">
<div class="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-md group-hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined text-primary group-hover:text-on-primary">fact_check</span>
</div>
<h3 class="font-headline-md text-headline-md mb-sm">Test Plan Otomatis</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Markdown yang berisi Unit Test case, E2E flow, dan kriteria penerimaan (Acceptance Criteria) yang mendetail.</p>
</div>
<!-- Feature 5 -->
<div class="p-lg bg-surface border border-outline-variant rounded-xl hover:border-primary transition-all group shadow-sm">
<div class="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-md group-hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined text-primary group-hover:text-on-primary">emoji_symbols</span>
</div>
<h3 class="font-headline-md text-headline-md mb-sm">Output ZIP</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Semua dokumentasi dikemas dalam file ZIP yang siap diekstrak langsung ke root folder project folder Anda.</p>
</div>
<!-- Feature 6 -->
<div class="p-lg bg-surface border border-outline-variant rounded-xl hover:border-primary transition-all group shadow-sm">
<div class="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-md group-hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined text-primary group-hover:text-on-primary">smart_toy</span>
</div>
<h3 class="font-headline-md text-headline-md mb-sm">Siap untuk Coding Agent</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Konteks docs/planning dirancang agar mudah dibaca oleh AI coding agent seperti Cursor atau GitHub Copilot.</p>
</div>
</div>
</div>
</section>
<!-- Workflow Section -->
<section class="py-32 bg-surface overflow-hidden">
<div class="max-w-container-max mx-auto px-md">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
<div>
<h2 class="font-display text-display text-on-surface mb-xl">Cara kerja dalam 3 langkah mudah</h2>
<!-- WorkflowStepper -->
<div class="space-y-xl relative">
<!-- Step 1 -->
<div class="flex gap-lg group">
<div class="flex flex-col items-center">
<div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold z-10">1</div>
<div class="w-[2px] h-full bg-outline-variant mt-2"></div>
</div>
<div class="pb-xl">
<h4 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">Upload referensi</h4>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">Seret dan lepas file PRD PDF, desain Figma, atau coretan whiteboard. AI kami akan memproses semua input.</p>
</div>
</div>
<!-- Step 2 -->
<div class="flex gap-lg group">
<div class="flex flex-col items-center">
<div class="w-10 h-10 rounded-full border-2 border-primary bg-surface flex items-center justify-center text-primary font-bold z-10">2</div>
<div class="w-[2px] h-full bg-outline-variant mt-2"></div>
</div>
<div class="pb-xl">
<h4 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">Jawab pertanyaan</h4>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">Kami akan menanyakan detail spesifik seperti stack teknologi, integrasi pihak ketiga, dan skenario edge case.</p>
</div>
</div>
<!-- Step 3 -->
<div class="flex gap-lg group">
<div class="flex flex-col items-center">
<div class="w-10 h-10 rounded-full border-2 border-outline-variant bg-surface flex items-center justify-center text-outline font-bold z-10">3</div>
</div>
<div>
<h4 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">Download planning</h4>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">Terima bundel dokumentasi Markdown yang siap pakai sebagai blueprint coding Anda.</p>
</div>
</div>
</div>
</div>
<!-- Visual Side of Workflow -->
<div class="relative">
<div class="aspect-square bg-primary-container/10 rounded-[40px] flex items-center justify-center p-xl">
<div class="w-full h-full bg-cover bg-center rounded-3xl shadow-2xl border border-white/20" data-alt="A futuristic, high-tech abstract visualization of data processing and architectural mapping. Glowing lines and nodes represent a project's structure being formed in 3D space. The color palette features deep blues, electric cyan, and clean white accents, evoking a sense of precision engineering and advanced software planning in a professional SaaS context." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCE9lf7nWN7RGo6nUWgghZb5Nf_xNs-rHxDHcZ1kS4Yv_QgPXVkk4vlGE8wBU-C1z47oBQMgxHFZA9sDT6CEJD5tgn-5YXm5NrYmE4KaL2TCB_SshGPv975r9brExYxLSMIrPB6frsCkDAjNTka7Dsf3qb0w6nvFCQ4sw_9biVpSG4pccf_oxvVTUhaFJSzOl3mPg1XHM2aIz7cICcPE-LhDO6h7u5NdpoYrhYfhz6wuH29ydRvoZ7iJIO-M0NErr8w5WXEF0mi-v0')"></div>
</div>
<!-- Floating Cards for Context -->
<div class="absolute -top-8 -left-8 glass-card p-md rounded-xl shadow-lg border border-outline-variant max-w-[200px]">
<div class="flex items-center gap-2 mb-2">
<span class="material-symbols-outlined text-secondary">check_circle</span>
<span class="text-xs font-bold">PRD Analyzed</span>
</div>
<div class="h-2 w-full bg-secondary-container rounded-full overflow-hidden">
<div class="h-full bg-secondary w-[85%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="py-24 px-md">
<div class="max-w-container-max mx-auto glass-card rounded-[32px] p-xl text-center border border-primary/20 bg-primary/5">
<h2 class="font-display text-display text-on-surface mb-md">Berhenti menebak, mulai membangun.</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-2xl mx-auto">
                    Bergabunglah dengan ribuan developer yang menghemat waktu coding mereka dengan planning yang solid bersama Magnetstructure.
                </p>
<div class="flex justify-center gap-md">
<button class="px-xl py-lg bg-primary text-on-primary rounded-lg font-headline-md text-headline-md hover:shadow-xl transition-all">
                        Mulai Sekarang - Gratis
                    </button>
</div>
<p class="mt-lg font-label-md text-label-md text-on-surface-variant">Tidak perlu kartu kredit untuk mencoba.</p>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-high py-xl px-md border-t border-outline-variant">
<div class="max-w-container-max mx-auto grid grid-cols-2 lg:grid-cols-4 gap-xl">
<div class="col-span-2 lg:col-span-1">
<span class="text-headline-md font-headline-md font-bold text-primary mb-md block">Magnetstructure</span>
<p class="font-body-md text-body-md text-on-surface-variant">Engineering excellence starts with great planning.</p>
</div>
<div>
<h5 class="font-headline-sm text-headline-sm text-on-surface mb-md">Product</h5>
<ul class="space-y-sm text-on-surface-variant font-body-md text-body-md">
<li><a class="hover:text-primary transition-colors" href="#">Features</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Examples</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h5 class="font-headline-sm text-headline-sm text-on-surface mb-md">Support</h5>
<ul class="space-y-sm text-on-surface-variant font-body-md text-body-md">
<li><a class="hover:text-primary transition-colors" href="#">Documentation</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Guides</a></li>
<li><a class="hover:text-primary transition-colors" href="#">API</a></li>
</ul>
</div>
<div>
<h5 class="font-headline-sm text-headline-sm text-on-surface mb-md">Legal</h5>
<ul class="space-y-sm text-on-surface-variant font-body-md text-body-md">
<li><a class="hover:text-primary transition-colors" href="#">Privacy</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div class="max-w-container-max mx-auto mt-xl pt-lg border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-md">
<p class="font-label-md text-label-md text-on-surface-variant">© 2024 Magnetstructure. All rights reserved.</p>
<div class="flex gap-lg">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">language</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">share</span>
</div>
</div>
</footer>
<script>
        // Micro-interaction for the "Step" indicators
        document.querySelectorAll('.group').forEach((el, index) => {
            el.addEventListener('mouseenter', () => {
                const icon = el.querySelector('.w-10');
                if (icon) icon.style.transform = 'scale(1.1)';
            });
            el.addEventListener('mouseleave', () => {
                const icon = el.querySelector('.w-10');
                if (icon) icon.style.transform = 'scale(1)';
            });
        });
    </script>
</body></html>

<!-- Landing Page -->
<!DOCTYPE html>

<html class="light" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Magnetstructure - Discovery Analysis</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Geist:wght@400;500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #e2e7ff;
            border-radius: 10px;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(218, 226, 253, 0.5);
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary-fixed": "#002109",
                        "on-secondary": "#ffffff",
                        "on-error": "#ffffff",
                        "on-background": "#131b2e",
                        "tertiary-fixed": "#ffdcc3",
                        "secondary-container": "#7cf994",
                        "surface": "#faf8ff",
                        "on-surface-variant": "#434655",
                        "surface-variant": "#dae2fd",
                        "on-tertiary-fixed": "#2f1500",
                        "tertiary-fixed-dim": "#ffb77d",
                        "on-secondary-container": "#007230",
                        "surface-bright": "#faf8ff",
                        "secondary-fixed": "#7ffc97",
                        "surface-tint": "#0053db",
                        "on-tertiary": "#ffffff",
                        "inverse-primary": "#b4c5ff",
                        "surface-container-low": "#f2f3ff",
                        "on-primary": "#ffffff",
                        "surface-container": "#eaedff",
                        "background": "#faf8ff",
                        "error": "#ba1a1a",
                        "inverse-surface": "#283044",
                        "on-tertiary-fixed-variant": "#6e3900",
                        "on-primary-container": "#eeefff",
                        "on-primary-fixed-variant": "#003ea8",
                        "on-tertiary-container": "#ffede1",
                        "secondary": "#006e2d",
                        "primary-fixed": "#dbe1ff",
                        "primary-container": "#2563eb",
                        "inverse-on-surface": "#eef0ff",
                        "tertiary-container": "#a65900",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed-variant": "#005320",
                        "primary": "#004ac6",
                        "tertiary": "#824500",
                        "surface-container-high": "#e2e7ff",
                        "on-primary-fixed": "#00174b",
                        "surface-dim": "#d2d9f4",
                        "surface-container-highest": "#dae2fd",
                        "on-surface": "#131b2e",
                        "secondary-fixed-dim": "#62df7d",
                        "error-container": "#ffdad6",
                        "on-error-container": "#93000a",
                        "primary-fixed-dim": "#b4c5ff",
                        "outline": "#737686",
                        "outline-variant": "#c3c6d7"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "sm": "8px",
                        "container-max": "1440px",
                        "sidebar-width": "260px",
                        "md": "16px",
                        "lg": "24px",
                        "xl": "32px",
                        "unit": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Inter"],
                        "body-lg": ["Inter"],
                        "code": ["Geist"],
                        "label-md": ["Geist"],
                        "headline-md": ["Inter"],
                        "display": ["Inter"],
                        "body-md": ["Inter"]
                    },
                    "fontSize": {
                        "headline-lg": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "code": ["13px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "label-md": ["13px", {"lineHeight": "18px", "fontWeight": "500"}],
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "display": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}]
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
<!-- TopNavBar -->
<header class="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline fixed top-0 z-50 w-full">
<div class="flex justify-between items-center w-full px-lg h-16 max-w-container-max mx-auto">
<div class="flex items-center gap-md">
<span class="text-headline-md font-headline-md font-bold text-primary dark:text-inverse-primary">Magnetstructure</span>
<nav class="hidden md:flex items-center gap-lg ml-xl">
<a class="text-on-surface-variant dark:text-surface-variant font-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Dashboard</a>
<a class="text-primary dark:text-inverse-primary font-bold border-b-2 border-primary dark:border-inverse-primary pb-1 font-body-md transition-colors" href="#">Planning Baru</a>
<a class="text-on-surface-variant dark:text-surface-variant font-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Template</a>
<a class="text-on-surface-variant dark:text-surface-variant font-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Dokumentasi</a>
</nav>
</div>
<div class="flex items-center gap-md">
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span class="material-symbols-outlined">help</span>
</button>
<div class="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A professional, minimalist studio portrait of a software engineer for a user profile avatar. The background is a clean, neutral slate-50. The lighting is soft and directional, highlighting facial features with corporate clarity. The aesthetic is modern and high-end, utilizing a color palette of whites and soft blues consistent with an engineering-grade design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcoOvWYuR-wap9vNRyDObEgYvW04vKX8e6hg7xGEOGhmcn2iZd70bgaaV-2aVKYCuHEZxT2gCgrJG-IoURGKdtQIy1a4jzOT6c9_vxzjzX4bMq1GomOAfn7fUfMug9X1MVjIVWkFP460KvhPnRURAu-m3z_hQ2O1LNVTgxqZDRaV5fUsriVbqBzuu9IgmqoqU6Uitfy9U5MIV521Bk_M7_pGPYEegzkKuI3Dsi7LEChB0bNLxApvwQUtNcAB7oIlPSkzZSW02OGpk"/>
</div>
</div>
</div>
</header>
<div class="flex pt-16">
<!-- SideNavBar -->
<aside class="bg-surface dark:bg-inverse-surface border-r border-outline-variant dark:border-outline flex flex-col py-lg w-[260px] h-[calc(100vh-64px)] fixed left-0 overflow-y-auto">
<div class="px-md mb-lg">
<div class="flex items-center gap-sm mb-xs">
<div class="w-10 h-10 bg-primary-container text-on-primary-container rounded flex items-center justify-center">
<span class="material-symbols-outlined">architecture</span>
</div>
<div>
<h2 class="text-headline-sm font-headline-sm font-bold text-on-surface dark:text-inverse-on-surface">Project Planning</h2>
<p class="text-label-md text-on-surface-variant opacity-70">Workflow Stepper</p>
</div>
</div>
</div>
<nav class="flex flex-col">
<a class="flex items-center gap-md text-on-surface-variant dark:text-surface-variant pl-4 py-3 hover:bg-surface-container dark:hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">upload_file</span>
<span class="font-label-md text-label-md">Referensi</span>
</a>
<a class="flex items-center gap-md text-primary dark:text-inverse-primary font-bold border-l-2 border-primary dark:border-inverse-primary pl-4 py-3 bg-surface-container-low dark:bg-surface-container-highest translate-x-1 transition-transform" href="#">
<span class="material-symbols-outlined">analytics</span>
<span class="font-label-md text-label-md">Discovery</span>
</a>
<a class="flex items-center gap-md text-on-surface-variant dark:text-surface-variant pl-4 py-3 hover:bg-surface-container dark:hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">quiz</span>
<span class="font-label-md text-label-md">Pertanyaan</span>
</a>
<a class="flex items-center gap-md text-on-surface-variant dark:text-surface-variant pl-4 py-3 hover:bg-surface-container dark:hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">account_tree</span>
<span class="font-label-md text-label-md">Struktur</span>
</a>
<a class="flex items-center gap-md text-on-surface-variant dark:text-surface-variant pl-4 py-3 hover:bg-surface-container dark:hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">visibility</span>
<span class="font-label-md text-label-md">Preview</span>
</a>
<a class="flex items-center gap-md text-on-surface-variant dark:text-surface-variant pl-4 py-3 hover:bg-surface-container dark:hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">download</span>
<span class="font-label-md text-label-md">Generate</span>
</a>
</nav>
<div class="mt-auto px-md pt-lg border-t border-outline-variant">
<div class="bg-surface-container-low p-md rounded-lg">
<div class="flex justify-between items-center mb-xs">
<span class="text-label-md font-medium text-on-surface">Status Proyek</span>
<span class="text-xs font-bold text-primary">35%</span>
</div>
<div class="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
<div class="bg-primary h-full" style="width: 35%"></div>
</div>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="ml-[260px] flex-1 min-h-screen bg-slate-50">
<div class="max-w-6xl mx-auto p-lg">
<!-- Summary Header Section -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-lg mb-xl">
<div class="space-y-sm">
<div class="flex items-center gap-sm">
<span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">check_circle</span>
                                Analisis Selesai
                            </span>
<span class="text-on-surface-variant font-label-md">Diterbitkan: 24 Okt 2023, 14:20</span>
</div>
<h1 class="text-display font-display text-on-background">Hasil Analisis Discovery</h1>
<p class="text-body-lg text-on-surface-variant max-w-2xl">Kami telah memindai 12 dokumen referensi dan mengekstrak informasi kunci untuk dasar struktur proyek Anda.</p>
</div>
<button class="bg-primary text-on-primary hover:opacity-90 active:scale-95 transition-all px-lg py-3 rounded-lg font-bold flex items-center gap-md shadow-lg shadow-primary/20">
                        Lanjut ke Pertanyaan
                        <span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<!-- Statistics Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-md mb-xl">
<div class="bg-white border border-slate-200 p-lg rounded-xl flex flex-col gap-sm">
<div class="flex items-center justify-between text-on-surface-variant">
<span class="text-label-md uppercase tracking-wider font-semibold">File Referensi</span>
<span class="material-symbols-outlined">description</span>
</div>
<div class="text-display font-display">12</div>
<div class="text-xs text-on-surface-variant flex items-center gap-1">
<span class="text-secondary flex items-center"><span class="material-symbols-outlined text-[14px]">arrow_upward</span>100%</span>
                            diproses
                        </div>
</div>
<div class="bg-white border border-slate-200 p-lg rounded-xl flex flex-col gap-sm">
<div class="flex items-center justify-between text-on-surface-variant">
<span class="text-label-md uppercase tracking-wider font-semibold">Fakta Ditemukan</span>
<span class="material-symbols-outlined text-secondary">verified</span>
</div>
<div class="text-display font-display">142</div>
<div class="text-xs text-on-surface-variant">Kepercayaan rata-rata 94%</div>
</div>
<div class="bg-white border border-slate-200 p-lg rounded-xl flex flex-col gap-sm">
<div class="flex items-center justify-between text-on-surface-variant">
<span class="text-label-md uppercase tracking-wider font-semibold">Inferensi AI</span>
<span class="material-symbols-outlined text-tertiary">lightbulb</span>
</div>
<div class="text-display font-display">28</div>
<div class="text-xs text-on-surface-variant">Membutuhkan konfirmasi</div>
</div>
<div class="bg-white border border-slate-200 p-lg rounded-xl flex flex-col gap-sm">
<div class="flex items-center justify-between text-on-surface-variant">
<span class="text-label-md uppercase tracking-wider font-semibold">Belum Diketahui</span>
<span class="material-symbols-outlined text-outline">help_outline</span>
</div>
<div class="text-display font-display">14</div>
<div class="text-xs text-on-surface-variant">Poin data yang hilang</div>
</div>
</div>
<!-- Analysis Details Section -->
<div class="bg-white border border-slate-200 rounded-xl overflow-hidden min-h-[600px] flex flex-col">
<!-- Tabs Navigation -->
<div class="flex border-b border-slate-100 bg-slate-50/50">
<button class="px-lg py-4 font-bold text-primary border-b-2 border-primary bg-white">Ringkasan</button>
<button class="px-lg py-4 font-semibold text-on-surface-variant hover:bg-white transition-colors flex items-center gap-2">
                            Fakta 
                            <span class="bg-secondary-container/30 text-secondary px-2 py-0.5 rounded text-[10px] font-bold">142</span>
</button>
<button class="px-lg py-4 font-semibold text-on-surface-variant hover:bg-white transition-colors flex items-center gap-2">
                            Inferensi 
                            <span class="bg-tertiary-fixed text-tertiary-container px-2 py-0.5 rounded text-[10px] font-bold">28</span>
</button>
<button class="px-lg py-4 font-semibold text-on-surface-variant hover:bg-white transition-colors flex items-center gap-2">
                            Belum Diketahui 
                            <span class="bg-slate-200 text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-bold">14</span>
</button>
<button class="px-lg py-4 font-semibold text-on-surface-variant hover:bg-white transition-colors">Referensi</button>
</div>
<!-- Tab Content -->
<div class="p-lg flex-1">
<div class="grid grid-cols-1 lg:grid-cols-3 gap-xl">
<!-- Left: List of Items -->
<div class="lg:col-span-2 space-y-md">
<div class="flex items-center justify-between mb-md">
<h3 class="text-headline-md font-headline-md text-on-surface">Poin Informasi Kunci</h3>
<div class="flex gap-2">
<div class="bg-slate-100 p-1 rounded-lg flex">
<button class="p-1.5 bg-white shadow-sm rounded-md"><span class="material-symbols-outlined text-[20px]">view_list</span></button>
<button class="p-1.5 hover:bg-white rounded-md transition-all"><span class="material-symbols-outlined text-[20px]">grid_view</span></button>
</div>
</div>
</div>
<!-- Result Items -->
<div class="space-y-sm">
<!-- Item 1: Fact -->
<div class="group bg-white border border-slate-200 p-md rounded-lg hover:border-primary/30 transition-all cursor-pointer">
<div class="flex items-start justify-between mb-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[18px]">verified</span>
<span class="text-xs font-bold text-secondary uppercase tracking-tighter">Fakta</span>
</div>
<div class="flex items-center gap-2">
<span class="text-[10px] text-on-surface-variant uppercase font-bold">Kepercayaan</span>
<div class="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div class="bg-secondary h-full" style="width: 98%"></div>
</div>
<span class="text-xs font-bold text-secondary">98%</span>
</div>
</div>
<h4 class="text-body-lg font-semibold mb-xs text-on-background">Anggaran Infrastruktur Server Q4 2023</h4>
<p class="text-body-md text-on-surface-variant mb-md leading-relaxed">Total alokasi dana sebesar Rp 4.2M telah disetujui untuk peningkatan redundansi data center regional Timur.</p>
<div class="flex items-center gap-md">
<div class="flex items-center gap-1 text-xs text-primary font-medium hover:underline">
<span class="material-symbols-outlined text-[14px]">link</span>
                                                dokumen_anggaran_final_v2.pdf
                                            </div>
<div class="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-on-surface-variant font-bold uppercase">Halaman 14</div>
</div>
</div>
<!-- Item 2: Inference -->
<div class="group bg-white border border-slate-200 p-md rounded-lg hover:border-tertiary/30 transition-all cursor-pointer">
<div class="flex items-start justify-between mb-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-tertiary text-[18px]">lightbulb</span>
<span class="text-xs font-bold text-tertiary uppercase tracking-tighter">Inferensi</span>
</div>
<div class="flex items-center gap-2">
<span class="text-[10px] text-on-surface-variant uppercase font-bold">Kepercayaan</span>
<div class="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div class="bg-tertiary h-full" style="width: 72%"></div>
</div>
<span class="text-xs font-bold text-tertiary">72%</span>
</div>
</div>
<h4 class="text-body-lg font-semibold mb-xs text-on-background">Potensi Penundaan Migrasi Database</h4>
<p class="text-body-md text-on-surface-variant mb-md leading-relaxed">Berdasarkan log komunikasi tim teknis, migrasi kemungkinan tertunda 2 minggu karena audit keamanan yang belum tuntas.</p>
<div class="flex items-center gap-md">
<div class="flex items-center gap-1 text-xs text-primary font-medium hover:underline">
<span class="material-symbols-outlined text-[14px]">link</span>
                                                email_thread_migration_2410.eml
                                            </div>
</div>
</div>
<!-- Item 3: Unknown -->
<div class="group bg-white border border-slate-200 p-md rounded-lg hover:border-outline/30 transition-all cursor-pointer opacity-80">
<div class="flex items-start justify-between mb-sm">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-outline text-[18px]">help_outline</span>
<span class="text-xs font-bold text-outline uppercase tracking-tighter">Belum Diketahui</span>
</div>
<div class="flex items-center gap-2">
<span class="text-[10px] text-on-surface-variant uppercase font-bold">Data Hilang</span>
</div>
</div>
<h4 class="text-body-lg font-semibold mb-xs text-on-background">Vendor Sertifikasi Keamanan</h4>
<p class="text-body-md text-on-surface-variant mb-md leading-relaxed">Nama vendor pihak ketiga untuk audit penetrasi test belum disebutkan di dokumen mana pun.</p>
<div class="bg-slate-50 border-l-2 border-primary p-2">
<p class="text-xs font-medium text-primary flex items-center gap-2">
<span class="material-symbols-outlined text-[14px]">psychology</span>
                                                AI merekomendasikan: "Tanyakan ini di langkah berikutnya."
                                            </p>
</div>
</div>
</div>
</div>
<!-- Right: Detailed Preview / Context -->
<div class="space-y-lg">
<div class="bg-slate-50 border border-slate-200 rounded-xl p-lg sticky top-24">
<h3 class="text-label-md uppercase tracking-wider font-bold text-on-surface-variant mb-md">Pratinjau Konteks</h3>
<div class="relative w-full aspect-[3/4] bg-white border border-slate-300 rounded shadow-sm p-lg overflow-hidden group">
<!-- Document Simulation -->
<div class="space-y-sm blur-[1px] group-hover:blur-0 transition-all duration-300">
<div class="w-1/2 h-4 bg-slate-200 rounded"></div>
<div class="w-full h-2 bg-slate-100 rounded"></div>
<div class="w-full h-2 bg-slate-100 rounded"></div>
<div class="w-3/4 h-2 bg-slate-100 rounded"></div>
<div class="py-md">
<div class="w-full h-40 bg-slate-100 rounded border border-dashed border-slate-200 flex items-center justify-center">
<span class="material-symbols-outlined text-slate-300 text-4xl">insert_chart</span>
</div>
</div>
<div class="w-full h-2 bg-slate-100 rounded"></div>
<!-- Highlight overlay -->
<div class="absolute inset-x-lg top-[30%] h-6 bg-primary/10 border-l-2 border-primary"></div>
</div>
<div class="absolute inset-0 bg-gradient-to-t from-white via-transparent pointer-events-none"></div>
<!-- Floating Card Over Preview -->
<div class="absolute bottom-4 left-4 right-4 bg-inverse-surface text-inverse-on-surface p-md rounded shadow-xl">
<p class="text-xs font-bold text-primary-fixed mb-1">DOKUMEN SUMBER</p>
<p class="text-[13px] font-medium truncate">dokumen_anggaran_final_v2.pdf</p>
<div class="mt-md flex justify-between">
<button class="text-[10px] uppercase font-bold flex items-center gap-1 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[12px]">open_in_new</span> Buka File
                                                </button>
<span class="text-[10px] uppercase font-bold">2.4 MB</span>
</div>
</div>
</div>
<div class="mt-lg">
<h4 class="text-xs font-bold text-on-surface-variant uppercase mb-sm">Visualisasi Hubungan</h4>
<div class="flex flex-wrap gap-xs">
<span class="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded">ANGGARAN</span>
<span class="px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded">TIMUR</span>
<span class="px-2 py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded">SERVER</span>
<span class="px-2 py-1 bg-slate-100 text-on-surface-variant text-[10px] font-bold rounded">DATABASE</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Footer Action -->
<div class="mt-xl flex items-center justify-between p-lg bg-surface-container rounded-xl border border-outline-variant">
<div class="flex items-center gap-md">
<div class="p-3 bg-white rounded-full">
<span class="material-symbols-outlined text-primary">auto_awesome</span>
</div>
<div>
<h4 class="font-bold text-on-surface">Langkah Selanjutnya: Konfirmasi Pertanyaan</h4>
<p class="text-sm text-on-surface-variant">Berdasarkan temuan "Belum Diketahui", AI telah menyiapkan 5 pertanyaan kunci.</p>
</div>
</div>
<button class="bg-primary-container text-on-primary-container hover:bg-primary-container/90 px-lg py-2.5 rounded-lg font-bold transition-all flex items-center gap-2">
                        Buat Pertanyaan
                        <span class="material-symbols-outlined">quiz</span>
</button>
</div>
</div>
</main>
</div>
<!-- Floating Atmosphere Elements -->
<div class="fixed bottom-lg right-lg flex flex-col gap-sm">
<button class="w-12 h-12 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors hover:scale-110">
<span class="material-symbols-outlined">chat</span>
</button>
<button class="w-12 h-12 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors hover:scale-110">
<span class="material-symbols-outlined">settings</span>
</button>
</div>
<script>
        // Simple Interaction Logic
        document.querySelectorAll('.group.cursor-pointer').forEach(item => {
            item.addEventListener('click', () => {
                // Remove active classes
                document.querySelectorAll('.group.cursor-pointer').forEach(i => {
                    i.classList.remove('ring-2', 'ring-primary/20', 'bg-primary-container/5');
                });
                // Add active state to clicked
                item.classList.add('ring-2', 'ring-primary/20', 'bg-primary-container/5');
                
                // Simulate document preview shift
                const preview = document.querySelector('.bg-slate-50.border.sticky');
                preview.style.transform = 'translateY(-2px)';
                setTimeout(() => { preview.style.transform = 'translateY(0)'; }, 200);
            });
        });

        // Tab simulation
        const tabs = document.querySelectorAll('.px-lg.py-4');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => {
                    t.classList.remove('text-primary', 'border-b-2', 'border-primary', 'bg-white');
                    t.classList.add('text-on-surface-variant', 'font-semibold');
                });
                tab.classList.add('text-primary', 'border-b-2', 'border-primary', 'bg-white');
                tab.classList.remove('text-on-surface-variant', 'font-semibold');
            });
        });
    </script>
</body></html>

<!-- Discovery Analysis -->
<!DOCTYPE html>

<html class="light" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Adaptive Questionnaire - Magnetstructure</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Geist:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary-fixed": "#002109",
                        "on-secondary": "#ffffff",
                        "on-error": "#ffffff",
                        "on-background": "#131b2e",
                        "tertiary-fixed": "#ffdcc3",
                        "secondary-container": "#7cf994",
                        "surface": "#faf8ff",
                        "on-surface-variant": "#434655",
                        "surface-variant": "#dae2fd",
                        "on-tertiary-fixed": "#2f1500",
                        "tertiary-fixed-dim": "#ffb77d",
                        "on-secondary-container": "#007230",
                        "surface-bright": "#faf8ff",
                        "secondary-fixed": "#7ffc97",
                        "surface-tint": "#0053db",
                        "on-tertiary": "#ffffff",
                        "inverse-primary": "#b4c5ff",
                        "surface-container-low": "#f2f3ff",
                        "on-primary": "#ffffff",
                        "surface-container": "#eaedff",
                        "background": "#faf8ff",
                        "error": "#ba1a1a",
                        "inverse-surface": "#283044",
                        "on-tertiary-fixed-variant": "#6e3900",
                        "on-primary-container": "#eeefff",
                        "on-primary-fixed-variant": "#003ea8",
                        "on-tertiary-container": "#ffede1",
                        "secondary": "#006e2d",
                        "primary-fixed": "#dbe1ff",
                        "primary-container": "#2563eb",
                        "inverse-on-surface": "#eef0ff",
                        "tertiary-container": "#a65900",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed-variant": "#005320",
                        "primary": "#004ac6",
                        "tertiary": "#824500",
                        "surface-container-high": "#e2e7ff",
                        "on-primary-fixed": "#00174b",
                        "surface-dim": "#d2d9f4",
                        "surface-container-highest": "#dae2fd",
                        "on-surface": "#131b2e",
                        "secondary-fixed-dim": "#62df7d",
                        "error-container": "#ffdad6",
                        "on-error-container": "#93000a",
                        "primary-fixed-dim": "#b4c5ff",
                        "outline": "#737686",
                        "outline-variant": "#c3c6d7"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "sm": "8px",
                        "container-max": "1440px",
                        "sidebar-width": "260px",
                        "md": "16px",
                        "lg": "24px",
                        "xl": "32px",
                        "unit": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Inter"],
                        "body-lg": ["Inter"],
                        "code": ["Geist"],
                        "label-md": ["Geist"],
                        "headline-md": ["Inter"],
                        "display": ["Inter"],
                        "body-md": ["Inter"]
                    },
                    "fontSize": {
                        "headline-lg": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "code": ["13px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "label-md": ["13px", {"lineHeight": "18px", "fontWeight": "500"}],
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "display": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .filled-icon {
            font-variation-settings: 'FILL' 1;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #c3c6d7; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #737686; }
        .sticky-bottom-shadow { box-shadow: 0 -4px 12px rgba(15, 23, 42, 0.08); }
    </style>
</head>
<body class="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
<!-- TopNavBar -->
<header class="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline sticky top-0 z-50">
<div class="flex justify-between items-center w-full px-lg h-16 max-w-container-max mx-auto">
<div class="flex items-center gap-xl">
<span class="text-headline-md font-headline-md font-bold text-primary dark:text-inverse-primary">Magnetstructure</span>
<nav class="hidden md:flex gap-lg items-center">
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Dashboard</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Planning Baru</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Template</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Dokumentasi</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">GitHub</a>
</nav>
</div>
<div class="flex items-center gap-md">
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
<span class="material-symbols-outlined">help</span>
</button>
<div class="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A professional business headshot of a UI engineer in a bright, minimalist studio setting. The lighting is soft and high-key, aligning with a corporate modern design aesthetic. The portrait should have a clean background with cool slate-50 tones, reflecting technical precision and modern corporate branding." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVLUlVa1DpP45-dF1GdIxfxey3HgHdz2ZJLkTvWXPW0NziHIUps4Hc9g0u0FyxY2TSBfkOr44AyOzqFM1-YH6C78Ktohzph2qc4fRiXXdc6lGxvffANqH0b35Xy1vNLqR02p1fqpsUOPfAPRAnL8imGEmv6YBWx9b_07A0yZGP4P7UP6hUENZKanop3499L8Ny5-dqr_1INoQut0efUBN7EYKWkLgK16s-JWy0osP1WAoBT94zkUHyGDaBzbVs3gBgS9f7b25Ytmk"/>
</div>
</div>
</div>
</header>
<div class="flex h-[calc(100vh-64px)] overflow-hidden">
<!-- SideNavBar -->
<aside class="bg-surface dark:bg-inverse-surface border-r border-outline-variant dark:border-outline flex flex-col py-lg w-[260px] h-full overflow-y-auto">
<div class="px-lg mb-xl">
<div class="flex items-center gap-sm mb-1">
<span class="material-symbols-outlined text-primary text-headline-sm">account_tree</span>
<h2 class="text-headline-sm font-headline-sm font-bold text-on-surface">Project Planning</h2>
</div>
<p class="text-label-md font-label-md text-on-surface-variant">Workflow Stepper</p>
</div>
<nav class="flex flex-col">
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all cursor-pointer">
<span class="material-symbols-outlined">upload_file</span>
<span class="font-label-md text-label-md">Referensi</span>
</div>
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all cursor-pointer">
<span class="material-symbols-outlined">analytics</span>
<span class="font-label-md text-label-md">Discovery</span>
</div>
<!-- ACTIVE TAB -->
<div class="flex items-center gap-md text-primary font-bold border-l-2 border-primary pl-4 py-3 bg-surface-container-low">
<span class="material-symbols-outlined filled-icon">quiz</span>
<span class="font-label-md text-label-md">Pertanyaan</span>
</div>
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all cursor-pointer opacity-50">
<span class="material-symbols-outlined">account_tree</span>
<span class="font-label-md text-label-md">Struktur</span>
</div>
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all cursor-pointer opacity-50">
<span class="material-symbols-outlined">visibility</span>
<span class="font-label-md text-label-md">Preview</span>
</div>
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all cursor-pointer opacity-50">
<span class="material-symbols-outlined">download</span>
<span class="font-label-md text-label-md">Generate</span>
</div>
</nav>
<!-- Progress Card -->
<div class="mt-auto px-md pb-lg">
<div class="bg-surface-container p-md rounded-xl border border-outline-variant">
<div class="flex justify-between items-end mb-sm">
<span class="text-label-md font-label-md text-on-surface font-semibold">Progress</span>
<span class="text-label-md font-label-md text-primary font-bold">50%</span>
</div>
<div class="w-full bg-surface-container-highest rounded-full h-1.5 mb-sm">
<div class="bg-primary h-1.5 rounded-full" style="width: 50%"></div>
</div>
<p class="text-[11px] leading-tight text-on-surface-variant">12 dari 24 question slots diproses</p>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 flex flex-col relative bg-slate-50">
<!-- Header Section -->
<div class="px-xl py-lg bg-white border-b border-outline-variant">
<div class="max-w-4xl mx-auto flex items-center justify-between">
<div>
<h1 class="text-headline-lg font-headline-lg text-on-surface">Adaptive Questionnaire</h1>
<p class="text-body-md text-on-surface-variant">Lengkapi detail teknis untuk membangun Magnetstructure sesuai kebutuhan Anda.</p>
</div>
<div class="flex items-center gap-sm px-4 py-2 bg-secondary-container/10 border border-secondary-container rounded-lg">
<span class="material-symbols-outlined text-secondary text-[20px] filled-icon">verified_user</span>
<span class="text-label-md font-label-md text-on-secondary-container">12 Jawaban Siap</span>
</div>
</div>
</div>
<!-- Questionnaire Content -->
<div class="flex-1 overflow-y-auto px-xl py-xl pb-32">
<div class="max-w-4xl mx-auto space-y-xl">
<!-- Group: Produk dan Scope -->
<section class="space-y-md">
<div class="flex items-center gap-sm border-b border-outline-variant pb-2">
<span class="material-symbols-outlined text-primary">inventory_2</span>
<h3 class="text-headline-sm font-headline-sm text-on-surface">Produk dan Scope</h3>
</div>
<div class="grid grid-cols-1 gap-md">
<!-- Answered from reference -->
<div class="p-md bg-white border border-outline-variant rounded-xl group hover:border-primary transition-colors">
<div class="flex justify-between items-start mb-md">
<label class="font-semibold text-on-surface">Nama Project / Produk Utama</label>
<div class="px-2 py-1 bg-secondary-container/20 text-secondary border border-secondary-container rounded text-[11px] font-bold uppercase tracking-wider">Terdeteksi dari Dokumen</div>
</div>
<input class="w-full bg-slate-50 border-outline-variant rounded-lg text-body-md focus:ring-primary focus:border-primary px-4 py-2" readonly="" type="text" value="Enterprise Magnet Dashboard"/>
<div class="mt-2 flex items-center gap-1 text-[11px] text-on-surface-variant">
<span class="material-symbols-outlined text-[14px]">link</span>
<span>Sumber: project_brief.pdf</span>
</div>
</div>
<!-- Needs Answer -->
<div class="p-md bg-white border border-outline-variant rounded-xl group hover:border-primary transition-colors shadow-sm">
<div class="flex justify-between items-start mb-md">
<label class="font-semibold text-on-surface">Deskripsi Singkat Target Audience</label>
<div class="px-2 py-1 bg-error-container/20 text-error border border-error-container rounded text-[11px] font-bold uppercase tracking-wider">Perlu Jawaban</div>
</div>
<textarea class="w-full bg-white border-outline-variant rounded-lg text-body-md focus:ring-primary focus:border-primary px-4 py-2" placeholder="Sebutkan siapa pengguna utama aplikasi ini..." rows="3"></textarea>
<div class="mt-3 flex gap-2">
<button class="text-label-md font-label-md text-primary hover:underline flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">help</span>
                                        Saya belum tahu
                                    </button>
</div>
</div>
</div>
</section>
<!-- Group: Platform dan Teknologi -->
<section class="space-y-md">
<div class="flex items-center gap-sm border-b border-outline-variant pb-2">
<span class="material-symbols-outlined text-primary">terminal</span>
<h3 class="text-headline-sm font-headline-sm text-on-surface">Platform dan Teknologi</h3>
</div>
<div class="grid grid-cols-1 gap-md">
<!-- Needs Confirmation -->
<div class="p-md bg-white border-2 border-primary-container rounded-xl shadow-md ring-4 ring-primary-container/5">
<div class="flex justify-between items-start mb-md">
<label class="font-semibold text-on-surface">Pilih Primary Web Stack</label>
<div class="px-2 py-1 bg-primary-container/20 text-primary border border-primary-container rounded text-[11px] font-bold uppercase tracking-wider">Butuh Konfirmasi</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-sm">
<label class="flex items-center p-3 border border-outline-variant rounded-lg cursor-pointer hover:bg-slate-50 transition-all gap-3 bg-primary-fixed/20 border-primary">
<input checked="" class="text-primary focus:ring-primary h-4 w-4" name="stack" type="radio"/>
<div class="flex-1">
<p class="font-bold text-body-md">Next.js (App Router)</p>
<p class="text-[12px] text-on-surface-variant">Recommended based on specs</p>
</div>
</label>
<label class="flex items-center p-3 border border-outline-variant rounded-lg cursor-pointer hover:bg-slate-50 transition-all gap-3">
<input class="text-primary focus:ring-primary h-4 w-4" name="stack" type="radio"/>
<div class="flex-1">
<p class="font-bold text-body-md">Vite + React</p>
<p class="text-[12px] text-on-surface-variant">Standard Client Side App</p>
</div>
</label>
</div>
</div>
<!-- Multi-select -->
<div class="p-md bg-white border border-outline-variant rounded-xl group hover:border-primary transition-colors">
<div class="flex justify-between items-start mb-md">
<label class="font-semibold text-on-surface">Target Platform</label>
<span class="text-label-md text-on-surface-variant italic">Bisa pilih lebih dari satu</span>
</div>
<div class="flex flex-wrap gap-sm">
<button class="px-4 py-2 rounded-full border border-primary bg-primary text-white text-label-md font-label-md flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">desktop_windows</span> Desktop Web
                                    </button>
<button class="px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant hover:bg-slate-50 text-label-md font-label-md flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">smartphone</span> Mobile Responsive
                                    </button>
<button class="px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant hover:bg-slate-50 text-label-md font-label-md flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">devices</span> Progressive Web App (PWA)
                                    </button>
</div>
</div>
</div>
</section>
<!-- Group: Data dan Integrasi -->
<section class="space-y-md">
<div class="flex items-center gap-sm border-b border-outline-variant pb-2">
<span class="material-symbols-outlined text-primary">database</span>
<h3 class="text-headline-sm font-headline-sm text-on-surface">Data dan Integrasi</h3>
</div>
<div class="p-md bg-white border border-outline-variant rounded-xl group hover:border-primary transition-colors">
<label class="block font-semibold text-on-surface mb-md">Apakah sistem memerlukan integrasi API pihak ketiga?</label>
<div class="flex gap-md">
<button class="flex-1 py-3 border-2 border-primary bg-primary-fixed/20 text-primary font-bold rounded-xl flex items-center justify-center gap-2 transition-all" onclick="toggleActive(this)">
<span class="material-symbols-outlined filled-icon">check_circle</span> Ya
                                </button>
<button class="flex-1 py-3 border border-outline-variant text-on-surface-variant rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all" onclick="toggleActive(this)">
<span class="material-symbols-outlined">cancel</span> Tidak
                                </button>
</div>
</div>
<!-- Warning Component for "Saya belum tahu" -->
<div class="hidden p-md bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-xl border border-tertiary-container flex gap-md items-start animate-pulse" id="idk-warning">
<span class="material-symbols-outlined text-tertiary">warning</span>
<div class="text-body-md">
<p class="font-bold">Informasi: Anda memilih "Saya belum tahu"</p>
<p>Sistem akan mengisi field ini dengan placeholder standar "Magnet_Generic_Value". Anda dapat memperbaruinya nanti di tahap Review.</p>
</div>
</div>
</section>
</div>
</div>
<!-- Sticky Bottom Actions -->
<footer class="absolute bottom-0 left-0 right-0 bg-white border-t border-outline-variant px-xl py-lg sticky-bottom-shadow z-40">
<div class="max-w-4xl mx-auto flex items-center justify-between">
<button class="flex items-center gap-sm px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all font-semibold">
<span class="material-symbols-outlined">arrow_back</span>
                        Kembali
                    </button>
<div class="flex items-center gap-md">
<button class="px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all font-semibold">
                            Simpan Draft
                        </button>
<button class="flex items-center gap-sm px-8 py-2.5 rounded-lg bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/20 transition-all font-bold">
                            Lanjut
                            <span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</footer>
</main>
</div>
<script>
        function toggleActive(btn) {
            const btns = btn.parentElement.querySelectorAll('button');
            btns.forEach(b => {
                b.classList.remove('border-2', 'border-primary', 'bg-primary-fixed/20', 'text-primary', 'font-bold');
                b.classList.add('border', 'border-outline-variant', 'text-on-surface-variant');
                b.querySelector('.material-symbols-outlined').classList.remove('filled-icon');
                if(b.querySelector('.material-symbols-outlined').textContent === 'check_circle') {
                    b.querySelector('.material-symbols-outlined').textContent = 'radio_button_unchecked';
                }
            });
            btn.classList.add('border-2', 'border-primary', 'bg-primary-fixed/20', 'text-primary', 'font-bold');
            btn.classList.remove('border', 'border-outline-variant', 'text-on-surface-variant');
            btn.querySelector('.material-symbols-outlined').classList.add('filled-icon');
            if(btn.querySelector('.material-symbols-outlined').textContent === 'radio_button_unchecked') {
                btn.querySelector('.material-symbols-outlined').textContent = 'check_circle';
            }
        }

        // Logic to show warning when "Saya belum tahu" is clicked
        const idkBtn = document.querySelector('button.text-primary.hover\\:underline');
        if(idkBtn) {
            idkBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const warning = document.getElementById('idk-warning');
                warning.classList.toggle('hidden');
                warning.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        }
    </script>
</body></html>

<!-- Adaptive Questionnaire -->
<!DOCTYPE html>

<html class="light" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Magnetstructure - Struktur Editor</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Geist:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary-fixed": "#002109",
                        "on-secondary": "#ffffff",
                        "on-error": "#ffffff",
                        "on-background": "#131b2e",
                        "tertiary-fixed": "#ffdcc3",
                        "secondary-container": "#7cf994",
                        "surface": "#faf8ff",
                        "on-surface-variant": "#434655",
                        "surface-variant": "#dae2fd",
                        "on-tertiary-fixed": "#2f1500",
                        "tertiary-fixed-dim": "#ffb77d",
                        "on-secondary-container": "#007230",
                        "surface-bright": "#faf8ff",
                        "secondary-fixed": "#7ffc97",
                        "surface-tint": "#0053db",
                        "on-tertiary": "#ffffff",
                        "inverse-primary": "#b4c5ff",
                        "surface-container-low": "#f2f3ff",
                        "on-primary": "#ffffff",
                        "surface-container": "#eaedff",
                        "background": "#faf8ff",
                        "error": "#ba1a1a",
                        "inverse-surface": "#283044",
                        "on-tertiary-fixed-variant": "#6e3900",
                        "on-primary-container": "#eeefff",
                        "on-primary-fixed-variant": "#003ea8",
                        "on-tertiary-container": "#ffede1",
                        "secondary": "#006e2d",
                        "primary-fixed": "#dbe1ff",
                        "primary-container": "#2563eb",
                        "inverse-on-surface": "#eef0ff",
                        "tertiary-container": "#a65900",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed-variant": "#005320",
                        "primary": "#004ac6",
                        "tertiary": "#824500",
                        "surface-container-high": "#e2e7ff",
                        "on-primary-fixed": "#00174b",
                        "surface-dim": "#d2d9f4",
                        "surface-container-highest": "#dae2fd",
                        "on-surface": "#131b2e",
                        "secondary-fixed-dim": "#62df7d",
                        "error-container": "#ffdad6",
                        "on-error-container": "#93000a",
                        "primary-fixed-dim": "#b4c5ff",
                        "outline": "#737686",
                        "outline-variant": "#c3c6d7"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "sm": "8px",
                        "container-max": "1440px",
                        "sidebar-width": "260px",
                        "md": "16px",
                        "lg": "24px",
                        "xl": "32px",
                        "unit": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Inter"],
                        "body-lg": ["Inter"],
                        "code": ["Geist"],
                        "label-md": ["Geist"],
                        "headline-md": ["Inter"],
                        "display": ["Inter"],
                        "body-md": ["Inter"]
                    },
                    "fontSize": {
                        "headline-lg": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "code": ["13px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "label-md": ["13px", {"lineHeight": "18px", "fontWeight": "500"}],
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "display": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
        }
        .active-stepper-line {
            background: linear-gradient(to bottom, #0053db 50%, #e2e8f0 50%);
        }
    </style>
</head>
<body class="bg-surface font-body-md text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
<!-- TopNavBar -->
<header class="bg-surface border-b border-outline-variant fixed top-0 left-0 right-0 z-50">
<div class="flex justify-between items-center w-full px-lg h-16 max-w-container-max mx-auto">
<div class="flex items-center gap-xl">
<span class="text-headline-md font-headline-md font-bold text-primary">Magnetstructure</span>
<nav class="hidden md:flex items-center gap-lg">
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Dashboard</a>
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="#">Planning Baru</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Template</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Dokumentasi</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">GitHub</a>
</nav>
</div>
<div class="flex items-center gap-md">
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
<span class="material-symbols-outlined">help</span>
</button>
<div class="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Professional headshot of a software architect in a bright, modern office setting. High-key lighting, soft blue background tones, corporate minimalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe_CupigL0v5QopALWFFGlUgHkqwpo9Wzu5IC6S42Nt7lo62lqS1gZA_2xYM3csLtj5ve5U4UQUR9-0ZidKeYpRpyU9YudH7cGvCrZo8QwGjHJPJuKwJL-alD3qA2SznMlDwsIh6aOfTsrN2QiqgLrA_jX2PvBSGd1RBYjpeEd0T4nYPJbIpCR2_2AOCeOGUegPFA-ULUXZrtTsV3q1nzbNAf1K3Qt_iZzctKBfhHrBtb8RocGI9WcCWFIL3gZb-dtTFC9BqjNRhM"/>
</div>
</div>
</div>
</header>
<div class="flex pt-16 h-screen overflow-hidden">
<!-- SideNavBar / Workflow Stepper -->
<aside class="flex flex-col py-lg w-[260px] h-full overflow-y-auto bg-surface border-r border-outline-variant fixed left-0 top-16">
<div class="px-lg mb-xl">
<h2 class="text-headline-sm font-headline-sm font-bold text-on-surface">Project Planning</h2>
<p class="text-label-md font-label-md text-on-surface-variant">Workflow Stepper</p>
</div>
<nav class="flex flex-col gap-xs px-xs">
<!-- Step 1 -->
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 opacity-60">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="font-label-md text-label-md">Referensi</span>
</div>
<!-- Step 2 -->
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 opacity-60">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="font-label-md text-label-md">Discovery</span>
</div>
<!-- Step 3 -->
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 opacity-60">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="font-label-md text-label-md">Pertanyaan</span>
</div>
<!-- Step 4 Active -->
<div class="flex items-center gap-md text-primary font-bold border-l-2 border-primary pl-4 py-3 bg-surface-container-low transition-transform duration-200">
<span class="material-symbols-outlined">account_tree</span>
<span class="font-label-md text-label-md">Struktur</span>
</div>
<!-- Step 5 -->
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all">
<span class="material-symbols-outlined">visibility</span>
<span class="font-label-md text-label-md">Preview</span>
</div>
<!-- Step 6 -->
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all">
<span class="material-symbols-outlined">download</span>
<span class="font-label-md text-label-md">Generate</span>
</div>
</nav>
</aside>
<!-- Main Workspace Canvas -->
<main class="ml-[260px] flex-1 flex flex-col h-full bg-surface-container-low overflow-hidden">
<!-- Canvas Header -->
<div class="px-lg py-md bg-surface border-b border-outline-variant flex justify-between items-center shrink-0">
<div>
<h1 class="text-headline-sm font-headline-sm">Editor Modul &amp; Menu</h1>
<p class="text-body-md text-on-surface-variant">Konfigurasi hierarki sistem dan hak akses peran.</p>
</div>
<div class="flex gap-sm">
<button class="px-md py-sm bg-surface border border-outline text-primary rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">Batal</button>
<button class="px-md py-sm bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center gap-xs">
<span class="material-symbols-outlined text-[18px]">save</span>
                        Simpan Struktur
                    </button>
</div>
</div>
<!-- Three-Column Layout -->
<div class="flex flex-1 overflow-hidden">
<!-- Column 1: Module List -->
<section class="w-1/4 border-r border-outline-variant bg-surface flex flex-col">
<div class="p-md border-b border-outline-variant flex justify-between items-center">
<span class="font-bold text-label-md uppercase tracking-wider text-on-surface-variant">Daftar Modul</span>
<button class="text-primary hover:bg-primary-fixed p-1 rounded transition-colors" title="Tambah Modul">
<span class="material-symbols-outlined">add_box</span>
</button>
</div>
<div class="flex-1 overflow-y-auto custom-scrollbar p-sm space-y-sm">
<!-- Module Item Active -->
<div class="group relative bg-surface-container-high border border-primary p-md rounded-lg cursor-pointer transition-all">
<div class="flex justify-between items-start mb-xs">
<span class="text-[10px] font-code bg-primary-container text-on-primary-container px-1.5 py-0.5 rounded">MOD-001</span>
<div class="flex opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-[16px] text-on-surface-variant hover:text-primary px-1">drag_indicator</span>
<span class="material-symbols-outlined text-[16px] text-on-surface-variant hover:text-error px-1">delete</span>
</div>
</div>
<h3 class="font-bold text-on-surface text-body-md">Manajemen Inventaris</h3>
<p class="text-[12px] text-on-surface-variant">4 Menus • Dashboard, Stok, In, Out</p>
</div>
<!-- Module Item -->
<div class="group relative bg-surface border border-outline-variant p-md rounded-lg cursor-pointer hover:border-primary transition-all">
<div class="flex justify-between items-start mb-xs">
<span class="text-[10px] font-code bg-surface-container-highest text-on-surface-variant px-1.5 py-0.5 rounded">MOD-002</span>
<div class="flex opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-[16px] text-on-surface-variant px-1">drag_indicator</span>
</div>
</div>
<h3 class="font-bold text-on-surface text-body-md">Sumber Daya Manusia</h3>
<p class="text-[12px] text-on-surface-variant">2 Menus • Karyawan, Payroll</p>
</div>
<!-- Module Item -->
<div class="group relative bg-surface border border-outline-variant p-md rounded-lg cursor-pointer hover:border-primary transition-all">
<div class="flex justify-between items-start mb-xs">
<span class="text-[10px] font-code bg-surface-container-highest text-on-surface-variant px-1.5 py-0.5 rounded">MOD-003</span>
</div>
<h3 class="font-bold text-on-surface text-body-md">Laporan Keuangan</h3>
<p class="text-[12px] text-on-surface-variant">6 Menus • Neraca, Rugi Laba...</p>
</div>
</div>
</section>
<!-- Column 2: Menus inside Module -->
<section class="w-1/4 border-r border-outline-variant bg-surface-container-lowest flex flex-col">
<div class="p-md border-b border-outline-variant flex justify-between items-center bg-surface">
<span class="font-bold text-label-md uppercase tracking-wider text-on-surface-variant">Menu Modul</span>
<button class="text-primary hover:bg-primary-fixed p-1 rounded transition-colors" title="Tambah Menu">
<span class="material-symbols-outlined">add_circle</span>
</button>
</div>
<div class="flex-1 overflow-y-auto custom-scrollbar p-sm space-y-xs">
<!-- Menu Item -->
<div class="flex items-center gap-sm p-sm rounded hover:bg-surface-container cursor-pointer text-on-surface-variant">
<span class="material-symbols-outlined text-[20px]">dashboard</span>
<span class="text-body-md flex-1">Dashboard</span>
<span class="text-[10px] font-code text-outline">MENU-001</span>
</div>
<!-- Menu Item Active -->
<div class="flex items-center gap-sm p-sm rounded bg-primary-container text-on-primary-container cursor-pointer">
<span class="material-symbols-outlined text-[20px]">inventory_2</span>
<span class="text-body-md font-bold flex-1">Daftar Stok Barang</span>
<span class="text-[10px] font-code">MENU-002</span>
</div>
<!-- Menu Item -->
<div class="flex items-center gap-sm p-sm rounded hover:bg-surface-container cursor-pointer text-on-surface-variant">
<span class="material-symbols-outlined text-[20px]">login</span>
<span class="text-body-md flex-1">Barang Masuk</span>
<span class="text-[10px] font-code text-outline">MENU-003</span>
</div>
<!-- Menu Item -->
<div class="flex items-center gap-sm p-sm rounded hover:bg-surface-container cursor-pointer text-on-surface-variant">
<span class="material-symbols-outlined text-[20px]">logout</span>
<span class="text-body-md flex-1">Barang Keluar</span>
<span class="text-[10px] font-code text-outline">MENU-004</span>
</div>
<div class="mt-md border-t border-outline-variant pt-md px-sm">
<div class="flex items-center gap-sm text-[12px] text-outline italic">
<span class="material-symbols-outlined text-[16px]">info</span>
<span>Seret untuk mengatur urutan menu</span>
</div>
</div>
</div>
</section>
<!-- Column 3: Selected Item Details -->
<section class="flex-1 bg-surface-container-low flex flex-col">
<div class="p-lg overflow-y-auto custom-scrollbar">
<div class="max-w-3xl mx-auto space-y-xl">
<!-- Header Detail -->
<div class="flex items-center gap-md">
<div class="h-14 w-14 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-lg shadow-primary/20">
<span class="material-symbols-outlined text-[32px]">inventory_2</span>
</div>
<div>
<div class="flex items-center gap-sm">
<h2 class="text-headline-md font-headline-md">Detail Menu</h2>
<span class="px-2 py-0.5 rounded bg-outline-variant text-on-surface text-[11px] font-code uppercase">MENU-002</span>
</div>
<p class="text-body-md text-on-surface-variant">Konfigurasi endpoint, tampilan, dan izin akses.</p>
</div>
</div>
<!-- Basic Configuration Card -->
<div class="bg-surface rounded-xl border border-outline-variant p-lg space-y-lg shadow-sm">
<div class="grid grid-cols-2 gap-lg">
<div class="space-y-xs">
<label class="font-label-md text-label-md text-on-surface-variant">Nama Menu</label>
<input class="w-full bg-surface-container-lowest border-outline-variant rounded-lg px-md py-sm focus:ring-primary focus:border-primary" type="text" value="Daftar Stok Barang"/>
</div>
<div class="space-y-xs">
<label class="font-label-md text-label-md text-on-surface-variant">Ikon (Material Symbol)</label>
<div class="relative">
<input class="w-full bg-surface-container-lowest border-outline-variant rounded-lg pl-10 pr-md py-sm focus:ring-primary focus:border-primary" type="text" value="inventory_2"/>
<span class="material-symbols-outlined absolute left-3 top-2.5 text-[20px] text-primary">inventory_2</span>
</div>
</div>
</div>
<div class="space-y-xs">
<label class="font-label-md text-label-md text-on-surface-variant">Route URL</label>
<div class="flex items-center">
<span class="bg-surface-container-highest px-md py-sm border border-r-0 border-outline-variant rounded-l-lg text-[13px] text-outline">/inventory/</span>
<input class="flex-1 bg-surface-container-lowest border-outline-variant rounded-r-lg px-md py-sm focus:ring-primary focus:border-primary" type="text" value="stock-list"/>
</div>
</div>
<div class="grid grid-cols-2 gap-lg">
<div class="space-y-xs">
<label class="font-label-md text-label-md text-on-surface-variant">Tipe Tampilan</label>
<select class="w-full bg-surface-container-lowest border-outline-variant rounded-lg px-md py-sm focus:ring-primary focus:border-primary">
<option selected="">Table (Data Grid)</option>
<option>Form (Input)</option>
<option>Detail (View)</option>
<option>Chart (Analytics)</option>
<option>Kanban (Workflow)</option>
</select>
</div>
<div class="space-y-xs">
<label class="font-label-md text-label-md text-on-surface-variant">Parent Modul</label>
<select class="w-full bg-surface-container-lowest border-outline-variant rounded-lg px-md py-sm focus:ring-primary focus:border-primary">
<option selected="">MOD-001 (Manajemen Inventaris)</option>
<option>MOD-002 (SDM)</option>
</select>
</div>
</div>
</div>
<!-- Features & Standards -->
<div class="space-y-md">
<h3 class="font-bold text-label-md uppercase tracking-wider text-on-surface-variant">Standar &amp; Fitur</h3>
<div class="flex flex-wrap gap-sm">
<!-- Active Chip -->
<button class="px-md py-sm bg-primary text-on-primary rounded-full font-label-md text-label-md flex items-center gap-xs">
<span class="material-symbols-outlined text-[16px]">check</span>
                                        Pagination
                                    </button>
<button class="px-md py-sm bg-primary text-on-primary rounded-full font-label-md text-label-md flex items-center gap-xs">
<span class="material-symbols-outlined text-[16px]">check</span>
                                        Sorting
                                    </button>
<button class="px-md py-sm bg-primary text-on-primary rounded-full font-label-md text-label-md flex items-center gap-xs">
<span class="material-symbols-outlined text-[16px]">check</span>
                                        Search
                                    </button>
<!-- Inactive Chip -->
<button class="px-md py-sm bg-surface-container border border-outline-variant text-on-surface-variant rounded-full font-label-md text-label-md hover:bg-surface-variant transition-colors">
                                        Export PDF/Excel
                                    </button>
<button class="px-md py-sm bg-surface-container border border-outline-variant text-on-surface-variant rounded-full font-label-md text-label-md hover:bg-surface-variant transition-colors">
                                        Bulk Edit
                                    </button>
</div>
</div>
<!-- Roles Access Control -->
<div class="space-y-md">
<h3 class="font-bold text-label-md uppercase tracking-wider text-on-surface-variant">Izin Akses Peran</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-sm">
<div class="p-md bg-surface border border-outline-variant rounded-lg flex items-center justify-between">
<div class="flex items-center gap-md">
<div class="h-8 w-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">admin_panel_settings</span>
</div>
<span class="font-medium text-body-md">Super Admin</span>
</div>
<input checked="" class="text-primary focus:ring-primary rounded" type="checkbox"/>
</div>
<div class="p-md bg-surface border border-outline-variant rounded-lg flex items-center justify-between">
<div class="flex items-center gap-md">
<div class="h-8 w-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">person</span>
</div>
<span class="font-medium text-body-md">Operator Gudang</span>
</div>
<input checked="" class="text-primary focus:ring-primary rounded" type="checkbox"/>
</div>
<div class="p-md bg-surface border border-outline-variant rounded-lg flex items-center justify-between">
<div class="flex items-center gap-md">
<div class="h-8 w-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">manage_accounts</span>
</div>
<span class="font-medium text-body-md">Manager</span>
</div>
<input checked="" class="text-primary focus:ring-primary rounded" type="checkbox"/>
</div>
<div class="p-md bg-surface-container-low border border-outline-variant border-dashed rounded-lg flex items-center justify-center">
<button class="text-primary font-label-md text-label-md hover:underline">+ Tambah Peran Baru</button>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
</div>
<!-- Floating Tooltip/Hint for Interactive Editor -->
<div class="fixed bottom-lg right-lg bg-inverse-surface text-inverse-on-surface px-lg py-md rounded-xl shadow-xl flex items-center gap-md transform translate-y-20 transition-transform duration-300 z-[100]" id="toast">
<span class="material-symbols-outlined text-secondary-fixed">auto_awesome</span>
<div>
<p class="font-bold text-label-md">Mode Editor Aktif</p>
<p class="text-[12px] opacity-80">Perubahan akan disimpan otomatis sebagai draft.</p>
</div>
<button class="ml-xl opacity-60 hover:opacity-100" onclick="this.parentElement.style.display='none'">
<span class="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
<script>
        // Simple Micro-interactions
        document.addEventListener('DOMContentLoaded', () => {
            const toast = document.getElementById('toast');
            setTimeout(() => {
                toast.classList.remove('translate-y-20');
            }, 1000);

            // Handle module switching simulation
            const moduleItems = document.querySelectorAll('section:nth-child(1) .group');
            moduleItems.forEach(item => {
                item.addEventListener('click', () => {
                    moduleItems.forEach(i => i.classList.remove('bg-surface-container-high', 'border-primary'));
                    item.classList.add('bg-surface-container-high', 'border-primary');
                });
            });

            // Handle menu switching simulation
            const menuItems = document.querySelectorAll('section:nth-child(2) div[class*="cursor-pointer"]');
            menuItems.forEach(item => {
                item.addEventListener('click', () => {
                    menuItems.forEach(i => {
                        i.classList.remove('bg-primary-container', 'text-on-primary-container', 'font-bold');
                        i.classList.add('text-on-surface-variant', 'hover:bg-surface-container');
                    });
                    item.classList.remove('text-on-surface-variant', 'hover:bg-surface-container');
                    item.classList.add('bg-primary-container', 'text-on-primary-container', 'font-bold');
                });
            });
        });
    </script>
</body></html>

<!-- Module & Menu Editor -->
<!DOCTYPE html>

<html class="light" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Magnetstructure - Preview Project Planning</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Geist:wght@400;500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .file-tree-guide {
            position: relative;
        }
        .file-tree-guide::before {
            content: '';
            position: absolute;
            left: 8px;
            top: 0;
            bottom: 0;
            width: 1px;
            background-color: #e2e8f0; /* Slate-200 */
        }
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary-fixed": "#002109",
                        "on-secondary": "#ffffff",
                        "on-error": "#ffffff",
                        "on-background": "#131b2e",
                        "tertiary-fixed": "#ffdcc3",
                        "secondary-container": "#7cf994",
                        "surface": "#faf8ff",
                        "on-surface-variant": "#434655",
                        "surface-variant": "#dae2fd",
                        "on-tertiary-fixed": "#2f1500",
                        "tertiary-fixed-dim": "#ffb77d",
                        "on-secondary-container": "#007230",
                        "surface-bright": "#faf8ff",
                        "secondary-fixed": "#7ffc97",
                        "surface-tint": "#0053db",
                        "on-tertiary": "#ffffff",
                        "inverse-primary": "#b4c5ff",
                        "surface-container-low": "#f2f3ff",
                        "on-primary": "#ffffff",
                        "surface-container": "#eaedff",
                        "background": "#faf8ff",
                        "error": "#ba1a1a",
                        "inverse-surface": "#283044",
                        "on-tertiary-fixed-variant": "#6e3900",
                        "on-primary-container": "#eeefff",
                        "on-primary-fixed-variant": "#003ea8",
                        "on-tertiary-container": "#ffede1",
                        "secondary": "#006e2d",
                        "primary-fixed": "#dbe1ff",
                        "primary-container": "#2563eb",
                        "inverse-on-surface": "#eef0ff",
                        "tertiary-container": "#a65900",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed-variant": "#005320",
                        "primary": "#004ac6",
                        "tertiary": "#824500",
                        "surface-container-high": "#e2e7ff",
                        "on-primary-fixed": "#00174b",
                        "surface-dim": "#d2d9f4",
                        "surface-container-highest": "#dae2fd",
                        "on-surface": "#131b2e",
                        "secondary-fixed-dim": "#62df7d",
                        "error-container": "#ffdad6",
                        "on-error-container": "#93000a",
                        "primary-fixed-dim": "#b4c5ff",
                        "outline": "#737686",
                        "outline-variant": "#c3c6d7"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "sm": "8px",
                        "container-max": "1440px",
                        "sidebar-width": "260px",
                        "md": "16px",
                        "lg": "24px",
                        "xl": "32px",
                        "unit": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Inter"],
                        "body-lg": ["Inter"],
                        "code": ["Geist"],
                        "label-md": ["Geist"],
                        "headline-md": ["Inter"],
                        "display": ["Inter"],
                        "body-md": ["Inter"]
                    },
                    "fontSize": {
                        "headline-lg": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "code": ["13px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "label-md": ["13px", {"lineHeight": "18px", "fontWeight": "500"}],
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "display": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}]
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-surface font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container">
<!-- TopNavBar -->
<header class="bg-surface border-b border-outline-variant fixed top-0 left-0 right-0 z-50">
<div class="flex justify-between items-center w-full px-lg h-16 max-w-container-max mx-auto">
<div class="flex items-center gap-md">
<span class="text-headline-md font-headline-md font-bold text-primary">Magnetstructure</span>
</div>
<nav class="hidden md:flex items-center gap-lg">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Planning Baru</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Template</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Dokumentasi</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">GitHub</a>
</nav>
<div class="flex items-center gap-md">
<button class="p-xs text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-xs text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
<span class="material-symbols-outlined">help</span>
</button>
<div class="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="User profile photo" data-alt="A professional headshot of a software architect in a bright, modern studio with soft blue ambient lighting. The person is smiling confidently, wearing a dark grey polo shirt. High-end minimalist corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Gh6UwGPKTB90AUvXI6VYMiB612s_xPWNUVpzd-A654gl7VKcFr0XJEfg3Ej928p1tKK7DhpJIzMuDQp9nhYKZL5oDK1Bebg9owQQKBDsD-gA8jh4VhgPDPAQgiqIBn2THjr4bSWgC8vmXBOeLGLGfNAlmauqMlP-iPCXdoSXKb2r-pTqt6yPyJBOrmQu_tBP7KqIZqaxKB-rdj9kugWrV6bImHwpZOLr-dz8bwZl3oXMBy93IbfM7HFxyqki2QeHgYAudKGqvgU"/>
</div>
</div>
</div>
</header>
<div class="flex pt-16 min-h-screen">
<!-- SideNavBar (Workflow Stepper) -->
<aside class="fixed left-0 top-16 h-full w-[260px] bg-surface border-r border-outline-variant py-lg flex flex-col z-40 overflow-y-auto">
<div class="px-md mb-lg">
<div class="flex items-center gap-sm">
<div class="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary">
<span class="material-symbols-outlined">account_tree</span>
</div>
<div>
<h2 class="text-headline-sm font-headline-sm font-bold text-on-surface">Project Planning</h2>
<p class="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Workflow Stepper</p>
</div>
</div>
</div>
<nav class="flex flex-col gap-xs px-xs">
<!-- Step 1: Referensi (Completed) -->
<a class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all group relative" href="#">
<div class="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-on-secondary shrink-0">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
<span class="font-label-md text-label-md">Referensi</span>
<div class="absolute left-7 top-9 w-[1px] h-4 bg-outline-variant"></div>
</a>
<!-- Step 2: Discovery (Completed) -->
<a class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all group relative" href="#">
<div class="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-on-secondary shrink-0">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
<span class="font-label-md text-label-md">Discovery</span>
<div class="absolute left-7 top-9 w-[1px] h-4 bg-outline-variant"></div>
</a>
<!-- Step 3: Pertanyaan (Completed) -->
<a class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all group relative" href="#">
<div class="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-on-secondary shrink-0">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
<span class="font-label-md text-label-md">Pertanyaan</span>
<div class="absolute left-7 top-9 w-[1px] h-4 bg-outline-variant"></div>
</a>
<!-- Step 4: Struktur (Completed) -->
<a class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all group relative" href="#">
<div class="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-on-secondary shrink-0">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
<span class="font-label-md text-label-md">Struktur</span>
<div class="absolute left-7 top-9 w-[1px] h-4 bg-outline-variant"></div>
</a>
<!-- Step 5: Preview (ACTIVE) -->
<a class="flex items-center gap-md text-primary font-bold border-l-2 border-primary pl-4 py-3 bg-surface-container-low translate-x-1 transition-transform duration-200" href="#">
<div class="flex items-center justify-center w-6 h-6 rounded-full ring-2 ring-primary bg-primary text-on-primary shrink-0">
<span class="material-symbols-outlined text-[16px]">visibility</span>
</div>
<span class="font-label-md text-label-md">Preview</span>
<div class="absolute left-[27px] top-9 w-[1px] h-4 bg-outline-variant"></div>
</a>
<!-- Step 6: Generate -->
<a class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all" href="#">
<div class="flex items-center justify-center w-6 h-6 rounded-full border-2 border-outline-variant text-outline-variant shrink-0">
<span class="material-symbols-outlined text-[16px]">download</span>
</div>
<span class="font-label-md text-label-md">Generate</span>
</a>
</nav>
<div class="mt-auto px-md py-lg">
<button class="w-full py-md bg-primary text-on-primary rounded-lg font-bold flex items-center justify-center gap-sm hover:opacity-90 transition-opacity">
<span class="material-symbols-outlined">folder_zip</span>
                    Generate Planning ZIP
                </button>
</div>
</aside>
<!-- Main Content -->
<main class="ml-[260px] flex-1 bg-surface-container-lowest p-lg overflow-x-hidden">
<!-- Top Summary Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-5 gap-md mb-lg">
<div class="bg-surface border border-outline-variant p-md rounded-xl flex flex-col gap-xs">
<span class="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Total Modul</span>
<div class="flex items-baseline gap-xs">
<span class="text-display font-display text-primary">12</span>
<span class="text-xs text-secondary font-semibold">+2 Baru</span>
</div>
</div>
<div class="bg-surface border border-outline-variant p-md rounded-xl flex flex-col gap-xs">
<span class="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Menu Apps</span>
<div class="flex items-baseline gap-xs">
<span class="text-display font-display">08</span>
<span class="text-xs text-on-surface-variant">Active</span>
</div>
</div>
<div class="bg-surface border border-outline-variant p-md rounded-xl flex flex-col gap-xs">
<span class="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">File Markdown</span>
<div class="flex items-baseline gap-xs">
<span class="text-display font-display">24</span>
<span class="text-xs text-on-surface-variant">Docs</span>
</div>
</div>
<div class="bg-surface border border-outline-variant p-md rounded-xl flex flex-col gap-xs">
<span class="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Test Scenarios</span>
<div class="flex items-baseline gap-xs">
<span class="text-display font-display">56</span>
<span class="text-xs text-on-surface-variant">Cases</span>
</div>
</div>
<div class="bg-surface border border-outline-variant p-md rounded-xl flex flex-col gap-xs ring-2 ring-error/10">
<span class="text-xs font-semibold text-error uppercase tracking-wider">Open Questions</span>
<div class="flex items-baseline gap-xs">
<span class="text-display font-display text-error">03</span>
<span class="text-xs text-error font-semibold">Pending</span>
</div>
</div>
</div>
<!-- Filters & Controls -->
<div class="flex flex-wrap items-center justify-between gap-md mb-md">
<div class="flex items-center gap-xs overflow-x-auto pb-1 no-scrollbar">
<button class="px-md py-sm bg-primary text-on-primary rounded-full font-label-md text-label-md whitespace-nowrap">Semua File</button>
<button class="px-md py-sm bg-surface-container border border-outline-variant text-on-surface-variant hover:bg-surface-container-high rounded-full font-label-md text-label-md whitespace-nowrap transition-all">Project</button>
<button class="px-md py-sm bg-surface-container border border-outline-variant text-on-surface-variant hover:bg-surface-container-high rounded-full font-label-md text-label-md whitespace-nowrap transition-all">Architecture</button>
<button class="px-md py-sm bg-surface-container border border-outline-variant text-on-surface-variant hover:bg-surface-container-high rounded-full font-label-md text-label-md whitespace-nowrap transition-all">Standards</button>
<button class="px-md py-sm bg-surface-container border border-outline-variant text-on-surface-variant hover:bg-surface-container-high rounded-full font-label-md text-label-md whitespace-nowrap transition-all">Modules</button>
</div>
<div class="flex items-center gap-sm">
<div class="relative group">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input class="pl-10 pr-4 py-sm bg-surface border border-outline-variant rounded-lg text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all w-64" placeholder="Cari planning docs..." type="text"/>
</div>
</div>
</div>
<!-- Layout: Explorer + Preview -->
<div class="flex h-[calc(100vh-340px)] gap-lg">
<!-- VS Code Style Explorer -->
<div class="w-1/3 min-w-[320px] bg-surface border border-outline-variant rounded-xl flex flex-col overflow-hidden">
<div class="flex items-center justify-between px-md py-sm border-b border-outline-variant bg-surface-container-low">
<span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Explorer: Project Planning</span>
<div class="flex gap-xs">
<button class="p-xs hover:bg-surface-container rounded transition-all"><span class="material-symbols-outlined text-[18px]">create_new_folder</span></button>
<button class="p-xs hover:bg-surface-container rounded transition-all"><span class="material-symbols-outlined text-[18px]">refresh</span></button>
<button class="p-xs hover:bg-surface-container rounded transition-all"><span class="material-symbols-outlined text-[18px]">unfold_less</span></button>
</div>
</div>
<div class="flex-1 overflow-y-auto p-xs font-code text-code text-on-surface-variant">
<!-- File Tree -->
<div class="flex flex-col gap-0">
<!-- Folder -->
<div class="flex items-center gap-xs py-1 px-2 hover:bg-surface-container cursor-pointer rounded">
<span class="material-symbols-outlined text-[18px] text-outline">expand_more</span>
<span class="material-symbols-outlined text-[18px] text-tertiary">folder</span>
<span>00_project_brief</span>
</div>
<div class="file-tree-guide ml-6">
<div class="flex items-center gap-xs py-1 px-2 hover:bg-surface-container cursor-pointer rounded">
<span class="material-symbols-outlined text-[18px] text-secondary">description</span>
<span>vision_and_scope.md</span>
</div>
<div class="flex items-center gap-xs py-1 px-2 hover:bg-surface-container cursor-pointer rounded">
<span class="material-symbols-outlined text-[18px] text-secondary">description</span>
<span>stakeholders.md</span>
</div>
</div>
<!-- Folder Active -->
<div class="flex items-center gap-xs py-1 px-2 hover:bg-surface-container cursor-pointer rounded">
<span class="material-symbols-outlined text-[18px] text-outline">expand_more</span>
<span class="material-symbols-outlined text-[18px] text-tertiary">folder_open</span>
<span>01_architecture</span>
</div>
<div class="file-tree-guide ml-6">
<div class="flex items-center gap-xs py-1 px-2 hover:bg-surface-container cursor-pointer rounded bg-primary-container/10 border-r-2 border-primary">
<span class="material-symbols-outlined text-[18px] text-secondary" style="font-variation-settings: 'FILL' 1;">description</span>
<span class="text-primary font-bold">system_design.md</span>
</div>
<div class="flex items-center gap-xs py-1 px-2 hover:bg-surface-container cursor-pointer rounded">
<span class="material-symbols-outlined text-[18px] text-secondary">description</span>
<span>database_schema.md</span>
</div>
<div class="flex items-center gap-xs py-1 px-2 hover:bg-surface-container cursor-pointer rounded">
<span class="material-symbols-outlined text-[18px] text-secondary">description</span>
<span>api_contracts.md</span>
</div>
</div>
<!-- Folder -->
<div class="flex items-center gap-xs py-1 px-2 hover:bg-surface-container cursor-pointer rounded">
<span class="material-symbols-outlined text-[18px] text-outline">chevron_right</span>
<span class="material-symbols-outlined text-[18px] text-tertiary">folder</span>
<span>02_modules</span>
</div>
<!-- Folder -->
<div class="flex items-center gap-xs py-1 px-2 hover:bg-surface-container cursor-pointer rounded">
<span class="material-symbols-outlined text-[18px] text-outline">chevron_right</span>
<span class="material-symbols-outlined text-[18px] text-tertiary">folder</span>
<span>03_test_suites</span>
</div>
<div class="flex items-center gap-xs py-1 px-2 hover:bg-surface-container cursor-pointer rounded mt-sm">
<span class="material-symbols-outlined text-[18px] text-secondary">article</span>
<span>README.md</span>
</div>
<div class="flex items-center gap-xs py-1 px-2 hover:bg-surface-container cursor-pointer rounded">
<span class="material-symbols-outlined text-[18px] text-secondary">settings</span>
<span>planning_config.json</span>
</div>
</div>
</div>
</div>
<!-- Markdown Preview Panel -->
<div class="flex-1 bg-surface border border-outline-variant rounded-xl flex flex-col overflow-hidden">
<div class="flex items-center justify-between px-md py-sm border-b border-outline-variant bg-surface-container-low">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-[18px] text-secondary">description</span>
<span class="text-body-md font-semibold text-on-surface">system_design.md</span>
<span class="px-sm py-0.5 bg-secondary-container/20 text-secondary text-[11px] font-bold rounded uppercase">Draft</span>
</div>
<div class="flex items-center gap-md">
<div class="flex rounded-md border border-outline-variant overflow-hidden">
<button class="px-sm py-1 bg-surface-container-high text-on-surface font-label-md text-label-md">Edit</button>
<button class="px-sm py-1 bg-primary text-on-primary font-label-md text-label-md">Preview</button>
</div>
<button class="text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined text-[20px]">more_vert</span></button>
</div>
</div>
<div class="flex-1 overflow-y-auto p-xl prose prose-slate max-w-none bg-surface-container-lowest">
<!-- Markdown Content Simulation -->
<div class="max-w-3xl mx-auto">
<h1 class="text-display font-display text-on-surface mb-md border-b border-outline-variant pb-xs">Arsitektur Sistem: Magnetstructure Core</h1>
<p class="text-body-lg text-on-surface-variant mb-lg leading-relaxed">
                                Dokumen ini menjelaskan struktur tingkat tinggi dari sistem Magnetstructure Core v2. Fokus utama adalah pada skalabilitas modul dan integritas sinkronisasi data antar micro-services.
                            </p>
<h2 class="text-headline-lg font-headline-lg text-on-surface mt-xl mb-md border-b border-outline-variant pb-xs">1. Gambaran Umum</h2>
<p class="text-body-md text-on-surface-variant mb-md">
                                Sistem dirancang menggunakan pola <strong>Hexagonal Architecture</strong> untuk memastikan decoupling antara core business logic dan external adapters.
                            </p>
<div class="my-lg p-md bg-surface-container rounded-lg border-l-4 border-primary">
<p class="text-body-md font-semibold text-primary mb-xs">💡 Key Requirements</p>
<ul class="list-disc ml-md text-body-md text-on-surface-variant">
<li>Latency di bawah 200ms untuk modul planning.</li>
<li>Mendukung ekspor format ZIP dan PDF secara native.</li>
<li>Integritas Markdown standar CommonMark.</li>
</ul>
</div>
<h2 class="text-headline-lg font-headline-lg text-on-surface mt-xl mb-md border-b border-outline-variant pb-xs">2. Komponen Utama</h2>
<table class="w-full border-collapse border border-outline-variant mb-md">
<thead class="bg-surface-container">
<tr>
<th class="border border-outline-variant p-sm text-left font-label-md text-label-md">Komponen</th>
<th class="border border-outline-variant p-sm text-left font-label-md text-label-md">Deskripsi</th>
</tr>
</thead>
<tbody class="text-body-md">
<tr>
<td class="border border-outline-variant p-sm font-semibold">Parser Service</td>
<td class="border border-outline-variant p-sm">Mengolah referensi file menjadi metadata terstruktur.</td>
</tr>
<tr>
<td class="border border-outline-variant p-sm font-semibold">Planning Engine</td>
<td class="border border-outline-variant p-sm">Logic utama untuk generating workflow steps.</td>
</tr>
</tbody>
</table>
<h2 class="text-headline-lg font-headline-lg text-on-surface mt-xl mb-md border-b border-outline-variant pb-xs">3. Code Example (Preview)</h2>
<div class="bg-inverse-surface text-on-primary-container p-md rounded-lg font-code text-code overflow-x-auto my-md">
<pre><code>// Example Interface Implementation
interface ProjectModule {
  id: string;
  name: string;
  status: 'PENDING' | 'GENERATED';
  execute(): Promise<void>;
}</code></pre>
</div>
<div class="mt-xl flex items-center justify-between p-md border border-outline-variant rounded-xl bg-surface">
<div class="flex items-center gap-md">
<div class="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-[24px]">verified</span>
</div>
<div>
<p class="font-bold text-on-surface">Validasi Struktur Berhasil</p>
<p class="text-xs text-on-surface-variant">Tidak ditemukan error pada file markdown ini.</p>
</div>
</div>
<button class="px-md py-sm border border-outline-variant hover:bg-surface-container rounded-lg transition-all text-body-md font-semibold">Tandai Selesai</button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
<!-- Micro-interaction Scripts -->
<script>
        document.querySelectorAll('.cursor-pointer').forEach(item => {
            item.addEventListener('click', function() {
                // Remove active states from others
                document.querySelectorAll('.bg-primary-container\\/10').forEach(el => {
                    el.classList.remove('bg-primary-container/10', 'border-r-2', 'border-primary');
                    el.querySelector('span:last-child').classList.remove('text-primary', 'font-bold');
                });
                
                // Add active state to clicked (if it's a file)
                if (this.querySelector('.text-secondary')) {
                    this.classList.add('bg-primary-container/10', 'border-r-2', 'border-primary');
                    this.querySelector('span:last-child').classList.add('text-primary', 'font-bold');
                }
            });
        });
    </script>
</body></html>

<!-- Planning Tree Preview -->
<!DOCTYPE html>

<html class="light" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Magnetstructure - Proses Generate</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Geist:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary-fixed": "#002109",
                        "on-secondary": "#ffffff",
                        "on-error": "#ffffff",
                        "on-background": "#131b2e",
                        "tertiary-fixed": "#ffdcc3",
                        "secondary-container": "#7cf994",
                        "surface": "#faf8ff",
                        "on-surface-variant": "#434655",
                        "surface-variant": "#dae2fd",
                        "on-tertiary-fixed": "#2f1500",
                        "tertiary-fixed-dim": "#ffb77d",
                        "on-secondary-container": "#007230",
                        "surface-bright": "#faf8ff",
                        "secondary-fixed": "#7ffc97",
                        "surface-tint": "#0053db",
                        "on-tertiary": "#ffffff",
                        "inverse-primary": "#b4c5ff",
                        "surface-container-low": "#f2f3ff",
                        "on-primary": "#ffffff",
                        "surface-container": "#eaedff",
                        "background": "#faf8ff",
                        "error": "#ba1a1a",
                        "inverse-surface": "#283044",
                        "on-tertiary-fixed-variant": "#6e3900",
                        "on-primary-container": "#eeefff",
                        "on-primary-fixed-variant": "#003ea8",
                        "on-tertiary-container": "#ffede1",
                        "secondary": "#006e2d",
                        "primary-fixed": "#dbe1ff",
                        "primary-container": "#2563eb",
                        "inverse-on-surface": "#eef0ff",
                        "tertiary-container": "#a65900",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed-variant": "#005320",
                        "primary": "#004ac6",
                        "tertiary": "#824500",
                        "surface-container-high": "#e2e7ff",
                        "on-primary-fixed": "#00174b",
                        "surface-dim": "#d2d9f4",
                        "surface-container-highest": "#dae2fd",
                        "on-surface": "#131b2e",
                        "secondary-fixed-dim": "#62df7d",
                        "error-container": "#ffdad6",
                        "on-error-container": "#93000a",
                        "primary-fixed-dim": "#b4c5ff",
                        "outline": "#737686",
                        "outline-variant": "#c3c6d7"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "sm": "8px",
                        "container-max": "1440px",
                        "sidebar-width": "260px",
                        "md": "16px",
                        "lg": "24px",
                        "xl": "32px",
                        "unit": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Inter"],
                        "body-lg": ["Inter"],
                        "code": ["Geist"],
                        "label-md": ["Geist"],
                        "headline-md": ["Inter"],
                        "display": ["Inter"],
                        "body-md": ["Inter"]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .step-line-active {
            background: linear-gradient(to bottom, #004ac6 0%, #004ac6 50%, #c3c6d7 50%, #c3c6d7 100%);
            background-size: 100% 200%;
            background-position: bottom;
            transition: background-position 1s ease-in-out;
        }
        .step-line-complete {
            background-position: top !important;
        }
        @keyframes pulse-soft {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
        }
        .animate-pulse-soft {
            animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
    </style>
</head>
<body class="bg-surface text-on-surface font-body-md overflow-hidden">
<!-- TopNavBar -->
<header class="bg-surface border-b border-outline-variant fixed top-0 left-0 right-0 z-50">
<div class="flex justify-between items-center w-full px-lg h-16 max-w-container-max mx-auto">
<div class="flex items-center gap-md">
<span class="text-headline-md font-bold text-primary">Magnetstructure</span>
</div>
<nav class="hidden md:flex items-center gap-xl h-full">
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Dashboard</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Planning Baru</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Template</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Dokumentasi</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">GitHub</a>
</nav>
<div class="flex items-center gap-md">
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
<span class="material-symbols-outlined" data-icon="help">help</span>
</button>
<div class="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary text-xs font-bold">JD</div>
</div>
</div>
</header>
<div class="flex h-screen pt-16">
<!-- SideNavBar -->
<aside class="w-[260px] border-r border-outline-variant bg-surface hidden md:flex flex-col py-lg overflow-y-auto">
<div class="px-lg mb-lg">
<div class="flex items-center gap-md mb-xs">
<div class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
<span class="material-symbols-outlined text-primary" data-icon="account_tree">account_tree</span>
</div>
<div>
<h2 class="text-label-md font-bold text-on-surface">Project Planning</h2>
<p class="text-[11px] text-on-surface-variant">Workflow Stepper</p>
</div>
</div>
</div>
<nav class="flex flex-col flex-1">
<a class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined" data-icon="upload_file">upload_file</span>
<span class="font-label-md">Referensi</span>
</a>
<a class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
<span class="font-label-md">Discovery</span>
</a>
<a class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined" data-icon="quiz">quiz</span>
<span class="font-label-md">Pertanyaan</span>
</a>
<a class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined" data-icon="account_tree">account_tree</span>
<span class="font-label-md">Struktur</span>
</a>
<a class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined" data-icon="visibility">visibility</span>
<span class="font-label-md">Preview</span>
</a>
<a class="flex items-center gap-md text-primary font-bold border-l-2 border-primary pl-4 py-3 bg-surface-container-low transition-all" href="#">
<span class="material-symbols-outlined" data-icon="download">download</span>
<span class="font-label-md">Generate</span>
</a>
</nav>
<div class="px-lg mt-auto">
<div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant">
<p class="text-[11px] font-bold text-on-surface-variant mb-xs">Status Sesi</p>
<div class="flex items-center gap-xs">
<div class="w-2 h-2 rounded-full bg-secondary"></div>
<span class="text-xs text-on-surface">Aktif • Step 6</span>
</div>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="flex-1 overflow-y-auto bg-surface relative">
<!-- Background Decorative Element -->
<div class="absolute inset-0 pointer-events-none opacity-[0.03]">

</div>
<div class="max-w-4xl mx-auto px-lg py-xl relative z-10">
<div class="mb-xl flex items-end justify-between">
<div>
<h1 class="font-headline-lg text-headline-lg text-on-surface mb-xs">Menyelesaikan Proyek</h1>
<p class="text-on-surface-variant text-body-md max-w-lg">Kami sedang memproses struktur yang telah Anda buat menjadi paket dokumen siap pakai.</p>
</div>
<div class="text-right">
<span class="text-display font-display text-primary">85%</span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-12 gap-lg">
<!-- Progress Stepper -->
<div class="md:col-span-5 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
<h3 class="font-label-md text-on-surface-variant uppercase tracking-wider mb-lg">Tahapan Generate</h3>
<div class="space-y-0 relative">
<!-- Step 1: Complete -->
<div class="flex gap-lg items-start pb-lg relative">
<div class="absolute left-[11px] top-6 bottom-0 w-[2px] bg-primary"></div>
<div class="relative z-10 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[16px] text-on-primary font-bold" data-icon="check" data-weight="fill">check</span>
</div>
<div class="flex-1">
<h4 class="font-label-md text-on-surface font-semibold">Menyiapkan template</h4>
<p class="text-[12px] text-on-surface-variant">4 berkas template dimuat</p>
</div>
</div>
<!-- Step 2: Complete -->
<div class="flex gap-lg items-start pb-lg relative">
<div class="absolute left-[11px] top-6 bottom-0 w-[2px] bg-primary"></div>
<div class="relative z-10 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[16px] text-on-primary font-bold" data-icon="check" data-weight="fill">check</span>
</div>
<div class="flex-1">
<h4 class="font-label-md text-on-surface font-semibold">Membuat dokumen</h4>
<p class="text-[12px] text-on-surface-variant">12/12 modul berhasil dibuat</p>
</div>
</div>
<!-- Step 3: Active -->
<div class="flex gap-lg items-start pb-lg relative">
<div class="absolute left-[11px] top-6 bottom-0 w-[2px] bg-outline-variant"></div>
<div class="relative z-10 w-6 h-6 rounded-full border-2 border-primary bg-surface-container-lowest flex items-center justify-center">
<div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
</div>
<div class="flex-1">
<h4 class="font-label-md text-primary font-bold">Memvalidasi link</h4>
<p class="text-[12px] text-on-surface-variant animate-pulse-soft">Sedang mengecek referensi antar dokumen...</p>
</div>
</div>
<!-- Step 4: Pending -->
<div class="flex gap-lg items-start">
<div class="relative z-10 w-6 h-6 rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center">
</div>
<div class="flex-1">
<h4 class="font-label-md text-outline">Membuat ZIP</h4>
<p class="text-[12px] text-outline">Menunggu proses validasi</p>
</div>
</div>
</div>
</div>
<!-- Side Stats & Log -->
<div class="md:col-span-7 space-y-lg">
<!-- File Count Card -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm flex items-center justify-between">
<div class="flex items-center gap-md">
<div class="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span class="material-symbols-outlined" data-icon="description">description</span>
</div>
<div>
<p class="text-xs text-on-surface-variant font-medium">Total Berkas Dibuat</p>
<p class="text-headline-md font-bold text-on-surface">12 Berkas</p>
</div>
</div>
<div class="bg-secondary-container/20 px-3 py-1 rounded-full flex items-center gap-1">
<span class="material-symbols-outlined text-[14px] text-on-secondary-container" data-icon="verified" data-weight="fill">verified</span>
<span class="text-[11px] font-bold text-on-secondary-container uppercase">Terverifikasi</span>
</div>
</div>
<!-- Mini Log -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div class="px-md py-3 bg-surface-container flex items-center justify-between border-b border-outline-variant">
<span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Log Aktivitas</span>
<span class="text-[10px] bg-surface-container-highest px-2 py-0.5 rounded text-on-surface-variant">Real-time</span>
</div>
<div class="p-md space-y-3 max-h-[180px] overflow-y-auto font-code text-xs text-on-surface-variant">
<div class="flex gap-xs">
<span class="text-primary font-bold opacity-50">[10:42:01]</span>
<span>Memulai parser untuk <code>structure.json</code>...</span>
</div>
<div class="flex gap-xs">
<span class="text-primary font-bold opacity-50">[10:42:03]</span>
<span>Inject metadata ke <code>index.md</code> berhasil.</span>
</div>
<div class="flex gap-xs">
<span class="text-primary font-bold opacity-50">[10:42:05]</span>
<span>Membangun graf navigasi relasional (12 node)...</span>
</div>
<div class="flex gap-xs">
<span class="text-primary font-bold opacity-50">[10:42:08]</span>
<span class="text-secondary font-medium">Validasi link: 24/48 relasi diperiksa.</span>
</div>
<div class="flex gap-xs animate-pulse-soft" id="dynamic-log">
<span class="text-primary font-bold opacity-50">[10:42:10]</span>
<span>Memproses link referensi module-D...</span>
</div>
</div>
</div>
<!-- Warning / Info Box -->
<div class="p-md border border-tertiary-fixed bg-tertiary-fixed/10 rounded-lg flex gap-md items-start">
<span class="material-symbols-outlined text-tertiary" data-icon="info">info</span>
<div class="text-[12px] text-on-surface-variant leading-relaxed">
<span class="font-bold text-tertiary">Tips:</span> Pastikan koneksi internet stabil hingga proses ZIP selesai. Menutup tab ini akan membatalkan antrian pembuatan berkas.
                            </div>
</div>
</div>
</div>
<!-- Action Bar (Disabled/States) -->
<div class="mt-xl flex justify-end items-center gap-md pt-lg border-t border-outline-variant">
<button class="px-lg py-sm rounded-lg border border-outline text-on-surface hover:bg-surface-container transition-all text-body-md">
                        Batalkan
                    </button>
<button class="px-lg py-sm rounded-lg bg-outline text-surface-variant cursor-not-allowed flex items-center gap-2 text-body-md font-semibold" disabled="">
<span class="material-symbols-outlined text-[20px] animate-spin" data-icon="progress_activity">progress_activity</span>
                        Unduh ZIP (.zip)
                    </button>
</div>
</div>
</main>
</div>
<script>
        // Micro-interaction: Dynamic Log update simulation
        const logs = [
            "Memproses link referensi module-E...",
            "Memvalidasi dependensi aset statis...",
            "Checking cross-link integrity...",
            "Menghitung checksum untuk 12 berkas...",
            "Hampir selesai: Mempersiapkan wrapper ZIP..."
        ];
        let currentLog = 0;
        const logElement = document.getElementById('dynamic-log');

        setInterval(() => {
            if (currentLog < logs.length) {
                const now = new Date();
                const timeStr = `[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}]`;
                const newDiv = document.createElement('div');
                newDiv.className = 'flex gap-xs opacity-0 transition-opacity duration-500';
                newDiv.innerHTML = `<span class="text-primary font-bold opacity-50">${timeStr}</span> <span>${logs[currentLog]}</span>`;
                
                logElement.parentNode.insertBefore(newDiv, logElement);
                setTimeout(() => newDiv.classList.remove('opacity-0'), 50);
                
                // Scroll to bottom
                const container = logElement.parentNode;
                container.scrollTop = container.scrollHeight;
                
                currentLog++;
            }
        }, 3000);
    </script>
</body></html>

<!-- Generation Progress -->
<!DOCTYPE html>

<html class="light" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Magnetstructure - Generation Success</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Geist:wght@400;500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary-fixed": "#002109",
                        "on-secondary": "#ffffff",
                        "on-error": "#ffffff",
                        "on-background": "#131b2e",
                        "tertiary-fixed": "#ffdcc3",
                        "secondary-container": "#7cf994",
                        "surface": "#faf8ff",
                        "on-surface-variant": "#434655",
                        "surface-variant": "#dae2fd",
                        "on-tertiary-fixed": "#2f1500",
                        "tertiary-fixed-dim": "#ffb77d",
                        "on-secondary-container": "#007230",
                        "surface-bright": "#faf8ff",
                        "secondary-fixed": "#7ffc97",
                        "surface-tint": "#0053db",
                        "on-tertiary": "#ffffff",
                        "inverse-primary": "#b4c5ff",
                        "surface-container-low": "#f2f3ff",
                        "on-primary": "#ffffff",
                        "surface-container": "#eaedff",
                        "background": "#faf8ff",
                        "error": "#ba1a1a",
                        "inverse-surface": "#283044",
                        "on-tertiary-fixed-variant": "#6e3900",
                        "on-primary-container": "#eeefff",
                        "on-primary-fixed-variant": "#003ea8",
                        "on-tertiary-container": "#ffede1",
                        "secondary": "#006e2d",
                        "primary-fixed": "#dbe1ff",
                        "primary-container": "#2563eb",
                        "inverse-on-surface": "#eef0ff",
                        "tertiary-container": "#a65900",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed-variant": "#005320",
                        "primary": "#004ac6",
                        "tertiary": "#824500",
                        "surface-container-high": "#e2e7ff",
                        "on-primary-fixed": "#00174b",
                        "surface-dim": "#d2d9f4",
                        "surface-container-highest": "#dae2fd",
                        "on-surface": "#131b2e",
                        "secondary-fixed-dim": "#62df7d",
                        "error-container": "#ffdad6",
                        "on-error-container": "#93000a",
                        "primary-fixed-dim": "#b4c5ff",
                        "outline": "#737686",
                        "outline-variant": "#c3c6d7"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "sm": "8px",
                        "container-max": "1440px",
                        "sidebar-width": "260px",
                        "md": "16px",
                        "lg": "24px",
                        "xl": "32px",
                        "unit": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Inter"],
                        "body-lg": ["Inter"],
                        "code": ["Geist"],
                        "label-md": ["Geist"],
                        "headline-md": ["Inter"],
                        "display": ["Inter"],
                        "body-md": ["Inter"]
                    },
                    "fontSize": {
                        "headline-lg": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "code": ["13px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "label-md": ["13px", {"lineHeight": "18px", "fontWeight": "500"}],
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "display": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
        }

        @keyframes drawCheck {
            0% { stroke-dashoffset: 48; opacity: 0; }
            100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes scaleIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        .animate-check {
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
            animation: drawCheck 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards 0.3s;
        }
        .animate-circle {
            animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #2563eb;
            opacity: 0;
        }
    </style>
</head>
<body class="bg-surface text-on-surface font-body-md min-h-screen">
<!-- TopNavBar -->
<header class="bg-surface border-b border-outline-variant fixed top-0 left-0 right-0 z-50">
<div class="flex justify-between items-center w-full px-lg h-16 max-w-container-max mx-auto">
<div class="flex items-center gap-xl">
<span class="text-headline-md font-headline-md font-bold text-primary">Magnetstructure</span>
<nav class="hidden md:flex gap-lg">
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Dashboard</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Planning Baru</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Template</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Dokumentasi</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">GitHub</a>
</nav>
</div>
<div class="flex items-center gap-md">
<button class="p-xs text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-xs text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span class="material-symbols-outlined">help</span>
</button>
<div class="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional user profile photo for a software engineer, clean lighting, minimalist tech-focused background, corporate modern style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChouYU-Llx02QR0bDOGW1NYyZ9ZMf39SQWrvsno2MuCfjtUhws8MD6qolE7WnGLFDYuJC6qBSArpFcC-J1Qt7YTBP1ztrkJjBGZfcZGO1bjQar1frALCp4f2wr4vRojDcktHF000qQLumx20wGhBfi2qCFhztNvE2rGl-Q7Jnsl2kionZYvQHJExgrytFCCf3-tBdgnUdGORFiYn_BJjNSx1RTdSRHptE38YE3-Nsc0IvKFnvd__KfVzFOBBq7PglfmT2DCFQqoQg"/>
</div>
</div>
</div>
</header>
<div class="pt-16 flex min-h-[calc(100vh-64px)]">
<!-- SideNavBar -->
<aside class="hidden md:flex flex-col py-lg w-[260px] h-[calc(100vh-64px)] border-r border-outline-variant bg-surface sticky top-16 shrink-0">
<div class="px-md mb-lg">
<div class="flex items-center gap-sm p-sm rounded-lg bg-surface-container-low border border-outline-variant">
<div class="w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary">
<span class="material-symbols-outlined text-[18px]">account_tree</span>
</div>
<div>
<div class="font-headline-sm text-label-md font-bold text-on-surface">Project Planning</div>
<div class="text-[11px] text-on-surface-variant">Workflow Stepper</div>
</div>
</div>
</div>
<nav class="flex-1 space-y-1">
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all">
<span class="material-symbols-outlined" data-icon="upload_file">upload_file</span>
<span class="font-label-md">Referensi</span>
</div>
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
<span class="font-label-md">Discovery</span>
</div>
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all">
<span class="material-symbols-outlined" data-icon="quiz">quiz</span>
<span class="font-label-md">Pertanyaan</span>
</div>
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all">
<span class="material-symbols-outlined" data-icon="account_tree">account_tree</span>
<span class="font-label-md">Struktur</span>
</div>
<div class="flex items-center gap-md text-on-surface-variant pl-4 py-3 hover:bg-surface-container transition-all">
<span class="material-symbols-outlined" data-icon="visibility">visibility</span>
<span class="font-label-md">Preview</span>
</div>
<div class="flex items-center gap-md text-primary font-bold border-l-2 border-primary pl-4 py-3 bg-surface-container-low">
<span class="material-symbols-outlined" data-icon="download" data-weight="fill" style="font-variation-settings: 'FILL' 1;">download</span>
<span class="font-label-md">Generate</span>
</div>
</nav>
</aside>
<!-- Main Content -->
<main class="flex-1 p-lg overflow-y-auto bg-slate-50">
<div class="max-w-4xl mx-auto space-y-lg">
<!-- Success Hero Section -->
<section class="bg-white rounded-xl border border-outline-variant p-xl shadow-sm relative overflow-hidden flex flex-col items-center text-center">
<!-- Background Decoration -->
<div class="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full opacity-20 pointer-events-none"></div>
<div class="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-tr-full opacity-20 pointer-events-none"></div>
<!-- Checkmark Animation -->
<div class="relative mb-lg">
<svg class="w-24 h-24 text-secondary animate-circle" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="currentColor" fill-opacity="0.1" r="45" stroke="currentColor" stroke-width="2"></circle>
<path class="animate-check" d="M30 52l15 15 25-25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"></path>
</svg>
</div>
<h1 class="font-display text-display text-on-surface mb-sm">Planning berhasil dibuat</h1>
<p class="text-body-lg text-on-surface-variant max-w-lg mx-auto">Sistem telah berhasil mengekspor struktur arsitektur Anda ke dalam format yang siap digunakan. Semua dependensi dan metadata telah divalidasi.</p>
<!-- ZIP Details Card -->
<div class="mt-xl w-full max-w-md bg-surface border border-outline-variant rounded-lg p-md flex items-center gap-md hover:bg-surface-container transition-colors group">
<div class="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[32px]">folder_zip</span>
</div>
<div class="flex-1 text-left">
<div class="font-headline-sm text-body-lg font-bold text-on-surface">project_planning_v1.zip</div>
<div class="flex gap-sm text-label-md text-on-surface-variant">
<span>2.4 MB</span>
<span class="text-outline-variant">•</span>
<span>12 Modul</span>
<span class="text-outline-variant">•</span>
<span>Baru saja</span>
</div>
</div>
<button class="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md hover:opacity-90 transition-opacity flex items-center gap-xs">
<span class="material-symbols-outlined text-[18px]">download</span>
                            Download ZIP
                        </button>
</div>
</section>
<!-- Action Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-md">
<!-- Preview Card -->
<div class="bg-white border border-outline-variant p-md rounded-xl hover:border-primary transition-all cursor-pointer group">
<div class="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-primary mb-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span class="material-symbols-outlined">visibility</span>
</div>
<h3 class="font-headline-sm text-body-lg font-bold mb-xs">Lihat Preview</h3>
<p class="text-body-md text-on-surface-variant">Tinjau kembali struktur folder dan dokumentasi sebelum diimplementasi.</p>
</div>
<!-- New Project Card -->
<div class="bg-white border border-outline-variant p-md rounded-xl hover:border-primary transition-all cursor-pointer group">
<div class="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-primary mb-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span class="material-symbols-outlined">add_circle</span>
</div>
<h3 class="font-headline-sm text-body-lg font-bold mb-xs">Planning Baru</h3>
<p class="text-body-md text-on-surface-variant">Mulai konfigurasi arsitektur untuk modul atau project yang berbeda.</p>
</div>
<!-- Save Template Card -->
<div class="bg-white border border-outline-variant p-md rounded-xl hover:border-primary transition-all cursor-pointer group">
<div class="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-primary mb-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span class="material-symbols-outlined">bookmark</span>
</div>
<h3 class="font-headline-sm text-body-lg font-bold mb-xs">Simpan Template</h3>
<p class="text-body-md text-on-surface-variant">Gunakan pengaturan ini sebagai blueprint standar untuk tim Anda.</p>
</div>
</div>
<!-- Validation Summary -->
<section class="bg-white rounded-xl border border-outline-variant overflow-hidden">
<div class="p-md bg-surface border-b border-outline-variant flex justify-between items-center">
<h2 class="font-headline-sm text-body-lg font-bold text-on-surface flex items-center gap-xs">
<span class="material-symbols-outlined text-secondary">verified</span>
                            Ringkasan Validasi
                        </h2>
<span class="text-label-md text-secondary bg-secondary-container px-sm py-1 rounded-full font-bold">100% Passed</span>
</div>
<div class="p-lg grid grid-cols-1 md:grid-cols-2 gap-lg">
<!-- Markdown Status -->
<div class="space-y-md">
<div class="flex items-start gap-md">
<div class="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-secondary shrink-0 mt-0.5">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
<div class="space-y-1">
<div class="font-label-md text-on-surface font-bold">Struktur Markdown</div>
<div class="text-body-md text-on-surface-variant">Dokumentasi technical specs (README, API.md) telah sesuai dengan standar ISO/IEC.</div>
</div>
</div>
<div class="flex items-start gap-md">
<div class="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-secondary shrink-0 mt-0.5">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
<div class="space-y-1">
<div class="font-label-md text-on-surface font-bold">Integritas Link</div>
<div class="text-body-md text-on-surface-variant">Seluruh internal reference dan symlink antar modul telah diverifikasi aktif.</div>
</div>
</div>
</div>
<!-- File Analysis -->
<div class="bg-surface-container-lowest p-md rounded-lg border border-outline-variant font-code text-code">
<div class="flex items-center gap-xs text-on-surface-variant mb-sm">
<span class="material-symbols-outlined text-[16px]">terminal</span>
<span>Output Log</span>
</div>
<div class="space-y-1 text-on-surface">
<p><span class="text-secondary">[OK]</span> Parsing architecture tree...</p>
<p><span class="text-secondary">[OK]</span> Mapping schema versions (v2.4.0)</p>
<p><span class="text-secondary">[OK]</span> Compressing assets into ZIP container</p>
<p><span class="text-primary font-bold">[INFO]</span> Ready for production deployment.</p>
</div>
</div>
</div>
</section>
</div>
</main>
</div>
<!-- Floating Action Button Suppression - NOT RENDERED on Details/Success page as per guidelines -->
<script>
        // Simple micro-interaction for the success page
        document.addEventListener('DOMContentLoaded', () => {
            const container = document.querySelector('main');
            
            function createConfetti() {
                const colors = ['#004ac6', '#006e2d', '#2563eb', '#7cf994'];
                for (let i = 0; i < 20; i++) {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + 'vw';
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.top = '-10px';
                    confetti.style.borderRadius = '2px';
                    confetti.style.opacity = '1';
                    confetti.style.zIndex = '100';
                    document.body.appendChild(confetti);
                    
                    const duration = 2000 + Math.random() * 3000;
                    const destination = 100 + Math.random() * 20;
                    
                    confetti.animate([
                        { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
                        { transform: `translate(${Math.random() * 100 - 50}px, ${destination}vh) rotate(${Math.random() * 720}deg)`, opacity: 0 }
                    ], {
                        duration: duration,
                        easing: 'cubic-bezier(0, 0, 0.2, 1)'
                    }).onfinish = () => confetti.remove();
                }
            }

            // Fire once on load
            setTimeout(createConfetti, 1000);
        });
    </script>
</body></html>

<!-- Generation Success -->
<!DOCTYPE html>

<html lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Magnetstructure - Detail Perencanaan Proyek</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Geist:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary-fixed": "#002109",
                        "on-secondary": "#ffffff",
                        "on-error": "#ffffff",
                        "on-background": "#131b2e",
                        "tertiary-fixed": "#ffdcc3",
                        "secondary-container": "#7cf994",
                        "surface": "#faf8ff",
                        "on-surface-variant": "#434655",
                        "surface-variant": "#dae2fd",
                        "on-tertiary-fixed": "#2f1500",
                        "tertiary-fixed-dim": "#ffb77d",
                        "on-secondary-container": "#007230",
                        "surface-bright": "#faf8ff",
                        "secondary-fixed": "#7ffc97",
                        "surface-tint": "#0053db",
                        "on-tertiary": "#ffffff",
                        "inverse-primary": "#b4c5ff",
                        "surface-container-low": "#f2f3ff",
                        "on-primary": "#ffffff",
                        "surface-container": "#eaedff",
                        "background": "#faf8ff",
                        "error": "#ba1a1a",
                        "inverse-surface": "#283044",
                        "on-tertiary-fixed-variant": "#6e3900",
                        "on-primary-container": "#eeefff",
                        "on-primary-fixed-variant": "#003ea8",
                        "on-tertiary-container": "#ffede1",
                        "secondary": "#006e2d",
                        "primary-fixed": "#dbe1ff",
                        "primary-container": "#2563eb",
                        "inverse-on-surface": "#eef0ff",
                        "tertiary-container": "#a65900",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-fixed-variant": "#005320",
                        "primary": "#004ac6",
                        "tertiary": "#824500",
                        "surface-container-high": "#e2e7ff",
                        "on-primary-fixed": "#00174b",
                        "surface-dim": "#d2d9f4",
                        "surface-container-highest": "#dae2fd",
                        "on-surface": "#131b2e",
                        "secondary-fixed-dim": "#62df7d",
                        "error-container": "#ffdad6",
                        "on-error-container": "#93000a",
                        "primary-fixed-dim": "#b4c5ff",
                        "outline": "#737686",
                        "outline-variant": "#c3c6d7"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "sm": "8px",
                        "container-max": "1440px",
                        "sidebar-width": "260px",
                        "md": "16px",
                        "lg": "24px",
                        "xl": "32px",
                        "unit": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Inter"],
                        "body-lg": ["Inter"],
                        "code": ["Geist"],
                        "label-md": ["Geist"],
                        "headline-md": ["Inter"],
                        "display": ["Inter"],
                        "body-md": ["Inter"]
                    },
                    "fontSize": {
                        "headline-lg": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "code": ["13px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "label-md": ["13px", {"lineHeight": "18px", "fontWeight": "500"}],
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "display": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        body {
            background-color: #faf8ff;
            font-family: 'Inter', sans-serif;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #c3c6d7;
            border-radius: 10px;
        }
    </style>
</head>
<body class="text-on-surface">
<!-- TopNavBar -->
<header class="bg-surface border-b border-outline-variant fixed top-0 left-0 right-0 z-50 h-16">
<div class="flex justify-between items-center w-full px-lg h-16 max-w-container-max mx-auto">
<div class="flex items-center gap-xl">
<span class="text-headline-md font-headline-md font-bold text-primary">Magnetstructure</span>
<nav class="hidden md:flex items-center gap-lg">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Planning Baru</a>
<a class="font-body-md text-body-md text-primary font-bold border-b-2 border-primary pb-1" href="#">Template</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Dokumentasi</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">GitHub</a>
</nav>
</div>
<div class="flex items-center gap-md">
<button class="p-xs text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button class="p-xs text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span class="material-symbols-outlined" data-icon="help">help</span>
</button>
<div class="w-8 h-8 rounded-full overflow-hidden border border-outline-variant bg-surface-container">
<img class="w-full h-full object-cover" data-alt="A professional studio portrait of a software architect in a clean, high-tech environment. The lighting is soft and neutral, conveying a sense of expertise and reliability. The aesthetic is corporate yet modern, matching a slate-blue and white color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlZq4jqeMIe1zrn82dn0CGOJ0Br2RU6H97fGOP4Xm67hWCphOoUm5T38e7IXOZgWpy5AcG4NGsjFWp7YwJjcPNCotbsZ0YHodWrxpUtgLT07ZDc97dOcZ57dI2SoMXBRz8q8JVz-3YKKQkt61vYwiY5gCkQCv2prkrzJ4asX30htAq6PXdONxnM4RQjSvJHuf_w7uG7EZ0ijasZg3WLG7CiwY9Oq162lqjmQpjt5TZIu3O03MzYNFR9B1YC8chsImYzlaqW01ru1I"/>
</div>
</div>
</div>
</header>
<!-- AppShell with Sidebar -->
<div class="pt-16 flex min-h-screen">
<!-- SideNavBar -->
<aside class="fixed left-0 top-16 h-[calc(100vh-64px)] w-[260px] bg-surface border-r border-outline-variant py-lg flex flex-col overflow-y-auto z-40">
<div class="px-md mb-lg">
<div class="flex items-center gap-sm mb-xs">
<div class="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-on-primary-container">
<span class="material-symbols-outlined text-[20px]" data-icon="account_tree">account_tree</span>
</div>
<div>
<h2 class="text-headline-sm font-headline-sm font-bold text-on-surface">Project Planning</h2>
<p class="text-[11px] text-on-surface-variant uppercase tracking-wider font-bold">Workflow Stepper</p>
</div>
</div>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center gap-md text-on-surface-variant font-label-md text-label-md pl-4 py-3 hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined" data-icon="upload_file">upload_file</span>
                    Referensi
                </a>
<a class="flex items-center gap-md text-on-surface-variant font-label-md text-label-md pl-4 py-3 hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
                    Discovery
                </a>
<a class="flex items-center gap-md text-on-surface-variant font-label-md text-label-md pl-4 py-3 hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined" data-icon="quiz">quiz</span>
                    Pertanyaan
                </a>
<a class="flex items-center gap-md text-primary font-bold border-l-2 border-primary pl-4 py-3 bg-surface-container-low transition-all" href="#">
<span class="material-symbols-outlined" data-icon="account_tree">account_tree</span>
                    Struktur
                </a>
<a class="flex items-center gap-md text-on-surface-variant font-label-md text-label-md pl-4 py-3 hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined" data-icon="visibility">visibility</span>
                    Preview
                </a>
<a class="flex items-center gap-md text-on-surface-variant font-label-md text-label-md pl-4 py-3 hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined" data-icon="download">download</span>
                    Generate
                </a>
</nav>
<div class="mt-auto px-md pt-lg border-t border-outline-variant">
<button class="w-full flex items-center justify-center gap-sm bg-primary text-on-primary py-sm px-md rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm">
<span class="material-symbols-outlined text-[18px]" data-icon="content_copy">content_copy</span>
                    Gunakan Sebagai Template
                </button>
</div>
</aside>
<!-- Main Canvas -->
<main class="ml-[260px] flex-1 p-lg bg-background">
<div class="max-w-5xl mx-auto">
<!-- Header Section -->
<div class="flex justify-between items-start mb-xl">
<div>
<div class="flex items-center gap-sm mb-xs">
<span class="bg-secondary/10 text-secondary px-sm py-[2px] rounded-full text-[12px] font-bold">TERSELESAIKAN</span>
<span class="text-on-surface-variant font-label-md text-label-md">• Diarsipkan pada 12 Okt 2023</span>
</div>
<h1 class="font-display text-display text-on-surface mb-xs">Infrastruktur Data Center V3</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Arsip perencanaan teknis untuk perluasan kluster server di wilayah regional Asia Tenggara, mencakup integrasi redundansi daya dan optimalisasi latensi.</p>
</div>
<div class="flex gap-sm">
<button class="px-md py-sm border border-outline text-on-surface rounded-lg font-label-md hover:bg-surface-container transition-all flex items-center gap-xs">
<span class="material-symbols-outlined text-[20px]" data-icon="share">share</span>
                            Bagikan
                        </button>
</div>
</div>
<!-- Bento Grid Content -->
<div class="grid grid-cols-12 gap-lg">
<!-- LEFT COLUMN: Files & Structure -->
<div class="col-span-12 lg:col-span-8 space-y-lg">
<!-- File Tree Card -->
<section class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
<div class="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
<h3 class="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
<span class="material-symbols-outlined text-primary" data-icon="folder_open">folder_open</span>
                                    Arsip Berkas Perencanaan
                                </h3>
<span class="text-label-md font-label-md text-on-surface-variant">14 Berkas • 2.4 MB</span>
</div>
<div class="p-md bg-white font-code text-code">
<div class="space-y-1">
<!-- Folder -->
<div class="flex items-center gap-sm py-1 px-sm hover:bg-surface-container-low rounded cursor-pointer group">
<span class="material-symbols-outlined text-tertiary text-[18px]" data-icon="folder">folder</span>
<span class="text-on-surface">docs/</span>
<span class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"><span class="material-symbols-outlined text-[16px] text-outline" data-icon="chevron_right">chevron_right</span></span>
</div>
<!-- Nested Files -->
<div class="ml-lg border-l border-outline-variant pl-md space-y-1">
<div class="flex items-center gap-sm py-1 px-sm hover:bg-surface-container-low rounded cursor-pointer group">
<span class="material-symbols-outlined text-[#3178C6] text-[18px]" data-icon="description">description</span>
<span class="text-on-surface">arsitektur_jaringan.pdf</span>
<span class="ml-auto text-[11px] text-outline">1.2 MB</span>
</div>
<div class="flex items-center gap-sm py-1 px-sm hover:bg-surface-container-low rounded cursor-pointer group">
<span class="material-symbols-outlined text-[#F1E05A] text-[18px]" data-icon="code">code</span>
<span class="text-on-surface">konfigurasi_haproxy.cfg</span>
<span class="ml-auto text-[11px] text-outline">4.5 KB</span>
</div>
</div>
<!-- Top Level File -->
<div class="flex items-center gap-sm py-1 px-sm hover:bg-surface-container-low rounded cursor-pointer group">
<span class="material-symbols-outlined text-secondary text-[18px]" data-icon="table_chart">table_chart</span>
<span class="text-on-surface">anggaran_estimas.xlsx</span>
<span class="ml-auto text-[11px] text-outline">840 KB</span>
</div>
<div class="flex items-center gap-sm py-1 px-sm hover:bg-surface-container-low rounded cursor-pointer group">
<span class="material-symbols-outlined text-primary text-[18px]" data-icon="markdown">markdown</span>
<span class="text-on-surface">README_PROYEK.md</span>
<span class="ml-auto text-[11px] text-outline">12 KB</span>
</div>
</div>
</div>
</section>
<!-- Analysis Logs -->
<section class="bg-inverse-surface text-inverse-on-surface rounded-xl overflow-hidden p-lg">
<div class="flex items-center justify-between mb-md">
<h3 class="font-headline-md text-headline-md flex items-center gap-sm">
<span class="material-symbols-outlined text-secondary-fixed" data-icon="terminal">terminal</span>
                                    Log Analisis Sistem
                                </h3>
<button class="text-label-md font-label-md text-surface-variant hover:text-white transition-colors">Unduh Log Penuh</button>
</div>
<div class="font-code text-code bg-black/30 rounded-lg p-md custom-scrollbar overflow-y-auto max-h-48 border border-white/10">
<p class="text-secondary-fixed mb-1">[INFO] 2023-10-12 09:15:02 - Inisialisasi pengecekan integritas struktur...</p>
<p class="text-white/80 mb-1">[DEBUG] Mengambil data referensi dari 3 sumber eksternal.</p>
<p class="text-white/80 mb-1">[DEBUG] Validasi skema database berhasil (v2.1.0).</p>
<p class="text-secondary-fixed mb-1">[INFO] 2023-10-12 09:16:45 - Analisis biaya selesai: Selisih margin 0.4%.</p>
<p class="text-white/80 mb-1">[DEBUG] Menghasilkan pratinjau dokumen PDF...</p>
<p class="text-primary-fixed-dim mb-1">[SUCCESS] 2023-10-12 09:18:11 - Workflow selesai. Status: FINAL.</p>
<p class="text-white/40">_</p>
</div>
</section>
</div>
<!-- RIGHT COLUMN: History & Meta -->
<div class="col-span-12 lg:col-span-4 space-y-lg">
<!-- Summary Stats -->
<div class="bg-surface-container-high rounded-xl p-lg border border-outline-variant">
<h4 class="font-label-md text-label-md text-on-surface-variant mb-md uppercase tracking-wider">Ringkasan Proyek</h4>
<div class="grid grid-cols-2 gap-md">
<div class="bg-white p-md rounded-lg border border-outline-variant">
<p class="text-[11px] text-outline uppercase font-bold mb-1">Durasi</p>
<p class="font-headline-sm text-headline-sm text-on-surface">14 Hari</p>
</div>
<div class="bg-white p-md rounded-lg border border-outline-variant">
<p class="text-[11px] text-outline uppercase font-bold mb-1">Iterasi</p>
<p class="font-headline-sm text-headline-sm text-on-surface">8 Versi</p>
</div>
</div>
</div>
<!-- Download History -->
<section class="bg-surface rounded-xl border border-outline-variant">
<div class="p-md border-b border-outline-variant flex items-center gap-sm">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="history">history</span>
<h3 class="font-headline-sm text-headline-sm text-on-surface">Riwayat Unduhan</h3>
</div>
<div class="divide-y divide-outline-variant">
<div class="p-md flex items-center justify-between group hover:bg-surface-container-low transition-colors">
<div class="flex items-center gap-sm">
<div class="w-8 h-8 rounded bg-primary-container/20 flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="archive">archive</span>
</div>
<div>
<p class="text-label-md font-bold text-on-surface">Full_Archive_V2.zip</p>
<p class="text-[11px] text-on-surface-variant">Oleh: Budi Santoso • 14 Okt</p>
</div>
</div>
<span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors cursor-pointer" data-icon="download">download</span>
</div>
<div class="p-md flex items-center justify-between group hover:bg-surface-container-low transition-colors">
<div class="flex items-center gap-sm">
<div class="w-8 h-8 rounded bg-secondary-container/20 flex items-center justify-center">
<span class="material-symbols-outlined text-secondary text-[20px]" data-icon="picture_as_pdf">picture_as_pdf</span>
</div>
<div>
<p class="text-label-md font-bold text-on-surface">Summary_Exec.pdf</p>
<p class="text-[11px] text-on-surface-variant">Oleh: Siti Aminah • 12 Okt</p>
</div>
</div>
<span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors cursor-pointer" data-icon="download">download</span>
</div>
<div class="p-md text-center">
<button class="text-label-md font-label-md text-primary hover:underline">Lihat Semua (12)</button>
</div>
</div>
</section>
<!-- Visual Anchor (Map or Diagram Placeholder) -->
<div class="relative rounded-xl overflow-hidden h-48 border border-outline-variant group">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A highly detailed architectural site plan of a modern data center facility. The drawing is clean and technical, showing server rack layouts, cooling zones, and power distribution paths. The visual style follows a professional blueprint aesthetic with a minimalist light-mode color palette of slate and primary blue accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEwrBEBXeMrpOTBoqY7XHCkSFqjth5-It7KP8K5K6qrwKo73DKymSR9m18TNx0ZFGnhMUuxaroEcx1y0I02mBQEke38hdDfmP5W1h8pOuq6FtNjdrdC1hg9JI8ICAJH91Wrj0btv0JgDGECEKA4OWigtooO1x5NCWxoBoDInDtbw73UsJUg1FBzmu52_wsTwugYrJosACIQ8ezdVJiaRrW5ZqJBNguKS0-5ENqNrRz7nVzFGLdfOZqGrRzxMx7045q7bHDCh-95qY"/>
<div class="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex items-end p-md">
<div>
<p class="text-white font-bold text-label-md">Lokasi: SG-Regional-01</p>
<p class="text-white/70 text-[11px]">Kluster Asia Tenggara</p>
</div>
</div>
</div>
</div>
</div>
<!-- Action Footer (Floating on Scroll behavior simulated) -->
<div class="mt-xl py-lg border-t border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-md">
<span class="text-on-surface-variant font-label-md text-label-md italic">Perencanaan ini telah dikunci untuk pengeditan.</span>
</div>
<div class="flex gap-md">
<button class="px-lg py-md border border-primary text-primary rounded-lg font-bold hover:bg-primary-container/10 transition-all flex items-center gap-sm">
<span class="material-symbols-outlined" data-icon="history_edu">history_edu</span>
                            Lihat Log Perubahan
                        </button>
<button class="px-lg py-md bg-primary text-on-primary rounded-lg font-bold hover:shadow-lg transition-all flex items-center gap-sm">
<span class="material-symbols-outlined" data-icon="content_copy">content_copy</span>
                            Gunakan Sebagai Template
                        </button>
</div>
</div>
</div>
</main>
</div>
<!-- Micro-interaction Script -->
<script>
        document.querySelectorAll('.cursor-pointer').forEach(item => {
            item.addEventListener('mousedown', () => {
                item.style.transform = 'scale(0.98)';
                item.style.opacity = '0.8';
            });
            item.addEventListener('mouseup', () => {
                item.style.transform = 'scale(1)';
                item.style.opacity = '1';
            });
        });
    </script>
</body></html>