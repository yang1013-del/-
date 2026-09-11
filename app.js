const STORAGE_KEY = "chunhua-qiushi-state-v1";

const defaultState = {
  todos: [
    { id: "todo-1", text: "完成字节跳动在线测评", time: "今天 12:00", done: true },
    { id: "todo-2", text: "把小红书案例改成 STAR 结构", time: "今天 18:00", done: false },
    { id: "todo-3", text: "投递 2 个内容策略岗位", time: "今天 20:30", done: true },
    { id: "todo-4", text: "整理一版 90 秒自我介绍", time: "今天 22:00", done: false }
  ],
  jobs: [
    {
      id: "job-1",
      company: "字节跳动",
      role: "产品运营",
      city: "北京",
      industry: "互联网",
      salary: "25-35K · 15薪",
      tag: "重点关注",
      date: "09.08",
      mark: "字",
      stage: 2,
      jd: "负责字节系产品的用户增长与内容生态运营，围绕用户生命周期设计增长策略，推动产品目标落地。",
      requirements: ["2 年以上互联网产品 / 用户运营经验", "对数据敏感，能独立完成分析与复盘", "有内容平台或增长项目经验优先"],
      ai: "岗位和你的经历匹配度高。建议重点准备“如何从数据发现问题，并通过内容或机制验证方案”的完整案例。"
    },
    {
      id: "job-2",
      company: "小红书",
      role: "内容策略",
      city: "上海",
      industry: "内容社区",
      salary: "20-30K · 14薪",
      tag: "面试中",
      date: "09.06",
      mark: "书",
      stage: 3,
      jd: "参与社区内容生态策略制定，理解用户与创作者需求，通过专题、活动和机制优化提升内容消费效率。",
      requirements: ["具备内容判断力和用户洞察能力", "可以输出清晰的策略方案与复盘", "有社区、媒体或品牌内容经验"],
      ai: "这是你很有优势的方向。面试时少讲“我做了什么”，多补充“为什么这么判断、结果如何被验证”。"
    },
    {
      id: "job-3",
      company: "美团",
      role: "用户增长",
      city: "北京",
      industry: "本地生活",
      salary: "22-32K · 15薪",
      tag: "已投递",
      date: "09.05",
      mark: "美",
      stage: 1,
      jd: "围绕本地生活用户增长目标，负责拉新、促活、留存相关策略设计，协同产品和业务推进项目落地。",
      requirements: ["逻辑清晰，能够拆解复杂增长问题", "熟悉常见增长模型与指标", "较强的跨团队沟通推动能力"],
      ai: "你的简历中有可迁移的增长项目，但需要把业务背景、目标和结果写得更量化，避免只描述执行动作。"
    },
    {
      id: "job-4",
      company: "网易",
      role: "品牌营销",
      city: "杭州",
      industry: "游戏娱乐",
      salary: "18-26K · 14薪",
      tag: "待沟通",
      date: "09.02",
      mark: "易",
      stage: 1,
      jd: "参与品牌整合营销项目，从策略洞察到创意执行，协同外部代理与内部团队完成传播项目。",
      requirements: ["具备品牌或整合营销项目经验", "有较强的提案表达和审美判断", "能够管理多方协作与项目节奏"],
      ai: "可以把你做过的校园品牌项目包装成“洞察—创意—传播—结果”的一页案例，提升岗位相关性。"
    },
    {
      id: "job-5",
      company: "得物",
      role: "社区运营",
      city: "上海",
      industry: "电商零售",
      salary: "18-25K · 13薪",
      tag: "重点关注",
      date: "08.30",
      mark: "得",
      stage: 2,
      jd: "负责社区内容供给和用户互动机制，策划社区活动，提升用户活跃度和内容质量。",
      requirements: ["对年轻用户和社区文化有理解", "具备内容策划、活动运营能力", "有数据复盘意识"],
      ai: "岗位画像与你的内容经验有明显交集。准备一个“低成本撬动用户参与”的案例，会比单纯讲内容产出更有说服力。"
    },
    {
      id: "job-6",
      company: "理想汽车",
      role: "用户运营",
      city: "北京",
      industry: "智能汽车",
      salary: "20-30K · 14薪",
      tag: "已投递",
      date: "08.28",
      mark: "理",
      stage: 1,
      jd: "围绕车主用户全生命周期，设计会员、活动和社群运营方案，提升用户满意度与品牌忠诚度。",
      requirements: ["有用户运营或会员运营经验", "擅长活动策划和用户沟通", "执行力强，关注体验细节"],
      ai: "你的用户同理心是加分项。建议提前准备一个处理负面反馈、最终让用户留下来的故事。"
    },
    {
      id: "job-7",
      company: "腾讯",
      role: "市场策划",
      city: "深圳",
      industry: "互联网",
      salary: "23-33K · 16薪",
      tag: "待投递",
      date: "—",
      mark: "腾",
      stage: 0,
      jd: "负责业务市场策略、整合营销传播和重点项目策划，联动产品、销售和生态伙伴完成市场目标。",
      requirements: ["优秀的策略思考和文字表达能力", "有完整项目策划和推进经验", "能够适应快节奏、多协作环境"],
      ai: "建议先补齐一页作品集，再投递。把“策略判断”放在前面，少展示零散的执行截图。"
    },
    {
      id: "job-8",
      company: "Keep",
      role: "内容运营",
      city: "北京",
      industry: "生活方式",
      salary: "16-24K · 13薪",
      tag: "待投递",
      date: "—",
      mark: "K",
      stage: 0,
      jd: "负责运动内容栏目运营，从选题、生产到分发建立内容工作流，提升内容消费和用户留存。",
      requirements: ["热爱运动或生活方式内容", "具备选题策划与内容编辑能力", "能够用数据判断内容效果"],
      ai: "你的内容敏感度适配度不错。投递前补充内容数据与增长结果，会让这份经历更有重量。"
    }
  ],
  tracking: [
    { id: "track-1", jobId: "job-1", applied: "09月08日", stage: 2, status: "笔试中" },
    { id: "track-2", jobId: "job-2", applied: "09月06日", stage: 3, status: "面试中" },
    { id: "track-3", jobId: "job-3", applied: "09月05日", stage: 1, status: "已投递" },
    { id: "track-4", jobId: "job-5", applied: "08月30日", stage: 2, status: "笔试中" },
    { id: "track-5", jobId: "job-6", applied: "08月28日", stage: 1, status: "已投递" }
  ],
  reviews: [
    {
      id: "review-1",
      jobId: "job-2",
      date: "09月09日",
      question: "如果让你提升一款内容产品的次日留存，你会怎么做？",
      answer: "我会先分析用户流失的节点，再从内容推荐、push 和活动几个方面尝试。之前在校园项目里做过类似的活动，最后留存提升了不少。",
      crash: "回答了很多方法，但没有先澄清目标和指标。",
      diagnosis: "先问清楚“哪类用户、当前留存是多少、业务目标是什么”，再用一个案例证明你的判断。"
    },
    {
      id: "review-2",
      jobId: "job-1",
      date: "09月07日",
      question: "讲一个你通过数据发现问题并推动改进的经历。",
      answer: "当时我们发现内容互动不高，于是重新做了选题规划和发布时间测试，互动率提高了 28%。",
      crash: "数据结果说清楚了，但没有说自己具体推动了哪些协作。",
      diagnosis: "结果很有说服力，下一次补充你如何说服设计、运营和开发一起行动。"
    }
  ]
};

