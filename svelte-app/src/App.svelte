<script>
	import Job from './Job.svelte';
	import Publication from "./Publication.svelte"

	let name = 'world';

	let jobs = [
		{
			"title": "Industrial Ph.D. Student",
			"company": "Novo Nordisk & IT University of Copenhagen",
			"start": 2020, "end": 2023,
			"lead": true
		},
		{
			"title": "Senior Machine Learning Engineer",
			"company": "Karnov Group",
			"start": 2018, "end": 2019,
			"lead": false
		},
		{
			"title": "Research Assistant + Assistant Lecturer",
			"company": "IT University of Copenhagen",
			"start": 2017, "end": 2018,
			"lead": false
		},
		{
			"title": "Fullstack Developer",
			"company": "The International Association of Prosectuors",
			"start": 2014, "end": 2017,
			"lead": false
		},
		{
			"title": "Frontend Developer",
			"company": "Heartbeats",
			"start": 2015, "end": 2016,
			"lead": false
		}
	]

	let lead_job = jobs.filter(j => j.lead)[0]

	let publications = [
		{
			"title": "DaNewsroom - A Large Scale Danish Summarization Dataset",
			"authors": "Daniel Varab, Natalie Schluter",
			"pdf_link": undefined,
			"code_link": undefined, //"https://github.com/danielvarab/da-newsroom",
			"venue": "LREC 2020"
		},
		{
			"title": "When data permutations are pathological: the case of neural natural language inference",
			"authors": "Natalie Schluter, Daniel Varab",
			"pdf_link": "http://aclweb.org/anthology/D18-1534",
			"code_link": undefined,
			"venue": "EMNLP 2018"
		},
		{
			"title": "UniParse: A universal graph-based parsing toolkit",
			"authors": "Daniel Varab, Natalie Schluter",
			"pdf_link": "https://www.aclweb.org/anthology/W19-6149",
			"code_link": "https://github.com/danielvarab/uniparse",
			"venue": "NoDaLiDa 2019"
		}
	]
</script>

<h1>Daniel Varab</h1>
<p>
PhD Student @ Novo Nordisk & IT University of Copenhagen<br>
Natural Language Processing
</p>

<h2>Current Occupation</h2>
<Job {...lead_job} />

<h2>Publications</h2>
{#each publications as pub}
	<Publication {...pub} />
{/each}


<h2>Prior Jobs</h2>
{#each jobs as job}
	<Job {...job}/>
{/each}