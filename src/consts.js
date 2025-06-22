export const emptyForm = {
  company: '',
  job: '',
  link: '',
  salary: 0,
  date: '',
  workplace: 'select',
  description: '',
};

export const INPUT_FIELDS = {
  company: {
    label: 'Company:',
    type: 'text',
    prop: 'company',
    placeholder: 'Google, Amazon...',
    required: true,
  },
  job: {
    label: 'Job:',
    type: 'text',
    prop: 'job',
    placeholder: 'Frontend Web Developer',
    required: true,
  },
  jobLink: {
    label: "Job's link:",
    type: 'text',
    prop: 'link',
    placeholder: 'https://linkedin.com/google-job',
    required: true,
    hasError: true,
  },
  salary: {
    label: 'Salary ($ / month):',
    type: 'number',
    prop: 'salary',
    required: true,
  },
  date: {
    label: 'Date:',
    type: 'date',
    prop: 'date',
    required: true,
  },
  workplace: {
    label: 'Workplace:',
    type: 'select',
    prop: 'workplace',
    required: true,
  },
  description: {
    label: 'Description:',
    type: 'textarea',
    prop: 'description',
    placeholder: 'Web developer job with great salary...',
  },
};