// 体测标准数据
const STANDARDS = {
	score: {
		male: {
			freshman_sophomore: {
				bmi: [[60, 80, 100], [[28, "max"], [["min", 17.8], [24, 27.9]], [17.9, 23.9]]],
				vital_capacity: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [2300, 2460, 2620, 2780, 2940, 3100, 3220, 3340, 3460, 3580, 3700, 3820, 3940, 4060, 4180, 4300, 4550, 4800, 4920, 5040]],
				race_50m: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [10.1, 9.9, 9.7, 9.5, 9.3, 9.1, 8.9, 8.7, 8.5, 8.3, 8.1, 7.9, 7.7, 7.5, 7.3, 7.1, 7, 6.9, 6.8, 6.7]],
				sit_and_reach: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [-1.3, -0.3, 0.7, 1.7, 2.7, 3.7, 5.1, 6.5, 7.9, 9.3, 10.7, 12.1, 13.5, 14.9, 16.3, 17.7, 19.5, 21.3, 23.1, 24.9]],
				standing_long_jump: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [183, 188, 193, 198, 203, 208, 212, 216, 220, 224, 228, 232, 236, 240, 244, 248, 256, 263, 268, 273]],
				pull_up: [[10, 20, 30, 40, 50, 60, 64, 68, 72, 76, 80, 85, 90, 95, 100], [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]],
				race_1000m: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [372, 352, 332, 312, 292, 272, 267, 262, 257, 252, 247, 242, 237, 232, 227, 222, 214, 207, 202, 197]]
			},
			junior_senior: {
				bmi: [[60, 80, 100], [[28, "max"], [["min", 17.8], [24, 27.9]], [17.9, 23.9]]],
				vital_capacity: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [2350, 2520, 2690, 2860, 3030, 3200, 3320, 3440, 3560, 3680, 3800, 3920, 4040, 4160, 4280, 4400, 4650, 4900, 5020, 5140]],
				race_50m: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [10, 9.8, 9.6, 9.4, 9.2, 9, 8.8, 8.6, 8.4, 8.2, 8, 7.8, 7.6, 7.4, 7.2, 7, 6.9, 6.8, 6.7, 6.6]],
				sit_and_reach: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [-0.8, 0.2, 1.2, 2.2, 3.2, 4.2, 5.6, 7, 8.4, 9.8, 11.2, 12.6, 14, 15.4, 16.8, 18.2, 19.9, 21.5, 23.3, 25.1]],
				standing_long_jump: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [185, 190, 195, 200, 205, 210, 214, 218, 222, 226, 230, 234, 238, 242, 246, 250, 258, 265, 270, 275]],
				pull_up: [[10, 20, 30, 40, 50, 60, 64, 68, 72, 76, 80, 85, 90, 95, 100], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]],
				race_1000m: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [370, 350, 330, 310, 290, 270, 265, 260, 255, 250, 245, 240, 235, 230, 225, 220, 212, 205, 200, 195]]
			}
		},
		female: {
			freshman_sophomore: {
				bmi: [[60, 80, 100], [[28, "max"], [["min", 17.1], [24, 27.9]], [17.2, 23.9]]],
				vital_capacity: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [1800, 1840, 1880, 1920, 1960, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3150, 3300, 3350, 3400]],
				race_50m: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [11.3, 11.1, 10.9, 10.7, 10.5, 10.3, 10.1, 9.9, 9.7, 9.5, 9.3, 9.1, 8.9, 8.7, 8.5, 8.3, 8, 7.7, 7.6, 7.5]],
				sit_and_reach: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [2, 2.8, 3.6, 4.4, 5.2, 6, 7.3, 8.6, 9.9, 11.2, 12.5, 13.8, 15.1, 16.4, 17.7, 19, 20.6, 22.2, 24, 25.8]],
				standing_long_jump: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [126, 131, 136, 141, 146, 151, 154, 157, 160, 163, 166, 169, 172, 175, 178, 181, 188, 195, 201, 207]],
				sit_up: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 49, 52, 54, 56]],
				race_800m: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [324, 314, 304, 294, 284, 274, 269, 264, 259, 254, 249, 244, 239, 234, 229, 224, 217, 210, 204, 198]]
			},
			junior_senior: {
				bmi: [[60, 80, 100], [[28, "max"], [["min", 17.1], [24, 27.9]], [17.2, 23.9]]],
				vital_capacity: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [1850, 1890, 1930, 1970, 2010, 2050, 2150, 2250, 2350, 2450, 2550, 2650, 2750, 2850, 2950, 3050, 3200, 3350, 3400, 3450]],
				race_50m: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [11.2, 11, 10.8, 10.6, 10.4, 10.2, 10, 9.8, 9.6, 9.4, 9.2, 9, 8.8, 8.6, 8.4, 8.2, 7.9, 7.6, 7.5, 7.4]],
				sit_and_reach: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [2.5, 3.3, 4.1, 4.9, 5.7, 6.5, 7.8, 9.1, 10.4, 11.7, 13, 14.3, 15.6, 16.9, 18.2, 19.5, 21, 22.4, 24.4, 26.3]],
				standing_long_jump: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [127, 132, 137, 142, 147, 152, 155, 158, 161, 164, 167, 170, 173, 176, 179, 182, 189, 196, 202, 208]],
				sit_up: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 50, 53, 55, 57]],
				race_800m: [[10, 20, 30, 40, 50, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 85, 90, 95, 100], [322, 312, 302, 292, 282, 272, 267, 262, 257, 252, 247, 242, 237, 232, 227, 222, 215, 208, 202, 196]]
			}
		}
	},
	bonus: {
		male: {
			race_1000m: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [4, 8, 12, 16, 20, 23, 26, 29, 32, 35]],
			pull_up: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]
		},
		female: {
			race_800m: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]],
			sit_up: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 7, 8, 9, 10, 11, 12, 13]]
		}
	},
	grade: {
		male: {
			aggregate: [["优秀", "良好", "及格", "不及格"], [[90, "max"], [80, 89.9], [60, 79.9], ["min", 59.9]]],
			bmi: [["低体重", "正常", "超重", "肥胖"], [["min", 17.8], [17.9, 23.9], [24, 27.9], [28, "max"]]]
		},
		female: {
			aggregate: [["优秀", "良好", "及格", "不及格"], [[90, "max"], [80, 89.9], [60, 79.9], ["min", 59.9]]],
			bmi: [["低体重", "正常", "超重", "肥胖"], [["min", 17.1], [17.2, 23.9], [24, 27.9], [28, "max"]]]
		}
	},
	smallBetter: ["race_50m", "race_800m", "race_1000m"],
	weightingCoefficient: {
		bmi: 0.15,
		vital_capacity: 0.15,
		race_1000m: 0.2,
		race_800m: 0.2,
		race_50m: 0.2,
		sit_up: 0.1,
		sit_and_reach: 0.1,
		pull_up: 0.1,
		standing_long_jump: 0.1
	}
};