let state = loadState();
let activeJobId = state.jobs[0]?.id || null;
let currentModal = null;
let toastTimer = null;

const stageLabels = ["已投递", "已测评", "已笔试", "已面试", "offer"];

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultState, ...JSON.parse(saved) } : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getJob(jobId) {
  return state.jobs.find((job) => job.id === jobId);
}

function getInitials(job) {
  return job?.mark || job?.company?.slice(0, 1) || "?";
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function switchView(view) {
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.view === view));
  document.querySelectorAll(".view-panel").forEach((panel) => panel.classList.toggle("is-visible", panel.dataset.panel === view));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (view === "jobs") renderJobs();
  if (view === "tracking") renderTracking();
  if (view === "reviews") renderReviews();
}

function renderStats() {
  const stats = [
    { label: "已投递", value: state.tracking.length, meta: "+3 本周", index: "01", action: "tracking" },
    { label: "笔试中", value: state.tracking.filter((item) => item.stage === 2).length, meta: "待完成 2 项", index: "02", action: "tracking" },
    { label: "面试中", value: state.tracking.filter((item) => item.stage >= 3 && item.stage < 5).length, meta: "本周 2 场", index: "03", action: "tracking" },
    { label: "Offer", value: state.tracking.filter((item) => item.stage >= 5).length, meta: "继续保持", index: "04", action: "tracking" }
  ];
  document.querySelector("#statsGrid").innerHTML = stats.map((stat) => `
    <button class="stat-card" data-view-link="${stat.action}">
      <div class="stat-card__top"><span class="stat-label">${stat.label}</span><span class="stat-index">${stat.index}</span></div>
      <div class="stat-value">${stat.value}</div>
      <div class="stat-meta"><strong>${stat.meta}</strong><span>↗</span></div>
    </button>
  `).join("");
}

