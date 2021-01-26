{
    if(tryRunModuleFetchId(2, MODULE.EDGING)) {
        let edgingHistory = createFileHistory('edgemodule', ['Session/Modules/Tease/NoChastity/Edging']);
        let file = edgingHistory.getRandomAvailableFile();
        edgingHistory.addHistoryRun(getFileId(file));
        run(getRelativePersonalityFilePath(file));
    }
}