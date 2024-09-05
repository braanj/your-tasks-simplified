<script setup lang="ts">
import Papa from "papaparse";

const file = ref<File | null>();
const route = useRoute();
const config = useRuntimeConfig();

useHead(() => {
  return {
    link: [
      {
        rel: "canonical",
        href: config.public.host + route.path,
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css",
      },
    ],
  };
});

useSeoMeta({
  title: "Homepage",
  ogTitle: "Homepage",
  description: "This is Homepage, let me tell you all about it.",
  ogDescription: "This is Homepage, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

const fileData = ref([]);
watch(fileData, () => {
  generatedTable.value = "";

  isGenerating.value = true;
  setTimeout(() => {
    generateTable(fileData.value);
    isGenerating.value = false;
  }, 1000);
});

const onSubmit = async () => {
  Papa.parse(file.value, {
    config: {},
    before: function (file: File, inputElem: HTMLInputElement) {},
    error: function (err: any, file: File, inputElem: any, reason: any) {
      console.error(err);
    },
    complete: function ({ data }: any) {
      fileData.value = data;
    },
  });

  const { data } = await useFetch("/api/convert-csv-to-html");
  console.log(data.value);
};

const generatedTable = ref("");
const isFileUploaded = ref(false);
const onFileUpload = ($event: Event) => {
  const target = $event.target as HTMLInputElement;

  if (target && target.files) {
    file.value = target.files[0];
    isFileUploaded.value = true;
  }
};

const isGenerating = ref(false);
const generateTable = (data: any[] | null) => {
  if (data && data.length) {
    let head = "";
    let body = "";

    data.forEach((chunk: [], index) => {
      if (index === 0) {
        head = chunk
          .reduce((result: any[], next: any) => {
            return [...result, `<th>${next}</th>`];
          }, [])
          .join("");
      } else {
        body += "<tr>";

        body += chunk
          .reduce((result: any[], next: any) => {
            return [...result, `<td>${next}</td>`];
          }, [])
          .join("");

        body += "</tr>";
      }
    });

    generatedTable.value = `
      <table class="${classes.value.join(" ")}">
          <thead>
            <tr class="has-background-light">
              ${head}
            </tr>
          </thead>
          <tbody>
            ${body}
          </tbody>
        </table>
      `;
  } else {
    console.log("File provided is empty!");
  }
};

const classes = ref<string[]>(["table", "is-bordered", "is-fullwidth"]);
watch(classes, () => {
  generateTable(fileData.value);
});

const addClass = ref(false);
watch(addClass, () => {
  if (addClass.value) {
    classes.value = ["table", "is-bordered"];
  } else {
    classes.value = [];
  }
});

const reset = () => {
  classes.value = [];
  addClass.value = false;
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(generatedTable.value);
};
</script>

<template>
  <!-- TODO: Move the converter to a dedicated page (this page will be the landing page for the tools) -->
  <v-row justify="start" no-gutters fullscreen>
    <v-col cols="4" class="p-4">
      <v-form @submit.prevent="onSubmit">
        <v-file-input
          label="CSV file"
          accept="text/csv"
          prepend-icon="mdi-file-excel"
          variant="outlined"
          density="compact"
          show-size
          hide-details
          @change="onFileUpload($event)"
        />
        <v-btn
          type="submit"
          :loading="isGenerating"
          block
          :disabled="!isFileUploaded"
          class="mt-2 bg-light-blue"
          prepend-icon="mdi-rocket"
          elevation="0"
        >
          Generate</v-btn
        >
      </v-form>

      <v-divider />

      <v-btn
        variant="outlined"
        prepend-icon="mdi-content-copy"
        block
        @click="copyToClipboard"
        :loading="isGenerating"
        :disabled="!generatedTable"
      >
        Copy to clipboard
      </v-btn>
    </v-col>

    <v-divider vertical />

    <v-col class="p-4">
      <div v-if="generatedTable" v-html="generatedTable"></div>

      <v-skeleton-loader
        v-else-if="isGenerating"
        type="table-tbody"
      ></v-skeleton-loader>

      <v-empty-state
        v-else
        headline="Whoops"
        title="No data provided!"
        text="Upload your csv file containing the data to display the table!"
      ></v-empty-state>
    </v-col>
  </v-row>
</template>