function renderTodos() {
  const doneCount = state.todos.filter((todo) => todo.done).length;
  document.querySelector("#todoCompleteLabel").textContent = `${doneCount} / ${state.todos.length} 完成`;
  document.querySelector("#todoList").innerHTML = state.todos.map((todo) => `
    <div class="todo-item ${todo.done ? "is-done" : ""}">
      <button class="todo-check ${todo.done ? "is-done" : ""}" data-todo-toggle="${todo.id}" aria-label="${todo.done ? "取消完成" : "标记完成"}"></button>
      <span class="todo-item__text">${escapeHtml(todo.text)}</span>
      <span class="todo-item__time">${escapeHtml(todo.time)}</span>
      <button class="todo-delete" data-todo-delete="${todo.id}" aria-label="删除待办">×</button>
    </div>
  `).join("");
}

function populateJobFilters() {
  const filters = [
    ["#cityFilter", "city", "城市"],
    ["#industryFilter", "industry", "行业"],
    ["#roleFilter", "role", "方向"]
  ];
  filters.forEach(([selector, key, label]) => {
    const select = document.querySelector(selector);
    const current = select.value;
    const values = [...new Set(state.jobs.map((job) => job[key]))];
    select.innerHTML = `<option value="all">${label} · 全部</option>${values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("")}`;
    if (values.includes(current)) select.value = current;
  });
  document.querySelector("#jobCountBadge").textContent = String(state.jobs.length).padStart(2, "0");
}

function renderJobs() {
  populateJobFilters();
  const query = document.querySelector("#jobSearchInput").value.trim().toLowerCase();
  const city = document.querySelector("#cityFilter").value;
  const industry = document.querySelector("#industryFilter").value;
  const role = document.querySelector("#roleFilter").value;
  const filteredJobs = state.jobs.filter((job) => {
    const matchesQuery = !query || [job.company, job.role, job.jd, job.industry].join(" ").toLowerCase().includes(query);
    return matchesQuery && (city === "all" || job.city === city) && (industry === "all" || job.industry === industry) && (role === "all" || job.role === role);
  });
  document.querySelector("#filterResult").textContent = `${filteredJobs.length} 个岗位`;
  if (!filteredJobs.some((job) => job.id === activeJobId)) activeJobId = filteredJobs[0]?.id || null;
  document.querySelector("#jobList").innerHTML = filteredJobs.length ? filteredJobs.map((job) => `
    <article class="job-card ${job.id === activeJobId ? "is-selected" : ""}" data-job-select="${job.id}">
      <div class="company-mark">${escapeHtml(getInitials(job))}</div>
      <div class="job-main">
        <div class="job-title-row"><h3>${escapeHtml(job.role)}</h3><span class="job-tag">${escapeHtml(job.tag)}</span></div>
        <p class="job-company">${escapeHtml(job.company)}</p>
        <div class="job-meta"><span>${escapeHtml(job.city)}</span><span>${escapeHtml(job.industry)}</span><span>${escapeHtml(job.salary)}</span></div>
      </div>
      <button class="job-card-arrow" aria-label="查看岗位详情">→</button>
    </article>
  `).join("") : `<div class="empty-state">没有符合条件的岗位。<button data-action="reset-job-filters">清空筛选</button></div>`;
  renderJobDetail();
}

