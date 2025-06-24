const translations = {
  en: {
    "task-title": "Gestalt Benchmark – Human Evaluation",
    principle: "Principle",
    trainingImages: "Training Images",
    testImages: "Test Images (click to select positives)",
    easy: "😊 Easy",
    hard: "😮‍💨 Hard",
    hardnessPrompt: "How did you feel about this task?\nPlease select:",
    nextTask: "Next Task",
    downloadResults: "Download Results",
    task: "Task",
    imageId: "Image ID",
    selected: "Selected",
    isPositive: "Is Positive",
    correct: "Correct",
    timeTaken: "Time (s)",
    yourPerformance: "Your Performance",
    correctCount: "{correct} / {total} correct",
    completedTasks: "You completed {count} tasks.",
    feedbackGreat: "Great job! Your careful work really helps our research.",
    feedbackNice: "Nice effort! Your answers are valuable for our study.",
    feedbackTricky: "These were tricky tasks—thanks for your thoughtful participation!",
    feedbackChallenging: "Those were challenging tasks—your contribution is truly appreciated!",
    downloadResultsBtn: "Download Results",
    uploadResultsBtn: "Upload Results",
    moreTestsBtn: "Do More Tests",
    taskId: "Task ID: {id}",
    "demo-title": "Gestalt Benchmark – Demo", // (translate as appropriate)
    "training-label": "Training Images",      // (translate as appropriate)
    "test-label": "Test Images",              // (translate as appropriate)
    "ready-btn": "Ready to Go",               // (translate as appropriate)
    "elvis-tagline": "The Gestalt Vision Benchmark",
    "welcome-line1": "> 👋 Welcome! This portal lets you participate in our study on Gestalt principles in visual perception. 🧩",
    "welcome-line2": "> 🌟 Please try the demo first, then select a principle to start the test. Your contribution is valuable for our research! 💡🦄",
    "demo-btn": "👉 View Demo (Recommended First)", // For index page
    "demo-next-btn": "Next Demo", // For demo page
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
    "task-title": "Gestalt Benchmark – Menschliche Bewertung",

    principle: "Prinzip",
    trainingImages: "Trainingsbilder",
    testImages: "Testbilder (klicken Sie, um Positive auszuwählen)",
    easy: "😊 Einfach",
    hard: "😮‍💨 Schwierig",
    hardnessPrompt: "Wie empfanden Sie diese Aufgabe?\nBitte auswählen:",
    nextTask: "Nächste Aufgabe",
    downloadResults: "Ergebnisse herunterladen",
    task: "Aufgabe",
    imageId: "Bild-ID",
    selected: "Ausgewählt",
    isPositive: "Positiv",
    correct: "Korrekt",
    timeTaken: "Zeit (s)",
    yourPerformance: "Ihre Leistung",
    correctCount: "{correct} / {total} korrekt",
    completedTasks: "Sie haben {count} Aufgaben abgeschlossen.",
    feedbackGreat: "Großartige Arbeit! Ihre sorgfältige Arbeit hilft unserer Forschung sehr.",
    feedbackNice: "Gute Arbeit! Ihre Antworten sind wertvoll für unsere Studie.",
    feedbackTricky: "Das waren knifflige Aufgaben – danke für Ihre Teilnahme!",
    feedbackChallenging: "Das waren schwierige Aufgaben – Ihr Beitrag wird sehr geschätzt!",
    downloadResultsBtn: "Ergebnisse herunterladen",
    uploadResultsBtn: "Ergebnisse hochladen",
    moreTestsBtn: "Weitere Tests durchführen",
    taskId: "Aufgaben-ID: {id}",
    "training-label": "Trainingsbilder",
    "test-label": "Testbilder",
    "demo-title": "Gestalt Benchmark – Demo",
    "ready-btn": "Bereit zum Start",
    "elvis-tagline": "Die Gestalt Vision Benchmark",
    "welcome-line1": "> 👋 Willkommen! Dieses Portal ermöglicht Ihnen die Teilnahme an unserer Studie zu Gestaltprinzipien in der visuellen Wahrnehmung. 🧩",
    "welcome-line2": "> 🌟 Bitte probieren Sie zuerst die Demo aus und wählen Sie dann ein Prinzip, um den Test zu starten. Ihr Beitrag ist wertvoll für unsere Forschung! 💡🦄",
    "demo-btn": "👉 Demo ansehen (zuerst empfohlen)", // For index page
    "demo-next-btn": "Nächste Demo", // For demo page
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
    "task-title": "格式塔基准 – 人类评估",

    principle: "原则",
    trainingImages: "训练图片",
    testImages: "测试图片（点击选择正样本）",
    easy: "😊 简单",
    hard: "😮‍💨 困难",
    hardnessPrompt: "您觉得这个任务如何？\n请选择：",
    nextTask: "下一个任务",
    downloadResults: "下载结果",
    task: "任务",
    imageId: "图片ID",
    selected: "已选",
    isPositive: "正样本",
    correct: "正确",
    timeTaken: "用时（秒）",
    yourPerformance: "您的表现",
    correctCount: "{correct} / {total} 正确",
    completedTasks: "您完成了 {count} 个任务。",
    feedbackGreat: "干得好！您的认真帮助了我们的研究。",
    feedbackNice: "不错的努力！您的答案对我们的研究很有价值。",
    feedbackTricky: "这些任务很有挑战性——感谢您的参与！",
    feedbackChallenging: "这些任务很难——非常感谢您的贡献！",
    downloadResultsBtn: "下载结果",
    uploadResultsBtn: "上传结果",
    moreTestsBtn: "再做一些测试",
    taskId: "任务ID：{id}",
    "demo-title": "格式塔基准 – 演示",
    "training-label": "训练图片",
    "test-label": "测试图片",
    "ready-btn": "准备好开始",
    "elvis-tagline": "格式塔视觉基准",
    "welcome-line1": "> 👋 欢迎！本平台邀请您参与我们关于视觉感知中格式塔原则的研究。🧩",
    "welcome-line2": "> 🌟 请先体验演示，然后选择一个原则开始测试。您的参与对我们的研究非常宝贵！💡🦄",
    "demo-btn": "👉 查看演示（强烈推荐先体验）", // For index page
    "demo-next-btn": "下一个演示", // For demo page
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
  },
  ja: {
    yourPerformance: "あなたの成績",
    correctCount: "{correct} / {total} 正解",
    completedTasks: "あなたは {count} 件のタスクを完了しました。",
    feedbackGreat: "素晴らしい！あなたの丁寧な作業が私たちの研究に大いに役立っています。",
    feedbackNice: "よくできました！あなたの回答は私たちの研究にとって貴重です。",
    feedbackTricky: "難しいタスクでしたね。ご参加ありがとうございます！",
    feedbackChallenging: "とても難しいタスクでした。ご協力に心より感謝します！",
    downloadResultsBtn: "結果をダウンロード",
    uploadResultsBtn: "結果をアップロード",
    moreTestsBtn: "さらにテストする",
    trainingImages: "トレーニング画像",
    testImages: "テスト画像（クリックして正例を選択）",
    "training-label": "トレーニング画像",
    "test-label": "テスト画像",
    "hardnessPrompt": "このタスクはどう感じましたか？\n選択してください：",
    "easy": "😊 簡単",
    "hard": "😮‍💨 難しい",
    // ...existing keys...
    "task-corner-title": "ゲシュタルトベンチマーク – 人間評価",
    "task-title": "ゲシュタルトベンチマーク – メインタスク",
    "nextTask": "次のタスク",
    // Add more as needed for your UI
    "training-label": "トレーニング画像",
    "test-label": "テスト画像",
    "training-label": "トレーニング画像",
    "test-label": "テスト画像",
    "demo-title": "ゲシュタルトベンチマーク – デモ",
    "ready-btn": "開始の準備ができました",
    "elvis-tagline": "ゲシュタルト視覚ベンチマーク",
    "welcome-line1": "> 👋 ようこそ！このポータルでは、視覚認知におけるゲシュタルト原理に関する研究にご参加いただけます。🧩",
    "welcome-line2": "> 🌟 まずデモをお試しの上、原理を選択してテストを開始してください。ご協力に感謝します！💡🦄",
    "demo-btn": "👉 デモを見る（最初におすすめ）", // For index page
    "demo-next-btn": "次のデモ", // For demo page
    "closure-btn": "閉合課題",
    "proximity-btn": "近接課題",
    "similarity-btn": "類似課題",
    "continuity-btn": "連続課題",
    "symmetry-btn": "対称課題",
    "demo-description": `
<strong>🧠 この実験はどのように行われますか？</strong><br><br>
この実験では、<b>ELVISベンチマーク</b>を用いた視覚的推論の研究にご参加いただきます。これは、古典的な<b>ゲシュタルト原理</b>（近接、類似、閉合など）に基づく人間の推論能力を評価します。<br><br>
各タスクでは、以下が表示されます：
<ul>
  <li>🟢 <b>トレーニング例</b>のセット — それぞれ
    <span style="color:#388e3c;font-weight:bold;">ポジティブ</span>または
    <span style="color:#d32f2f;font-weight:bold;">ネガティブ</span>としてラベル付けされています。
  </li>
  <li>🔍 <b>テスト例</b>のセット — どれがポジティブなトレーニング画像と同じ隠れたルールに従っているかを判断してください。</li>
</ul>
<b>ポジティブまたはネガティブ画像の定義は？</b><br>
<ul>
  <li><span style="color:#388e3c;font-weight:bold;">ポジティブ画像</span>は隠れた論理ルール（例：「画像に赤い三角形がある」）に従います。</li>
  <li><span style="color:#d32f2f;font-weight:bold;">ネガティブ画像</span>はこのルールに<b>従いません</b>。</li>
</ul>
⚠️ <b>ルールは明示されません。</b> トレーニング例とラベルをよく観察し、<b>推測してください</b>。<br><br>
推論に基づき、テスト画像にルールを適用して予測を行ってください。<br><br>
✅ <b>あなたのタスク：</b>
<ul>
  <li>トレーニング例を観察し、ポジティブ例の共通ルールを特定してください。</li>
  <li>その推論をテスト例に適用してください。</li>
  <li><b>同じルールに従っていると思うテスト画像をすべて選択してください。</b></li>
</ul>
📦 <b>各タスクには：</b>
<ul>
  <li>少数のトレーニング例（通常4～6個）</li>
  <li><b>6つのテスト画像</b> — 複数選択可能です。</li>
</ul>
🧩 <b>どんなルールが現れる可能性がありますか？</b>
<ul>
  <li>🎨 <b>色</b></li>
  <li>🔺 <b>形</b></li>
  <li>📏 <b>大きさ</b></li>
  <li>#️⃣ <b>数</b></li>
  <li>🧩 またはこれらの組み合わせ</li>
</ul>
🔎 <b>ルール例：</b>
<ul>
  <li>✔️ すべてのポジティブ画像に<b>赤い三角形</b>が少なくとも1つ含まれている。</li>
  <li>✔️ すべてのポジティブ画像に<b>三角形が含まれていない</b>。</li>
  <li>✔️ すべてのポジティブ画像に<b>青い円がちょうど3つ</b>含まれている。</li>
  <li>✔️ <b>大きな黄色い四角形</b>が各ポジティブ画像に1回だけ現れる。</li>
  <li>✔️ ポジティブ画像内のすべてのオブジェクトが<b>同じ大きさ</b>。</li>
  <li>✔️ <b>2つのグループ</b>が三角形を形成し、<b>各三角形に少なくとも1つ赤い円が含まれている</b>。</li>
  <li>✔️ オブジェクトが<b>中心対称</b>の構造を形成している。</li>
  <li>✔️ <b>赤いオブジェクトが青いオブジェクトより多い</b>。</li>
  <li>✔️ 各ポジティブ画像の左上に<b>緑の円</b>がある。</li>
</ul>
この研究は、人間が視覚情報から抽象的推論を行う能力を測定することを目的としています。ご協力ありがとうございます！🙏
    `
  },
  hi: {
    yourPerformance: "आपका प्रदर्शन",
    correctCount: "{correct} / {total} सही",
    completedTasks: "आपने {count} कार्य पूरे किए।",
    feedbackGreat: "बहुत बढ़िया! आपके सावधानीपूर्वक कार्य ने हमारे शोध में बहुत मदद की।",
    feedbackNice: "अच्छा प्रयास! आपके उत्तर हमारे अध्ययन के लिए मूल्यवान हैं।",
    feedbackTricky: "ये कार्य कठिन थे—आपकी भागीदारी के लिए धन्यवाद!",
    feedbackChallenging: "ये कार्य चुनौतीपूर्ण थे—आपका योगदान वास्तव में सराहनीय है!",
    downloadResultsBtn: "परिणाम डाउनलोड करें",
    uploadResultsBtn: "परिणाम अपलोड करें",
    moreTestsBtn: "और परीक्षण करें",
    trainingImages: "प्रशिक्षण चित्र",
    testImages: "परीक्षण चित्र (सकारात्मक चुनने के लिए क्लिक करें)",
    "training-label": "प्रशिक्षण चित्र",
    "test-label": "परीक्षण चित्र",
    // ...existing keys...
    "hardnessPrompt": "आपको यह कार्य कैसा लगा?\nकृपया चुनें:",
    "easy": "😊 आसान",
    "hard": "😮‍💨 कठिन",
    // ...existing keys...
    "task-corner-title": "गेश्टाल्ट बेंचमार्क – मानव मूल्यांकन",
    "task-title": "गेश्टाल्ट बेंचमार्क – मुख्य कार्य",
    "nextTask": "अगला कार्य",
    // Add more as needed for your UI
    "training-label": "प्रशिक्षण चित्र",
    "test-label": "परीक्षण चित्र",
    "training-label": "प्रशिक्षण चित्र",
    "test-label": "परीक्षण चित्र",
    "demo-title": "गेश्टाल्ट बेंचमार्क – डेमो",
    "ready-btn": "शुरू करने के लिए तैयार",
    "elvis-tagline": "गेश्टाल्ट विज़न बेंचमार्क",
    "welcome-line1": "> 👋 स्वागत है! यह पोर्टल आपको दृश्य धारणा में गेश्टाल्ट सिद्धांतों पर हमारे अध्ययन में भाग लेने देता है।🧩",
    "welcome-line2": "> 🌟 कृपया पहले डेमो आज़माएँ, फिर परीक्षण शुरू करने के लिए एक सिद्धांत चुनें। आपके योगदान के लिए धन्यवाद! 💡🦄",
    "demo-btn": "👉 डेमो देखें (पहले आज़माएँ)", // For index page
    "demo-next-btn": "अगला डेमो", // For demo page
    "closure-btn": "क्लोजर कार्य",
    "proximity-btn": "निकटता कार्य",
    "similarity-btn": "समानता कार्य",
    "continuity-btn": "सातत्य कार्य",
    "symmetry-btn": "सममिति कार्य",
    "demo-description": `
<strong>🧠 यह प्रयोग कैसे काम करता है?</strong><br><br>
इस प्रयोग में, आप <b>ELVIS बेंचमार्क</b> का उपयोग करके एक दृश्य तर्क अध्ययन में भाग लेंगे, जो क्लासिक <b>गेश्टाल्ट सिद्धांतों</b> (जैसे निकटता, समानता, क्लोजर आदि) के आधार पर मानव तर्क का मूल्यांकन करता है।<br><br>
प्रत्येक कार्य में आपको दिखाया जाएगा:
<ul>
  <li>🟢 <b>प्रशिक्षण उदाहरणों</b> का एक सेट — जिन्हें या तो
    <span style="color:#388e3c;font-weight:bold;">सकारात्मक</span> या
    <span style="color:#d32f2f;font-weight:bold;">नकारात्मक</span> के रूप में लेबल किया गया है।
  </li>
  <li>🔍 <b>परीक्षण उदाहरणों</b> का एक सेट — आपको तय करना है कि इनमें से कौन से वही छिपा हुआ नियम अपनाते हैं जो सकारात्मक प्रशिक्षण चित्रों में है।</li>
</ul>
<b>सकारात्मक या नकारात्मक चित्र क्या होते हैं?</b><br>
<ul>
  <li><span style="color:#388e3c;font-weight:bold;">सकारात्मक चित्र</span> एक छिपे हुए तर्क नियम का पालन करते हैं (जैसे, "चित्र में एक लाल त्रिकोण है")।</li>
  <li><span style="color:#d32f2f;font-weight:bold;">नकारात्मक चित्र</span> इस नियम का <b>पालन नहीं करते</b>।</li>
</ul>
⚠️ <b>आपको नियम नहीं बताया जाएगा।</b> इसके बजाय, आपको प्रशिक्षण उदाहरणों और उनके लेबल का विश्लेषण करके <b>नियम का अनुमान लगाना</b> है।<br><br>
फिर, अपने तर्क के आधार पर, आपको परीक्षण चित्रों पर नियम लागू करना है और अपनी भविष्यवाणी करनी है।<br><br>
✅ <b>आपका कार्य:</b>
<ul>
  <li>प्रशिक्षण उदाहरणों का अध्ययन करें और सकारात्मक उदाहरणों के पीछे का सामान्य नियम पहचानें।</li>
  <li>अपने तर्क को परीक्षण उदाहरणों पर लागू करें।</li>
  <li><b>सभी परीक्षण चित्र चुनें जिन्हें आप सकारात्मक मानते हैं</b> (यानी, जो एक ही नियम का पालन करते हैं)।</li>
</ul>
📦 <b>प्रत्येक कार्य में:</b>
<ul>
  <li>कुछ प्रशिक्षण उदाहरण (आमतौर पर 4–6)।</li>
  <li><b>6 परीक्षण चित्र</b> — आप कई परीक्षण चित्र चुन सकते हैं जिन्हें आप सकारात्मक मानते हैं।</li>
</ul>
🧩 <b>किस प्रकार के नियम आ सकते हैं?</b>
<ul>
  <li>🎨 <b>रंग</b></li>
  <li>🔺 <b>आकार</b></li>
  <li>📏 <b>आकार/माप</b></li>
  <li>#️⃣ <b>संख्या</b></li>
  <li>🧩 या उपरोक्त का संयोजन</li>
</ul>
🔎 <b>संभावित तर्क नियमों के उदाहरण:</b>
<ul>
  <li>✔️ सभी सकारात्मक चित्रों में कम से कम एक <b>लाल त्रिकोण</b> है।</li>
  <li>✔️ सभी सकारात्मक चित्रों में <b>कोई त्रिकोण नहीं है</b>।</li>
  <li>✔️ सभी सकारात्मक चित्रों में <b>ठीक तीन नीले वृत्त</b> हैं।</li>
  <li>✔️ एक <b>बड़ा पीला वर्ग</b> है जो प्रत्येक सकारात्मक चित्र में केवल एक बार आता है।</li>
  <li>✔️ सकारात्मक चित्रों में सभी वस्तुएँ <b>एक ही आकार की</b> हैं।</li>
  <li>✔️ <b>दो समूह</b> वस्तुएँ त्रिकोण बनाते हैं, और <b>प्रत्येक त्रिकोण में कम से कम एक लाल वृत्त है</b>।</li>
  <li>✔️ वस्तुएँ <b>केंद्र के सापेक्ष सममित</b> संरचना बनाती हैं।</li>
  <li>✔️ <b>लाल वस्तुएँ नीली वस्तुओं से अधिक हैं</b>।</li>
  <li>✔️ प्रत्येक सकारात्मक चित्र के ऊपर-बाएँ कोने में <b>एक हरा वृत्त</b> है।</li>
</ul>
यह अध्ययन मानव की दृश्य इनपुट से अमूर्त तर्क करने की क्षमता को मापने के लिए डिज़ाइन किया गया है। आपकी भागीदारी के लिए धन्यवाद! 🙏
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

window.onload = function () {
  const savedLang = localStorage.getItem('lang') || 'en';
  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = savedLang;
  setLanguage(savedLang);
};