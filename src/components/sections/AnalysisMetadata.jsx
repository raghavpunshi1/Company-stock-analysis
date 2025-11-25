function AnalysisMetadata({ data }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Analysis Metadata</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Version</p>
          <p className="text-lg font-semibold">{data.analysis_version}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Analysis Date</p>
          <p className="text-lg font-semibold">{data.analysis_date}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Analyst</p>
          <p className="text-lg font-semibold">{data.analyst_name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Data Cutoff</p>
          <p className="text-lg font-semibold">{data.data_cutoff}</p>
        </div>
      </div>
    </div>
  );
}

export default AnalysisMetadata;