function renderJobDetail() {
  const job = getJob(activeJobId);
  const panel = document.querySelector("#jobDetailPanel");
  if (!job) {
    panel.innerHTML = `<div class="empty-detail"><span>⌁</span><p>选择一个岗位<br />查看完整 JD 与 AI 点评</p></div>`;
    return;
  }
  panel.innerHTML = `
    <div class="detail-top">
      <div class="detail-mark">${escapeHtml(getInitials(job))}</div>
      <div><h3>${escapeHtml(job.role)}</h3><p>${escapeHtml(job.company)} · ${escapeHtml(job.tag)}</p></div>
      <button class="detail-action" data-action="edit-job" data-job-id="${job.id}" aria-label="编辑岗位">✎</button>
    </div>
    <div class="detail-meta"><span>⌖ ${escapeHtml(job.city)}</span><span>◌ ${escapeHtml(job.industry)}</span><span>◇ ${escapeHtml(job.salary)}</span></div>
    <div class="detail-section"><h4>JOB DESCRIPTION</h4><p>${escapeHtml(job.jd)}</p></div>
    <div class="detail-section"><h4>WHAT THEY LOOK FOR</h4><ul>${job.requirements.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
    <div class="ai-note"><div class="ai-note__label"><span>✦</span> AI 点评</div><p>${escapeHtml(job.ai)}</p></div>
    <div class="detail-footer"><small>最后更新：${escapeHtml(job.date === "—" ? "尚未投递" : `2026.${job.date}`)}</small><button data-action="add-tracking" data-job-id="${job.id}">加入投递追踪</button></div>
  `;
}

function renderFunnel() {
  const counts = stageLabels.map((_, index) => state.tracking.filter((item) => item.stage >= index + 1).length);
  document.querySelector("#funnelStrip").innerHTML = stageLabels.map((label, index) => `
    <div class="funnel-step ${counts[index] ? "is-active" : ""} ${index === 4 && counts[index] ? "is-highlight" : ""}">
      <div class="funnel-dot">${String(counts[index]).padStart(2, "0")}</div>
      <div class="funnel-copy"><strong>${label}</strong><small>${index === 4 ? "收到好消息" : index === 0 ? "已进入流程" : "继续推进中"}</small></div>
    </div>
  `).join("");
}

function renderTracking() {
  renderFunnel();
  const query = document.querySelector("#trackingSearchInput").value.trim().toLowerCase();
  const rows = state.tracking.filter((item) => {
    const job = getJob(item.jobId);
    return !query || [job?.company, job?.role, item.status].join(" ").toLowerCase().includes(query);
  });
  document.querySelector("#trackingTableBody").innerHTML = rows.length ? rows.map((item) => {
    const job = getJob(item.jobId);
    return `
      <tr>
        <td><div class="tracking-job"><div class="company-mark">${escapeHtml(getInitials(job))}</div><div><strong>${escapeHtml(job?.role || "岗位已删除")}</strong><small>${escapeHtml(job?.company || "")}</small></div></div></td>
        <td>${escapeHtml(item.applied)}</td>
        <td><div class="stage-dots">${stageLabels.map((label, index) => `<div class="stage-node ${item.stage >= index + 1 ? "is-done" : ""} ${item.stage === index + 1 ? "is-current" : ""}"><button data-stage-update="${item.id}" data-stage-value="${index + 1}" title="标记为${label}"></button><small>${label}</small></div>`).join("")}</div></td>
        <td><span class="status-pill ${item.stage < 2 ? "is-waiting" : ""}">${escapeHtml(item.status)}</span></td>
        <td><button class="delete-button" data-tracking-delete="${item.id}" aria-label="删除该岗位">⌫</button></td>
      </tr>
    `;
  }).join("") : `<tr><td colspan="5"><div class="empty-state">还没有匹配的投递记录。</div></td></tr>`;
}

function renderReviewSelect() {
  document.querySelector("#reviewJobSelect").innerHTML = state.jobs.map((job) => `<option value="${job.id}">${escapeHtml(job.company)} · ${escapeHtml(job.role)}</option>`).join("");
}

function renderReviews() {
  renderReviewSelect();
  const history = document.querySelector("#reviewHistory");
  if (!state.reviews.length) {
    history.innerHTML = "";
    return;
  }
  history.innerHTML = `<p class="review-history__heading">RECENT NOTES · ${state.reviews.length}</p>${state.reviews.map((review) => {
    const job = getJob(review.jobId);
    return `
      <article class="review-entry">
        <div class="review-entry__top"><strong>${escapeHtml(job?.company || "岗位")} · ${escapeHtml(job?.role || "")}</strong><time>${escapeHtml(review.date)}</time></div>
        <p class="review-entry__question">Q. ${escapeHtml(review.question)}</p>
        <p class="review-entry__answer">${escapeHtml(review.answer)}</p>
        <div class="review-entry__diagnosis">AI 诊断：${escapeHtml(review.diagnosis || review.crash || "继续保留这次复盘，下次回答会更稳。")}</div>
      </article>
    `;
  }).join("")}`;
}

