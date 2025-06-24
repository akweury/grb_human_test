const translations = {
  en: {
    "elvis-tagline": "The Gestalt Vision Benchmark",
    "welcome-line1": "> 👋 Welcome! This portal lets you participate in our study on Gestalt principles in visual perception. 🧩",
    "welcome-line2": "> 🌟 Please try the demo first, then select a principle to start the test. Your contribution is valuable for our research! 💡🦄",
    "demo-btn": "👉 View Demo (Recommended First)",
    "closure-btn": "Closure Tasks",
    "proximity-btn": "Proximity Tasks",
    "similarity-btn": "Similarity Tasks",
    "continuity-btn": "Continuity Tasks",
    "symmetry-btn": "Symmetry Tasks",
    "demo-description": `
<strong>🧠 How does this experiment work?</strong><br><br>
In this experiment, you will participate in a visual reasoning study using the <b>ELVIS benchmark</b>, which
evaluates human reasoning based on classic <b>Gestalt principles</b> (such as proximity, similarity, closure,
etc.).<br><br>
For each task, you will be shown:
<ul>
  <li>🟢 A set of <b>training examples</b> — these are labeled as either
    <span style="color:#388e3c;font-weight:bold;">positive</span> or
    <span style="color:#d32f2f;font-weight:bold;">negative</span>.
  </li>
  <li>🔍 A set of <b>test examples</b> — your job is to decide which of these follow the same hidden rule as the
    positive training images.</li>
</ul>
<b>What defines a positive or negative image?</b><br>
<ul>
  <li><span style="color:#388e3c;font-weight:bold;">Positive images</span> follow a hidden logic rule (e.g., “there
    is a red triangle in the image”).</li>
  <li><span style="color:#d32f2f;font-weight:bold;">Negative images</span> do <b>not</b> follow this rule.</li>
</ul>
⚠️ <b>You will not be told the rule.</b> Instead, your task is to <b>infer it</b> by carefully analyzing the
training examples and their labels.<br><br>
Then, based on your reasoning, you must apply the rule to the test images and make your prediction.<br><br>
✅ <b>Your task:</b>
<ul>
  <li>Study the training examples and identify the common rule behind the positive ones.</li>
  <li>Apply your reasoning to the test examples.</li>
  <li><b>Select all test images that you think are positive</b> (i.e., that follow the same rule).</li>
</ul>
📦 <b>Each task contains:</b>
<ul>
  <li>A small number of training examples (typically 4–6).</li>
  <li><b>6 test images</b> — you can select multiple test images that you believe are positive.</li>
</ul>
🧩 <b>What kinds of rules might appear?</b>
<ul>
  <li>🎨 <b>Color</b></li>
  <li>🔺 <b>Shape</b></li>
  <li>📏 <b>Size</b></li>
  <li>#️⃣ <b>Count</b></li>
  <li>🧩 Or a combination of the above</li>
</ul>
🔎 <b>Examples of possible logic rules:</b>
<ul>
  <li>✔️ All positive images contain at least one <b>red triangle</b>.</li>
  <li>✔️ All positive images <b>do not contain any triangle</b>.</li>
  <li>✔️ All positive images contain <b>exactly three blue circles</b>.</li>
  <li>✔️ There is a <b>large yellow square</b> that appears only once in each positive image.</li>
  <li>✔️ All objects in positive images have the <b>same size</b>.</li>
  <li>✔️ There are <b>two groups of objects</b> forming triangles, and <b>each triangle contains at least one red
      circle</b>.</li>
  <li>✔️ The objects form a <b>symmetrical structure</b> with respect to the center.</li>
  <li>✔️ There are <b>more red objects than blue objects</b>.</li>
  <li>✔️ A <b>green circle appears at the top-left corner</b> in each positive image.</li>
</ul>
This study is designed to measure human ability to perform abstract reasoning from visual inputs. Your participation
will help us better understand how humans interpret patterns and structure in visual scenes. Thank you! 🙏
    `
  },
  de: {
    "elvis-tagline": "Die Gestalt Vision Benchmark",
    "welcome-line1": "> 👋 Willkommen! Dieses Portal ermöglicht Ihnen die Teilnahme an unserer Studie zu Gestaltprinzipien in der visuellen Wahrnehmung. 🧩",
    "welcome-line2": "> 🌟 Bitte probieren Sie zuerst die Demo aus und wählen Sie dann ein Prinzip, um den Test zu starten. Ihr Beitrag ist wertvoll für unsere Forschung! 💡🦄",
    "demo-btn": "👉 Demo ansehen (zuerst empfohlen)",
    "closure-btn": "Schließungs-Aufgaben",
    "proximity-btn": "Nähe-Aufgaben",
    "similarity-btn": "Ähnlichkeits-Aufgaben",
    "continuity-btn": "Kontinuitäts-Aufgaben",
    "symmetry-btn": "Symmetrie-Aufgaben",
    "demo-description": `
<strong>🧠 Wie funktioniert dieses Experiment?</strong><br><br>
In diesem Experiment nehmen Sie an einer visuellen Schlussfolgerungsstudie mit dem <b>ELVIS-Benchmark</b> teil, die das menschliche Schlussfolgern anhand klassischer <b>Gestaltprinzipien</b> (wie Nähe, Ähnlichkeit, Schließung usw.) bewertet.<br><br>
Für jede Aufgabe werden Ihnen angezeigt:
<ul>
  <li>🟢 Eine Reihe von <b>Trainingsbeispielen</b> – diese sind entweder als
    <span style="color:#388e3c;font-weight:bold;">positiv</span> oder
    <span style="color:#d32f2f;font-weight:bold;">negativ</span> gekennzeichnet.
  </li>
  <li>🔍 Eine Reihe von <b>Testbeispielen</b> – Ihre Aufgabe ist es zu entscheiden, welche davon der gleichen versteckten Regel wie die positiven Trainingsbilder folgen.</li>
</ul>
<b>Was definiert ein positives oder negatives Bild?</b><br>
<ul>
  <li><span style="color:#388e3c;font-weight:bold;">Positive Bilder</span> folgen einer versteckten Logikregel (z.B. „es gibt ein rotes Dreieck im Bild“).</li>
  <li><span style="color:#d32f2f;font-weight:bold;">Negative Bilder</span> folgen dieser Regel <b>nicht</b>.</li>
</ul>
⚠️ <b>Ihnen wird die Regel nicht mitgeteilt.</b> Stattdessen besteht Ihre Aufgabe darin, sie durch sorgfältige Analyse der Trainingsbeispiele und deren Labels <b>herauszufinden</b>.<br><br>
Basierend auf Ihrem Schlussfolgern müssen Sie die Regel auf die Testbilder anwenden und Ihre Vorhersage treffen.<br><br>
✅ <b>Ihre Aufgabe:</b>
<ul>
  <li>Studieren Sie die Trainingsbeispiele und identifizieren Sie die gemeinsame Regel der positiven Beispiele.</li>
  <li>Wenden Sie Ihr Schlussfolgern auf die Testbeispiele an.</li>
  <li><b>Wählen Sie alle Testbilder aus, die Sie für positiv halten</b> (d.h. die der gleichen Regel folgen).</li>
</ul>
📦 <b>Jede Aufgabe enthält:</b>
<ul>
  <li>Eine kleine Anzahl von Trainingsbeispielen (typischerweise 4–6).</li>
  <li><b>6 Testbilder</b> – Sie können mehrere Testbilder auswählen, die Sie für positiv halten.</li>
</ul>
🧩 <b>Welche Arten von Regeln können auftreten?</b>
<ul>
  <li>🎨 <b>Farbe</b></li>
  <li>🔺 <b>Form</b></li>
  <li>📏 <b>Größe</b></li>
  <li>#️⃣ <b>Anzahl</b></li>
  <li>🧩 Oder eine Kombination davon</li>
</ul>
🔎 <b>Beispiele für mögliche Logikregeln:</b>
<ul>
  <li>✔️ Alle positiven Bilder enthalten mindestens ein <b>rotes Dreieck</b>.</li>
  <li>✔️ Alle positiven Bilder <b>enthalten kein Dreieck</b>.</li>
  <li>✔️ Alle positiven Bilder enthalten <b>genau drei blaue Kreise</b>.</li>
  <li>✔️ Es gibt ein <b>großes gelbes Quadrat</b>, das in jedem positiven Bild nur einmal vorkommt.</li>
  <li>✔️ Alle Objekte in positiven Bildern haben die <b>gleiche Größe</b>.</li>
  <li>✔️ Es gibt <b>zwei Gruppen von Objekten</b>, die Dreiecke bilden, und <b>jedes Dreieck enthält mindestens einen roten Kreis</b>.</li>
  <li>✔️ Die Objekte bilden eine <b>symmetrische Struktur</b> bezüglich der Mitte.</li>
  <li>✔️ Es gibt <b>mehr rote Objekte als blaue Objekte</b>.</li>
  <li>✔️ In jedem positiven Bild erscheint oben links ein <b>grüner Kreis</b>.</li>
</ul>
Diese Studie soll die Fähigkeit des Menschen messen, abstraktes Schlussfolgern aus visuellen Eingaben durchzuführen. Ihre Teilnahme hilft uns, besser zu verstehen, wie Menschen Muster und Strukturen in visuellen Szenen interpretieren. Vielen Dank! 🙏
    `
  },
  zh: {
    "elvis-tagline": "格式塔视觉基准",
    "welcome-line1": "> 👋 欢迎！本平台邀请您参与我们关于视觉感知中格式塔原则的研究。🧩",
    "welcome-line2": "> 🌟 请先体验演示，然后选择一个原则开始测试。您的参与对我们的研究非常宝贵！💡🦄",
    "demo-btn": "👉 查看演示（强烈推荐先体验）",
    "closure-btn": "闭合任务",
    "proximity-btn": "接近性任务",
    "similarity-btn": "相似性任务",
    "continuity-btn": "连续性任务",
    "symmetry-btn": "对称性任务",
    "demo-description": `
<strong>🧠 这个实验是如何进行的？</strong><br><br>
在本实验中，您将参与一个基于 <b>ELVIS 基准</b> 的视觉推理研究，评估人类基于经典<b>格式塔原则</b>（如接近性、相似性、闭合性等）的推理能力。<br><br>
每个任务中，您会看到：
<ul>
  <li>🟢 一组<b>训练样例</b>——这些样例被标记为
    <span style="color:#388e3c;font-weight:bold;">正例</span> 或
    <span style="color:#d32f2f;font-weight:bold;">反例</span>。
  </li>
  <li>🔍 一组<b>测试样例</b>——您的任务是判断哪些测试样例遵循与正例相同的隐藏规则。</li>
</ul>
<b>什么是正例或反例？</b><br>
<ul>
  <li><span style="color:#388e3c;font-weight:bold;">正例</span> 遵循某个隐藏的逻辑规则（例如：“图片中有一个红色三角形”）。</li>
  <li><span style="color:#d32f2f;font-weight:bold;">反例</span> <b>不</b>遵循该规则。</li>
</ul>
⚠️ <b>您不会被告知规则内容。</b> 您需要通过仔细分析训练样例及其标签，<b>推断出规则</b>。<br><br>
然后，基于您的推理，将规则应用到测试图片并做出判断。<br><br>
✅ <b>您的任务：</b>
<ul>
  <li>研究训练样例，找出正例背后的共同规则。</li>
  <li>将您的推理应用到测试样例。</li>
  <li><b>选择所有您认为是正例的测试图片</b>（即遵循相同规则）。</li>
</ul>
📦 <b>每个任务包含：</b>
<ul>
  <li>少量训练样例（通常为4–6个）。</li>
  <li><b>6个测试图片</b>——您可以选择多个您认为是正例的测试图片。</li>
</ul>
🧩 <b>可能出现的规则类型：</b>
<ul>
  <li>🎨 <b>颜色</b></li>
  <li>🔺 <b>形状</b></li>
  <li>📏 <b>大小</b></li>
  <li>#️⃣ <b>数量</b></li>
  <li>🧩 或上述组合</li>
</ul>
🔎 <b>可能的逻辑规则示例：</b>
<ul>
  <li>✔️ 所有正例都包含至少一个<b>红色三角形</b>。</li>
  <li>✔️ 所有正例<b>都不包含三角形</b>。</li>
  <li>✔️ 所有正例都包含<b>恰好三个蓝色圆形</b>。</li>
  <li>✔️ 有一个<b>大的黄色方块</b>，每个正例中只出现一次。</li>
  <li>✔️ 正例中的所有物体<b>大小相同</b>。</li>
  <li>✔️ 有<b>两组物体</b>组成三角形，<b>每个三角形都至少包含一个红色圆形</b>。</li>
  <li>✔️ 物体以<b>中心对称</b>的结构排列。</li>
  <li>✔️ <b>红色物体数量多于蓝色物体</b>。</li>
  <li>✔️ 每个正例的左上角都有一个<b>绿色圆形</b>。</li>
</ul>
本研究旨在衡量人类从视觉输入中进行抽象推理的能力。感谢您的参与！🙏
    `
  }
};

function setLanguage(lang) {
  for (const [id, text] of Object.entries(translations[lang])) {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === "PRE" || el.tagName === "DIV" || el.tagName === "H3") {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  }
  localStorage.setItem('lang', lang);
  // Dispatch a custom event for other scripts to listen for language changes
  window.dispatchEvent(new Event('languageChanged'));
}

window.onload = function() {
  const savedLang = localStorage.getItem('lang') || 'en';
  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = savedLang;
  setLanguage(savedLang);
};