// 工具函数
const utils = {
	isNumber: (obj) => typeof obj === 'number',
	isArray: (obj) => Array.isArray(obj),
	last: (arr) => arr[arr.length - 1],
	sum: (arr) => arr.reduce((acc, val) => acc + val, 0),
	values: (obj) => Object.values(obj)
};

// 计算单项分数
function calculateScore(score, standard, isSmallBetter = false) {
	score = Number(score);
	const [values, rules] = standard;
	const len = rules.length;

	for (let i = 0; i < len; i++) {
		const rule = rules[i];
		const value = values[i];

		if (utils.isNumber(rule)) {
			if (score === 0) return 0;
			if (score === rule) return value;

			const compare = isSmallBetter ? score > rule : score < rule;
			if (compare) {
				return i === 0 ? 0 : values[i - 1];
			} else {
				if (i === len - 1) return value;
			}
		} else {
			const ruleArray = utils.isArray(rule[0]) ? rule : [rule];
			for (const r of ruleArray) {
				const min = r[0] === 'min' ? -Infinity : r[0];
				const max = r[1] === 'max' ? Infinity : r[1];
				if (score >= min && score <= max) return value;
			}
		}
	}
	return 0;
}

// 主计算函数
function calculate(gender, grade, performances) {
	// 数据预处理
	const processedPerformances = {};
	Object.keys(performances).forEach(key => {
		if (performances[key] !== '' && performances[key] != null) {
			processedPerformances[key] = Number(performances[key]);
		}
	});

	// 立定跳远单位转换（米转厘米）
	if (processedPerformances.standing_long_jump !== undefined) {
		processedPerformances.standing_long_jump *=
			processedPerformances.standing_long_jump < 5 ? 100 : 1;
	}

	// 计算BMI
	if (processedPerformances.weight && processedPerformances.height) {
		processedPerformances.bmi = Number((
			processedPerformances.weight /
			Math.pow(processedPerformances.height / 100, 2)
		).toFixed(1));
	}

	// 标准化参数
	const normalizedGender = gender === 'male' ? 'male' : 'female';
	const normalizedGrade = ['freshman', 'sophomore'].includes(grade) ?
		'freshman_sophomore' : 'junior_senior';

	const result = {
		performance: processedPerformances,
		rawScore: {},
		score: {},
		bonus: {},
		grade: {},
		aggregate: {}
	};

	// 计算各项成绩
	Object.keys(processedPerformances).forEach(event => {
		const performance = processedPerformances[event];
		const scoreStandard = STANDARDS.score[normalizedGender][normalizedGrade][event];
		const isSmallBetter = STANDARDS.smallBetter.includes(event);
		const gradeStandard = STANDARDS.grade[normalizedGender][event];
		const bonusStandard = STANDARDS.bonus[normalizedGender][event];

		if (scoreStandard) {
			result.rawScore[event] = calculateScore(performance, scoreStandard, isSmallBetter);
			result.score[event] = result.rawScore[event] *
				(STANDARDS.weightingCoefficient[event] || 1);
		}

		if (gradeStandard) {
			const gradeValue = event === 'bmi' ?
				processedPerformances.bmi : result.score[event];
			result.grade[event] = calculateScore(gradeValue, gradeStandard);
		}

		if (bonusStandard) {
			const lastStandard = utils.last(scoreStandard[1]);
			if (performance === 0) {
				result.bonus[event] = 0;
			} else {
				if (isSmallBetter) {
					result.bonus[event] = lastStandard > performance ?
						calculateScore(lastStandard - performance, bonusStandard) : 0;
				} else {
					result.bonus[event] = lastStandard < performance ?
						calculateScore(performance - lastStandard, bonusStandard) : 0;
				}
			}
		}
	});

	// 计算总分
	result.aggregate.score = utils.sum([
		...utils.values(result.score),
		...utils.values(result.bonus)
	]);

	result.aggregate.grade = calculateScore(
		result.aggregate.score,
		STANDARDS.grade[normalizedGender].aggregate
	);

	return result;
}