function openModal(type, data = {}) {
  currentModal = { type, data };
  const modal = document.querySelector("#modalBackdrop");
  const form = document.querySelector("#modalForm");
  const title = document.querySelector("#modalTitle");
  const kicker = document.querySelector("#modalKicker");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  if (type === "todo") {
    kicker.textContent = "QUICK EDIT / TODAY";
    title.textContent = data.id ? "编辑今日待办" : "添加一项待办";
    form.innerHTML = `
      <label class="form-label">待办内容<input name="text" value="${escapeHtml(data.text || "")}" placeholder="例如：准备小红书一面案例" required /></label>
      <label class="form-label">截止时间<input name="time" value="${escapeHtml(data.time || "今天 20:00")}" placeholder="例如：今天 20:00" required /></label>
      <div class="modal-actions"><button type="button" class="secondary-button" data-modal-cancel>取消</button><button class="primary-button" type="submit">保存待办</button></div>
    `;
  }
  if (type === "job") {
    kicker.textContent = "OPPORTUNITY LIBRARY";
    title.textContent = data.id ? "编辑岗位信息" : "添加一个岗位";
    form.innerHTML = `
      <div class="modal-grid">
        <label class="form-label">公司<input name="company" value="${escapeHtml(data.company || "")}" placeholder="例如：小红书" required /></label>
        <label class="form-label">岗位<input name="role" value="${escapeHtml(data.role || "")}" placeholder="例如：内容策略" required /></label>
      </div>
      <div class="modal-grid">
        <label class="form-label">城市<input name="city" value="${escapeHtml(data.city || "北京")}" required /></label>
        <label class="form-label">行业<input name="industry" value="${escapeHtml(data.industry || "互联网")}" required /></label>
      </div>
      <label class="form-label">薪资范围<input name="salary" value="${escapeHtml(data.salary || "面议")}" required /></label>
      <label class="form-label">岗位 JD<textarea name="jd" rows="3" required>${escapeHtml(data.jd || "")}</textarea></label>
      <label class="form-label">任职要求<textarea name="requirements" rows="3" placeholder="每行一条">${escapeHtml((data.requirements || []).join("\n"))}</textarea></label>
      <label class="form-label">AI 点评<textarea name="ai" rows="2">${escapeHtml(data.ai || "")}</textarea></label>
      <div class="modal-actions"><button type="button" class="secondary-button" data-modal-cancel>取消</button><button class="primary-button" type="submit">${data.id ? "保存修改" : "加入岗位库"}</button></div>
    `;
  }
  form.querySelector("input, textarea")?.focus();
}

function closeModal() {
  const modal = document.querySelector("#modalBackdrop");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  currentModal = null;
}

function handleModalSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const values = Object.fromEntries(formData.entries());
  if (currentModal?.type === "todo") {
    if (currentModal.data.id) {
      const todo = state.todos.find((item) => item.id === currentModal.data.id);
      Object.assign(todo, { text: values.text, time: values.time });
    } else {
      state.todos.push({ id: `todo-${Date.now()}`, text: values.text, time: values.time, done: false });
    }
    persist();
    renderTodos();
    showToast("待办已更新");
  }
  if (currentModal?.type === "job") {
    const jobData = {
      company: values.company,
      role: values.role,
      city: values.city,
      industry: values.industry,
      salary: values.salary,
      tag: currentModal.data.tag || "待投递",
      date: currentModal.data.date || "—",
      mark: currentModal.data.mark || values.company?.slice(0, 1),
      stage: currentModal.data.stage || 0,
      jd: values.jd,
      requirements: values.requirements.split("\n").map((item) => item.trim()).filter(Boolean),
      ai: values.ai || "请结合你的经历补充一段更具体的 AI 点评。"
    };
    if (currentModal.data.id) {
      const index = state.jobs.findIndex((item) => item.id === currentModal.data.id);
      state.jobs[index] = { ...state.jobs[index], ...jobData };
      activeJobId = currentModal.data.id;
    } else {
      const newJob = { id: `job-${Date.now()}`, ...jobData };
      state.jobs.unshift(newJob);
      activeJobId = newJob.id;
    }
    persist();
    populateJobFilters();
    renderJobs();
    renderReviewSelect();
    showToast(currentModal.data.id ? "岗位信息已更新" : "岗位已加入库中");
  }
  closeModal();
}

