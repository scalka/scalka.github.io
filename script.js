function copyEmailToClipboard() {
  let tooltip = document.querySelector('.copied-msg');
  tooltip.classList.add('visible');
  /* Get the text field */
  let el = document.createElement('textarea');
  // Set value (string to be copied)
  el.value = 'calka.sylwia@gmail.com';
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  el.style = {
    position: 'absolute',
    left: '-9999px'
  };
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);

  setTimeout(() => {
    tooltip.classList.remove('visible')
  }, 2000);
  return;
};
const hobbyImg = document.getElementById('hobby-img');
function changeImage(e) {
  if (e.currentTarget.id !== 'hiking') return;
  let source = e.currentTarget.id + '.jpg';
  hobbyImg.src = 'images/'+source;
};

const hobbiesItems = document.querySelectorAll('.hobbies_item');
hobbiesItems.forEach(key => {
  key.addEventListener('mouseover', changeImage)
});

/* CHART */
// Themes begin
am4core.useTheme(am4themes_animated);
let data = {
  "Programming and Web Languages": {
    "JavaScript": 35,
    "Java": 10,
    "Python": 10,
    "C#": 5,
    "HTML5": 25,
    "CSS3": 25,
    "SQL": 10
  },
  "Frameworks and libraries": {
    "Angular": 30,
    "React": 20,
    "Flask": 20,
    "Node.js": 20,
    "Express": 15,
    "jQuery": 20,
    "Android Development": 20,
    "scikit-learn": 10,
    ".NET": 10,
    "Unity": 10,
    "Jasmine": 5,
    "Bootstrap": 10,
    "Git": 20,
    "Agile": 15,
    "AmCharts": 20,
    "SASS": 20,
    "Lodash": 20
  },
  "Design": {
    "UI Design": 30,
    "UX Design": 30,
    "Adobe XD": 30,
    "Adobe Photoshop": 25,
    "Adobe Lightroom": 25,
  },
  "Languages": {
    "English": 30,
    "Polish": 35,
    "German": 15,
    "Dutch": 10
  }
};

function processData(data) {
  let treeData = [];
/* 
  let smallCategories = {
    name: "Other",
    children: []
  };
 */
  for (let category in data) {
    let categoryData = {
      name: category,
      children: []
    }
    let categoryTotal = 0;
    for (let model in data[category]) {
      categoryTotal += data[category][model];
    }

    for (let model in data[category]) {
      // do not add very small
      if (data[category][model] > 1) {
        categoryData.children.push({
          name: model,
          count: data[category][model]
        });
      }
    }

    // add to small categorys if total number less than
    //if (categoryTotal > 1) {
    treeData.push(categoryData);
    /* }
    else {
      smallCategories.children.push(categoryData)
    } */

  }
  //treeData.push(smallCategories);
  return treeData;
}

// create chart
let chart = am4core.create("chartdiv", am4charts.TreeMap);
chart.colors.list = [
  am4core.color("#5F81A9"),
  am4core.color("#C78283"),
  am4core.color("#E2AF70"),
  am4core.color("#88AB75"),
  am4core.color("#DDA77B"),
  am4core.color("#5B8B7E"),
  am4core.color("#805C46"),
  am4core.color("#EC8E28"),
];
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
// only one level visible initially
chart.maxLevels = 2;
// define data fields
chart.dataFields.value = "count";
chart.dataFields.name = "name";
chart.dataFields.children = "children";

// enable navigation
chart.navigationBar = new am4charts.NavigationBar();

// level 0 series template
let level0SeriesTemplate = chart.seriesTemplates.create("0");
level0SeriesTemplate.strokeWidth = 3;

// by default only current level series bullets are visible, but as we need category bullets to be visible all the time, we modify it's hidden state
level0SeriesTemplate.bulletsContainer.hiddenState.properties.opacity = 1;
level0SeriesTemplate.bulletsContainer.hiddenState.properties.visible = true;
// create hover state
let columnTemplate = level0SeriesTemplate.columns.template;
let hoverState = columnTemplate.states.create("hover");

// darken
hoverState.adapter.add("fill", function (fill, target) {
  if (fill instanceof am4core.Color) {
    return am4core.color(am4core.colors.brighten(fill.rgb, -0.7));
  }
  return fill;
})

// add logo
/* let image = columnTemplate.createChild(am4core.Image);
image.opacity = 0.15;
image.align = "center";
image.valign = "middle";
image.width = am4core.percent(80);
image.height = am4core.percent(80);
 */
// add adapter for href to load correct image
/* image.adapter.add("href", function (href, target) {
  let dataItem = target.parent.dataItem;
  if (dataItem) {
    return "https://www.amcharts.com/lib/images/logos/" + dataItem.treeMapDataItem.name.toLowerCase() + ".png";
  }
});
 */
// level1 series template
let level1SeriesTemplate = chart.seriesTemplates.create("1");
level1SeriesTemplate.columns.template.fillOpacity = 0;

let bullet1 = level1SeriesTemplate.bullets.push(new am4charts.LabelBullet());
bullet1.locationX = 0.5;
bullet1.locationY = 0.5;
bullet1.label.text = "{name}";
bullet1.label.fill = am4core.color("#ffffff");

// level2 series template
let level2SeriesTemplate = chart.seriesTemplates.create("2");
level2SeriesTemplate.columns.template.fillOpacity = 0;

let bullet2 = level2SeriesTemplate.bullets.push(new am4charts.LabelBullet());
bullet2.locationX = 0.5;
bullet2.locationY = 0.5;
bullet2.label.text = "{name}";
bullet2.label.fill = am4core.color("#ffffff");

level0SeriesTemplate.columns.template.tooltipText = `{parentName}: [bold]{name}[/]`;
level1SeriesTemplate.columns.template.tooltipText = "{parentName}: [bold]{name}[/]";
level2SeriesTemplate.columns.template.tooltipText = "{parentName}: [bold]{name}[/]";
chart.data = processData(data);
chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.contentAlign = "right";
function am4themes_myTheme(target) {
  if (target instanceof am4core.ColorSet) {
    target.list = [
      am4core.color("red")
    ];
  }
}