// DOM 操作和事件处理
class PhysicalTestCalculator {
	constructor() {
		this.form = document.getElementById('testForm');
		this.genderSelect = document.getElementById('gender');
		this.resultsDiv = document.getElementById('results');
		this.init();
	}

	init() {
		this.form.addEventListener('submit', this.handleSubmit.bind(this));
		this.form.addEventListener('reset', this.handleReset.bind(this));
		this.genderSelect.addEventListener('change', this.handleGenderChange.bind(this));
	}

	handleGenderChange(e) {
		const gender = e.target.value;
		const maleSection = document.getElementById('maleSection');
		const femaleSection = document.getElementById('femaleSection');

		if (gender === 'male') {
			maleSection.style.display = 'block';
			femaleSection.style.display = 'none';
		} else if (gender === 'female') {
			maleSection.style.display = 'none';
			femaleSection.style.display = 'block';
		} else {
			maleSection.style.display = 'none';
			femaleSection.style.display = 'none';
		}
	}

	handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData(this.form);
		const data = {};

		for (let [key, value] of formData.entries()) {
			if (value.trim() !== '') {
				data[key] = value;
			}
		}

		if (!data.gender || !data.grade) {
			alert('请选择性别和年级');
			return;
		}

		const performances = { ...data };
		delete performances.gender;
		delete performances.grade;

		try {
			const result = calculate(data.gender, data.grade, performances);
			this.displayResults(result);
		} catch (error) {
			console.error('计算错误:', error);
			alert('计算过程中出现错误，请检查输入数据');
		}
	}

	handleReset() {
		this.resultsDiv.style.display = 'none';
		document.getElementById('maleSection').style.display = 'none';
		document.getElementById('femaleSection').style.display = 'none';
	}

	displayResults(result) {
		const totalScore = Math.round(result.aggregate.score * 10) / 10;
		const totalGrade = result.aggregate.grade;

		document.getElementById('totalScore').textContent = totalScore;
		document.getElementById('totalGrade').textContent = totalGrade;

		const detailsDiv = document.getElementById('resultDetails');
		let detailsHTML = '<div class="details-grid">';

		// 显示各项详细成绩
		const eventNames = {
			bmi: 'BMI指数',
			vital_capacity: '肺活量',
			race_50m: '50米跑',
			sit_and_reach: '坐位体前屈',
			standing_long_jump: '立定跳远',
			pull_up: '引体向上',
			race_1000m: '1000米跑',
			sit_up: '仰卧起坐',
			race_800m: '800米跑'
		};

		Object.keys(result.score).forEach(event => {
			if (result.score[event] !== undefined) {
				const rawScore = result.rawScore[event] || 0;
				const weightedScore = Math.round(result.score[event] * 10) / 10;
				const bonus = result.bonus[event] || 0;
				const grade = result.grade[event] || '';

				detailsHTML += `
					<div class="detail-item">
						<h4>${eventNames[event] || event}</h4>
						<p>原始成绩: ${result.performance[event] || '未测试'}</p>
						<p>单项得分: ${rawScore}分</p>
						<p>加权得分: ${weightedScore}分</p>
						${bonus > 0 ? `<p>加分: ${bonus}分</p>` : ''}
						${grade ? `<p>等级: ${grade}</p>` : ''}
					</div>
				`;
			}
		});

		detailsHTML += '</div>';
		detailsDiv.innerHTML = detailsHTML;

		this.resultsDiv.style.display = 'block';
		this.resultsDiv.scrollIntoView({ behavior: 'smooth' });
	}
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
	new PhysicalTestCalculator();
});