function addTracking(jobId) {
  if (state.tracking.some((item) => item.jobId === jobId)) {
    showToast("这个岗位已经在投递追踪里了");
    return;
  }
  state.tracking.unshift({ id: `track-${Date.now()}`, jobId, applied: "今天", stage: 1, status: "已投递" });
  const job = getJob(jobId);
  if (job) {
    job.tag = "已投递";
    job.date = "09.11";
    job.stage = 1;
  }
  persist();
  renderStats();
  renderJobs();
  showToast("已加入投递追踪");
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-view]");
  if (nav) switchView(nav.dataset.view);

  const viewLink = event.target.closest("[data-view-link]");
  if (viewLink) switchView(viewLink.dataset.viewLink);

  const jobCard = event.target.closest("[data-job-select]");
  if (jobCard) {
    activeJobId = jobCard.dataset.jobSelect;
    renderJobs();
  }

  const todoToggle = event.target.closest("[data-todo-toggle]");
  if (todoToggle) {
    const todo = state.todos.find((item) => item.id === todoToggle.dataset.todoToggle);
    if (todo) todo.done = !todo.done;
    persist();
    renderTodos();
  }

  const todoDelete = event.target.closest("[data-todo-delete]");
  if (todoDelete) {
    state.todos = state.todos.filter((item) => item.id !== todoDelete.dataset.todoDelete);
    persist();
    renderTodos();
    showToast("待办已删除");
  }

  const stageButton = event.target.closest("[data-stage-update]");
  if (stageButton) {
    const track = state.tracking.find((item) => item.id === stageButton.dataset.stageUpdate);
    const stage = Number(stageButton.dataset.stageValue);
    if (track) {
      track.stage = stage;
      track.status = stageLabels[stage - 1];
      persist();
      renderTracking();
      renderStats();
      showToast(`进度已更新为：${track.status}`);
    }
  }

  const trackingDelete = event.target.closest("[data-tracking-delete]");
  if (trackingDelete) {
    state.tracking = state.tracking.filter((item) => item.id !== trackingDelete.dataset.trackingDelete);
    persist();
    renderTracking();
    renderStats();
    showToast("投递记录已删除");
  }

  const action = event.target.closest("[data-action]");
  if (action?.dataset.action === "open-todo-form") openModal("todo");
  if (action?.dataset.action === "open-job-form") openModal("job");
  if (action?.dataset.action === "edit-job") openModal("job", getJob(action.dataset.jobId));
  if (action?.dataset.action === "add-tracking") addTracking(action.dataset.jobId);
  if (action?.dataset.action === "focus-review-form") {
    switchView("reviews");
    document.querySelector("#reviewQuestion").focus();
  }
  if (action?.dataset.action === "reset-job-filters") {
    document.querySelector("#jobSearchInput").value = "";
    document.querySelectorAll("#cityFilter, #industryFilter, #roleFilter").forEach((select) => { select.value = "all"; });
    renderJobs();
  }

  if (event.target.closest("[data-modal-cancel]")) closeModal();
});

document.querySelector("#modalClose").addEventListener("click", closeModal);
document.querySelector("#modalBackdrop").addEventListener("click", (event) => {
  if (event.target.id === "modalBackdrop") closeModal();
});
document.querySelector("#modalForm").addEventListener("submit", handleModalSubmit);

document.querySelector("#jobSearchInput").addEventListener("input", renderJobs);
document.querySelectorAll("#cityFilter, #industryFilter, #roleFilter").forEach((select) => select.addEventListener("change", renderJobs));
document.querySelector("#trackingSearchInput").addEventListener("input", renderTracking);
document.querySelector("#focusModeButton").addEventListener("click", () => {
  document.body.classList.toggle("focus-mode");
  showToast(document.body.classList.contains("focus-mode") ? "专注模式已开启" : "专注模式已关闭");
});
document.querySelector("#reviewForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const jobId = document.querySelector("#reviewJobSelect").value;
  const job = getJob(jobId);
  const crash = document.querySelector("#reviewCrash").value.trim();
  state.reviews.unshift({
    id: `review-${Date.now()}`,
    jobId,
    date: "09月11日",
    question: document.querySelector("#reviewQuestion").value.trim(),
    answer: document.querySelector("#reviewAnswer").value.trim(),
    crash,
    diagnosis: crash ? `你已经抓到了关键问题：${crash} 建议下一次先给结论，再补充过程和结果验证。` : "这次记录很完整。下一次可以继续补充数据结果，让回答更有抓手。"
  });
  persist();
  event.currentTarget.reset();
  renderReviews();
  showToast(`${job?.company || "这次"}面试已完成复盘`);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && currentModal) closeModal();
});

renderStats();
renderTodos();
renderJobs();
renderTracking();
renderReviews();
