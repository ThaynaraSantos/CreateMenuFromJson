var json = [{
    "level": "1",
    "label": "Item 1",
    "value": "#",
    "items": [{
        "level": "2",
        "label": "item 1.1",
        "value": "#",
        "items": [{
            "level": "3",
            "label": "item 1.1.1",
            "value": "#",
            "items": [{
                "level": "4",
                "label": "item 1.1.1.1",
                "value": "#",
                "items": null
            }, {
                "level": "4",
                "label": "item 1.1.1.2",
                "value": "#",
                "items": null
            }]
        }, {
            "level": "3",
            "label": "item 1.1.2",
            "value": "#",
            "items": null
        }, {
            "level": "3",
            "label": "item 1.1.3",
            "value": "#",
            "items": null
        }]
    }, {
        "level": "2",
        "label": "item 1.2",
        "value": "#",
        "items": null
    }, {
        "level": "2",
        "label": "item 1.3",
        "value": "#",
        "items": null
    }]
}, {
    "level": "1",
    "label": "Item 2",
    "value": "#",
    "items": [{
        "level": "2",
        "label": "item 2.1",
        "value": "#",
        "items": null
    }, {
        "level": "2",
        "label": "item 2.2",
        "value": "#",
        "items": null
    }, {
        "level": "2",
        "label": "item 2.3",
        "value": "#",
        "items": null
    }]
}, {
    "level": "1",
    "label": "Item 3",
    "value": "#",
    "items": [{
        "level": "2",
        "label": "item 3.1",
        "value": "#",
        "items": null
    }, {
        "level": "2",
        "label": "item 3.2",
        "value": "#",
        "items": null
    }, {
        "level": "2",
        "label": "item 3.3",
        "value": "#",
        "items": null
    }]
}];

function createChildList(menu, data, parent) {
    var menuChild = menu.find('ul:first');
    $(data).each(function(index, element) {
        var value = element.value;
        var level = element.level;
        var label = element.label;

        menuChild.append('<li id="li-' + level + '-' + index + '-' + parent + '"><a href="' + value + '">' + label + '</a></li>');
        if (element.items != null) {
            menuChild = $('#li-' + level + '-' + index + '-' + parent);
            menuChild.append('<ul class="submenu submenu-' + element.level + '"></ul>');
            createChildList(menuChild, element.items, parent + "-" + index);
        }
        menuChild = menu.find('ul:first');
    });
}

function createMenuFromJson() {
    var menu = $('#menu').html('<ul class="menu"></ul>');
    createChildList(menu, json, 0);
}

createMenuFromJson();
