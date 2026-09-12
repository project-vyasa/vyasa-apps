import sys

def update_file(filename, replacements):
    with open(filename, 'r') as f:
        content = f.read()
    
    for old, new in replacements:
        if old not in content:
            print(f"Failed to find target in {filename}:\n{old}")
            sys.exit(1)
        content = content.replace(old, new)
        
    with open(filename, 'w') as f:
        f.write(content)

update_file('src/routes/[publisher]/[publication]/[...urn]/+page.svelte', [
    (
        "let diagRegistryUrl = $state('');\n\tlet diagCatalogUrl = $state('');",
        "let diagRegistryUrl = $state('');\n\tlet diagCatalogUrl = $state('');\n\tlet diagPublicationUrl = $state('');"
    ),
    (
        "diagCatalogUrl = catalogUrl;",
        "diagCatalogUrl = catalogUrl;\n\t\t\t\tdiagPublicationUrl = dbUrl;"
    ),
    (
        "{diagCatalogUrl}\n\t\t{diagCatalog}",
        "{diagCatalogUrl}\n\t\t{diagPublicationUrl}\n\t\t{diagCatalog}"
    )
])

update_file('src/lib/components/ViewerAppBar.svelte', [
    (
        "diagCatalogUrl?: string;",
        "diagCatalogUrl?: string;\n\t\tdiagPublicationUrl?: string;"
    ),
    (
        "diagCatalogUrl,\n\t\tdiagCatalog",
        "diagCatalogUrl,\n\t\tdiagPublicationUrl,\n\t\tdiagCatalog"
    ),
    (
        "{diagCatalogUrl} \n\t{diagCatalog}",
        "{diagCatalogUrl} \n\t{diagPublicationUrl}\n\t{diagCatalog}"
    )
])

update_file('src/lib/components/DiagnosticsModal.svelte', [
    (
        "diagCatalogUrl?: string;",
        "diagCatalogUrl?: string;\n\t\tdiagPublicationUrl?: string;"
    ),
    (
        "diagCatalogUrl = '',\n\t\tdiagCatalog = null",
        "diagCatalogUrl = '',\n\t\tdiagPublicationUrl = '',\n\t\tdiagCatalog = null"
    ),
    (
        "<h3 class=\"diag-section-title\">Publication Manifest</h3>\n\t\t\t\t\t{#if packageData}",
        "<h3 class=\"diag-section-title\">Publication Manifest</h3>\n\t\t\t\t\t<div class=\"diag-url\">{diagPublicationUrl || 'Not loaded'}</div>\n\t\t\t\t\t{#if packageData}"
    )
])
