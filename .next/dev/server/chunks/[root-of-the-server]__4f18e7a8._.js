module.exports = [
"[project]/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "en",
    ()=>en,
    "enTranslations",
    ()=>enTranslations
]);
const enTranslations = {
    authentication: {
        account: 'Account',
        accountOfCurrentUser: 'Account of current user',
        accountVerified: 'Account verified successfully.',
        alreadyActivated: 'Already Activated',
        alreadyLoggedIn: 'Already logged in',
        apiKey: 'API Key',
        authenticated: 'Authenticated',
        backToLogin: 'Back to login',
        beginCreateFirstUser: 'To begin, create your first user.',
        changePassword: 'Change Password',
        checkYourEmailForPasswordReset: "If the email address is associated with an account, you will receive instructions to reset your password shortly. Please check your spam or junk mail folder if you don't see the email in your inbox.",
        confirmGeneration: 'Confirm Generation',
        confirmPassword: 'Confirm Password',
        createFirstUser: 'Create first user',
        emailNotValid: 'The email provided is not valid',
        emailOrUsername: 'Email or Username',
        emailSent: 'Email Sent',
        emailVerified: 'Email verified successfully.',
        enableAPIKey: 'Enable API Key',
        failedToUnlock: 'Failed to unlock',
        forceUnlock: 'Force Unlock',
        forgotPassword: 'Forgot Password',
        forgotPasswordEmailInstructions: 'Please enter your email below. You will receive an email message with instructions on how to reset your password.',
        forgotPasswordUsernameInstructions: 'Please enter your username below. Instructions on how to reset your password will be sent to email address associated with your username.',
        usernameNotValid: 'The username provided is not valid',
        forgotPasswordQuestion: 'Forgot password?',
        generate: 'Generate',
        generateNewAPIKey: 'Generate new API key',
        generatingNewAPIKeyWillInvalidate: 'Generating a new API key will <1>invalidate</1> the previous key. Are you sure you wish to continue?',
        lockUntil: 'Lock Until',
        logBackIn: 'Log back in',
        loggedIn: 'To log in with another user, you should <0>log out</0> first.',
        loggedInChangePassword: 'To change your password, go to your <0>account</0> and edit your password there.',
        loggedOutInactivity: 'You have been logged out due to inactivity.',
        loggedOutSuccessfully: 'You have been logged out successfully.',
        loggingOut: 'Logging out...',
        login: 'Login',
        loginAttempts: 'Login Attempts',
        loginUser: 'Login user',
        loginWithAnotherUser: 'To log in with another user, you should <0>log out</0> first.',
        logOut: 'Log out',
        logout: 'Logout',
        logoutSuccessful: 'Logout successful.',
        logoutUser: 'Logout user',
        newAccountCreated: 'A new account has just been created for you to access <a href="{{serverURL}}">{{serverURL}}</a> Please click on the following link or paste the URL below into your browser to verify your email: <a href="{{verificationURL}}">{{verificationURL}}</a><br> After verifying your email, you will be able to log in successfully.',
        newAPIKeyGenerated: 'New API Key Generated.',
        newPassword: 'New Password',
        passed: 'Authentication Passed',
        passwordResetSuccessfully: 'Password reset successfully.',
        resetPassword: 'Reset Password',
        resetPasswordExpiration: 'Reset Password Expiration',
        resetPasswordToken: 'Reset Password Token',
        resetYourPassword: 'Reset Your Password',
        stayLoggedIn: 'Stay logged in',
        successfullyRegisteredFirstUser: 'Successfully registered first user.',
        successfullyUnlocked: 'Successfully unlocked',
        tokenRefreshSuccessful: 'Token refresh successful.',
        unableToVerify: 'Unable to Verify',
        username: 'Username',
        verified: 'Verified',
        verifiedSuccessfully: 'Verified Successfully',
        verify: 'Verify',
        verifyUser: 'Verify User',
        verifyYourEmail: 'Verify your email',
        youAreInactive: "You haven't been active in a little while and will shortly be automatically logged out for your own security. Would you like to stay logged in?",
        youAreReceivingResetPassword: 'You are receiving this because you (or someone else) have requested the reset of the password for your account. Please click on the following link, or paste this into your browser to complete the process:',
        youDidNotRequestPassword: 'If you did not request this, please ignore this email and your password will remain unchanged.'
    },
    dashboard: {
        addWidget: 'Add Widget',
        deleteWidget: 'Delete widget {{id}}',
        searchWidgets: 'Search widgets...'
    },
    error: {
        accountAlreadyActivated: 'This account has already been activated.',
        autosaving: 'There was a problem while autosaving this document.',
        correctInvalidFields: 'Please correct invalid fields.',
        deletingFile: 'There was an error deleting file.',
        deletingTitle: 'There was an error while deleting {{title}}. Please check your connection and try again.',
        documentNotFound: 'The document with ID {{id}} could not be found. It may have been deleted or never existed, or you may not have access to it.',
        emailOrPasswordIncorrect: 'The email or password provided is incorrect.',
        followingFieldsInvalid_one: 'The following field is invalid:',
        followingFieldsInvalid_other: 'The following fields are invalid:',
        incorrectCollection: 'Incorrect Collection',
        insufficientClipboardPermissions: 'Clipboard access denied. Please check your clipboard permissions.',
        invalidClipboardData: 'Invalid clipboard data.',
        invalidFileType: 'Invalid file type',
        invalidFileTypeValue: 'Invalid file type: {{value}}',
        invalidRequestArgs: 'Invalid arguments passed in request: {{args}}',
        loadingDocument: 'There was a problem loading the document with ID of {{id}}.',
        localesNotSaved_one: 'The following locale could not be saved:',
        localesNotSaved_other: 'The following locales could not be saved:',
        logoutFailed: 'Logout failed.',
        missingEmail: 'Missing email.',
        missingIDOfDocument: 'Missing ID of document to update.',
        missingIDOfVersion: 'Missing ID of version.',
        missingRequiredData: 'Missing required data.',
        noFilesUploaded: 'No files were uploaded.',
        noMatchedField: 'No matched field found for "{{label}}"',
        notAllowedToAccessPage: 'You are not allowed to access this page.',
        notAllowedToPerformAction: 'You are not allowed to perform this action.',
        notFound: 'The requested resource was not found.',
        noUser: 'No User',
        previewing: 'There was a problem previewing this document.',
        problemUploadingFile: 'There was a problem while uploading the file.',
        restoringTitle: 'There was an error while restoring {{title}}. Please check your connection and try again.',
        revertingDocument: 'There was a problem while reverting this document.',
        tokenInvalidOrExpired: 'Token is either invalid or has expired.',
        tokenNotProvided: 'Token not provided.',
        unableToCopy: 'Unable to copy.',
        unableToDeleteCount: 'Unable to delete {{count}} out of {{total}} {{label}}.',
        unableToReindexCollection: 'Error reindexing collection {{collection}}. Operation aborted.',
        unableToUpdateCount: 'Unable to update {{count}} out of {{total}} {{label}}.',
        unauthorized: 'Unauthorized, you must be logged in to make this request.',
        unauthorizedAdmin: 'Unauthorized, this user does not have access to the admin panel.',
        unknown: 'An unknown error has occurred.',
        unPublishingDocument: 'There was a problem while un-publishing this document.',
        unspecific: 'An error has occurred.',
        unverifiedEmail: 'Please verify your email before logging in.',
        userEmailAlreadyRegistered: 'A user with the given email is already registered.',
        userLocked: 'This user is locked due to having too many failed login attempts.',
        usernameAlreadyRegistered: 'A user with the given username is already registered.',
        usernameOrPasswordIncorrect: 'The username or password provided is incorrect.',
        valueMustBeUnique: 'Value must be unique',
        verificationTokenInvalid: 'Verification token is invalid.'
    },
    fields: {
        addLabel: 'Add {{label}}',
        addLink: 'Add Link',
        addNew: 'Add new',
        addNewLabel: 'Add new {{label}}',
        addRelationship: 'Add Relationship',
        addUpload: 'Add Upload',
        block: 'Block',
        blocks: 'blocks',
        blockType: 'Block Type',
        chooseBetweenCustomTextOrDocument: 'Choose between entering a custom text URL or linking to another document.',
        chooseDocumentToLink: 'Choose a document to link to',
        chooseFromExisting: 'Choose from existing',
        chooseLabel: 'Choose {{label}}',
        collapseAll: 'Collapse All',
        customURL: 'Custom URL',
        editLabelData: 'Edit {{label}} data',
        editLink: 'Edit Link',
        editRelationship: 'Edit Relationship',
        enterURL: 'Enter a URL',
        internalLink: 'Internal Link',
        itemsAndMore: '{{items}} and {{count}} more',
        labelRelationship: '{{label}} Relationship',
        latitude: 'Latitude',
        linkedTo: 'Linked to <0>{{label}}</0>',
        linkType: 'Link Type',
        longitude: 'Longitude',
        newLabel: 'New {{label}}',
        openInNewTab: 'Open in new tab',
        passwordsDoNotMatch: 'Passwords do not match.',
        relatedDocument: 'Related Document',
        relationTo: 'Relation To',
        removeRelationship: 'Remove Relationship',
        removeUpload: 'Remove Upload',
        saveChanges: 'Save changes',
        searchForBlock: 'Search for a block',
        searchForLanguage: 'Search for a language',
        selectExistingLabel: 'Select existing {{label}}',
        selectFieldsToEdit: 'Select fields to edit',
        showAll: 'Show All',
        swapRelationship: 'Swap Relationship',
        swapUpload: 'Swap Upload',
        textToDisplay: 'Text to display',
        toggleBlock: 'Toggle block',
        uploadNewLabel: 'Upload new {{label}}'
    },
    folder: {
        browseByFolder: 'Browse by Folder',
        byFolder: 'By Folder',
        deleteFolder: 'Delete Folder',
        folderName: 'Folder Name',
        folders: 'Folders',
        folderTypeDescription: 'Select which type of collection documents should be allowed in this folder.',
        itemHasBeenMoved: '{{title}} has been moved to {{folderName}}',
        itemHasBeenMovedToRoot: '{{title}} has been moved to the root folder',
        itemsMovedToFolder: '{{title}} moved to {{folderName}}',
        itemsMovedToRoot: '{{title}} moved to the root folder',
        moveFolder: 'Move Folder',
        moveItemsToFolderConfirmation: 'You are about to move <1>{{count}} {{label}}</1> to <2>{{toFolder}}</2>. Are you sure?',
        moveItemsToRootConfirmation: 'You are about to move <1>{{count}} {{label}}</1> to the root folder. Are you sure?',
        moveItemToFolderConfirmation: 'You are about to move <1>{{title}}</1> to <2>{{toFolder}}</2>. Are you sure?',
        moveItemToRootConfirmation: 'You are about to move <1>{{title}}</1> to the root folder. Are you sure?',
        movingFromFolder: 'Moving {{title}} from {{fromFolder}}',
        newFolder: 'New Folder',
        noFolder: 'No Folder',
        renameFolder: 'Rename Folder',
        searchByNameInFolder: 'Search by Name in {{folderName}}',
        selectFolderForItem: 'Select folder for {{title}}'
    },
    general: {
        name: 'Name',
        aboutToDelete: 'You are about to delete the {{label}} <1>{{title}}</1>. Are you sure?',
        aboutToDeleteCount_many: 'You are about to delete {{count}} {{label}}',
        aboutToDeleteCount_one: 'You are about to delete {{count}} {{label}}',
        aboutToDeleteCount_other: 'You are about to delete {{count}} {{label}}',
        aboutToPermanentlyDelete: 'You are about to permanently delete the {{label}} <1>{{title}}</1>. Are you sure?',
        aboutToPermanentlyDeleteTrash: 'You are about to permanently delete <0>{{count}}</0> <1>{{label}}</1> from the trash. Are you sure?',
        aboutToRestore: 'You are about to restore the {{label}} <1>{{title}}</1>. Are you sure?',
        aboutToRestoreAsDraft: 'You are about to restore the {{label}} <1>{{title}}</1> as a draft. Are you sure?',
        aboutToRestoreAsDraftCount: 'You are about to restore {{count}} {{label}} as draft',
        aboutToRestoreCount: 'You are about to restore {{count}} {{label}}',
        aboutToTrash: 'You are about to move the {{label}} <1>{{title}}</1> to the trash. Are you sure?',
        aboutToTrashCount: 'You are about to move {{count}} {{label}} to the trash',
        addBelow: 'Add Below',
        addFilter: 'Add Filter',
        adminTheme: 'Admin Theme',
        all: 'All',
        allCollections: 'All Collections',
        allLocales: 'All locales',
        and: 'And',
        anotherUser: 'Another user',
        anotherUserTakenOver: 'Another user has taken over editing this document.',
        applyChanges: 'Apply Changes',
        ascending: 'Ascending',
        automatic: 'Automatic',
        backToDashboard: 'Back to Dashboard',
        cancel: 'Cancel',
        changesNotSaved: 'Your changes have not been saved. If you leave now, you will lose your changes.',
        clear: 'Clear',
        clearAll: 'Clear All',
        close: 'Close',
        collapse: 'Collapse',
        collections: 'Collections',
        columns: 'Columns',
        columnToSort: 'Column to Sort',
        confirm: 'Confirm',
        confirmCopy: 'Confirm copy',
        confirmDeletion: 'Confirm deletion',
        confirmDuplication: 'Confirm duplication',
        confirmMove: 'Confirm move',
        confirmReindex: 'Reindex all {{collections}}?',
        confirmReindexAll: 'Reindex all collections?',
        confirmReindexDescription: 'This will remove existing indexes and reindex documents in the {{collections}} collections.',
        confirmReindexDescriptionAll: 'This will remove existing indexes and reindex documents in all collections.',
        confirmRestoration: 'Confirm restoration',
        copied: 'Copied',
        copy: 'Copy',
        copyField: 'Copy Field',
        copying: 'Copying',
        copyRow: 'Copy Row',
        copyWarning: 'You are about to overwrite {{to}} with {{from}} for {{label}} {{title}}. Are you sure?',
        create: 'Create',
        created: 'Created',
        createdAt: 'Created At',
        createNew: 'Create New',
        createNewLabel: 'Create new {{label}}',
        creating: 'Creating',
        creatingNewLabel: 'Creating new {{label}}',
        currentlyEditing: 'is currently editing this document. If you take over, they will be blocked from continuing to edit, and may also lose unsaved changes.',
        custom: 'Custom',
        dark: 'Dark',
        dashboard: 'Dashboard',
        delete: 'Delete',
        deleted: 'Deleted',
        deletedAt: 'Deleted At',
        deletedCountSuccessfully: 'Deleted {{count}} {{label}} successfully.',
        deletedSuccessfully: 'Deleted successfully.',
        deleteLabel: 'Delete {{label}}',
        deletePermanently: 'Skip trash and delete permanently',
        deleting: 'Deleting...',
        depth: 'Depth',
        descending: 'Descending',
        deselectAllRows: 'Deselect all rows',
        document: 'Document',
        documentIsTrashed: 'This {{label}} is trashed and is read-only.',
        documentLocked: 'Document locked',
        documents: 'Documents',
        duplicate: 'Duplicate',
        duplicateWithoutSaving: 'Duplicate without saving changes',
        edit: 'Edit',
        editAll: 'Edit all',
        editedSince: 'Edited since',
        editing: 'Editing',
        editingLabel_many: 'Editing {{count}} {{label}}',
        editingLabel_one: 'Editing {{count}} {{label}}',
        editingLabel_other: 'Editing {{count}} {{label}}',
        editingTakenOver: 'Editing taken over',
        editLabel: 'Edit {{label}}',
        email: 'Email',
        emailAddress: 'Email Address',
        emptyTrash: 'Empty trash',
        emptyTrashLabel: 'Empty {{label}} trash',
        enterAValue: 'Enter a value',
        error: 'Error',
        errors: 'Errors',
        exitLivePreview: 'Exit Live Preview',
        export: 'Export',
        fallbackToDefaultLocale: 'Fallback to default locale',
        false: 'False',
        filter: 'Filter',
        filters: 'Filters',
        filterWhere: 'Filter {{label}} where',
        globals: 'Globals',
        goBack: 'Go back',
        groupByLabel: 'Group by {{label}}',
        import: 'Import',
        isEditing: 'is editing',
        item: 'Item',
        items: 'items',
        language: 'Language',
        lastModified: 'Last Modified',
        leaveAnyway: 'Leave anyway',
        leaveWithoutSaving: 'Leave without saving',
        light: 'Light',
        livePreview: 'Live Preview',
        loading: 'Loading',
        locale: 'Locale',
        locales: 'Locales',
        lock: 'Lock',
        menu: 'Menu',
        moreOptions: 'More options',
        move: 'Move',
        moveConfirm: 'You are about to move {{count}} {{label}} to <1>{{destination}}</1>. Are you sure?',
        moveCount: 'Move {{count}} {{label}}',
        moveDown: 'Move Down',
        moveUp: 'Move Up',
        moving: 'Moving',
        movingCount: 'Moving {{count}} {{label}}',
        newLabel: 'New {{label}}',
        newPassword: 'New Password',
        next: 'Next',
        no: 'No',
        noDateSelected: 'No date selected',
        noFiltersSet: 'No filters set',
        noLabel: '<No {{label}}>',
        none: 'None',
        noOptions: 'No options',
        noResults: "No {{label}} found. Either no {{label}} exist yet or none match the filters you've specified above.",
        notFound: 'Not Found',
        nothingFound: 'Nothing found',
        noTrashResults: 'No {{label}} in trash.',
        noUpcomingEventsScheduled: 'No upcoming events scheduled.',
        noValue: 'No value',
        of: 'of',
        only: 'Only',
        open: 'Open',
        or: 'Or',
        order: 'Order',
        overwriteExistingData: 'Overwrite existing field data',
        pageNotFound: 'Page not found',
        password: 'Password',
        pasteField: 'Paste Field',
        pasteRow: 'Paste Row',
        payloadSettings: 'Payload Settings',
        permanentlyDelete: 'Permanently Delete',
        permanentlyDeletedCountSuccessfully: 'Permanently deleted {{count}} {{label}} successfully.',
        perPage: 'Per Page: {{limit}}',
        previous: 'Previous',
        reindex: 'Reindex',
        reindexingAll: 'Reindexing all {{collections}}.',
        remove: 'Remove',
        rename: 'Rename',
        reset: 'Reset',
        resetPreferences: 'Reset Preferences',
        resetPreferencesDescription: 'This will reset all of your preferences to their default settings.',
        resettingPreferences: 'Resetting Preferences.',
        restore: 'Restore',
        restoreAsPublished: 'Restore as published version',
        restoredCountSuccessfully: 'Restored {{count}} {{label}} successfully.',
        restoring: 'Restoring...',
        row: 'Row',
        rows: 'Rows',
        save: 'Save',
        saving: 'Saving...',
        schedulePublishFor: 'Schedule publish for {{title}}',
        searchBy: 'Search by {{label}}',
        select: 'Select',
        selectAll: 'Select all {{count}} {{label}}',
        selectAllRows: 'Select all rows',
        selectedCount: '{{count}} {{label}} selected',
        selectLabel: 'Select {{label}}',
        selectValue: 'Select a value',
        showAllLabel: 'Show all {{label}}',
        sorryNotFound: 'Sorry—there is nothing to correspond with your request.',
        sort: 'Sort',
        sortByLabelDirection: 'Sort by {{label}} {{direction}}',
        stayOnThisPage: 'Stay on this page',
        submissionSuccessful: 'Submission Successful.',
        submit: 'Submit',
        submitting: 'Submitting...',
        success: 'Success',
        successfullyCreated: '{{label}} successfully created.',
        successfullyDuplicated: '{{label}} successfully duplicated.',
        successfullyReindexed: 'Successfully reindexed {{count}} of {{total}} documents from {{collections}} and skipped {{skips}} drafts.',
        takeOver: 'Take over',
        thisLanguage: 'English',
        time: 'Time',
        timezone: 'Timezone',
        titleDeleted: '{{label}} "{{title}}" successfully deleted.',
        titleRestored: '{{label}} "{{title}}" successfully restored.',
        titleTrashed: '{{label}} "{{title}}" moved to trash.',
        trash: 'Trash',
        trashedCountSuccessfully: '{{count}} {{label}} moved to trash.',
        true: 'True',
        unauthorized: 'Unauthorized',
        unlock: 'Unlock',
        unsavedChanges: 'You have unsaved changes. Save or discard before continuing.',
        unsavedChangesDuplicate: 'You have unsaved changes. Would you like to continue to duplicate?',
        untitled: 'Untitled',
        upcomingEvents: 'Upcoming Events',
        updatedAt: 'Updated At',
        updatedCountSuccessfully: 'Updated {{count}} {{label}} successfully.',
        updatedLabelSuccessfully: 'Updated {{label}} successfully.',
        updatedSuccessfully: 'Updated successfully.',
        updateForEveryone: 'Update for everyone',
        updating: 'Updating',
        uploading: 'Uploading',
        uploadingBulk: 'Uploading {{current}} of {{total}}',
        user: 'User',
        username: 'Username',
        users: 'Users',
        value: 'Value',
        viewing: 'Viewing',
        viewReadOnly: 'View read-only',
        welcome: 'Welcome',
        yes: 'Yes'
    },
    localization: {
        cannotCopySameLocale: 'Cannot copy to the same locale',
        copyFrom: 'Copy from',
        copyFromTo: 'Copying from {{from}} to {{to}}',
        copyTo: 'Copy to',
        copyToLocale: 'Copy to locale',
        localeToPublish: 'Locale to publish',
        selectedLocales: 'Selected Locales',
        selectLocaleToCopy: 'Select locale to copy',
        selectLocaleToDuplicate: 'Select locales to duplicate'
    },
    operators: {
        contains: 'contains',
        equals: 'equals',
        exists: 'exists',
        intersects: 'intersects',
        isGreaterThan: 'is greater than',
        isGreaterThanOrEqualTo: 'is greater than or equal to',
        isIn: 'is in',
        isLessThan: 'is less than',
        isLessThanOrEqualTo: 'is less than or equal to',
        isLike: 'is like',
        isNotEqualTo: 'is not equal to',
        isNotIn: 'is not in',
        isNotLike: 'is not like',
        near: 'near',
        within: 'within'
    },
    upload: {
        addFile: 'Add file',
        addFiles: 'Add files',
        bulkUpload: 'Bulk Upload',
        crop: 'Crop',
        cropToolDescription: 'Drag the corners of the selected area, draw a new area or adjust the values below.',
        download: 'Download',
        dragAndDrop: 'Drag and drop a file',
        dragAndDropHere: 'or drag and drop a file here',
        editImage: 'Edit Image',
        fileName: 'File Name',
        fileSize: 'File Size',
        filesToUpload: 'Files to Upload',
        fileToUpload: 'File to Upload',
        focalPoint: 'Focal Point',
        focalPointDescription: 'Drag the focal point directly on the preview or adjust the values below.',
        height: 'Height',
        lessInfo: 'Less info',
        moreInfo: 'More info',
        noFile: 'No file',
        pasteURL: 'Paste URL',
        previewSizes: 'Preview Sizes',
        selectCollectionToBrowse: 'Select a Collection to Browse',
        selectFile: 'Select a file',
        setCropArea: 'Set crop area',
        setFocalPoint: 'Set focal point',
        sizes: 'Sizes',
        sizesFor: 'Sizes for {{label}}',
        width: 'Width'
    },
    validation: {
        emailAddress: 'Please enter a valid email address.',
        enterNumber: 'Please enter a valid number.',
        fieldHasNo: 'This field has no {{label}}',
        greaterThanMax: '{{value}} is greater than the max allowed {{label}} of {{max}}.',
        invalidBlock: 'The block "{{block}}" is not allowed.',
        invalidBlocks: 'This field contains blocks that are no longer allowed: {{blocks}}.',
        invalidInput: 'This field has an invalid input.',
        invalidSelection: 'This field has an invalid selection.',
        invalidSelections: 'This field has the following invalid selections:',
        latitudeOutOfBounds: 'Latitude must be between -90 and 90.',
        lessThanMin: '{{value}} is less than the min allowed {{label}} of {{min}}.',
        limitReached: 'Limit reached, only {{max}} items can be added.',
        longerThanMin: 'This value must be longer than the minimum length of {{minLength}} characters.',
        longitudeOutOfBounds: 'Longitude must be between -180 and 180.',
        notValidDate: '"{{value}}" is not a valid date.',
        required: 'This field is required.',
        requiresAtLeast: 'This field requires at least {{count}} {{label}}.',
        requiresNoMoreThan: 'This field requires no more than {{count}} {{label}}.',
        requiresTwoNumbers: 'This field requires two numbers.',
        shorterThanMax: 'This value must be shorter than the max length of {{maxLength}} characters.',
        timezoneRequired: 'A timezone is required.',
        trueOrFalse: 'This field can only be equal to true or false.',
        username: 'Please enter a valid username. Can contain letters, numbers, hyphens, periods and underscores.',
        validUploadID: 'This field is not a valid upload ID.'
    },
    version: {
        type: 'Type',
        aboutToPublishSelection: 'You are about to publish all {{label}} in the selection. Are you sure?',
        aboutToRestore: 'You are about to restore this {{label}} document to the state that it was in on {{versionDate}}.',
        aboutToRestoreGlobal: 'You are about to restore the global {{label}} to the state that it was in on {{versionDate}}.',
        aboutToRevertToPublished: "You are about to revert this document's changes to its published state. Are you sure?",
        aboutToUnpublish: 'You are about to unpublish this document. Are you sure?',
        aboutToUnpublishIn: 'You are about to unpublish this document in {{locale}}. Are you sure?',
        aboutToUnpublishSelection: 'You are about to unpublish all {{label}} in the selection. Are you sure?',
        autosave: 'Autosave',
        autosavedSuccessfully: 'Autosaved successfully.',
        autosavedVersion: 'Autosaved version',
        changed: 'Changed',
        changedFieldsCount_one: '{{count}} changed field',
        changedFieldsCount_other: '{{count}} changed fields',
        compareVersion: 'Compare version against:',
        compareVersions: 'Compare Versions',
        comparingAgainst: 'Comparing against',
        confirmPublish: 'Confirm publish',
        confirmRevertToSaved: 'Confirm revert to saved',
        confirmUnpublish: 'Confirm unpublish',
        confirmVersionRestoration: 'Confirm Version Restoration',
        currentDocumentStatus: 'Current {{docStatus}} document',
        currentDraft: 'Current Draft',
        currentlyPublished: 'Currently Published',
        currentlyViewing: 'Currently viewing',
        currentPublishedVersion: 'Current Published Version',
        draft: 'Draft',
        draftHasPublishedVersion: 'Draft (has published version)',
        draftSavedSuccessfully: 'Draft saved successfully.',
        lastSavedAgo: 'Last saved {{distance}} ago',
        modifiedOnly: 'Modified only',
        moreVersions: 'More versions...',
        noFurtherVersionsFound: 'No further versions found',
        noLabelGroup: 'Unnamed Group',
        noRowsFound: 'No {{label}} found',
        noRowsSelected: 'No {{label}} selected',
        preview: 'Preview',
        previouslyDraft: 'Previously a Draft',
        previouslyPublished: 'Previously Published',
        previousVersion: 'Previous Version',
        problemRestoringVersion: 'There was a problem restoring this version',
        publish: 'Publish',
        publishAllLocales: 'Publish all locales',
        publishChanges: 'Publish changes',
        published: 'Published',
        publishIn: 'Publish in {{locale}}',
        publishing: 'Publishing',
        restoreAsDraft: 'Restore as draft',
        restoredSuccessfully: 'Restored Successfully.',
        restoreThisVersion: 'Restore this version',
        restoring: 'Restoring...',
        reverting: 'Reverting...',
        revertToPublished: 'Revert to published',
        revertUnsuccessful: 'Revert unsuccessful. No previously published version found.',
        saveDraft: 'Save Draft',
        scheduledSuccessfully: 'Scheduled successfully.',
        schedulePublish: 'Schedule Publish',
        selectLocales: 'Select locales to display',
        selectVersionToCompare: 'Select a version to compare',
        showingVersionsFor: 'Showing versions for:',
        showLocales: 'Show locales:',
        specificVersion: 'Specific Version',
        status: 'Status',
        unpublish: 'Unpublish',
        unpublished: 'Unpublished',
        unpublishedSuccessfully: 'Unpublished successfully.',
        unpublishIn: 'Unpublish in {{locale}}',
        unpublishing: 'Unpublishing...',
        version: 'Version',
        versionAgo: '{{distance}} ago',
        versionCount_many: '{{count}} versions found',
        versionCount_none: 'No versions found',
        versionCount_one: '{{count}} version found',
        versionCount_other: '{{count}} versions found',
        versionID: 'Version ID',
        versions: 'Versions',
        viewingVersion: 'Viewing version for the {{entityLabel}} {{documentTitle}}',
        viewingVersionGlobal: 'Viewing version for the global {{entityLabel}}',
        viewingVersions: 'Viewing versions for the {{entityLabel}} {{documentTitle}}',
        viewingVersionsGlobal: 'Viewing versions for the global {{entityLabel}}'
    }
};
const en = {
    dateFNSKey: 'en-US',
    translations: enTranslations
}; //# sourceMappingURL=en.js.map
}),
"[project]/node_modules/@payloadcms/translations/dist/utilities/deepMergeSimple.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Very simple, but fast deepMerge implementation. Only deepMerges objects, not arrays and clones everything.
 * Do not use this if your object contains any complex objects like React Components, or if you would like to combine Arrays.
 * If you only have simple objects and need a fast deepMerge, this is the function for you.
 *
 * obj2 takes precedence over obj1 - thus if obj2 has a key that obj1 also has, obj2's value will be used.
 *
 * @param obj1 base object
 * @param obj2 object to merge "into" obj1
 */ __turbopack_context__.s([
    "deepMergeSimple",
    ()=>deepMergeSimple
]);
function deepMergeSimple(obj1, obj2) {
    const output = {
        ...obj1
    };
    for(const key in obj2){
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            if (typeof obj2[key] === 'object' && !Array.isArray(obj2[key]) && obj1[key]) {
                // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
                output[key] = deepMergeSimple(obj1[key], obj2[key]);
            } else {
                // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
                output[key] = obj2[key];
            }
        }
    }
    return output;
} //# sourceMappingURL=deepMergeSimple.js.map
}),
"[project]/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTranslation",
    ()=>getTranslation
]);
const getTranslation = (label, /**
   * @todo type as I18nClient in 4.0
   */ i18n)=>{
    // If it's a Record, look for translation. If string or React Element, pass through
    if (typeof label === 'object' && !Object.prototype.hasOwnProperty.call(label, '$$typeof')) {
        // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
        if (label[i18n.language]) {
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            return label[i18n.language];
        }
        let fallbacks = [];
        if (typeof i18n.fallbackLanguage === 'string') {
            fallbacks = [
                i18n.fallbackLanguage
            ];
        } else if (Array.isArray(i18n.fallbackLanguage)) {
            fallbacks = i18n.fallbackLanguage;
        }
        const fallbackLang = fallbacks.find((language)=>label[language]);
        // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
        return fallbackLang && label[fallbackLang] ? label[fallbackLang] : label[Object.keys(label)[0]];
    }
    if (typeof label === 'function') {
        return label({
            i18n: i18n,
            t: i18n.t
        });
    }
    // If it's a React Element or string, then we should just pass it through
    return label;
}; //# sourceMappingURL=getTranslation.js.map
}),
"[project]/node_modules/@payloadcms/translations/dist/importDateFNSLocale.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "importDateFNSLocale",
    ()=>importDateFNSLocale
]);
const importDateFNSLocale = async (locale)=>{
    let result;
    switch(locale){
        case 'ar':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/ar.js [app-route] (ecmascript, async loader)")).ar;
            break;
        case 'az':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/az.js [app-route] (ecmascript, async loader)")).az;
            break;
        case 'bg':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/bg.js [app-route] (ecmascript, async loader)")).bg;
            break;
        case 'bn-BD':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/bn.js [app-route] (ecmascript, async loader)")).bn;
            break;
        case 'bn-IN':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/bn.js [app-route] (ecmascript, async loader)")).bn;
            break;
        case 'ca':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/ca.js [app-route] (ecmascript, async loader)")).ca;
            break;
        case 'cs':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/cs.js [app-route] (ecmascript, async loader)")).cs;
            break;
        case 'da':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/da.js [app-route] (ecmascript, async loader)")).da;
            break;
        case 'de':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/de.js [app-route] (ecmascript, async loader)")).de;
            break;
        case 'en-US':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/en-US.js [app-route] (ecmascript, async loader)")).enUS;
            break;
        case 'es':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/es.js [app-route] (ecmascript, async loader)")).es;
            break;
        case 'et':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/et.js [app-route] (ecmascript, async loader)")).et;
            break;
        case 'fa-IR':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/fa-IR.js [app-route] (ecmascript, async loader)")).faIR;
            break;
        case 'fr':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/fr.js [app-route] (ecmascript, async loader)")).fr;
            break;
        case 'he':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/he.js [app-route] (ecmascript, async loader)")).he;
            break;
        case 'hr':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/hr.js [app-route] (ecmascript, async loader)")).hr;
            break;
        case 'hu':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/hu.js [app-route] (ecmascript, async loader)")).hu;
            break;
        case 'id':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/id.js [app-route] (ecmascript, async loader)")).id;
            break;
        case 'is':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/is.js [app-route] (ecmascript, async loader)")).is;
            break;
        case 'it':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/it.js [app-route] (ecmascript, async loader)")).it;
            break;
        case 'ja':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/ja.js [app-route] (ecmascript, async loader)")).ja;
            break;
        case 'ko':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/ko.js [app-route] (ecmascript, async loader)")).ko;
            break;
        case 'lt':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/lt.js [app-route] (ecmascript, async loader)")).lt;
            break;
        case 'lv':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/lv.js [app-route] (ecmascript, async loader)")).lv;
            break;
        case 'nb':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/nb.js [app-route] (ecmascript, async loader)")).nb;
            break;
        case 'nl':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/nl.js [app-route] (ecmascript, async loader)")).nl;
            break;
        case 'pl':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/pl.js [app-route] (ecmascript, async loader)")).pl;
            break;
        case 'pt':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/pt.js [app-route] (ecmascript, async loader)")).pt;
            break;
        case 'ro':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/ro.js [app-route] (ecmascript, async loader)")).ro;
            break;
        case 'rs':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/sr.js [app-route] (ecmascript, async loader)")).sr;
            break;
        case 'rs-Latin':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/sr-Latn.js [app-route] (ecmascript, async loader)")).srLatn;
            break;
        case 'ru':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/ru.js [app-route] (ecmascript, async loader)")).ru;
            break;
        case 'sk':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/sk.js [app-route] (ecmascript, async loader)")).sk;
            break;
        case 'sl-SI':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/sl.js [app-route] (ecmascript, async loader)")).sl;
            break;
        case 'sv':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/sv.js [app-route] (ecmascript, async loader)")).sv;
            break;
        case 'ta':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/ta.js [app-route] (ecmascript, async loader)")).ta;
            break;
        case 'th':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/th.js [app-route] (ecmascript, async loader)")).th;
            break;
        case 'tr':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/tr.js [app-route] (ecmascript, async loader)")).tr;
            break;
        case 'uk':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/uk.js [app-route] (ecmascript, async loader)")).uk;
            break;
        case 'vi':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/vi.js [app-route] (ecmascript, async loader)")).vi;
            break;
        case 'zh-CN':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/zh-CN.js [app-route] (ecmascript, async loader)")).zhCN;
            break;
        case 'zh-TW':
            result = (await __turbopack_context__.A("[project]/node_modules/@payloadcms/translations/node_modules/date-fns/locale/zh-TW.js [app-route] (ecmascript, async loader)")).zhTW;
            break;
    }
    // @ts-expect-error - I'm not sure if this is still necessary.
    if (result?.default) {
        // @ts-expect-error - I'm not sure if this is still necessary.
        return result.default;
    }
    return result;
}; //# sourceMappingURL=importDateFNSLocale.js.map
}),
"[project]/node_modules/@payloadcms/translations/dist/clientKeys.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clientTranslationKeys",
    ()=>clientTranslationKeys
]);
function createClientTranslationKeys(keys) {
    return keys;
}
const clientTranslationKeys = createClientTranslationKeys([
    'authentication:account',
    'authentication:accountOfCurrentUser',
    'authentication:accountVerified',
    'authentication:alreadyActivated',
    'authentication:alreadyLoggedIn',
    'authentication:apiKey',
    'authentication:authenticated',
    'authentication:backToLogin',
    'authentication:beginCreateFirstUser',
    'authentication:changePassword',
    'authentication:checkYourEmailForPasswordReset',
    'authentication:confirmGeneration',
    'authentication:confirmPassword',
    'authentication:createFirstUser',
    'authentication:emailNotValid',
    'authentication:usernameNotValid',
    'authentication:emailOrUsername',
    'authentication:emailSent',
    'authentication:emailVerified',
    'authentication:enableAPIKey',
    'authentication:failedToUnlock',
    'authentication:forceUnlock',
    'authentication:forgotPassword',
    'authentication:forgotPasswordEmailInstructions',
    'authentication:forgotPasswordUsernameInstructions',
    'authentication:forgotPasswordQuestion',
    'authentication:generate',
    'authentication:generateNewAPIKey',
    'authentication:generatingNewAPIKeyWillInvalidate',
    'authentication:logBackIn',
    'authentication:loggedOutInactivity',
    'authentication:loggedOutSuccessfully',
    'authentication:loggingOut',
    'authentication:login',
    'authentication:logOut',
    'authentication:loggedIn',
    'authentication:loggedInChangePassword',
    'authentication:logout',
    'authentication:logoutUser',
    'authentication:logoutSuccessful',
    'authentication:newAPIKeyGenerated',
    'authentication:newPassword',
    'authentication:passed',
    'authentication:passwordResetSuccessfully',
    'authentication:resetPassword',
    'authentication:stayLoggedIn',
    'authentication:successfullyRegisteredFirstUser',
    'authentication:successfullyUnlocked',
    'authentication:username',
    'authentication:unableToVerify',
    'authentication:tokenRefreshSuccessful',
    'authentication:verified',
    'authentication:verifiedSuccessfully',
    'authentication:verify',
    'authentication:verifyUser',
    'authentication:youAreInactive',
    'dashboard:addWidget',
    'dashboard:deleteWidget',
    'dashboard:searchWidgets',
    'error:autosaving',
    'error:correctInvalidFields',
    'error:deletingTitle',
    'error:documentNotFound',
    'error:emailOrPasswordIncorrect',
    'error:usernameOrPasswordIncorrect',
    'error:loadingDocument',
    'error:insufficientClipboardPermissions',
    'error:invalidClipboardData',
    'error:invalidRequestArgs',
    'error:invalidFileType',
    'error:logoutFailed',
    'error:noMatchedField',
    'error:notAllowedToAccessPage',
    'error:previewing',
    'error:unableToCopy',
    'error:unableToDeleteCount',
    'error:unableToReindexCollection',
    'error:unableToUpdateCount',
    'error:unauthorized',
    'error:unauthorizedAdmin',
    'error:unknown',
    'error:unspecific',
    'error:unverifiedEmail',
    'error:userEmailAlreadyRegistered',
    'error:usernameAlreadyRegistered',
    'error:tokenNotProvided',
    'error:unPublishingDocument',
    'error:revertingDocument',
    'error:problemUploadingFile',
    'error:restoringTitle',
    'fields:addLabel',
    'fields:addLink',
    'fields:addNew',
    'fields:addNewLabel',
    'fields:addRelationship',
    'fields:addUpload',
    'fields:block',
    'fields:blocks',
    'fields:blockType',
    'fields:chooseBetweenCustomTextOrDocument',
    'fields:customURL',
    'fields:chooseDocumentToLink',
    'fields:openInNewTab',
    'fields:enterURL',
    'fields:internalLink',
    'fields:chooseFromExisting',
    'fields:linkType',
    'fields:textToDisplay',
    'fields:searchForLanguage',
    'fields:collapseAll',
    'fields:editLink',
    'fields:editRelationship',
    'fields:itemsAndMore',
    'fields:labelRelationship',
    'fields:latitude',
    'fields:linkedTo',
    'fields:longitude',
    'fields:passwordsDoNotMatch',
    'fields:removeRelationship',
    'fields:removeUpload',
    'fields:saveChanges',
    'fields:searchForBlock',
    'fields:selectFieldsToEdit',
    'fields:showAll',
    'fields:swapRelationship',
    'fields:swapUpload',
    'fields:toggleBlock',
    'fields:uploadNewLabel',
    'folder:byFolder',
    'folder:browseByFolder',
    'folder:deleteFolder',
    'folder:folders',
    'folder:folderTypeDescription',
    'folder:folderName',
    'folder:itemsMovedToFolder',
    'folder:itemsMovedToRoot',
    'folder:itemHasBeenMoved',
    'folder:itemHasBeenMovedToRoot',
    'folder:moveFolder',
    'folder:movingFromFolder',
    'folder:moveItemsToFolderConfirmation',
    'folder:moveItemsToRootConfirmation',
    'folder:moveItemToFolderConfirmation',
    'folder:moveItemToRootConfirmation',
    'folder:noFolder',
    'folder:newFolder',
    'folder:renameFolder',
    'folder:searchByNameInFolder',
    'folder:selectFolderForItem',
    'general:all',
    'general:aboutToDeleteCount',
    'general:aboutToDelete',
    'general:aboutToPermanentlyDelete',
    'general:aboutToPermanentlyDeleteTrash',
    'general:aboutToRestore',
    'general:aboutToRestoreAsDraft',
    'general:aboutToRestoreAsDraftCount',
    'general:aboutToRestoreCount',
    'general:aboutToTrash',
    'general:aboutToTrashCount',
    'general:addBelow',
    'general:addFilter',
    'general:adminTheme',
    'general:allCollections',
    'general:and',
    'general:anotherUser',
    'general:anotherUserTakenOver',
    'general:applyChanges',
    'general:ascending',
    'general:automatic',
    'general:backToDashboard',
    'general:cancel',
    'general:changesNotSaved',
    'general:close',
    'general:collapse',
    'general:collections',
    'general:confirmMove',
    'general:yes',
    'general:no',
    'general:columns',
    'general:columnToSort',
    'general:confirm',
    'general:confirmCopy',
    'general:confirmDeletion',
    'general:confirmDuplication',
    'general:confirmReindex',
    'general:confirmReindexAll',
    'general:confirmReindexDescription',
    'general:confirmReindexDescriptionAll',
    'general:confirmRestoration',
    'general:copied',
    'general:clear',
    'general:clearAll',
    'general:copy',
    'general:copyField',
    'general:copyRow',
    'general:copyWarning',
    'general:copying',
    'general:create',
    'general:created',
    'general:createdAt',
    'general:createNew',
    'general:createNewLabel',
    'general:creating',
    'general:creatingNewLabel',
    'general:currentlyEditing',
    'general:custom',
    'general:dark',
    'general:dashboard',
    'general:delete',
    'general:deleted',
    'general:deletedAt',
    'general:deletePermanently',
    'general:deleteLabel',
    'general:deletedSuccessfully',
    'general:deletedCountSuccessfully',
    'general:deleting',
    'general:descending',
    'general:depth',
    'general:deselectAllRows',
    'general:document',
    'general:documentIsTrashed',
    'general:documentLocked',
    'general:documents',
    'general:duplicate',
    'general:duplicateWithoutSaving',
    'general:edit',
    'general:editAll',
    'general:editing',
    'general:editingLabel',
    'general:editingTakenOver',
    'general:editLabel',
    'general:editedSince',
    'general:email',
    'general:emailAddress',
    'general:emptyTrash',
    'general:emptyTrashLabel',
    'general:enterAValue',
    'general:error',
    'general:errors',
    'general:fallbackToDefaultLocale',
    'general:false',
    'general:filters',
    'general:filterWhere',
    'general:globals',
    'general:goBack',
    'general:groupByLabel',
    'general:isEditing',
    'general:item',
    'general:items',
    'general:language',
    'general:lastModified',
    'general:leaveAnyway',
    'general:leaveWithoutSaving',
    'general:light',
    'general:livePreview',
    'general:lock',
    'general:exitLivePreview',
    'general:loading',
    'general:locale',
    'general:locales',
    'general:menu',
    'general:moreOptions',
    'general:move',
    'general:moveConfirm',
    'general:moveCount',
    'general:moveDown',
    'general:moveUp',
    'general:moving',
    'general:movingCount',
    'general:name',
    'general:next',
    'general:newLabel',
    'general:noDateSelected',
    'general:noFiltersSet',
    'general:noLabel',
    'general:none',
    'general:noOptions',
    'general:noResults',
    'general:notFound',
    'general:nothingFound',
    'general:noTrashResults',
    'general:noUpcomingEventsScheduled',
    'general:noValue',
    'general:of',
    'general:open',
    'general:only',
    'general:or',
    'general:order',
    'general:overwriteExistingData',
    'general:pageNotFound',
    'general:password',
    'general:pasteField',
    'general:pasteRow',
    'general:payloadSettings',
    'general:permanentlyDelete',
    'general:permanentlyDeletedCountSuccessfully',
    'general:perPage',
    'general:previous',
    'general:reindex',
    'general:reindexingAll',
    'general:remove',
    'general:rename',
    'general:reset',
    'general:resetPreferences',
    'general:resetPreferencesDescription',
    'general:resettingPreferences',
    'general:restore',
    'general:restoreAsPublished',
    'general:restoredCountSuccessfully',
    'general:restoring',
    'general:row',
    'general:rows',
    'general:save',
    'general:schedulePublishFor',
    'general:saving',
    'general:searchBy',
    'general:select',
    'general:selectAll',
    'general:selectAllRows',
    'general:selectedCount',
    'general:selectLabel',
    'general:selectValue',
    'general:showAllLabel',
    'general:sorryNotFound',
    'general:sort',
    'general:sortByLabelDirection',
    'general:stayOnThisPage',
    'general:submissionSuccessful',
    'general:submit',
    'general:submitting',
    'general:success',
    'general:successfullyCreated',
    'general:successfullyDuplicated',
    'general:successfullyReindexed',
    'general:takeOver',
    'general:thisLanguage',
    'general:time',
    'general:timezone',
    'general:titleDeleted',
    'general:titleTrashed',
    'general:titleRestored',
    'general:trash',
    'general:trashedCountSuccessfully',
    'general:import',
    'general:export',
    'general:allLocales',
    'general:true',
    'general:upcomingEvents',
    'general:users',
    'general:user',
    'general:username',
    'general:unauthorized',
    'general:unlock',
    'general:unsavedChanges',
    'general:unsavedChangesDuplicate',
    'general:untitled',
    'general:updatedAt',
    'general:updatedLabelSuccessfully',
    'general:updatedCountSuccessfully',
    'general:updateForEveryone',
    'general:updatedSuccessfully',
    'general:updating',
    'general:value',
    'general:viewing',
    'general:viewReadOnly',
    'general:uploading',
    'general:uploadingBulk',
    'general:welcome',
    'localization:localeToPublish',
    'localization:copyToLocale',
    'localization:copyFromTo',
    'localization:selectedLocales',
    'localization:selectLocaleToCopy',
    'localization:selectLocaleToDuplicate',
    'localization:cannotCopySameLocale',
    'localization:copyFrom',
    'localization:copyTo',
    'operators:equals',
    'operators:exists',
    'operators:isNotIn',
    'operators:isIn',
    'operators:contains',
    'operators:isLike',
    'operators:isNotLike',
    'operators:isNotEqualTo',
    'operators:near',
    'operators:isGreaterThan',
    'operators:isLessThan',
    'operators:isGreaterThanOrEqualTo',
    'operators:isLessThanOrEqualTo',
    'operators:within',
    'operators:intersects',
    'upload:addFile',
    'upload:addFiles',
    'upload:bulkUpload',
    'upload:crop',
    'upload:cropToolDescription',
    'upload:dragAndDrop',
    'upload:editImage',
    'upload:fileToUpload',
    'upload:filesToUpload',
    'upload:focalPoint',
    'upload:focalPointDescription',
    'upload:height',
    'upload:pasteURL',
    'upload:previewSizes',
    'upload:selectCollectionToBrowse',
    'upload:selectFile',
    'upload:setCropArea',
    'upload:setFocalPoint',
    'upload:sizesFor',
    'upload:sizes',
    'upload:width',
    'upload:fileName',
    'upload:fileSize',
    'upload:noFile',
    'upload:download',
    'validation:emailAddress',
    'validation:enterNumber',
    'validation:fieldHasNo',
    'validation:greaterThanMax',
    'validation:invalidInput',
    'validation:invalidSelection',
    'validation:invalidSelections',
    'validation:latitudeOutOfBounds',
    'validation:lessThanMin',
    'validation:limitReached',
    'validation:longitudeOutOfBounds',
    'validation:invalidBlock',
    'validation:invalidBlocks',
    'validation:longerThanMin',
    'validation:notValidDate',
    'validation:required',
    'validation:requiresAtLeast',
    'validation:requiresNoMoreThan',
    'validation:requiresTwoNumbers',
    'validation:shorterThanMax',
    'validation:trueOrFalse',
    'validation:timezoneRequired',
    'validation:username',
    'validation:validUploadID',
    'version:aboutToPublishSelection',
    'version:aboutToRestore',
    'version:aboutToRestoreGlobal',
    'version:aboutToRevertToPublished',
    'version:aboutToUnpublish',
    'version:aboutToUnpublishIn',
    'version:aboutToUnpublishSelection',
    'version:autosave',
    'version:autosavedSuccessfully',
    'version:autosavedVersion',
    'version:versionAgo',
    'version:moreVersions',
    'version:changed',
    'version:changedFieldsCount',
    'version:confirmRevertToSaved',
    'version:compareVersions',
    'version:comparingAgainst',
    'version:currentlyViewing',
    'version:confirmPublish',
    'version:confirmUnpublish',
    'version:confirmVersionRestoration',
    'version:currentDraft',
    'version:currentPublishedVersion',
    'version:currentlyPublished',
    'version:draft',
    'version:draftHasPublishedVersion',
    'version:draftSavedSuccessfully',
    'version:lastSavedAgo',
    'version:modifiedOnly',
    'version:noFurtherVersionsFound',
    'version:noLabelGroup',
    'version:noRowsFound',
    'version:noRowsSelected',
    'version:preview',
    'version:previouslyDraft',
    'version:previouslyPublished',
    'version:previousVersion',
    'version:problemRestoringVersion',
    'version:publish',
    'version:publishAllLocales',
    'version:publishChanges',
    'version:published',
    'version:publishIn',
    'version:publishing',
    'version:restoreAsDraft',
    'version:restoredSuccessfully',
    'version:restoreThisVersion',
    'version:restoring',
    'version:reverting',
    'version:revertUnsuccessful',
    'version:revertToPublished',
    'version:saveDraft',
    'version:scheduledSuccessfully',
    'version:schedulePublish',
    'version:selectLocales',
    'version:selectVersionToCompare',
    'version:showLocales',
    'version:specificVersion',
    'version:status',
    'version:type',
    'version:unpublish',
    'version:unpublished',
    'version:unpublishIn',
    'version:unpublishing',
    'version:unpublishedSuccessfully',
    'version:versionID',
    'version:version',
    'version:versions',
    'version:viewingVersion',
    'version:viewingVersionGlobal',
    'version:viewingVersions',
    'version:viewingVersionsGlobal'
]); //# sourceMappingURL=clientKeys.js.map
}),
"[project]/node_modules/@payloadcms/translations/dist/utilities/getTranslationsByContext.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTranslationsByContext",
    ()=>getTranslationsByContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$clientKeys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/translations/dist/clientKeys.js [app-route] (ecmascript)");
;
function filterKeys(obj, parentGroupKey = '', keys) {
    const result = {};
    for (const [namespaceKey, value] of Object.entries(obj)){
        // Skip $schema key
        if (namespaceKey === '$schema') {
            result[namespaceKey] = value;
            continue;
        }
        if (typeof value === 'object') {
            const filteredObject = filterKeys(value, namespaceKey, keys);
            if (Object.keys(filteredObject).length > 0) {
                result[namespaceKey] = filteredObject;
            }
        } else {
            for (const key of keys){
                const [groupKey, selector] = key.split(':');
                if (parentGroupKey === groupKey) {
                    if (namespaceKey === selector) {
                        result[selector] = value;
                    } else {
                        const pluralKeys = [
                            'zero',
                            'one',
                            'two',
                            'few',
                            'many',
                            'other'
                        ];
                        pluralKeys.forEach((pluralKey)=>{
                            if (namespaceKey === `${selector}_${pluralKey}`) {
                                result[`${selector}_${pluralKey}`] = value;
                            }
                        });
                    }
                }
            }
        }
    }
    return result;
}
function sortObject(obj) {
    const sortedObject = {};
    Object.keys(obj).sort().forEach((key)=>{
        if (typeof obj[key] === 'object') {
            sortedObject[key] = sortObject(obj[key]);
        } else {
            sortedObject[key] = obj[key];
        }
    });
    return sortedObject;
}
const getTranslationsByContext = (selectedLanguage, context)=>{
    if (context === 'client') {
        return sortObject(filterKeys(selectedLanguage.translations, '', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$clientKeys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clientTranslationKeys"]));
    } else {
        return selectedLanguage.translations;
    }
}; //# sourceMappingURL=getTranslationsByContext.js.map
}),
"[project]/node_modules/@payloadcms/translations/dist/utilities/init.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTranslationString",
    ()=>getTranslationString,
    "initI18n",
    ()=>initI18n,
    "t",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$importDateFNSLocale$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/translations/dist/importDateFNSLocale.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$deepMergeSimple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/translations/dist/utilities/deepMergeSimple.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslationsByContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/translations/dist/utilities/getTranslationsByContext.js [app-route] (ecmascript)");
;
;
;
const getTranslationString = ({ count, key, translations })=>{
    const keys = key.split(':');
    let keySuffix = '';
    const translation = keys.reduce((acc, key, index)=>{
        if (typeof acc === 'string') {
            return acc;
        }
        if (typeof count === 'number') {
            if (count === 0 && `${key}_zero` in acc) {
                keySuffix = '_zero';
            } else if (count === 1 && `${key}_one` in acc) {
                keySuffix = '_one';
            } else if (count === 2 && `${key}_two` in acc) {
                keySuffix = '_two';
            } else if (count > 5 && `${key}_many` in acc) {
                keySuffix = '_many';
            } else if (count > 2 && count <= 5 && `${key}_few` in acc) {
                keySuffix = '_few';
            } else if (`${key}_other` in acc) {
                keySuffix = '_other';
            }
        }
        let keyToUse = key;
        if (index === keys.length - 1 && keySuffix) {
            keyToUse = `${key}${keySuffix}`;
        }
        if (acc && keyToUse in acc) {
            return acc[keyToUse];
        }
        return undefined;
    }, translations);
    if (!translation) {
        console.log('key not found:', key);
    }
    return translation || key;
};
/**
 * @function replaceVars
 *
 * Replaces variables in a translation string with values from an object
 *
 * @returns string
 */ const replaceVars = ({ translationString, vars })=>{
    const parts = translationString.split(/(\{\{.*?\}\})/);
    return parts.map((part)=>{
        if (part.startsWith('{{') && part.endsWith('}}')) {
            const placeholder = part.substring(2, part.length - 2).trim();
            const value = vars[placeholder];
            return value !== undefined && value !== null ? value : part;
        } else {
            return part;
        }
    }).join('');
};
function t({ key, translations, vars }) {
    let translationString = getTranslationString({
        count: typeof vars?.count === 'number' ? vars.count : undefined,
        key,
        translations
    });
    if (vars) {
        translationString = replaceVars({
            translationString,
            vars
        });
    }
    if (!translationString) {
        translationString = key;
    }
    return translationString;
}
const initTFunction = (args)=>{
    const { config, language, translations } = args;
    const mergedTranslations = language && config?.translations?.[language] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$deepMergeSimple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepMergeSimple"])(translations, config.translations[language]) : translations;
    return {
        t: (key, vars)=>{
            return t({
                key,
                translations: mergedTranslations,
                vars
            });
        },
        translations: mergedTranslations
    };
};
function memoize(fn, keys) {
    const cacheMap = new Map();
    const memoized = async (args)=>{
        const cacheKey = keys.reduce((acc, key)=>acc + String(args[key]), '');
        if (!cacheMap.has(cacheKey)) {
            const result = await fn(args);
            cacheMap.set(cacheKey, result);
        }
        return cacheMap.get(cacheKey);
    };
    return memoized;
}
const initI18n = memoize(async ({ config, context, language = config.fallbackLanguage })=>{
    if (!language || !config.supportedLanguages?.[language]) {
        throw new Error(`Language ${language} not supported`);
    }
    const translations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslationsByContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslationsByContext"])(config.supportedLanguages?.[language], context);
    const { t, translations: mergedTranslations } = initTFunction({
        config: config,
        language: language || config.fallbackLanguage,
        translations: translations
    });
    const dateFNSKey = config.supportedLanguages[language]?.dateFNSKey || 'en-US';
    const dateFNS = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$importDateFNSLocale$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["importDateFNSLocale"])(dateFNSKey);
    const i18n = {
        dateFNS,
        dateFNSKey,
        fallbackLanguage: config.fallbackLanguage,
        language: language || config.fallbackLanguage,
        t,
        translations: mergedTranslations
    };
    return i18n;
}, [
    'language',
    'context'
]); //# sourceMappingURL=init.js.map
}),
"[project]/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>t,
    "b",
    ()=>E
]);
var e = {
    "1xx": "Informational",
    "1xx_NAME": "INFORMATIONAL",
    "1xx_MESSAGE": "Indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.",
    INFORMATIONAL: "1xx",
    "2xx": "Successful",
    "2xx_NAME": "SUCCESSFUL",
    "2xx_MESSAGE": "Indicates that the client's request was successfully received, understood, and accepted.",
    SUCCESSFUL: "2xx",
    "3xx": "Redirection",
    "3xx_NAME": "REDIRECTION",
    "3xx_MESSAGE": "Indicates that further action needs to be taken by the user agent in order to fulfill the request.",
    REDIRECTION: "3xx",
    "4xx": "Client Error",
    "4xx_NAME": "CLIENT_ERROR",
    "4xx_MESSAGE": "Indicates that the client seems to have erred.",
    CLIENT_ERROR: "4xx",
    "5xx": "Server Error",
    "5xx_NAME": "SERVER_ERROR",
    "5xx_MESSAGE": "Indicates that the server is aware that it has erred or is incapable of performing the requested method.",
    SERVER_ERROR: "5xx"
}, t = {
    classes: e,
    100: "Continue",
    "100_NAME": "CONTINUE",
    "100_MESSAGE": "The server has received the request headers and the client should proceed to send the request body.",
    "100_CLASS": e.INFORMATIONAL,
    CONTINUE: 100,
    101: "Switching Protocols",
    "101_NAME": "SWITCHING_PROTOCOLS",
    "101_MESSAGE": "The requester has asked the server to switch protocols and the server has agreed to do so.",
    "101_CLASS": e.INFORMATIONAL,
    SWITCHING_PROTOCOLS: 101,
    102: "Processing",
    "102_NAME": "PROCESSING",
    "102_MESSAGE": "A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[7] This prevents the client from timing out and assuming the request was lost.",
    "102_CLASS": e.INFORMATIONAL,
    PROCESSING: 102,
    103: "Early Hints",
    "103_NAME": "EARLY_HINTS",
    "103_MESSAGE": "Used to return some response headers before final HTTP message.",
    "103_CLASS": e.INFORMATIONAL,
    EARLY_HINTS: 103,
    200: "OK",
    "200_NAME": "OK",
    "200_MESSAGE": "Standard response for successful HTTP requests.",
    "200_CLASS": e.SUCCESSFUL,
    OK: 200,
    201: "Created",
    "201_NAME": "CREATED",
    "201_MESSAGE": "The request has been fulfilled, resulting in the creation of a new resource.",
    "201_CLASS": e.SUCCESSFUL,
    CREATED: 201,
    202: "Accepted",
    "202_NAME": "ACCEPTED",
    "202_MESSAGE": "The request has been accepted for processing, but the processing has not been completed.",
    "202_CLASS": e.SUCCESSFUL,
    ACCEPTED: 202,
    203: "Non-Authoritative Information",
    "203_NAME": "NON_AUTHORITATIVE_INFORMATION",
    "203_MESSAGE": "The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin's response.",
    "203_CLASS": e.SUCCESSFUL,
    NON_AUTHORITATIVE_INFORMATION: 203,
    204: "No Content",
    "204_NAME": "NO_CONTENT",
    "204_MESSAGE": "The server successfully processed the request and is not returning any content.",
    "204_CLASS": e.SUCCESSFUL,
    NO_CONTENT: 204,
    205: "Reset Content",
    "205_NAME": "RESET_CONTENT",
    "205_MESSAGE": "The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.",
    "205_CLASS": e.SUCCESSFUL,
    RESET_CONTENT: 205,
    206: "Partial Content",
    "206_NAME": "PARTIAL_CONTENT",
    "206_MESSAGE": "The server is delivering only part of the resource (byte serving) due to a range header sent by the client.",
    "206_CLASS": e.SUCCESSFUL,
    PARTIAL_CONTENT: 206,
    207: "Multi Status",
    "207_NAME": "MULTI_STATUS",
    "207_MESSAGE": "The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.",
    "207_CLASS": e.SUCCESSFUL,
    MULTI_STATUS: 207,
    208: "Already Reported",
    "208_NAME": "ALREADY_REPORTED",
    "208_MESSAGE": "The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.",
    "208_CLASS": e.SUCCESSFUL,
    ALREADY_REPORTED: 208,
    226: "IM Used",
    "226_NAME": "IM_USED",
    "226_MESSAGE": "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
    "226_CLASS": e.SUCCESSFUL,
    IM_USED: 226,
    300: "Multiple Choices",
    "300_NAME": "MULTIPLE_CHOICES",
    "300_MESSAGE": "Indicates multiple options for the resource from which the client may choose.",
    "300_CLASS": e.REDIRECTION,
    MULTIPLE_CHOICES: 300,
    301: "Moved Permanently",
    "301_NAME": "MOVED_PERMANENTLY",
    "301_MESSAGE": "This and all future requests should be directed to the given URI.",
    "301_CLASS": e.REDIRECTION,
    MOVED_PERMANENTLY: 301,
    302: "Found",
    "302_NAME": "FOUND",
    "302_MESSAGE": 'This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.',
    "302_CLASS": e.REDIRECTION,
    FOUND: 302,
    303: "See Other",
    "303_NAME": "SEE_OTHER",
    "303_MESSAGE": "The response to the request can be found under another URI using the GET method.",
    "303_CLASS": e.REDIRECTION,
    SEE_OTHER: 303,
    304: "Not Modified",
    "304_NAME": "NOT_MODIFIED",
    "304_MESSAGE": "Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.",
    "304_CLASS": e.REDIRECTION,
    NOT_MODIFIED: 304,
    305: "Use Proxy",
    "305_NAME": "USE_PROXY",
    "305_MESSAGE": "The requested resource is available only through a proxy, the address for which is provided in the response.",
    "305_CLASS": e.REDIRECTION,
    USE_PROXY: 305,
    306: "Switch Proxy",
    "306_NAME": "SWITCH_PROXY",
    "306_MESSAGE": 'No longer used. Originally meant "Subsequent requests should use the specified proxy.',
    "306_CLASS": e.REDIRECTION,
    SWITCH_PROXY: 306,
    307: "Temporary Redirect",
    "307_NAME": "TEMPORARY_REDIRECT",
    "307_MESSAGE": "In this case, the request should be repeated with another URI; however, future requests should still use the original URI.",
    "307_CLASS": e.REDIRECTION,
    TEMPORARY_REDIRECT: 307,
    308: "Permanent Redirect",
    "308_NAME": "PERMANENT_REDIRECT",
    "308_MESSAGE": "The request and all future requests should be repeated using another URI.",
    "308_CLASS": e.REDIRECTION,
    PERMANENT_REDIRECT: 308,
    400: "Bad Request",
    "400_NAME": "BAD_REQUEST",
    "400_MESSAGE": "The server cannot or will not process the request due to an apparent client error.",
    "400_CLASS": e.CLIENT_ERROR,
    BAD_REQUEST: 400,
    401: "Unauthorized",
    "401_NAME": "UNAUTHORIZED",
    "401_MESSAGE": "Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.",
    "401_CLASS": e.CLIENT_ERROR,
    UNAUTHORIZED: 401,
    402: "Payment Required",
    "402_NAME": "PAYMENT_REQUIRED",
    "402_MESSAGE": "Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler, but that has not yet happened, and this code is not usually used.",
    "402_CLASS": e.CLIENT_ERROR,
    PAYMENT_REQUIRED: 402,
    403: "Forbidden",
    "403_NAME": "FORBIDDEN",
    "403_MESSAGE": "The request was valid, but the server is refusing action.",
    "403_CLASS": e.CLIENT_ERROR,
    FORBIDDEN: 403,
    404: "Not Found",
    "404_NAME": "NOT_FOUND",
    "404_MESSAGE": "The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.",
    "404_CLASS": e.CLIENT_ERROR,
    NOT_FOUND: 404,
    405: "Method Not Allowed",
    "405_NAME": "METHOD_NOT_ALLOWED",
    "405_MESSAGE": "A request method is not supported for the requested resource.",
    "405_CLASS": e.CLIENT_ERROR,
    METHOD_NOT_ALLOWED: 405,
    406: "Not Acceptable",
    "406_NAME": "NOT_ACCEPTABLE",
    "406_MESSAGE": "The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.",
    "406_CLASS": e.CLIENT_ERROR,
    NOT_ACCEPTABLE: 406,
    407: "Proxy Authentication Required",
    "407_NAME": "PROXY_AUTHENTICATION_REQUIRED",
    "407_MESSAGE": "The client must first authenticate itself with the proxy.",
    "407_CLASS": e.CLIENT_ERROR,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    408: "Request Time-out",
    "408_NAME": "REQUEST_TIMEOUT",
    "408_MESSAGE": "The server timed out waiting for the request.",
    "408_CLASS": e.CLIENT_ERROR,
    REQUEST_TIMEOUT: 408,
    409: "Conflict",
    "409_NAME": "CONFLICT",
    "409_MESSAGE": "Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.",
    "409_CLASS": e.CLIENT_ERROR,
    CONFLICT: 409,
    410: "Gone",
    "410_NAME": "GONE",
    "410_MESSAGE": "Indicates that the resource requested is no longer available and will not be available again.",
    "410_CLASS": e.CLIENT_ERROR,
    GONE: 410,
    411: "Length Required",
    "411_NAME": "LENGTH_REQUIRED",
    "411_MESSAGE": "The request did not specify the length of its content, which is required by the requested resource.",
    "411_CLASS": e.CLIENT_ERROR,
    LENGTH_REQUIRED: 411,
    412: "Precondition Failed",
    "412_NAME": "PRECONDITION_FAILED",
    "412_MESSAGE": "The server does not meet one of the preconditions that the requester put on the request.",
    "412_CLASS": e.CLIENT_ERROR,
    PRECONDITION_FAILED: 412,
    413: "Request Entity Too Large",
    "413_NAME": "REQUEST_ENTITY_TOO_LARGE",
    "413_MESSAGE": 'The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".',
    "413_CLASS": e.CLIENT_ERROR,
    REQUEST_ENTITY_TOO_LARGE: 413,
    414: "Request-URI Too Large",
    "414_NAME": "REQUEST_URI_TOO_LONG",
    "414_MESSAGE": "The URI provided was too long for the server to process.",
    "414_CLASS": e.CLIENT_ERROR,
    REQUEST_URI_TOO_LONG: 414,
    415: "Unsupported Media Type",
    "415_NAME": "UNSUPPORTED_MEDIA_TYPE",
    "415_MESSAGE": "The request entity has a media type which the server or resource does not support.",
    "415_CLASS": e.CLIENT_ERROR,
    UNSUPPORTED_MEDIA_TYPE: 415,
    416: "Requested Range not Satisfiable",
    "416_NAME": "REQUESTED_RANGE_NOT_SATISFIABLE",
    "416_MESSAGE": "The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.",
    "416_CLASS": e.CLIENT_ERROR,
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    417: "Expectation Failed",
    "417_NAME": "EXPECTATION_FAILED",
    "417_MESSAGE": "The server cannot meet the requirements of the Expect request-header field.",
    "417_CLASS": e.CLIENT_ERROR,
    EXPECTATION_FAILED: 417,
    418: "I'm a teapot",
    "418_NAME": "IM_A_TEAPOT",
    "418_MESSAGE": `Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.`,
    "418_CLASS": e.CLIENT_ERROR,
    IM_A_TEAPOT: 418,
    421: "Misdirected Request",
    "421_NAME": "MISDIRECTED_REQUEST",
    "421_MESSAGE": "The request was directed at a server that is not able to produce a response.",
    "421_CLASS": e.CLIENT_ERROR,
    MISDIRECTED_REQUEST: 421,
    422: "Unprocessable Entity",
    "422_NAME": "UNPROCESSABLE_ENTITY",
    "422_MESSAGE": "The request was well-formed but was unable to be followed due to semantic errors.",
    "422_CLASS": e.CLIENT_ERROR,
    UNPROCESSABLE_ENTITY: 422,
    423: "Locked",
    "423_NAME": "LOCKED",
    "423_MESSAGE": "The resource that is being accessed is locked.",
    "423_CLASS": e.CLIENT_ERROR,
    LOCKED: 423,
    424: "Failed Dependency",
    "424_NAME": "FAILED_DEPENDENCY",
    "424_MESSAGE": "The request failed because it depended on another request and that request failed.",
    "424_CLASS": e.CLIENT_ERROR,
    FAILED_DEPENDENCY: 424,
    425: "Too Early",
    "425_NAME": "TOO_EARLY",
    "425_MESSAGE": "The server is unwilling to risk processing a request that might be replayed.",
    "425_CLASS": e.CLIENT_ERROR,
    TOO_EARLY: 425,
    426: "Upgrade Required",
    "426_NAME": "UPGRADE_REQUIRED",
    "426_MESSAGE": "The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.",
    "426_CLASS": e.CLIENT_ERROR,
    UPGRADE_REQUIRED: 426,
    428: "Precondition Required",
    "428_NAME": "PRECONDITION_REQUIRED",
    "428_MESSAGE": "The origin server requires the request to be conditional.",
    "428_CLASS": e.CLIENT_ERROR,
    PRECONDITION_REQUIRED: 428,
    429: "Too Many Requests",
    "429_NAME": "TOO_MANY_REQUESTS",
    "429_MESSAGE": "The user has sent too many requests in a given amount of time.",
    "429_CLASS": e.CLIENT_ERROR,
    TOO_MANY_REQUESTS: 429,
    431: "Request Header Fields Too Large",
    "431_NAME": "REQUEST_HEADER_FIELDS_TOO_LARGE",
    "431_MESSAGE": "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.",
    "431_CLASS": e.CLIENT_ERROR,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    451: "Unavailable For Legal Reasons",
    "451_NAME": "UNAVAILABLE_FOR_LEGAL_REASONS",
    "451_MESSAGE": "A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.",
    "451_CLASS": e.CLIENT_ERROR,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    500: "Internal Server Error",
    "500_NAME": "INTERNAL_SERVER_ERROR",
    "500_MESSAGE": "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.",
    "500_CLASS": e.SERVER_ERROR,
    INTERNAL_SERVER_ERROR: 500,
    501: "Not Implemented",
    "501_NAME": "NOT_IMPLEMENTED",
    "501_MESSAGE": "The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability.",
    "501_CLASS": e.SERVER_ERROR,
    NOT_IMPLEMENTED: 501,
    502: "Bad Gateway",
    "502_NAME": "BAD_GATEWAY",
    "502_MESSAGE": "The server was acting as a gateway or proxy and received an invalid response from the upstream server.",
    "502_CLASS": e.SERVER_ERROR,
    BAD_GATEWAY: 502,
    503: "Service Unavailable",
    "503_NAME": "SERVICE_UNAVAILABLE",
    "503_MESSAGE": "The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.",
    "503_CLASS": e.SERVER_ERROR,
    SERVICE_UNAVAILABLE: 503,
    504: "Gateway Time-out",
    "504_NAME": "GATEWAY_TIMEOUT",
    "504_MESSAGE": "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.",
    "504_CLASS": e.SERVER_ERROR,
    GATEWAY_TIMEOUT: 504,
    505: "HTTP Version not Supported",
    "505_NAME": "HTTP_VERSION_NOT_SUPPORTED",
    "505_MESSAGE": "The server does not support the HTTP protocol version used in the request.",
    "505_CLASS": e.SERVER_ERROR,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    506: "Variant Also Negotiates",
    "506_NAME": "VARIANT_ALSO_NEGOTIATES",
    "506_MESSAGE": "Transparent content negotiation for the request results in a circular reference.",
    "506_CLASS": e.SERVER_ERROR,
    VARIANT_ALSO_NEGOTIATES: 506,
    507: "Insufficient Storage",
    "507_NAME": "INSUFFICIENT_STORAGE",
    "507_MESSAGE": "The server is unable to store the representation needed to complete the request.",
    "507_CLASS": e.SERVER_ERROR,
    INSUFFICIENT_STORAGE: 507,
    508: "Loop Detected",
    "508_NAME": "LOOP_DETECTED",
    "508_MESSAGE": "The server detected an infinite loop while processing the request.",
    "508_CLASS": e.SERVER_ERROR,
    LOOP_DETECTED: 508,
    510: "Not Extended",
    "510_NAME": "NOT_EXTENDED",
    "510_MESSAGE": "Further extensions to the request are required for the server to fulfil it.",
    "510_CLASS": e.SERVER_ERROR,
    NOT_EXTENDED: 510,
    511: "Network Authentication Required",
    "511_NAME": "NETWORK_AUTHENTICATION_REQUIRED",
    "511_MESSAGE": "The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network.",
    "511_CLASS": e.SERVER_ERROR,
    NETWORK_AUTHENTICATION_REQUIRED: 511,
    extra: {
        unofficial: {
            103: "Checkpoint",
            "103_NAME": "CHECKPOINT",
            "103_MESSAGE": "Used in the resumable requests proposal to resume aborted PUT or POST requests.",
            "103_CLASS": e.INFORMATIONAL,
            CHECKPOINT: 103,
            419: "Page Expired",
            "419_NAME": "PAGE_EXPIRED",
            "419_MESSAGE": "Used by the Laravel Framework when a CSRF Token is missing or expired.",
            "419_CLASS": e.CLIENT_ERROR,
            PAGE_EXPIRED: 419,
            218: "This is fine",
            "218_NAME": "THIS_IS_FINE",
            "218_MESSAGE": "Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache, response bodies that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a generic response or a custom response specified by the ErrorDocument directive.",
            "218_CLASS": e.SUCCESSFUL,
            THIS_IS_FINE: 218,
            420: "Enhance Your Calm",
            "420_NAME": "ENHANCE_YOUR_CALM",
            "420_MESSAGE": "Returned by version 1 of the Twitter Search and Trends API when the client is being rate limited; versions 1.1 and later use the 429 Too Many Requests response code instead.",
            "420_CLASS": e.CLIENT_ERROR,
            ENHANCE_YOUR_CALM: 420,
            450: "Blocked by Windows Parental Controls",
            "450_NAME": "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS",
            "450_MESSAGE": "The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage.",
            "450_CLASS": e.CLIENT_ERROR,
            BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS: 450,
            498: "Invalid Token",
            "498_NAME": "INVALID_TOKEN",
            "498_MESSAGE": "Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token.",
            "498_CLASS": e.CLIENT_ERROR,
            INVALID_TOKEN: 498,
            499: "Token Required",
            "499_NAME": "TOKEN_REQUIRED",
            "499_MESSAGE": "Returned by ArcGIS for Server. Code 499 indicates that a token is required but was not submitted.",
            "499_CLASS": e.CLIENT_ERROR,
            TOKEN_REQUIRED: 499,
            509: "Bandwidth Limit Exceeded",
            "509_NAME": "BANDWIDTH_LIMIT_EXCEEDED",
            "509_MESSAGE": "The server has exceeded the bandwidth specified by the server administrator.",
            "509_CLASS": e.SERVER_ERROR,
            BANDWIDTH_LIMIT_EXCEEDED: 509,
            530: "Site is frozen",
            "530_NAME": "SITE_IS_FROZEN",
            "530_MESSAGE": "Used by the Pantheon web platform to indicate a site that has been frozen due to inactivity.",
            "530_CLASS": e.SERVER_ERROR,
            SITE_IS_FROZEN: 530,
            598: "Network read timeout error",
            "598_NAME": "NETWORK_READ_TIMEOUT_ERROR",
            "598_MESSAGE": "Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.",
            "598_CLASS": e.SERVER_ERROR,
            NETWORK_READ_TIMEOUT_ERROR: 598
        },
        iis: {
            440: "Login Time-out",
            "440_NAME": "LOGIN_TIME_OUT",
            "440_MESSAGE": "The client's session has expired and must log in again.",
            "440_CLASS": e.CLIENT_ERROR,
            LOGIN_TIME_OUT: 440,
            449: "Retry With",
            "449_NAME": "RETRY_WITH",
            "449_MESSAGE": "The server cannot honour the request because the user has not provided the required information.",
            "449_CLASS": e.CLIENT_ERROR,
            RETRY_WITH: 449,
            451: "Redirect",
            "451_NAME": "REDIRECT",
            "451_MESSAGE": "Used in Exchange ActiveSync when either a more efficient server is available or the server cannot access the users' mailbox.",
            "451_CLASS": e.CLIENT_ERROR,
            REDIRECT: 451
        },
        nginx: {
            444: "No Response",
            "444_NAME": "NO_RESPONSE",
            "444_MESSAGE": "Used internally to instruct the server to return no information to the client and close the connection immediately.",
            "444_CLASS": e.CLIENT_ERROR,
            NO_RESPONSE: 444,
            494: "Request header too large",
            "494_NAME": "REQUEST_HEADER_TOO_LARGE",
            "494_MESSAGE": "Client sent too large request or too long header line.",
            "494_CLASS": e.CLIENT_ERROR,
            REQUEST_HEADER_TOO_LARGE: 494,
            495: "SSL Certificate Error",
            "495_NAME": "SSL_CERTIFICATE_ERROR",
            "495_MESSAGE": "An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate.",
            "495_CLASS": e.CLIENT_ERROR,
            SSL_CERTIFICATE_ERROR: 495,
            496: "SSL Certificate Required",
            "496_NAME": "SSL_CERTIFICATE_REQUIRED",
            "496_MESSAGE": "An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided.",
            "496_CLASS": e.CLIENT_ERROR,
            SSL_CERTIFICATE_REQUIRED: 496,
            497: "HTTP Request Sent to HTTPS Port",
            "497_NAME": "HTTP_REQUEST_SENT_TO_HTTPS_PORT",
            "497_MESSAGE": "An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests.",
            "497_CLASS": e.CLIENT_ERROR,
            HTTP_REQUEST_SENT_TO_HTTPS_PORT: 497,
            499: "Client Closed Request",
            "499_NAME": "CLIENT_CLOSED_REQUEST",
            "499_MESSAGE": "Used when the client has closed the request before the server could send a response.",
            "499_CLASS": e.CLIENT_ERROR,
            CLIENT_CLOSED_REQUEST: 499
        },
        cloudflare: {
            520: "Unknown Error",
            "520_NAME": "UNKNOWN_ERROR",
            "520_MESSAGE": 'The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers.',
            "520_CLASS": e.SERVER_ERROR,
            UNKNOWN_ERROR: 520,
            521: "Web Server Is Down",
            "521_NAME": "WEB_SERVER_IS_DOWN",
            "521_MESSAGE": "The origin server has refused the connection from Cloudflare.",
            "521_CLASS": e.SERVER_ERROR,
            WEB_SERVER_IS_DOWN: 521,
            522: "Connection Timed Out",
            "522_NAME": "CONNECTION_TIMED_OUT",
            "522_MESSAGE": "Cloudflare could not negotiate a TCP handshake with the origin server.",
            "522_CLASS": e.SERVER_ERROR,
            CONNECTION_TIMED_OUT: 522,
            523: "Origin Is Unreachable",
            "523_NAME": "ORIGIN_IS_UNREACHABLE",
            "523_MESSAGE": "Cloudflare could not reach the origin server.",
            "523_CLASS": e.SERVER_ERROR,
            ORIGIN_IS_UNREACHABLE: 523,
            524: "A Timeout Occurred",
            "524_NAME": "A_TIMEOUT_OCCURRED",
            "524_MESSAGE": "Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.",
            "524_CLASS": e.SERVER_ERROR,
            A_TIMEOUT_OCCURRED: 524,
            525: "SSL Handshake Failed",
            "525_NAME": "SSL_HANDSHAKE_FAILED",
            "525_MESSAGE": "Cloudflare could not negotiate a SSL/TLS handshake with the origin server.",
            "525_CLASS": e.SERVER_ERROR,
            SSL_HANDSHAKE_FAILED: 525,
            526: "Invalid SSL Certificate",
            "526_NAME": "INVALID_SSL_CERTIFICATE",
            "526_MESSAGE": "Cloudflare could not validate the SSL/TLS certificate that the origin server presented.",
            "526_CLASS": e.SERVER_ERROR,
            INVALID_SSL_CERTIFICATE: 526,
            527: "Railgun Error",
            "527_NAME": "RAILGUN_ERROR",
            "527_MESSAGE": "Error 527 indicates that the request timed out or failed after the WAN connection had been established.",
            "527_CLASS": e.SERVER_ERROR,
            RAILGUN_ERROR: 527
        }
    }
}, E = t;
;
}),
"[project]/node_modules/http-status/dist/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript)");
;
;
}),
"[project]/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "status",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript)");
}),
"[project]/node_modules/streamsearch/lib/sbmh.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
  Based heavily on the Streaming Boyer-Moore-Horspool C++ implementation
  by Hongli Lai at: https://github.com/FooBarWidget/boyer-moore-horspool
*/ function memcmp(buf1, pos1, buf2, pos2, num) {
    for(let i = 0; i < num; ++i){
        if (buf1[pos1 + i] !== buf2[pos2 + i]) return false;
    }
    return true;
}
class SBMH {
    constructor(needle, cb){
        if (typeof cb !== 'function') throw new Error('Missing match callback');
        if (typeof needle === 'string') needle = Buffer.from(needle);
        else if (!Buffer.isBuffer(needle)) throw new Error(`Expected Buffer for needle, got ${typeof needle}`);
        const needleLen = needle.length;
        this.maxMatches = Infinity;
        this.matches = 0;
        this._cb = cb;
        this._lookbehindSize = 0;
        this._needle = needle;
        this._bufPos = 0;
        this._lookbehind = Buffer.allocUnsafe(needleLen);
        // Initialize occurrence table.
        this._occ = [
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen
        ];
        // Populate occurrence table with analysis of the needle, ignoring the last
        // letter.
        if (needleLen > 1) {
            for(let i = 0; i < needleLen - 1; ++i)this._occ[needle[i]] = needleLen - 1 - i;
        }
    }
    reset() {
        this.matches = 0;
        this._lookbehindSize = 0;
        this._bufPos = 0;
    }
    push(chunk, pos) {
        let result;
        if (!Buffer.isBuffer(chunk)) chunk = Buffer.from(chunk, 'latin1');
        const chunkLen = chunk.length;
        this._bufPos = pos || 0;
        while(result !== chunkLen && this.matches < this.maxMatches)result = feed(this, chunk);
        return result;
    }
    destroy() {
        const lbSize = this._lookbehindSize;
        if (lbSize) this._cb(false, this._lookbehind, 0, lbSize, false);
        this.reset();
    }
}
function feed(self, data) {
    const len = data.length;
    const needle = self._needle;
    const needleLen = needle.length;
    // Positive: points to a position in `data`
    //           pos == 3 points to data[3]
    // Negative: points to a position in the lookbehind buffer
    //           pos == -2 points to lookbehind[lookbehindSize - 2]
    let pos = -self._lookbehindSize;
    const lastNeedleCharPos = needleLen - 1;
    const lastNeedleChar = needle[lastNeedleCharPos];
    const end = len - needleLen;
    const occ = self._occ;
    const lookbehind = self._lookbehind;
    if (pos < 0) {
        // Lookbehind buffer is not empty. Perform Boyer-Moore-Horspool
        // search with character lookup code that considers both the
        // lookbehind buffer and the current round's haystack data.
        //
        // Loop until
        //   there is a match.
        // or until
        //   we've moved past the position that requires the
        //   lookbehind buffer. In this case we switch to the
        //   optimized loop.
        // or until
        //   the character to look at lies outside the haystack.
        while(pos < 0 && pos <= end){
            const nextPos = pos + lastNeedleCharPos;
            const ch = nextPos < 0 ? lookbehind[self._lookbehindSize + nextPos] : data[nextPos];
            if (ch === lastNeedleChar && matchNeedle(self, data, pos, lastNeedleCharPos)) {
                self._lookbehindSize = 0;
                ++self.matches;
                if (pos > -self._lookbehindSize) self._cb(true, lookbehind, 0, self._lookbehindSize + pos, false);
                else self._cb(true, undefined, 0, 0, true);
                return self._bufPos = pos + needleLen;
            }
            pos += occ[ch];
        }
        // No match.
        // There's too few data for Boyer-Moore-Horspool to run,
        // so let's use a different algorithm to skip as much as
        // we can.
        // Forward pos until
        //   the trailing part of lookbehind + data
        //   looks like the beginning of the needle
        // or until
        //   pos == 0
        while(pos < 0 && !matchNeedle(self, data, pos, len - pos))++pos;
        if (pos < 0) {
            // Cut off part of the lookbehind buffer that has
            // been processed and append the entire haystack
            // into it.
            const bytesToCutOff = self._lookbehindSize + pos;
            if (bytesToCutOff > 0) {
                // The cut off data is guaranteed not to contain the needle.
                self._cb(false, lookbehind, 0, bytesToCutOff, false);
            }
            self._lookbehindSize -= bytesToCutOff;
            lookbehind.copy(lookbehind, 0, bytesToCutOff, self._lookbehindSize);
            lookbehind.set(data, self._lookbehindSize);
            self._lookbehindSize += len;
            self._bufPos = len;
            return len;
        }
        // Discard lookbehind buffer.
        self._cb(false, lookbehind, 0, self._lookbehindSize, false);
        self._lookbehindSize = 0;
    }
    pos += self._bufPos;
    const firstNeedleChar = needle[0];
    // Lookbehind buffer is now empty. Perform Boyer-Moore-Horspool
    // search with optimized character lookup code that only considers
    // the current round's haystack data.
    while(pos <= end){
        const ch = data[pos + lastNeedleCharPos];
        if (ch === lastNeedleChar && data[pos] === firstNeedleChar && memcmp(needle, 0, data, pos, lastNeedleCharPos)) {
            ++self.matches;
            if (pos > 0) self._cb(true, data, self._bufPos, pos, true);
            else self._cb(true, undefined, 0, 0, true);
            return self._bufPos = pos + needleLen;
        }
        pos += occ[ch];
    }
    // There was no match. If there's trailing haystack data that we cannot
    // match yet using the Boyer-Moore-Horspool algorithm (because the trailing
    // data is less than the needle size) then match using a modified
    // algorithm that starts matching from the beginning instead of the end.
    // Whatever trailing data is left after running this algorithm is added to
    // the lookbehind buffer.
    while(pos < len){
        if (data[pos] !== firstNeedleChar || !memcmp(data, pos, needle, 0, len - pos)) {
            ++pos;
            continue;
        }
        data.copy(lookbehind, 0, pos, len);
        self._lookbehindSize = len - pos;
        break;
    }
    // Everything until `pos` is guaranteed not to contain needle data.
    if (pos > 0) self._cb(false, data, self._bufPos, pos < len ? pos : len, true);
    self._bufPos = len;
    return len;
}
function matchNeedle(self, data, pos, len) {
    const lb = self._lookbehind;
    const lbSize = self._lookbehindSize;
    const needle = self._needle;
    for(let i = 0; i < len; ++i, ++pos){
        const ch = pos < 0 ? lb[lbSize + pos] : data[pos];
        if (ch !== needle[i]) return false;
    }
    return true;
}
module.exports = SBMH;
}),
"[project]/node_modules/busboy/lib/utils.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function parseContentType(str) {
    if (str.length === 0) return;
    const params = Object.create(null);
    let i = 0;
    // Parse type
    for(; i < str.length; ++i){
        const code = str.charCodeAt(i);
        if (TOKEN[code] !== 1) {
            if (code !== 47 /* '/' */  || i === 0) return;
            break;
        }
    }
    // Check for type without subtype
    if (i === str.length) return;
    const type = str.slice(0, i).toLowerCase();
    // Parse subtype
    const subtypeStart = ++i;
    for(; i < str.length; ++i){
        const code = str.charCodeAt(i);
        if (TOKEN[code] !== 1) {
            // Make sure we have a subtype
            if (i === subtypeStart) return;
            if (parseContentTypeParams(str, i, params) === undefined) return;
            break;
        }
    }
    // Make sure we have a subtype
    if (i === subtypeStart) return;
    const subtype = str.slice(subtypeStart, i).toLowerCase();
    return {
        type,
        subtype,
        params
    };
}
function parseContentTypeParams(str, i, params) {
    while(i < str.length){
        // Consume whitespace
        for(; i < str.length; ++i){
            const code = str.charCodeAt(i);
            if (code !== 32 /* ' ' */  && code !== 9 /* '\t' */ ) break;
        }
        // Ended on whitespace
        if (i === str.length) break;
        // Check for malformed parameter
        if (str.charCodeAt(i++) !== 59 /* ';' */ ) return;
        // Consume whitespace
        for(; i < str.length; ++i){
            const code = str.charCodeAt(i);
            if (code !== 32 /* ' ' */  && code !== 9 /* '\t' */ ) break;
        }
        // Ended on whitespace (malformed)
        if (i === str.length) return;
        let name;
        const nameStart = i;
        // Parse parameter name
        for(; i < str.length; ++i){
            const code = str.charCodeAt(i);
            if (TOKEN[code] !== 1) {
                if (code !== 61 /* '=' */ ) return;
                break;
            }
        }
        // No value (malformed)
        if (i === str.length) return;
        name = str.slice(nameStart, i);
        ++i; // Skip over '='
        // No value (malformed)
        if (i === str.length) return;
        let value = '';
        let valueStart;
        if (str.charCodeAt(i) === 34 /* '"' */ ) {
            valueStart = ++i;
            let escaping = false;
            // Parse quoted value
            for(; i < str.length; ++i){
                const code = str.charCodeAt(i);
                if (code === 92 /* '\\' */ ) {
                    if (escaping) {
                        valueStart = i;
                        escaping = false;
                    } else {
                        value += str.slice(valueStart, i);
                        escaping = true;
                    }
                    continue;
                }
                if (code === 34 /* '"' */ ) {
                    if (escaping) {
                        valueStart = i;
                        escaping = false;
                        continue;
                    }
                    value += str.slice(valueStart, i);
                    break;
                }
                if (escaping) {
                    valueStart = i - 1;
                    escaping = false;
                }
                // Invalid unescaped quoted character (malformed)
                if (QDTEXT[code] !== 1) return;
            }
            // No end quote (malformed)
            if (i === str.length) return;
            ++i; // Skip over double quote
        } else {
            valueStart = i;
            // Parse unquoted value
            for(; i < str.length; ++i){
                const code = str.charCodeAt(i);
                if (TOKEN[code] !== 1) {
                    // No value (malformed)
                    if (i === valueStart) return;
                    break;
                }
            }
            value = str.slice(valueStart, i);
        }
        name = name.toLowerCase();
        if (params[name] === undefined) params[name] = value;
    }
    return params;
}
function parseDisposition(str, defDecoder) {
    if (str.length === 0) return;
    const params = Object.create(null);
    let i = 0;
    for(; i < str.length; ++i){
        const code = str.charCodeAt(i);
        if (TOKEN[code] !== 1) {
            if (parseDispositionParams(str, i, params, defDecoder) === undefined) return;
            break;
        }
    }
    const type = str.slice(0, i).toLowerCase();
    return {
        type,
        params
    };
}
function parseDispositionParams(str, i, params, defDecoder) {
    while(i < str.length){
        // Consume whitespace
        for(; i < str.length; ++i){
            const code = str.charCodeAt(i);
            if (code !== 32 /* ' ' */  && code !== 9 /* '\t' */ ) break;
        }
        // Ended on whitespace
        if (i === str.length) break;
        // Check for malformed parameter
        if (str.charCodeAt(i++) !== 59 /* ';' */ ) return;
        // Consume whitespace
        for(; i < str.length; ++i){
            const code = str.charCodeAt(i);
            if (code !== 32 /* ' ' */  && code !== 9 /* '\t' */ ) break;
        }
        // Ended on whitespace (malformed)
        if (i === str.length) return;
        let name;
        const nameStart = i;
        // Parse parameter name
        for(; i < str.length; ++i){
            const code = str.charCodeAt(i);
            if (TOKEN[code] !== 1) {
                if (code === 61 /* '=' */ ) break;
                return;
            }
        }
        // No value (malformed)
        if (i === str.length) return;
        let value = '';
        let valueStart;
        let charset;
        //~ let lang;
        name = str.slice(nameStart, i);
        if (name.charCodeAt(name.length - 1) === 42 /* '*' */ ) {
            // Extended value
            const charsetStart = ++i;
            // Parse charset name
            for(; i < str.length; ++i){
                const code = str.charCodeAt(i);
                if (CHARSET[code] !== 1) {
                    if (code !== 39 /* '\'' */ ) return;
                    break;
                }
            }
            // Incomplete charset (malformed)
            if (i === str.length) return;
            charset = str.slice(charsetStart, i);
            ++i; // Skip over the '\''
            //~ const langStart = ++i;
            // Parse language name
            for(; i < str.length; ++i){
                const code = str.charCodeAt(i);
                if (code === 39 /* '\'' */ ) break;
            }
            // Incomplete language (malformed)
            if (i === str.length) return;
            //~ lang = str.slice(langStart, i);
            ++i; // Skip over the '\''
            // No value (malformed)
            if (i === str.length) return;
            valueStart = i;
            let encode = 0;
            // Parse value
            for(; i < str.length; ++i){
                const code = str.charCodeAt(i);
                if (EXTENDED_VALUE[code] !== 1) {
                    if (code === 37 /* '%' */ ) {
                        let hexUpper;
                        let hexLower;
                        if (i + 2 < str.length && (hexUpper = HEX_VALUES[str.charCodeAt(i + 1)]) !== -1 && (hexLower = HEX_VALUES[str.charCodeAt(i + 2)]) !== -1) {
                            const byteVal = (hexUpper << 4) + hexLower;
                            value += str.slice(valueStart, i);
                            value += String.fromCharCode(byteVal);
                            i += 2;
                            valueStart = i + 1;
                            if (byteVal >= 128) encode = 2;
                            else if (encode === 0) encode = 1;
                            continue;
                        }
                        // '%' disallowed in non-percent encoded contexts (malformed)
                        return;
                    }
                    break;
                }
            }
            value += str.slice(valueStart, i);
            value = convertToUTF8(value, charset, encode);
            if (value === undefined) return;
        } else {
            // Non-extended value
            ++i; // Skip over '='
            // No value (malformed)
            if (i === str.length) return;
            if (str.charCodeAt(i) === 34 /* '"' */ ) {
                valueStart = ++i;
                let escaping = false;
                // Parse quoted value
                for(; i < str.length; ++i){
                    const code = str.charCodeAt(i);
                    if (code === 92 /* '\\' */ ) {
                        if (escaping) {
                            valueStart = i;
                            escaping = false;
                        } else {
                            value += str.slice(valueStart, i);
                            escaping = true;
                        }
                        continue;
                    }
                    if (code === 34 /* '"' */ ) {
                        if (escaping) {
                            valueStart = i;
                            escaping = false;
                            continue;
                        }
                        value += str.slice(valueStart, i);
                        break;
                    }
                    if (escaping) {
                        valueStart = i - 1;
                        escaping = false;
                    }
                    // Invalid unescaped quoted character (malformed)
                    if (QDTEXT[code] !== 1) return;
                }
                // No end quote (malformed)
                if (i === str.length) return;
                ++i; // Skip over double quote
            } else {
                valueStart = i;
                // Parse unquoted value
                for(; i < str.length; ++i){
                    const code = str.charCodeAt(i);
                    if (TOKEN[code] !== 1) {
                        // No value (malformed)
                        if (i === valueStart) return;
                        break;
                    }
                }
                value = str.slice(valueStart, i);
            }
            value = defDecoder(value, 2);
            if (value === undefined) return;
        }
        name = name.toLowerCase();
        if (params[name] === undefined) params[name] = value;
    }
    return params;
}
function getDecoder(charset) {
    let lc;
    while(true){
        switch(charset){
            case 'utf-8':
            case 'utf8':
                return decoders.utf8;
            case 'latin1':
            case 'ascii':
            case 'us-ascii':
            case 'iso-8859-1':
            case 'iso8859-1':
            case 'iso88591':
            case 'iso_8859-1':
            case 'windows-1252':
            case 'iso_8859-1:1987':
            case 'cp1252':
            case 'x-cp1252':
                return decoders.latin1;
            case 'utf16le':
            case 'utf-16le':
            case 'ucs2':
            case 'ucs-2':
                return decoders.utf16le;
            case 'base64':
                return decoders.base64;
            default:
                if (lc === undefined) {
                    lc = true;
                    charset = charset.toLowerCase();
                    continue;
                }
                return decoders.other.bind(charset);
        }
    }
}
const decoders = {
    utf8: (data, hint)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') {
            // If `data` never had any percent-encoded bytes or never had any that
            // were outside of the ASCII range, then we can safely just return the
            // input since UTF-8 is ASCII compatible
            if (hint < 2) return data;
            data = Buffer.from(data, 'latin1');
        }
        return data.utf8Slice(0, data.length);
    },
    latin1: (data, hint)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') return data;
        return data.latin1Slice(0, data.length);
    },
    utf16le: (data, hint)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') data = Buffer.from(data, 'latin1');
        return data.ucs2Slice(0, data.length);
    },
    base64: (data, hint)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') data = Buffer.from(data, 'latin1');
        return data.base64Slice(0, data.length);
    },
    other: (data, hint)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') data = Buffer.from(data, 'latin1');
        try {
            const decoder = new TextDecoder(/*TURBOPACK member replacement*/ __turbopack_context__.e);
            return decoder.decode(data);
        } catch  {}
    }
};
function convertToUTF8(data, charset, hint) {
    const decode = getDecoder(charset);
    if (decode) return decode(data, hint);
}
function basename(path) {
    if (typeof path !== 'string') return '';
    for(let i = path.length - 1; i >= 0; --i){
        switch(path.charCodeAt(i)){
            case 0x2F:
            case 0x5C:
                path = path.slice(i + 1);
                return path === '..' || path === '.' ? '' : path;
        }
    }
    return path === '..' || path === '.' ? '' : path;
}
const TOKEN = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
const QDTEXT = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
];
const CHARSET = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
const EXTENDED_VALUE = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
/* eslint-disable no-multi-spaces */ const HEX_VALUES = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    10,
    11,
    12,
    13,
    14,
    15,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    10,
    11,
    12,
    13,
    14,
    15,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
];
/* eslint-enable no-multi-spaces */ module.exports = {
    basename,
    convertToUTF8,
    getDecoder,
    parseContentType,
    parseDisposition
};
}),
"[project]/node_modules/busboy/lib/types/multipart.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Readable, Writable } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const StreamSearch = __turbopack_context__.r("[project]/node_modules/streamsearch/lib/sbmh.js [app-route] (ecmascript)");
const { basename, convertToUTF8, getDecoder, parseContentType, parseDisposition } = __turbopack_context__.r("[project]/node_modules/busboy/lib/utils.js [app-route] (ecmascript)");
const BUF_CRLF = Buffer.from('\r\n');
const BUF_CR = Buffer.from('\r');
const BUF_DASH = Buffer.from('-');
function noop() {}
const MAX_HEADER_PAIRS = 2000; // From node
const MAX_HEADER_SIZE = 16 * 1024; // From node (its default value)
const HPARSER_NAME = 0;
const HPARSER_PRE_OWS = 1;
const HPARSER_VALUE = 2;
class HeaderParser {
    constructor(cb){
        this.header = Object.create(null);
        this.pairCount = 0;
        this.byteCount = 0;
        this.state = HPARSER_NAME;
        this.name = '';
        this.value = '';
        this.crlf = 0;
        this.cb = cb;
    }
    reset() {
        this.header = Object.create(null);
        this.pairCount = 0;
        this.byteCount = 0;
        this.state = HPARSER_NAME;
        this.name = '';
        this.value = '';
        this.crlf = 0;
    }
    push(chunk, pos, end) {
        let start = pos;
        while(pos < end){
            switch(this.state){
                case HPARSER_NAME:
                    {
                        let done = false;
                        for(; pos < end; ++pos){
                            if (this.byteCount === MAX_HEADER_SIZE) return -1;
                            ++this.byteCount;
                            const code = chunk[pos];
                            if (TOKEN[code] !== 1) {
                                if (code !== 58 /* ':' */ ) return -1;
                                this.name += chunk.latin1Slice(start, pos);
                                if (this.name.length === 0) return -1;
                                ++pos;
                                done = true;
                                this.state = HPARSER_PRE_OWS;
                                break;
                            }
                        }
                        if (!done) {
                            this.name += chunk.latin1Slice(start, pos);
                            break;
                        }
                    // FALLTHROUGH
                    }
                case HPARSER_PRE_OWS:
                    {
                        // Skip optional whitespace
                        let done = false;
                        for(; pos < end; ++pos){
                            if (this.byteCount === MAX_HEADER_SIZE) return -1;
                            ++this.byteCount;
                            const code = chunk[pos];
                            if (code !== 32 /* ' ' */  && code !== 9 /* '\t' */ ) {
                                start = pos;
                                done = true;
                                this.state = HPARSER_VALUE;
                                break;
                            }
                        }
                        if (!done) break;
                    // FALLTHROUGH
                    }
                case HPARSER_VALUE:
                    switch(this.crlf){
                        case 0:
                            for(; pos < end; ++pos){
                                if (this.byteCount === MAX_HEADER_SIZE) return -1;
                                ++this.byteCount;
                                const code = chunk[pos];
                                if (FIELD_VCHAR[code] !== 1) {
                                    if (code !== 13 /* '\r' */ ) return -1;
                                    ++this.crlf;
                                    break;
                                }
                            }
                            this.value += chunk.latin1Slice(start, pos++);
                            break;
                        case 1:
                            if (this.byteCount === MAX_HEADER_SIZE) return -1;
                            ++this.byteCount;
                            if (chunk[pos++] !== 10 /* '\n' */ ) return -1;
                            ++this.crlf;
                            break;
                        case 2:
                            {
                                if (this.byteCount === MAX_HEADER_SIZE) return -1;
                                ++this.byteCount;
                                const code = chunk[pos];
                                if (code === 32 /* ' ' */  || code === 9 /* '\t' */ ) {
                                    // Folded value
                                    start = pos;
                                    this.crlf = 0;
                                } else {
                                    if (++this.pairCount < MAX_HEADER_PAIRS) {
                                        this.name = this.name.toLowerCase();
                                        if (this.header[this.name] === undefined) this.header[this.name] = [
                                            this.value
                                        ];
                                        else this.header[this.name].push(this.value);
                                    }
                                    if (code === 13 /* '\r' */ ) {
                                        ++this.crlf;
                                        ++pos;
                                    } else {
                                        // Assume start of next header field name
                                        start = pos;
                                        this.crlf = 0;
                                        this.state = HPARSER_NAME;
                                        this.name = '';
                                        this.value = '';
                                    }
                                }
                                break;
                            }
                        case 3:
                            {
                                if (this.byteCount === MAX_HEADER_SIZE) return -1;
                                ++this.byteCount;
                                if (chunk[pos++] !== 10 /* '\n' */ ) return -1;
                                // End of header
                                const header = this.header;
                                this.reset();
                                this.cb(header);
                                return pos;
                            }
                    }
                    break;
            }
        }
        return pos;
    }
}
class FileStream extends Readable {
    constructor(opts, owner){
        super(opts);
        this.truncated = false;
        this._readcb = null;
        this.once('end', ()=>{
            // We need to make sure that we call any outstanding _writecb() that is
            // associated with this file so that processing of the rest of the form
            // can continue. This may not happen if the file stream ends right after
            // backpressure kicks in, so we force it here.
            this._read();
            if (--owner._fileEndsLeft === 0 && owner._finalcb) {
                const cb = owner._finalcb;
                owner._finalcb = null;
                // Make sure other 'end' event handlers get a chance to be executed
                // before busboy's 'finish' event is emitted
                process.nextTick(cb);
            }
        });
    }
    _read(n) {
        const cb = this._readcb;
        if (cb) {
            this._readcb = null;
            cb();
        }
    }
}
const ignoreData = {
    push: (chunk, pos)=>{},
    destroy: ()=>{}
};
function callAndUnsetCb(self, err) {
    const cb = self._writecb;
    self._writecb = null;
    if (err) self.destroy(err);
    else if (cb) cb();
}
function nullDecoder(val, hint) {
    return val;
}
class Multipart extends Writable {
    constructor(cfg){
        const streamOpts = {
            autoDestroy: true,
            emitClose: true,
            highWaterMark: typeof cfg.highWaterMark === 'number' ? cfg.highWaterMark : undefined
        };
        super(streamOpts);
        if (!cfg.conType.params || typeof cfg.conType.params.boundary !== 'string') throw new Error('Multipart: Boundary not found');
        const boundary = cfg.conType.params.boundary;
        const paramDecoder = typeof cfg.defParamCharset === 'string' && cfg.defParamCharset ? getDecoder(cfg.defParamCharset) : nullDecoder;
        const defCharset = cfg.defCharset || 'utf8';
        const preservePath = cfg.preservePath;
        const fileOpts = {
            autoDestroy: true,
            emitClose: true,
            highWaterMark: typeof cfg.fileHwm === 'number' ? cfg.fileHwm : undefined
        };
        const limits = cfg.limits;
        const fieldSizeLimit = limits && typeof limits.fieldSize === 'number' ? limits.fieldSize : 1 * 1024 * 1024;
        const fileSizeLimit = limits && typeof limits.fileSize === 'number' ? limits.fileSize : Infinity;
        const filesLimit = limits && typeof limits.files === 'number' ? limits.files : Infinity;
        const fieldsLimit = limits && typeof limits.fields === 'number' ? limits.fields : Infinity;
        const partsLimit = limits && typeof limits.parts === 'number' ? limits.parts : Infinity;
        let parts = -1; // Account for initial boundary
        let fields = 0;
        let files = 0;
        let skipPart = false;
        this._fileEndsLeft = 0;
        this._fileStream = undefined;
        this._complete = false;
        let fileSize = 0;
        let field;
        let fieldSize = 0;
        let partCharset;
        let partEncoding;
        let partType;
        let partName;
        let partTruncated = false;
        let hitFilesLimit = false;
        let hitFieldsLimit = false;
        this._hparser = null;
        const hparser = new HeaderParser((header)=>{
            this._hparser = null;
            skipPart = false;
            partType = 'text/plain';
            partCharset = defCharset;
            partEncoding = '7bit';
            partName = undefined;
            partTruncated = false;
            let filename;
            if (!header['content-disposition']) {
                skipPart = true;
                return;
            }
            const disp = parseDisposition(header['content-disposition'][0], paramDecoder);
            if (!disp || disp.type !== 'form-data') {
                skipPart = true;
                return;
            }
            if (disp.params) {
                if (disp.params.name) partName = disp.params.name;
                if (disp.params['filename*']) filename = disp.params['filename*'];
                else if (disp.params.filename) filename = disp.params.filename;
                if (filename !== undefined && !preservePath) filename = basename(filename);
            }
            if (header['content-type']) {
                const conType = parseContentType(header['content-type'][0]);
                if (conType) {
                    partType = `${conType.type}/${conType.subtype}`;
                    if (conType.params && typeof conType.params.charset === 'string') partCharset = conType.params.charset.toLowerCase();
                }
            }
            if (header['content-transfer-encoding']) partEncoding = header['content-transfer-encoding'][0].toLowerCase();
            if (partType === 'application/octet-stream' || filename !== undefined) {
                // File
                if (files === filesLimit) {
                    if (!hitFilesLimit) {
                        hitFilesLimit = true;
                        this.emit('filesLimit');
                    }
                    skipPart = true;
                    return;
                }
                ++files;
                if (this.listenerCount('file') === 0) {
                    skipPart = true;
                    return;
                }
                fileSize = 0;
                this._fileStream = new FileStream(fileOpts, this);
                ++this._fileEndsLeft;
                this.emit('file', partName, this._fileStream, {
                    filename,
                    encoding: partEncoding,
                    mimeType: partType
                });
            } else {
                // Non-file
                if (fields === fieldsLimit) {
                    if (!hitFieldsLimit) {
                        hitFieldsLimit = true;
                        this.emit('fieldsLimit');
                    }
                    skipPart = true;
                    return;
                }
                ++fields;
                if (this.listenerCount('field') === 0) {
                    skipPart = true;
                    return;
                }
                field = [];
                fieldSize = 0;
            }
        });
        let matchPostBoundary = 0;
        const ssCb = (isMatch, data, start, end, isDataSafe)=>{
            retrydata: while(data){
                if (this._hparser !== null) {
                    const ret = this._hparser.push(data, start, end);
                    if (ret === -1) {
                        this._hparser = null;
                        hparser.reset();
                        this.emit('error', new Error('Malformed part header'));
                        break;
                    }
                    start = ret;
                }
                if (start === end) break;
                if (matchPostBoundary !== 0) {
                    if (matchPostBoundary === 1) {
                        switch(data[start]){
                            case 45:
                                // Try matching '--' after boundary
                                matchPostBoundary = 2;
                                ++start;
                                break;
                            case 13:
                                // Try matching CR LF before header
                                matchPostBoundary = 3;
                                ++start;
                                break;
                            default:
                                matchPostBoundary = 0;
                        }
                        if (start === end) return;
                    }
                    if (matchPostBoundary === 2) {
                        matchPostBoundary = 0;
                        if (data[start] === 45 /* '-' */ ) {
                            // End of multipart data
                            this._complete = true;
                            this._bparser = ignoreData;
                            return;
                        }
                        // We saw something other than '-', so put the dash we consumed
                        // "back"
                        const writecb = this._writecb;
                        this._writecb = noop;
                        ssCb(false, BUF_DASH, 0, 1, false);
                        this._writecb = writecb;
                    } else if (matchPostBoundary === 3) {
                        matchPostBoundary = 0;
                        if (data[start] === 10 /* '\n' */ ) {
                            ++start;
                            if (parts >= partsLimit) break;
                            // Prepare the header parser
                            this._hparser = hparser;
                            if (start === end) break;
                            continue retrydata;
                        } else {
                            // We saw something other than LF, so put the CR we consumed
                            // "back"
                            const writecb = this._writecb;
                            this._writecb = noop;
                            ssCb(false, BUF_CR, 0, 1, false);
                            this._writecb = writecb;
                        }
                    }
                }
                if (!skipPart) {
                    if (this._fileStream) {
                        let chunk;
                        const actualLen = Math.min(end - start, fileSizeLimit - fileSize);
                        if (!isDataSafe) {
                            chunk = Buffer.allocUnsafe(actualLen);
                            data.copy(chunk, 0, start, start + actualLen);
                        } else {
                            chunk = data.slice(start, start + actualLen);
                        }
                        fileSize += chunk.length;
                        if (fileSize === fileSizeLimit) {
                            if (chunk.length > 0) this._fileStream.push(chunk);
                            this._fileStream.emit('limit');
                            this._fileStream.truncated = true;
                            skipPart = true;
                        } else if (!this._fileStream.push(chunk)) {
                            if (this._writecb) this._fileStream._readcb = this._writecb;
                            this._writecb = null;
                        }
                    } else if (field !== undefined) {
                        let chunk;
                        const actualLen = Math.min(end - start, fieldSizeLimit - fieldSize);
                        if (!isDataSafe) {
                            chunk = Buffer.allocUnsafe(actualLen);
                            data.copy(chunk, 0, start, start + actualLen);
                        } else {
                            chunk = data.slice(start, start + actualLen);
                        }
                        fieldSize += actualLen;
                        field.push(chunk);
                        if (fieldSize === fieldSizeLimit) {
                            skipPart = true;
                            partTruncated = true;
                        }
                    }
                }
                break;
            }
            if (isMatch) {
                matchPostBoundary = 1;
                if (this._fileStream) {
                    // End the active file stream if the previous part was a file
                    this._fileStream.push(null);
                    this._fileStream = null;
                } else if (field !== undefined) {
                    let data;
                    switch(field.length){
                        case 0:
                            data = '';
                            break;
                        case 1:
                            data = convertToUTF8(field[0], partCharset, 0);
                            break;
                        default:
                            data = convertToUTF8(Buffer.concat(field, fieldSize), partCharset, 0);
                    }
                    field = undefined;
                    fieldSize = 0;
                    this.emit('field', partName, data, {
                        nameTruncated: false,
                        valueTruncated: partTruncated,
                        encoding: partEncoding,
                        mimeType: partType
                    });
                }
                if (++parts === partsLimit) this.emit('partsLimit');
            }
        };
        this._bparser = new StreamSearch(`\r\n--${boundary}`, ssCb);
        this._writecb = null;
        this._finalcb = null;
        // Just in case there is no preamble
        this.write(BUF_CRLF);
    }
    static detect(conType) {
        return conType.type === 'multipart' && conType.subtype === 'form-data';
    }
    _write(chunk, enc, cb) {
        this._writecb = cb;
        this._bparser.push(chunk, 0);
        if (this._writecb) callAndUnsetCb(this);
    }
    _destroy(err, cb) {
        this._hparser = null;
        this._bparser = ignoreData;
        if (!err) err = checkEndState(this);
        const fileStream = this._fileStream;
        if (fileStream) {
            this._fileStream = null;
            fileStream.destroy(err);
        }
        cb(err);
    }
    _final(cb) {
        this._bparser.destroy();
        if (!this._complete) return cb(new Error('Unexpected end of form'));
        if (this._fileEndsLeft) this._finalcb = finalcb.bind(null, this, cb);
        else finalcb(this, cb);
    }
}
function finalcb(self, cb, err) {
    if (err) return cb(err);
    err = checkEndState(self);
    cb(err);
}
function checkEndState(self) {
    if (self._hparser) return new Error('Malformed part header');
    const fileStream = self._fileStream;
    if (fileStream) {
        self._fileStream = null;
        fileStream.destroy(new Error('Unexpected end of file'));
    }
    if (!self._complete) return new Error('Unexpected end of form');
}
const TOKEN = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
const FIELD_VCHAR = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
];
module.exports = Multipart;
}),
"[project]/node_modules/busboy/lib/types/urlencoded.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Writable } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const { getDecoder } = __turbopack_context__.r("[project]/node_modules/busboy/lib/utils.js [app-route] (ecmascript)");
class URLEncoded extends Writable {
    constructor(cfg){
        const streamOpts = {
            autoDestroy: true,
            emitClose: true,
            highWaterMark: typeof cfg.highWaterMark === 'number' ? cfg.highWaterMark : undefined
        };
        super(streamOpts);
        let charset = cfg.defCharset || 'utf8';
        if (cfg.conType.params && typeof cfg.conType.params.charset === 'string') charset = cfg.conType.params.charset;
        this.charset = charset;
        const limits = cfg.limits;
        this.fieldSizeLimit = limits && typeof limits.fieldSize === 'number' ? limits.fieldSize : 1 * 1024 * 1024;
        this.fieldsLimit = limits && typeof limits.fields === 'number' ? limits.fields : Infinity;
        this.fieldNameSizeLimit = limits && typeof limits.fieldNameSize === 'number' ? limits.fieldNameSize : 100;
        this._inKey = true;
        this._keyTrunc = false;
        this._valTrunc = false;
        this._bytesKey = 0;
        this._bytesVal = 0;
        this._fields = 0;
        this._key = '';
        this._val = '';
        this._byte = -2;
        this._lastPos = 0;
        this._encode = 0;
        this._decoder = getDecoder(charset);
    }
    static detect(conType) {
        return conType.type === 'application' && conType.subtype === 'x-www-form-urlencoded';
    }
    _write(chunk, enc, cb) {
        if (this._fields >= this.fieldsLimit) return cb();
        let i = 0;
        const len = chunk.length;
        this._lastPos = 0;
        // Check if we last ended mid-percent-encoded byte
        if (this._byte !== -2) {
            i = readPctEnc(this, chunk, i, len);
            if (i === -1) return cb(new Error('Malformed urlencoded form'));
            if (i >= len) return cb();
            if (this._inKey) ++this._bytesKey;
            else ++this._bytesVal;
        }
        main: while(i < len){
            if (this._inKey) {
                // Parsing key
                i = skipKeyBytes(this, chunk, i, len);
                while(i < len){
                    switch(chunk[i]){
                        case 61:
                            if (this._lastPos < i) this._key += chunk.latin1Slice(this._lastPos, i);
                            this._lastPos = ++i;
                            this._key = this._decoder(this._key, this._encode);
                            this._encode = 0;
                            this._inKey = false;
                            continue main;
                        case 38:
                            if (this._lastPos < i) this._key += chunk.latin1Slice(this._lastPos, i);
                            this._lastPos = ++i;
                            this._key = this._decoder(this._key, this._encode);
                            this._encode = 0;
                            if (this._bytesKey > 0) {
                                this.emit('field', this._key, '', {
                                    nameTruncated: this._keyTrunc,
                                    valueTruncated: false,
                                    encoding: this.charset,
                                    mimeType: 'text/plain'
                                });
                            }
                            this._key = '';
                            this._val = '';
                            this._keyTrunc = false;
                            this._valTrunc = false;
                            this._bytesKey = 0;
                            this._bytesVal = 0;
                            if (++this._fields >= this.fieldsLimit) {
                                this.emit('fieldsLimit');
                                return cb();
                            }
                            continue;
                        case 43:
                            if (this._lastPos < i) this._key += chunk.latin1Slice(this._lastPos, i);
                            this._key += ' ';
                            this._lastPos = i + 1;
                            break;
                        case 37:
                            if (this._encode === 0) this._encode = 1;
                            if (this._lastPos < i) this._key += chunk.latin1Slice(this._lastPos, i);
                            this._lastPos = i + 1;
                            this._byte = -1;
                            i = readPctEnc(this, chunk, i + 1, len);
                            if (i === -1) return cb(new Error('Malformed urlencoded form'));
                            if (i >= len) return cb();
                            ++this._bytesKey;
                            i = skipKeyBytes(this, chunk, i, len);
                            continue;
                    }
                    ++i;
                    ++this._bytesKey;
                    i = skipKeyBytes(this, chunk, i, len);
                }
                if (this._lastPos < i) this._key += chunk.latin1Slice(this._lastPos, i);
            } else {
                // Parsing value
                i = skipValBytes(this, chunk, i, len);
                while(i < len){
                    switch(chunk[i]){
                        case 38:
                            if (this._lastPos < i) this._val += chunk.latin1Slice(this._lastPos, i);
                            this._lastPos = ++i;
                            this._inKey = true;
                            this._val = this._decoder(this._val, this._encode);
                            this._encode = 0;
                            if (this._bytesKey > 0 || this._bytesVal > 0) {
                                this.emit('field', this._key, this._val, {
                                    nameTruncated: this._keyTrunc,
                                    valueTruncated: this._valTrunc,
                                    encoding: this.charset,
                                    mimeType: 'text/plain'
                                });
                            }
                            this._key = '';
                            this._val = '';
                            this._keyTrunc = false;
                            this._valTrunc = false;
                            this._bytesKey = 0;
                            this._bytesVal = 0;
                            if (++this._fields >= this.fieldsLimit) {
                                this.emit('fieldsLimit');
                                return cb();
                            }
                            continue main;
                        case 43:
                            if (this._lastPos < i) this._val += chunk.latin1Slice(this._lastPos, i);
                            this._val += ' ';
                            this._lastPos = i + 1;
                            break;
                        case 37:
                            if (this._encode === 0) this._encode = 1;
                            if (this._lastPos < i) this._val += chunk.latin1Slice(this._lastPos, i);
                            this._lastPos = i + 1;
                            this._byte = -1;
                            i = readPctEnc(this, chunk, i + 1, len);
                            if (i === -1) return cb(new Error('Malformed urlencoded form'));
                            if (i >= len) return cb();
                            ++this._bytesVal;
                            i = skipValBytes(this, chunk, i, len);
                            continue;
                    }
                    ++i;
                    ++this._bytesVal;
                    i = skipValBytes(this, chunk, i, len);
                }
                if (this._lastPos < i) this._val += chunk.latin1Slice(this._lastPos, i);
            }
        }
        cb();
    }
    _final(cb) {
        if (this._byte !== -2) return cb(new Error('Malformed urlencoded form'));
        if (!this._inKey || this._bytesKey > 0 || this._bytesVal > 0) {
            if (this._inKey) this._key = this._decoder(this._key, this._encode);
            else this._val = this._decoder(this._val, this._encode);
            this.emit('field', this._key, this._val, {
                nameTruncated: this._keyTrunc,
                valueTruncated: this._valTrunc,
                encoding: this.charset,
                mimeType: 'text/plain'
            });
        }
        cb();
    }
}
function readPctEnc(self, chunk, pos, len) {
    if (pos >= len) return len;
    if (self._byte === -1) {
        // We saw a '%' but no hex characters yet
        const hexUpper = HEX_VALUES[chunk[pos++]];
        if (hexUpper === -1) return -1;
        if (hexUpper >= 8) self._encode = 2; // Indicate high bits detected
        if (pos < len) {
            // Both hex characters are in this chunk
            const hexLower = HEX_VALUES[chunk[pos++]];
            if (hexLower === -1) return -1;
            if (self._inKey) self._key += String.fromCharCode((hexUpper << 4) + hexLower);
            else self._val += String.fromCharCode((hexUpper << 4) + hexLower);
            self._byte = -2;
            self._lastPos = pos;
        } else {
            // Only one hex character was available in this chunk
            self._byte = hexUpper;
        }
    } else {
        // We saw only one hex character so far
        const hexLower = HEX_VALUES[chunk[pos++]];
        if (hexLower === -1) return -1;
        if (self._inKey) self._key += String.fromCharCode((self._byte << 4) + hexLower);
        else self._val += String.fromCharCode((self._byte << 4) + hexLower);
        self._byte = -2;
        self._lastPos = pos;
    }
    return pos;
}
function skipKeyBytes(self, chunk, pos, len) {
    // Skip bytes if we've truncated
    if (self._bytesKey > self.fieldNameSizeLimit) {
        if (!self._keyTrunc) {
            if (self._lastPos < pos) self._key += chunk.latin1Slice(self._lastPos, pos - 1);
        }
        self._keyTrunc = true;
        for(; pos < len; ++pos){
            const code = chunk[pos];
            if (code === 61 /* '=' */  || code === 38 /* '&' */ ) break;
            ++self._bytesKey;
        }
        self._lastPos = pos;
    }
    return pos;
}
function skipValBytes(self, chunk, pos, len) {
    // Skip bytes if we've truncated
    if (self._bytesVal > self.fieldSizeLimit) {
        if (!self._valTrunc) {
            if (self._lastPos < pos) self._val += chunk.latin1Slice(self._lastPos, pos - 1);
        }
        self._valTrunc = true;
        for(; pos < len; ++pos){
            if (chunk[pos] === 38 /* '&' */ ) break;
            ++self._bytesVal;
        }
        self._lastPos = pos;
    }
    return pos;
}
/* eslint-disable no-multi-spaces */ const HEX_VALUES = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    10,
    11,
    12,
    13,
    14,
    15,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    10,
    11,
    12,
    13,
    14,
    15,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
];
/* eslint-enable no-multi-spaces */ module.exports = URLEncoded;
}),
"[project]/node_modules/busboy/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { parseContentType } = __turbopack_context__.r("[project]/node_modules/busboy/lib/utils.js [app-route] (ecmascript)");
function getInstance(cfg) {
    const headers = cfg.headers;
    const conType = parseContentType(headers['content-type']);
    if (!conType) throw new Error('Malformed content type');
    for (const type of TYPES){
        const matched = type.detect(conType);
        if (!matched) continue;
        const instanceCfg = {
            limits: cfg.limits,
            headers,
            conType,
            highWaterMark: undefined,
            fileHwm: undefined,
            defCharset: undefined,
            defParamCharset: undefined,
            preservePath: false
        };
        if (cfg.highWaterMark) instanceCfg.highWaterMark = cfg.highWaterMark;
        if (cfg.fileHwm) instanceCfg.fileHwm = cfg.fileHwm;
        instanceCfg.defCharset = cfg.defCharset;
        instanceCfg.defParamCharset = cfg.defParamCharset;
        instanceCfg.preservePath = cfg.preservePath;
        return new type(instanceCfg);
    }
    throw new Error(`Unsupported content type: ${headers['content-type']}`);
}
// Note: types are explicitly listed here for easier bundling
// See: https://github.com/mscdex/busboy/issues/121
const TYPES = [
    __turbopack_context__.r("[project]/node_modules/busboy/lib/types/multipart.js [app-route] (ecmascript)"),
    __turbopack_context__.r("[project]/node_modules/busboy/lib/types/urlencoded.js [app-route] (ecmascript)")
].filter(function(typemod) {
    return typeof typemod.detect === 'function';
});
module.exports = (cfg)=>{
    if (typeof cfg !== 'object' || cfg === null) cfg = {};
    if (typeof cfg.headers !== 'object' || cfg.headers === null || typeof cfg.headers['content-type'] !== 'string') {
        throw new Error('Missing Content-Type');
    }
    return getInstance(cfg);
};
}),
"[project]/node_modules/ci-info/vendors.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"name":"Agola CI","constant":"AGOLA","env":"AGOLA_GIT_REF","pr":"AGOLA_PULL_REQUEST_ID"},{"name":"Alpic","constant":"ALPIC","env":"ALPIC_HOST"},{"name":"Appcircle","constant":"APPCIRCLE","env":"AC_APPCIRCLE","pr":{"env":"AC_GIT_PR","ne":"false"}},{"name":"AppVeyor","constant":"APPVEYOR","env":"APPVEYOR","pr":"APPVEYOR_PULL_REQUEST_NUMBER"},{"name":"AWS CodeBuild","constant":"CODEBUILD","env":"CODEBUILD_BUILD_ARN","pr":{"env":"CODEBUILD_WEBHOOK_EVENT","any":["PULL_REQUEST_CREATED","PULL_REQUEST_UPDATED","PULL_REQUEST_REOPENED"]}},{"name":"Azure Pipelines","constant":"AZURE_PIPELINES","env":"TF_BUILD","pr":{"BUILD_REASON":"PullRequest"}},{"name":"Bamboo","constant":"BAMBOO","env":"bamboo_planKey"},{"name":"Bitbucket Pipelines","constant":"BITBUCKET","env":"BITBUCKET_COMMIT","pr":"BITBUCKET_PR_ID"},{"name":"Bitrise","constant":"BITRISE","env":"BITRISE_IO","pr":"BITRISE_PULL_REQUEST"},{"name":"Buddy","constant":"BUDDY","env":"BUDDY_WORKSPACE_ID","pr":"BUDDY_EXECUTION_PULL_REQUEST_ID"},{"name":"Buildkite","constant":"BUILDKITE","env":"BUILDKITE","pr":{"env":"BUILDKITE_PULL_REQUEST","ne":"false"}},{"name":"CircleCI","constant":"CIRCLE","env":"CIRCLECI","pr":"CIRCLE_PULL_REQUEST"},{"name":"Cirrus CI","constant":"CIRRUS","env":"CIRRUS_CI","pr":"CIRRUS_PR"},{"name":"Cloudflare Pages","constant":"CLOUDFLARE_PAGES","env":"CF_PAGES"},{"name":"Cloudflare Workers","constant":"CLOUDFLARE_WORKERS","env":"WORKERS_CI"},{"name":"Codefresh","constant":"CODEFRESH","env":"CF_BUILD_ID","pr":{"any":["CF_PULL_REQUEST_NUMBER","CF_PULL_REQUEST_ID"]}},{"name":"Codemagic","constant":"CODEMAGIC","env":"CM_BUILD_ID","pr":"CM_PULL_REQUEST"},{"name":"Codeship","constant":"CODESHIP","env":{"CI_NAME":"codeship"}},{"name":"Drone","constant":"DRONE","env":"DRONE","pr":{"DRONE_BUILD_EVENT":"pull_request"}},{"name":"dsari","constant":"DSARI","env":"DSARI"},{"name":"Earthly","constant":"EARTHLY","env":"EARTHLY_CI"},{"name":"Expo Application Services","constant":"EAS","env":"EAS_BUILD"},{"name":"Gerrit","constant":"GERRIT","env":"GERRIT_PROJECT"},{"name":"Gitea Actions","constant":"GITEA_ACTIONS","env":"GITEA_ACTIONS"},{"name":"GitHub Actions","constant":"GITHUB_ACTIONS","env":"GITHUB_ACTIONS","pr":{"GITHUB_EVENT_NAME":"pull_request"}},{"name":"GitLab CI","constant":"GITLAB","env":"GITLAB_CI","pr":"CI_MERGE_REQUEST_ID"},{"name":"GoCD","constant":"GOCD","env":"GO_PIPELINE_LABEL"},{"name":"Google Cloud Build","constant":"GOOGLE_CLOUD_BUILD","env":"BUILDER_OUTPUT"},{"name":"Harness CI","constant":"HARNESS","env":"HARNESS_BUILD_ID"},{"name":"Heroku","constant":"HEROKU","env":{"env":"NODE","includes":"/app/.heroku/node/bin/node"}},{"name":"Hudson","constant":"HUDSON","env":"HUDSON_URL"},{"name":"Jenkins","constant":"JENKINS","env":["JENKINS_URL","BUILD_ID"],"pr":{"any":["ghprbPullId","CHANGE_ID"]}},{"name":"LayerCI","constant":"LAYERCI","env":"LAYERCI","pr":"LAYERCI_PULL_REQUEST"},{"name":"Magnum CI","constant":"MAGNUM","env":"MAGNUM"},{"name":"Netlify CI","constant":"NETLIFY","env":"NETLIFY","pr":{"env":"PULL_REQUEST","ne":"false"}},{"name":"Nevercode","constant":"NEVERCODE","env":"NEVERCODE","pr":{"env":"NEVERCODE_PULL_REQUEST","ne":"false"}},{"name":"Prow","constant":"PROW","env":"PROW_JOB_ID"},{"name":"ReleaseHub","constant":"RELEASEHUB","env":"RELEASE_BUILD_ID"},{"name":"Render","constant":"RENDER","env":"RENDER","pr":{"IS_PULL_REQUEST":"true"}},{"name":"Sail CI","constant":"SAIL","env":"SAILCI","pr":"SAIL_PULL_REQUEST_NUMBER"},{"name":"Screwdriver","constant":"SCREWDRIVER","env":"SCREWDRIVER","pr":{"env":"SD_PULL_REQUEST","ne":"false"}},{"name":"Semaphore","constant":"SEMAPHORE","env":"SEMAPHORE","pr":"PULL_REQUEST_NUMBER"},{"name":"Sourcehut","constant":"SOURCEHUT","env":{"CI_NAME":"sourcehut"}},{"name":"Strider CD","constant":"STRIDER","env":"STRIDER"},{"name":"TaskCluster","constant":"TASKCLUSTER","env":["TASK_ID","RUN_ID"]},{"name":"TeamCity","constant":"TEAMCITY","env":"TEAMCITY_VERSION"},{"name":"Travis CI","constant":"TRAVIS","env":"TRAVIS","pr":{"env":"TRAVIS_PULL_REQUEST","ne":"false"}},{"name":"Vela","constant":"VELA","env":"VELA","pr":{"VELA_PULL_REQUEST":"1"}},{"name":"Vercel","constant":"VERCEL","env":{"any":["NOW_BUILDER","VERCEL"]},"pr":"VERCEL_GIT_PULL_REQUEST_ID"},{"name":"Visual Studio App Center","constant":"APPCENTER","env":"APPCENTER_BUILD_ID"},{"name":"Woodpecker","constant":"WOODPECKER","env":{"CI":"woodpecker"},"pr":{"CI_BUILD_EVENT":"pull_request"}},{"name":"Xcode Cloud","constant":"XCODE_CLOUD","env":"CI_XCODE_PROJECT","pr":"CI_PULL_REQUEST_NUMBER"},{"name":"Xcode Server","constant":"XCODE_SERVER","env":"XCS"}]);}),
"[project]/node_modules/ci-info/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const vendors = __turbopack_context__.r("[project]/node_modules/ci-info/vendors.json (json)");
const env = process.env;
// Used for testing only
Object.defineProperty(exports, '_vendors', {
    value: vendors.map(function(v) {
        return v.constant;
    })
});
exports.name = null;
exports.isPR = null;
exports.id = null;
if (env.CI !== 'false') {
    vendors.forEach(function(vendor) {
        const envs = Array.isArray(vendor.env) ? vendor.env : [
            vendor.env
        ];
        const isCI = envs.every(function(obj) {
            return checkEnv(obj);
        });
        exports[vendor.constant] = isCI;
        if (!isCI) {
            return;
        }
        exports.name = vendor.name;
        exports.isPR = checkPR(vendor);
        exports.id = vendor.constant;
    });
}
exports.isCI = !!(env.CI !== 'false' && // Bypass all checks if CI env is explicitly set to 'false'
(env.BUILD_ID || // Jenkins, Cloudbees
env.BUILD_NUMBER || // Jenkins, TeamCity
env.CI || // Travis CI, CircleCI, Cirrus CI, Gitlab CI, Appveyor, CodeShip, dsari, Cloudflare Pages/Workers
env.CI_APP_ID || // Appflow
env.CI_BUILD_ID || // Appflow
env.CI_BUILD_NUMBER || // Appflow
env.CI_NAME || // Codeship and others
env.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI
env.RUN_ID || // TaskCluster, dsari
exports.name || false));
function checkEnv(obj) {
    // "env": "CIRRUS"
    if (typeof obj === 'string') return !!env[obj];
    // "env": { "env": "NODE", "includes": "/app/.heroku/node/bin/node" }
    if ('env' in obj) {
        // Currently there are no other types, uncomment when there are
        // if ('includes' in obj) {
        return env[obj.env] && env[obj.env].includes(obj.includes);
    // }
    }
    if ('any' in obj) {
        return obj.any.some(function(k) {
            return !!env[k];
        });
    }
    return Object.keys(obj).every(function(k) {
        return env[k] === obj[k];
    });
}
function checkPR(vendor) {
    switch(typeof vendor.pr){
        case 'string':
            // "pr": "CIRRUS_PR"
            return !!env[vendor.pr];
        case 'object':
            if ('env' in vendor.pr) {
                if ('any' in vendor.pr) {
                    // "pr": { "env": "CODEBUILD_WEBHOOK_EVENT", "any": ["PULL_REQUEST_CREATED", "PULL_REQUEST_UPDATED"] }
                    return vendor.pr.any.some(function(key) {
                        return env[vendor.pr.env] === key;
                    });
                } else {
                    // "pr": { "env": "BUILDKITE_PULL_REQUEST", "ne": "false" }
                    return vendor.pr.env in env && env[vendor.pr.env] !== vendor.pr.ne;
                }
            } else if ('any' in vendor.pr) {
                // "pr": { "any": ["ghprbPullId", "CHANGE_ID"] }
                return vendor.pr.any.some(function(key) {
                    return !!env[key];
                });
            } else {
                // "pr": { "DRONE_BUILD_EVENT": "pull_request" }
                return checkEnv(vendor.pr);
            }
        default:
            // PR detection not supported for this vendor
            return null;
    }
}
}),
"[project]/node_modules/dataloader/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2019-present, GraphQL Foundation
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */ // A Function, which when given an Array of keys, returns a Promise of an Array
// of values or Errors.
// Optionally turn off batching or caching or provide a cache key function or a
// custom cache instance.
// If a custom cache is provided, it must be of this type (a subset of ES6 Map).
/**
 * A `DataLoader` creates a public API for loading data from a particular
 * data back-end with unique keys such as the `id` column of a SQL table or
 * document name in a MongoDB database, given a batch loading function.
 *
 * Each `DataLoader` instance contains a unique memoized cache. Use caution when
 * used in long-lived applications or those which serve many users with
 * different access permissions and consider creating a new instance per
 * web request.
 */ var DataLoader = /*#__PURE__*/ function() {
    function DataLoader(batchLoadFn, options) {
        if (typeof batchLoadFn !== 'function') {
            throw new TypeError('DataLoader must be constructed with a function which accepts ' + ("Array<key> and returns Promise<Array<value>>, but got: " + batchLoadFn + "."));
        }
        this._batchLoadFn = batchLoadFn;
        this._maxBatchSize = getValidMaxBatchSize(options);
        this._batchScheduleFn = getValidBatchScheduleFn(options);
        this._cacheKeyFn = getValidCacheKeyFn(options);
        this._cacheMap = getValidCacheMap(options);
        this._batch = null;
        this.name = getValidName(options);
    } // Private
    var _proto = DataLoader.prototype;
    /**
   * Loads a key, returning a `Promise` for the value represented by that key.
   */ _proto.load = function load(key) {
        if (key === null || key === undefined) {
            throw new TypeError('The loader.load() function must be called with a value, ' + ("but got: " + String(key) + "."));
        }
        var batch = getCurrentBatch(this);
        var cacheMap = this._cacheMap;
        var cacheKey; // If caching and there is a cache-hit, return cached Promise.
        if (cacheMap) {
            cacheKey = this._cacheKeyFn(key);
            var cachedPromise = cacheMap.get(cacheKey);
            if (cachedPromise) {
                var cacheHits = batch.cacheHits || (batch.cacheHits = []);
                return new Promise(function(resolve) {
                    cacheHits.push(function() {
                        resolve(cachedPromise);
                    });
                });
            }
        } // Otherwise, produce a new Promise for this key, and enqueue it to be
        // dispatched along with the current batch.
        batch.keys.push(key);
        var promise = new Promise(function(resolve, reject) {
            batch.callbacks.push({
                resolve: resolve,
                reject: reject
            });
        }); // If caching, cache this promise.
        if (cacheMap) {
            cacheMap.set(cacheKey, promise);
        }
        return promise;
    };
    _proto.loadMany = function loadMany(keys) {
        if (!isArrayLike(keys)) {
            throw new TypeError('The loader.loadMany() function must be called with Array<key> ' + ("but got: " + keys + "."));
        } // Support ArrayLike by using only minimal property access
        var loadPromises = [];
        for(var i = 0; i < keys.length; i++){
            loadPromises.push(this.load(keys[i])["catch"](function(error) {
                return error;
            }));
        }
        return Promise.all(loadPromises);
    };
    _proto.clear = function clear(key) {
        var cacheMap = this._cacheMap;
        if (cacheMap) {
            var cacheKey = this._cacheKeyFn(key);
            cacheMap["delete"](cacheKey);
        }
        return this;
    };
    _proto.clearAll = function clearAll() {
        var cacheMap = this._cacheMap;
        if (cacheMap) {
            cacheMap.clear();
        }
        return this;
    };
    _proto.prime = function prime(key, value) {
        var cacheMap = this._cacheMap;
        if (cacheMap) {
            var cacheKey = this._cacheKeyFn(key); // Only add the key if it does not already exist.
            if (cacheMap.get(cacheKey) === undefined) {
                // Cache a rejected promise if the value is an Error, in order to match
                // the behavior of load(key).
                var promise;
                if (value instanceof Error) {
                    promise = Promise.reject(value); // Since this is a case where an Error is intentionally being primed
                    // for a given key, we want to disable unhandled promise rejection.
                    promise["catch"](function() {});
                } else {
                    promise = Promise.resolve(value);
                }
                cacheMap.set(cacheKey, promise);
            }
        }
        return this;
    };
    return DataLoader;
}(); // Private: Enqueue a Job to be executed after all "PromiseJobs" Jobs.
//
// ES6 JavaScript uses the concepts Job and JobQueue to schedule work to occur
// after the current execution context has completed:
// http://www.ecma-international.org/ecma-262/6.0/#sec-jobs-and-job-queues
//
// Node.js uses the `process.nextTick` mechanism to implement the concept of a
// Job, maintaining a global FIFO JobQueue for all Jobs, which is flushed after
// the current call stack ends.
//
// When calling `then` on a Promise, it enqueues a Job on a specific
// "PromiseJobs" JobQueue which is flushed in Node as a single Job on the
// global JobQueue.
//
// DataLoader batches all loads which occur in a single frame of execution, but
// should include in the batch all loads which occur during the flushing of the
// "PromiseJobs" JobQueue after that same execution frame.
//
// In order to avoid the DataLoader dispatch Job occuring before "PromiseJobs",
// A Promise Job is created with the sole purpose of enqueuing a global Job,
// ensuring that it always occurs after "PromiseJobs" ends.
//
// Node.js's job queue is unique. Browsers do not have an equivalent mechanism
// for enqueuing a job to be performed after promise microtasks and before the
// next macrotask. For browser environments, a macrotask is used (via
// setImmediate or setTimeout) at a potential performance penalty.
var enqueuePostPromiseJob = typeof process === 'object' && typeof process.nextTick === 'function' ? function(fn) {
    if (!resolvedPromise) {
        resolvedPromise = Promise.resolve();
    }
    resolvedPromise.then(function() {
        process.nextTick(fn);
    });
} : typeof setImmediate === 'function' ? function(fn) {
    setImmediate(fn);
} : function(fn) {
    setTimeout(fn);
}; // Private: cached resolved Promise instance
var resolvedPromise; // Private: Describes a batch of requests
// Private: Either returns the current batch, or creates and schedules a
// dispatch of a new batch for the given loader.
function getCurrentBatch(loader) {
    // If there is an existing batch which has not yet dispatched and is within
    // the limit of the batch size, then return it.
    var existingBatch = loader._batch;
    if (existingBatch !== null && !existingBatch.hasDispatched && existingBatch.keys.length < loader._maxBatchSize) {
        return existingBatch;
    } // Otherwise, create a new batch for this loader.
    var newBatch = {
        hasDispatched: false,
        keys: [],
        callbacks: []
    }; // Store it on the loader so it may be reused.
    loader._batch = newBatch; // Then schedule a task to dispatch this batch of requests.
    loader._batchScheduleFn(function() {
        dispatchBatch(loader, newBatch);
    });
    return newBatch;
}
function dispatchBatch(loader, batch) {
    // Mark this batch as having been dispatched.
    batch.hasDispatched = true; // If there's nothing to load, resolve any cache hits and return early.
    if (batch.keys.length === 0) {
        resolveCacheHits(batch);
        return;
    } // Call the provided batchLoadFn for this loader with the batch's keys and
    // with the loader as the `this` context.
    var batchPromise;
    try {
        batchPromise = loader._batchLoadFn(batch.keys);
    } catch (e) {
        return failedDispatch(loader, batch, new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function ' + ("errored synchronously: " + String(e) + ".")));
    } // Assert the expected response from batchLoadFn
    if (!batchPromise || typeof batchPromise.then !== 'function') {
        return failedDispatch(loader, batch, new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function did ' + ("not return a Promise: " + String(batchPromise) + ".")));
    } // Await the resolution of the call to batchLoadFn.
    batchPromise.then(function(values) {
        // Assert the expected resolution from batchLoadFn.
        if (!isArrayLike(values)) {
            throw new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function did ' + ("not return a Promise of an Array: " + String(values) + "."));
        }
        if (values.length !== batch.keys.length) {
            throw new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function did ' + 'not return a Promise of an Array of the same length as the Array ' + 'of keys.' + ("\n\nKeys:\n" + String(batch.keys)) + ("\n\nValues:\n" + String(values)));
        } // Resolve all cache hits in the same micro-task as freshly loaded values.
        resolveCacheHits(batch); // Step through values, resolving or rejecting each Promise in the batch.
        for(var i = 0; i < batch.callbacks.length; i++){
            var _value = values[i];
            if (_value instanceof Error) {
                batch.callbacks[i].reject(_value);
            } else {
                batch.callbacks[i].resolve(_value);
            }
        }
    })["catch"](function(error) {
        failedDispatch(loader, batch, error);
    });
} // Private: do not cache individual loads if the entire batch dispatch fails,
// but still reject each request so they do not hang.
function failedDispatch(loader, batch, error) {
    // Cache hits are resolved, even though the batch failed.
    resolveCacheHits(batch);
    for(var i = 0; i < batch.keys.length; i++){
        loader.clear(batch.keys[i]);
        batch.callbacks[i].reject(error);
    }
} // Private: Resolves the Promises for any cache hits in this batch.
function resolveCacheHits(batch) {
    if (batch.cacheHits) {
        for(var i = 0; i < batch.cacheHits.length; i++){
            batch.cacheHits[i]();
        }
    }
} // Private: given the DataLoader's options, produce a valid max batch size.
function getValidMaxBatchSize(options) {
    var shouldBatch = !options || options.batch !== false;
    if (!shouldBatch) {
        return 1;
    }
    var maxBatchSize = options && options.maxBatchSize;
    if (maxBatchSize === undefined) {
        return Infinity;
    }
    if (typeof maxBatchSize !== 'number' || maxBatchSize < 1) {
        throw new TypeError("maxBatchSize must be a positive number: " + maxBatchSize);
    }
    return maxBatchSize;
} // Private
function getValidBatchScheduleFn(options) {
    var batchScheduleFn = options && options.batchScheduleFn;
    if (batchScheduleFn === undefined) {
        return enqueuePostPromiseJob;
    }
    if (typeof batchScheduleFn !== 'function') {
        throw new TypeError("batchScheduleFn must be a function: " + batchScheduleFn);
    }
    return batchScheduleFn;
} // Private: given the DataLoader's options, produce a cache key function.
function getValidCacheKeyFn(options) {
    var cacheKeyFn = options && options.cacheKeyFn;
    if (cacheKeyFn === undefined) {
        return function(key) {
            return key;
        };
    }
    if (typeof cacheKeyFn !== 'function') {
        throw new TypeError("cacheKeyFn must be a function: " + cacheKeyFn);
    }
    return cacheKeyFn;
} // Private: given the DataLoader's options, produce a CacheMap to be used.
function getValidCacheMap(options) {
    var shouldCache = !options || options.cache !== false;
    if (!shouldCache) {
        return null;
    }
    var cacheMap = options && options.cacheMap;
    if (cacheMap === undefined) {
        return new Map();
    }
    if (cacheMap !== null) {
        var cacheFunctions = [
            'get',
            'set',
            'delete',
            'clear'
        ];
        var missingFunctions = cacheFunctions.filter(function(fnName) {
            return cacheMap && typeof cacheMap[fnName] !== 'function';
        });
        if (missingFunctions.length !== 0) {
            throw new TypeError('Custom cacheMap missing methods: ' + missingFunctions.join(', '));
        }
    }
    return cacheMap;
}
function getValidName(options) {
    if (options && options.name) {
        return options.name;
    }
    return null;
} // Private
function isArrayLike(x) {
    return typeof x === 'object' && x !== null && typeof x.length === 'number' && (x.length === 0 || x.length > 0 && Object.prototype.hasOwnProperty.call(x, x.length - 1));
}
module.exports = DataLoader;
}),
"[project]/node_modules/bson-objectid/objectid.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var MACHINE_ID = Math.floor(Math.random() * 0xFFFFFF);
var index = ObjectID.index = parseInt(Math.random() * 0xFFFFFF, 10);
var pid = (typeof process === 'undefined' || typeof process.pid !== 'number' ? Math.floor(Math.random() * 100000) : process.pid) % 0xFFFF;
// <https://github.com/williamkapke/bson-objectid/pull/51>
// Attempt to fallback Buffer if _Buffer is undefined (e.g. for Node.js).
// Worst case fallback to null and handle with null checking before using.
var BufferCtr = (()=>{
    try {
        return _Buffer;
    } catch (_) {
        try {
            return Buffer;
        } catch (_) {
            return null;
        }
    }
})();
/**
 * Determine if an object is Buffer
 *
 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * License:  MIT
 *
 */ var isBuffer = function(obj) {
    return !!(obj != null && obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj));
};
// Precomputed hex table enables speedy hex string conversion
var hexTable = [];
for(var i = 0; i < 256; i++){
    hexTable[i] = (i <= 15 ? '0' : '') + i.toString(16);
}
// Regular expression that checks for hex value
var checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');
// Lookup tables
var decodeLookup = [];
i = 0;
while(i < 10)decodeLookup[0x30 + i] = i++;
while(i < 16)decodeLookup[0x41 - 10 + i] = decodeLookup[0x61 - 10 + i] = i++;
/**
 * Create a new immutable ObjectID instance
 *
 * @class Represents the BSON ObjectID type
 * @param {String|Number} id Can be a 24 byte hex string, 12 byte binary string or a Number.
 * @return {Object} instance of ObjectID.
 */ function ObjectID(id) {
    if (!(this instanceof ObjectID)) return new ObjectID(id);
    if (id && (id instanceof ObjectID || id._bsontype === "ObjectID")) return id;
    this._bsontype = 'ObjectID';
    // The most common usecase (blank id, new objectId instance)
    if (id == null || typeof id === 'number') {
        // Generate a new id
        this.id = this.generate(id);
        // Return the object
        return;
    }
    // Check if the passed in id is valid
    var valid = ObjectID.isValid(id);
    // Throw an error if it's not a valid setup
    if (!valid && id != null) {
        throw new Error('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    } else if (valid && typeof id === 'string' && id.length === 24) {
        return ObjectID.createFromHexString(id);
    } else if (id != null && id.length === 12) {
        // assume 12 byte string
        this.id = id;
    } else if (id != null && typeof id.toHexString === 'function') {
        // Duck-typing to support ObjectId from different npm packages
        return id;
    } else {
        throw new Error('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    }
}
module.exports = ObjectID;
ObjectID.default = ObjectID;
/**
 * Creates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID.
 *
 * @param {Number} time an integer number representing a number of seconds.
 * @return {ObjectID} return the created ObjectID
 * @api public
 */ ObjectID.createFromTime = function(time) {
    time = parseInt(time, 10) % 0xFFFFFFFF;
    return new ObjectID(hex(8, time) + "0000000000000000");
};
/**
 * Creates an ObjectID from a hex string representation of an ObjectID.
 *
 * @param {String} hexString create a ObjectID from a passed in 24 byte hexstring.
 * @return {ObjectID} return the created ObjectID
 * @api public
 */ ObjectID.createFromHexString = function(hexString) {
    // Throw an error if it's not a valid setup
    if (typeof hexString === 'undefined' || hexString != null && hexString.length !== 24) {
        throw new Error('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    }
    // Calculate lengths
    var data = '';
    var i = 0;
    while(i < 24){
        data += String.fromCharCode(decodeLookup[hexString.charCodeAt(i++)] << 4 | decodeLookup[hexString.charCodeAt(i++)]);
    }
    return new ObjectID(data);
};
/**
 * Checks if a value is a valid bson ObjectId
 *
 * @param {String} objectid Can be a 24 byte hex string or an instance of ObjectID.
 * @return {Boolean} return true if the value is a valid bson ObjectID, return false otherwise.
 * @api public
 *
 * THE NATIVE DOCUMENTATION ISN'T CLEAR ON THIS GUY!
 * http://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html#objectid-isvalid
 */ ObjectID.isValid = function(id) {
    if (id == null) return false;
    if (typeof id === 'number') {
        return true;
    }
    if (typeof id === 'string') {
        return id.length === 12 || id.length === 24 && checkForHexRegExp.test(id);
    }
    if (id instanceof ObjectID) {
        return true;
    }
    // <https://github.com/williamkapke/bson-objectid/issues/53>
    if (isBuffer(id)) {
        return ObjectID.isValid(id.toString('hex'));
    }
    // Duck-Typing detection of ObjectId like objects
    // <https://github.com/williamkapke/bson-objectid/pull/51>
    if (typeof id.toHexString === 'function') {
        if (BufferCtr && (id.id instanceof BufferCtr || typeof id.id === 'string')) {
            return id.id.length === 12 || id.id.length === 24 && checkForHexRegExp.test(id.id);
        }
    }
    return false;
};
ObjectID.prototype = {
    constructor: ObjectID,
    /**
   * Return the ObjectID id as a 24 byte hex string representation
   *
   * @return {String} return the 24 byte hex string representation.
   * @api public
   */ toHexString: function() {
        if (!this.id || !this.id.length) {
            throw new Error('invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is [' + JSON.stringify(this.id) + ']');
        }
        if (this.id.length === 24) {
            return this.id;
        }
        if (isBuffer(this.id)) {
            return this.id.toString('hex');
        }
        var hexString = '';
        for(var i = 0; i < this.id.length; i++){
            hexString += hexTable[this.id.charCodeAt(i)];
        }
        return hexString;
    },
    /**
   * Compares the equality of this ObjectID with `otherID`.
   *
   * @param {Object} otherId ObjectID instance to compare against.
   * @return {Boolean} the result of comparing two ObjectID's
   * @api public
   */ equals: function(otherId) {
        if (otherId instanceof ObjectID) {
            return this.toString() === otherId.toString();
        } else if (typeof otherId === 'string' && ObjectID.isValid(otherId) && otherId.length === 12 && isBuffer(this.id)) {
            return otherId === this.id.toString('binary');
        } else if (typeof otherId === 'string' && ObjectID.isValid(otherId) && otherId.length === 24) {
            return otherId.toLowerCase() === this.toHexString();
        } else if (typeof otherId === 'string' && ObjectID.isValid(otherId) && otherId.length === 12) {
            return otherId === this.id;
        } else if (otherId != null && (otherId instanceof ObjectID || otherId.toHexString)) {
            return otherId.toHexString() === this.toHexString();
        } else {
            return false;
        }
    },
    /**
   * Returns the generation date (accurate up to the second) that this ID was generated.
   *
   * @return {Date} the generation date
   * @api public
   */ getTimestamp: function() {
        var timestamp = new Date();
        var time;
        if (isBuffer(this.id)) {
            time = this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24;
        } else {
            time = this.id.charCodeAt(3) | this.id.charCodeAt(2) << 8 | this.id.charCodeAt(1) << 16 | this.id.charCodeAt(0) << 24;
        }
        timestamp.setTime(Math.floor(time) * 1000);
        return timestamp;
    },
    /**
  * Generate a 12 byte id buffer used in ObjectID's
  *
  * @method
  * @param {number} [time] optional parameter allowing to pass in a second based timestamp.
  * @return {string} return the 12 byte id buffer string.
  */ generate: function(time) {
        if ('number' !== typeof time) {
            time = ~~(Date.now() / 1000);
        }
        //keep it in the ring!
        time = parseInt(time, 10) % 0xFFFFFFFF;
        var inc = next();
        return String.fromCharCode(time >> 24 & 0xFF, time >> 16 & 0xFF, time >> 8 & 0xFF, time & 0xFF, MACHINE_ID >> 16 & 0xFF, MACHINE_ID >> 8 & 0xFF, MACHINE_ID & 0xFF, pid >> 8 & 0xFF, pid & 0xFF, inc >> 16 & 0xFF, inc >> 8 & 0xFF, inc & 0xFF);
    }
};
function next() {
    return index = (index + 1) % 0xFFFFFF;
}
function hex(length, n) {
    n = n.toString(16);
    return n.length === length ? n : "00000000".substring(n.length, length) + n;
}
function buffer(str) {
    var i = 0, out = [];
    if (str.length === 24) for(; i < 24; out.push(parseInt(str[i] + str[i + 1], 16)), i += 2);
    else if (str.length === 12) for(; i < 12; out.push(str.charCodeAt(i)), i++);
    return out;
}
var inspect = Symbol && Symbol.for && Symbol.for('nodejs.util.inspect.custom') || 'inspect';
/**
 * Converts to a string representation of this Id.
 *
 * @return {String} return the 24 byte hex string representation.
 * @api private
 */ ObjectID.prototype[inspect] = function() {
    return "ObjectID(" + this + ")";
};
ObjectID.prototype.toJSON = ObjectID.prototype.toHexString;
ObjectID.prototype.toString = ObjectID.prototype.toHexString;
}),
"[project]/node_modules/jose/dist/node/esm/runtime/digest.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const digest = (algorithm, data)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])(algorithm).update(data).digest();
const __TURBOPACK__default__export__ = digest;
}),
"[project]/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>concat,
    "concatKdf",
    ()=>concatKdf,
    "decoder",
    ()=>decoder,
    "encoder",
    ()=>encoder,
    "lengthAndInput",
    ()=>lengthAndInput,
    "p2s",
    ()=>p2s,
    "uint32be",
    ()=>uint32be,
    "uint64be",
    ()=>uint64be
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/digest.js [app-route] (ecmascript)");
;
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const MAX_INT32 = 2 ** 32;
function concat(...buffers) {
    const size = buffers.reduce((acc, { length })=>acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    for (const buffer of buffers){
        buf.set(buffer, i);
        i += buffer.length;
    }
    return buf;
}
function p2s(alg, p2sInput) {
    return concat(encoder.encode(alg), new Uint8Array([
        0
    ]), p2sInput);
}
function writeUInt32BE(buf, value, offset) {
    if (value < 0 || value >= MAX_INT32) {
        throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
    }
    buf.set([
        value >>> 24,
        value >>> 16,
        value >>> 8,
        value & 0xff
    ], offset);
}
function uint64be(value) {
    const high = Math.floor(value / MAX_INT32);
    const low = value % MAX_INT32;
    const buf = new Uint8Array(8);
    writeUInt32BE(buf, high, 0);
    writeUInt32BE(buf, low, 4);
    return buf;
}
function uint32be(value) {
    const buf = new Uint8Array(4);
    writeUInt32BE(buf, value);
    return buf;
}
function lengthAndInput(input) {
    return concat(uint32be(input.length), input);
}
async function concatKdf(secret, bits, value) {
    const iterations = Math.ceil((bits >> 3) / 32);
    const res = new Uint8Array(iterations * 32);
    for(let iter = 0; iter < iterations; iter++){
        const buf = new Uint8Array(4 + secret.length + value.length);
        buf.set(uint32be(iter + 1));
        buf.set(secret, 4);
        buf.set(value, 4 + secret.length);
        res.set(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])('sha256', buf), iter * 32);
    }
    return res.slice(0, bits >> 3);
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/base64url.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "decodeBase64",
    ()=>decodeBase64,
    "encode",
    ()=>encode,
    "encodeBase64",
    ()=>encodeBase64
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-route] (ecmascript)");
;
;
function normalize(input) {
    let encoded = input;
    if (encoded instanceof Uint8Array) {
        encoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(encoded);
    }
    return encoded;
}
const encode = (input)=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(input).toString('base64url');
const decodeBase64 = (input)=>new Uint8Array(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(input, 'base64'));
const encodeBase64 = (input)=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(input).toString('base64');
;
const decode = (input)=>new Uint8Array(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(normalize(input), 'base64url'));
}),
"[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JOSEAlgNotAllowed",
    ()=>JOSEAlgNotAllowed,
    "JOSEError",
    ()=>JOSEError,
    "JOSENotSupported",
    ()=>JOSENotSupported,
    "JWEDecryptionFailed",
    ()=>JWEDecryptionFailed,
    "JWEInvalid",
    ()=>JWEInvalid,
    "JWKInvalid",
    ()=>JWKInvalid,
    "JWKSInvalid",
    ()=>JWKSInvalid,
    "JWKSMultipleMatchingKeys",
    ()=>JWKSMultipleMatchingKeys,
    "JWKSNoMatchingKey",
    ()=>JWKSNoMatchingKey,
    "JWKSTimeout",
    ()=>JWKSTimeout,
    "JWSInvalid",
    ()=>JWSInvalid,
    "JWSSignatureVerificationFailed",
    ()=>JWSSignatureVerificationFailed,
    "JWTClaimValidationFailed",
    ()=>JWTClaimValidationFailed,
    "JWTExpired",
    ()=>JWTExpired,
    "JWTInvalid",
    ()=>JWTInvalid
]);
class JOSEError extends Error {
    static code = 'ERR_JOSE_GENERIC';
    code = 'ERR_JOSE_GENERIC';
    constructor(message, options){
        super(message, options);
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
class JWTClaimValidationFailed extends JOSEError {
    static code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    claim;
    reason;
    payload;
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified'){
        super(message, {
            cause: {
                claim,
                reason,
                payload
            }
        });
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
class JWTExpired extends JOSEError {
    static code = 'ERR_JWT_EXPIRED';
    code = 'ERR_JWT_EXPIRED';
    claim;
    reason;
    payload;
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified'){
        super(message, {
            cause: {
                claim,
                reason,
                payload
            }
        });
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
class JOSEAlgNotAllowed extends JOSEError {
    static code = 'ERR_JOSE_ALG_NOT_ALLOWED';
    code = 'ERR_JOSE_ALG_NOT_ALLOWED';
}
class JOSENotSupported extends JOSEError {
    static code = 'ERR_JOSE_NOT_SUPPORTED';
    code = 'ERR_JOSE_NOT_SUPPORTED';
}
class JWEDecryptionFailed extends JOSEError {
    static code = 'ERR_JWE_DECRYPTION_FAILED';
    code = 'ERR_JWE_DECRYPTION_FAILED';
    constructor(message = 'decryption operation failed', options){
        super(message, options);
    }
}
class JWEInvalid extends JOSEError {
    static code = 'ERR_JWE_INVALID';
    code = 'ERR_JWE_INVALID';
}
class JWSInvalid extends JOSEError {
    static code = 'ERR_JWS_INVALID';
    code = 'ERR_JWS_INVALID';
}
class JWTInvalid extends JOSEError {
    static code = 'ERR_JWT_INVALID';
    code = 'ERR_JWT_INVALID';
}
class JWKInvalid extends JOSEError {
    static code = 'ERR_JWK_INVALID';
    code = 'ERR_JWK_INVALID';
}
class JWKSInvalid extends JOSEError {
    static code = 'ERR_JWKS_INVALID';
    code = 'ERR_JWKS_INVALID';
}
class JWKSNoMatchingKey extends JOSEError {
    static code = 'ERR_JWKS_NO_MATCHING_KEY';
    code = 'ERR_JWKS_NO_MATCHING_KEY';
    constructor(message = 'no applicable key found in the JSON Web Key Set', options){
        super(message, options);
    }
}
class JWKSMultipleMatchingKeys extends JOSEError {
    [Symbol.asyncIterator];
    static code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    constructor(message = 'multiple matching keys found in the JSON Web Key Set', options){
        super(message, options);
    }
}
class JWKSTimeout extends JOSEError {
    static code = 'ERR_JWKS_TIMEOUT';
    code = 'ERR_JWKS_TIMEOUT';
    constructor(message = 'request timed out', options){
        super(message, options);
    }
}
class JWSSignatureVerificationFailed extends JOSEError {
    static code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    constructor(message = 'signature verification failed', options){
        super(message, options);
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/dsa_digest.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>dsaDigest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
;
function dsaDigest(alg) {
    switch(alg){
        case 'PS256':
        case 'RS256':
        case 'ES256':
        case 'ES256K':
            return 'sha256';
        case 'PS384':
        case 'RS384':
        case 'ES384':
            return 'sha384';
        case 'PS512':
        case 'RS512':
        case 'ES512':
            return 'sha512';
        case 'EdDSA':
            return undefined;
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/hmac_digest.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>hmacDigest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
;
function hmacDigest(alg) {
    switch(alg){
        case 'HS256':
            return 'sha256';
        case 'HS384':
            return 'sha384';
        case 'HS512':
            return 'sha512';
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/webcrypto.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isCryptoKey",
    ()=>isCryptoKey
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
;
;
const webcrypto = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["webcrypto"];
const __TURBOPACK__default__export__ = webcrypto;
const isCryptoKey = (key)=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["types"].isCryptoKey(key);
}),
"[project]/node_modules/jose/dist/node/esm/runtime/is_key_object.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
;
const __TURBOPACK__default__export__ = (obj)=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["types"].isKeyObject(obj);
}),
"[project]/node_modules/jose/dist/node/esm/lib/invalid_key_input.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "withAlg",
    ()=>withAlg
]);
function message(msg, actual, ...types) {
    types = types.filter(Boolean);
    if (types.length > 2) {
        const last = types.pop();
        msg += `one of type ${types.join(', ')}, or ${last}.`;
    } else if (types.length === 2) {
        msg += `one of type ${types[0]} or ${types[1]}.`;
    } else {
        msg += `of type ${types[0]}.`;
    }
    if (actual == null) {
        msg += ` Received ${actual}`;
    } else if (typeof actual === 'function' && actual.name) {
        msg += ` Received function ${actual.name}`;
    } else if (typeof actual === 'object' && actual != null) {
        if (actual.constructor?.name) {
            msg += ` Received an instance of ${actual.constructor.name}`;
        }
    }
    return msg;
}
const __TURBOPACK__default__export__ = (actual, ...types)=>{
    return message('Key must be ', actual, ...types);
};
function withAlg(alg, actual, ...types) {
    return message(`Key for the ${alg} algorithm must be `, actual, ...types);
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/is_key_like.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "types",
    ()=>types
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/webcrypto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/is_key_object.js [app-route] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCryptoKey"])(key);
const types = [
    'KeyObject'
];
if (globalThis.CryptoKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]?.CryptoKey) {
    types.push('CryptoKey');
}
;
}),
"[project]/node_modules/jose/dist/node/esm/lib/is_object.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isObject
]);
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
function isObject(input) {
    if (!isObjectLike(input) || Object.prototype.toString.call(input) !== '[object Object]') {
        return false;
    }
    if (Object.getPrototypeOf(input) === null) {
        return true;
    }
    let proto = input;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(input) === proto;
}
}),
"[project]/node_modules/jose/dist/node/esm/lib/is_jwk.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isJWK",
    ()=>isJWK,
    "isPrivateJWK",
    ()=>isPrivateJWK,
    "isPublicJWK",
    ()=>isPublicJWK,
    "isSecretJWK",
    ()=>isSecretJWK
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_object.js [app-route] (ecmascript)");
;
function isJWK(key) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key) && typeof key.kty === 'string';
}
function isPrivateJWK(key) {
    return key.kty !== 'oct' && typeof key.d === 'string';
}
function isPublicJWK(key) {
    return key.kty !== 'oct' && typeof key.d === 'undefined';
}
function isSecretJWK(key) {
    return isJWK(key) && key.kty === 'oct' && typeof key.k === 'string';
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/get_named_curve.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "weakMap",
    ()=>weakMap
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/webcrypto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/is_key_object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/invalid_key_input.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/is_key_like.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_jwk.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
const weakMap = new WeakMap();
const namedCurveToJOSE = (namedCurve)=>{
    switch(namedCurve){
        case 'prime256v1':
            return 'P-256';
        case 'secp384r1':
            return 'P-384';
        case 'secp521r1':
            return 'P-521';
        case 'secp256k1':
            return 'secp256k1';
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Unsupported key curve for this operation');
    }
};
const getNamedCurve = (kee, raw)=>{
    let key;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCryptoKey"])(kee)) {
        key = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["KeyObject"].from(kee);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(kee)) {
        key = kee;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isJWK"])(kee)) {
        return kee.crv;
    } else {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(kee, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["types"]));
    }
    if (key.type === 'secret') {
        throw new TypeError('only "private" or "public" type keys can be used for this operation');
    }
    switch(key.asymmetricKeyType){
        case 'ed25519':
        case 'ed448':
            return `Ed${key.asymmetricKeyType.slice(2)}`;
        case 'x25519':
        case 'x448':
            return `X${key.asymmetricKeyType.slice(1)}`;
        case 'ec':
            {
                const namedCurve = key.asymmetricKeyDetails.namedCurve;
                if (raw) {
                    return namedCurve;
                }
                return namedCurveToJOSE(namedCurve);
            }
        default:
            throw new TypeError('Invalid asymmetric key type for this operation');
    }
};
const __TURBOPACK__default__export__ = getNamedCurve;
}),
"[project]/node_modules/jose/dist/node/esm/runtime/check_key_length.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const __TURBOPACK__default__export__ = (key, alg)=>{
    let modulusLength;
    try {
        if (key instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["KeyObject"]) {
            modulusLength = key.asymmetricKeyDetails?.modulusLength;
        } else {
            modulusLength = Buffer.from(key.n, 'base64url').byteLength << 3;
        }
    } catch  {}
    if (typeof modulusLength !== 'number' || modulusLength < 2048) {
        throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
};
}),
"[project]/node_modules/jose/dist/node/esm/runtime/node_key.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>keyForCrypto
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$get_named_curve$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/get_named_curve.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$check_key_length$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/check_key_length.js [app-route] (ecmascript)");
;
;
;
;
const ecCurveAlgMap = new Map([
    [
        'ES256',
        'P-256'
    ],
    [
        'ES256K',
        'secp256k1'
    ],
    [
        'ES384',
        'P-384'
    ],
    [
        'ES512',
        'P-521'
    ]
]);
function keyForCrypto(alg, key) {
    let asymmetricKeyType;
    let asymmetricKeyDetails;
    let isJWK;
    if (key instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["KeyObject"]) {
        asymmetricKeyType = key.asymmetricKeyType;
        asymmetricKeyDetails = key.asymmetricKeyDetails;
    } else {
        isJWK = true;
        switch(key.kty){
            case 'RSA':
                asymmetricKeyType = 'rsa';
                break;
            case 'EC':
                asymmetricKeyType = 'ec';
                break;
            case 'OKP':
                {
                    if (key.crv === 'Ed25519') {
                        asymmetricKeyType = 'ed25519';
                        break;
                    }
                    if (key.crv === 'Ed448') {
                        asymmetricKeyType = 'ed448';
                        break;
                    }
                    throw new TypeError('Invalid key for this operation, its crv must be Ed25519 or Ed448');
                }
            default:
                throw new TypeError('Invalid key for this operation, its kty must be RSA, OKP, or EC');
        }
    }
    let options;
    switch(alg){
        case 'EdDSA':
            if (![
                'ed25519',
                'ed448'
            ].includes(asymmetricKeyType)) {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be ed25519 or ed448');
            }
            break;
        case 'RS256':
        case 'RS384':
        case 'RS512':
            if (asymmetricKeyType !== 'rsa') {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be rsa');
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$check_key_length$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key, alg);
            break;
        case 'PS256':
        case 'PS384':
        case 'PS512':
            if (asymmetricKeyType === 'rsa-pss') {
                const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = asymmetricKeyDetails;
                const length = parseInt(alg.slice(-3), 10);
                if (hashAlgorithm !== undefined && (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm)) {
                    throw new TypeError(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${alg}`);
                }
                if (saltLength !== undefined && saltLength > length >> 3) {
                    throw new TypeError(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${alg}`);
                }
            } else if (asymmetricKeyType !== 'rsa') {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be rsa or rsa-pss');
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$check_key_length$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key, alg);
            options = {
                padding: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["constants"].RSA_PKCS1_PSS_PADDING,
                saltLength: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["constants"].RSA_PSS_SALTLEN_DIGEST
            };
            break;
        case 'ES256':
        case 'ES256K':
        case 'ES384':
        case 'ES512':
            {
                if (asymmetricKeyType !== 'ec') {
                    throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be ec');
                }
                const actual = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$get_named_curve$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key);
                const expected = ecCurveAlgMap.get(alg);
                if (actual !== expected) {
                    throw new TypeError(`Invalid key curve for the algorithm, its curve must be ${expected}, got ${actual}`);
                }
                options = {
                    dsaEncoding: 'ieee-p1363'
                };
                break;
            }
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
    if (isJWK) {
        return {
            format: 'jwk',
            key,
            ...options
        };
    }
    return options ? {
        ...options,
        key
    } : key;
}
}),
"[project]/node_modules/jose/dist/node/esm/lib/crypto_key.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkEncCryptoKey",
    ()=>checkEncCryptoKey,
    "checkSigCryptoKey",
    ()=>checkSigCryptoKey
]);
function unusable(name, prop = 'algorithm.name') {
    return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
    return algorithm.name === name;
}
function getHashLength(hash) {
    return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
    switch(alg){
        case 'ES256':
            return 'P-256';
        case 'ES384':
            return 'P-384';
        case 'ES512':
            return 'P-521';
        default:
            throw new Error('unreachable');
    }
}
function checkUsage(key, usages) {
    if (usages.length && !usages.some((expected)=>key.usages.includes(expected))) {
        let msg = 'CryptoKey does not support this operation, its usages must include ';
        if (usages.length > 2) {
            const last = usages.pop();
            msg += `one of ${usages.join(', ')}, or ${last}.`;
        } else if (usages.length === 2) {
            msg += `one of ${usages[0]} or ${usages[1]}.`;
        } else {
            msg += `${usages[0]}.`;
        }
        throw new TypeError(msg);
    }
}
function checkSigCryptoKey(key, alg, ...usages) {
    switch(alg){
        case 'HS256':
        case 'HS384':
        case 'HS512':
            {
                if (!isAlgorithm(key.algorithm, 'HMAC')) throw unusable('HMAC');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'RS256':
        case 'RS384':
        case 'RS512':
            {
                if (!isAlgorithm(key.algorithm, 'RSASSA-PKCS1-v1_5')) throw unusable('RSASSA-PKCS1-v1_5');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'PS256':
        case 'PS384':
        case 'PS512':
            {
                if (!isAlgorithm(key.algorithm, 'RSA-PSS')) throw unusable('RSA-PSS');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'EdDSA':
            {
                if (key.algorithm.name !== 'Ed25519' && key.algorithm.name !== 'Ed448') {
                    throw unusable('Ed25519 or Ed448');
                }
                break;
            }
        case 'ES256':
        case 'ES384':
        case 'ES512':
            {
                if (!isAlgorithm(key.algorithm, 'ECDSA')) throw unusable('ECDSA');
                const expected = getNamedCurve(alg);
                const actual = key.algorithm.namedCurve;
                if (actual !== expected) throw unusable(expected, 'algorithm.namedCurve');
                break;
            }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usages);
}
function checkEncCryptoKey(key, alg, ...usages) {
    switch(alg){
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            {
                if (!isAlgorithm(key.algorithm, 'AES-GCM')) throw unusable('AES-GCM');
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw unusable(expected, 'algorithm.length');
                break;
            }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
            {
                if (!isAlgorithm(key.algorithm, 'AES-KW')) throw unusable('AES-KW');
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw unusable(expected, 'algorithm.length');
                break;
            }
        case 'ECDH':
            {
                switch(key.algorithm.name){
                    case 'ECDH':
                    case 'X25519':
                    case 'X448':
                        break;
                    default:
                        throw unusable('ECDH, X25519, or X448');
                }
                break;
            }
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW':
            if (!isAlgorithm(key.algorithm, 'PBKDF2')) throw unusable('PBKDF2');
            break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            {
                if (!isAlgorithm(key.algorithm, 'RSA-OAEP')) throw unusable('RSA-OAEP');
                const expected = parseInt(alg.slice(9), 10) || 1;
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usages);
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/get_sign_verify_key.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getSignVerifyKey
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/webcrypto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$crypto_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/crypto_key.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/invalid_key_input.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/is_key_like.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_jwk.js [app-route] (ecmascript)");
;
;
;
;
;
;
function getSignVerifyKey(alg, key, usage) {
    if (key instanceof Uint8Array) {
        if (!alg.startsWith('HS')) {
            throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["types"]));
        }
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createSecretKey"])(key);
    }
    if (key instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["KeyObject"]) {
        return key;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCryptoKey"])(key)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$crypto_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkSigCryptoKey"])(key, alg, usage);
        return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["KeyObject"].from(key);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isJWK"](key)) {
        if (alg.startsWith('HS')) {
            return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createSecretKey"])(Buffer.from(key.k, 'base64url'));
        }
        return key;
    }
    throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["types"], 'Uint8Array', 'JSON Web Key'));
}
}),
"[project]/node_modules/jose/dist/node/esm/runtime/sign.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$dsa_digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/dsa_digest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$hmac_digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/hmac_digest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$node_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/node_key.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$get_sign_verify_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/get_sign_verify_key.js [app-route] (ecmascript)");
;
;
;
;
;
;
const oneShotSign = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["sign"]);
const sign = async (alg, key, data)=>{
    const k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$get_sign_verify_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg, key, 'sign');
    if (alg.startsWith('HS')) {
        const hmac = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHmac"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$hmac_digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg), k);
        hmac.update(data);
        return hmac.digest();
    }
    return oneShotSign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$dsa_digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg), data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$node_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg, k));
};
const __TURBOPACK__default__export__ = sign;
}),
"[project]/node_modules/jose/dist/node/esm/lib/is_disjoint.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const isDisjoint = (...headers)=>{
    const sources = headers.filter(Boolean);
    if (sources.length === 0 || sources.length === 1) {
        return true;
    }
    let acc;
    for (const header of sources){
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
            acc = new Set(parameters);
            continue;
        }
        for (const parameter of parameters){
            if (acc.has(parameter)) {
                return false;
            }
            acc.add(parameter);
        }
    }
    return true;
};
const __TURBOPACK__default__export__ = isDisjoint;
}),
"[project]/node_modules/jose/dist/node/esm/lib/check_key_type.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkKeyTypeWithJwk",
    ()=>checkKeyTypeWithJwk,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/invalid_key_input.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/is_key_like.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_jwk.js [app-route] (ecmascript)");
;
;
;
const tag = (key)=>key?.[Symbol.toStringTag];
const jwkMatchesOp = (alg, key, usage)=>{
    if (key.use !== undefined && key.use !== 'sig') {
        throw new TypeError('Invalid key for this operation, when present its use must be sig');
    }
    if (key.key_ops !== undefined && key.key_ops.includes?.(usage) !== true) {
        throw new TypeError(`Invalid key for this operation, when present its key_ops must include ${usage}`);
    }
    if (key.alg !== undefined && key.alg !== alg) {
        throw new TypeError(`Invalid key for this operation, when present its alg must be ${alg}`);
    }
    return true;
};
const symmetricTypeCheck = (alg, key, usage, allowJwk)=>{
    if (key instanceof Uint8Array) return;
    if (allowJwk && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isJWK"](key)) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSecretJWK"](key) && jwkMatchesOp(alg, key, usage)) return;
        throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key)) {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAlg"])(alg, key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["types"], 'Uint8Array', allowJwk ? 'JSON Web Key' : null));
    }
    if (key.type !== 'secret') {
        throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
    }
};
const asymmetricTypeCheck = (alg, key, usage, allowJwk)=>{
    if (allowJwk && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isJWK"](key)) {
        switch(usage){
            case 'sign':
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPrivateJWK"](key) && jwkMatchesOp(alg, key, usage)) return;
                throw new TypeError(`JSON Web Key for this operation be a private JWK`);
            case 'verify':
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPublicJWK"](key) && jwkMatchesOp(alg, key, usage)) return;
                throw new TypeError(`JSON Web Key for this operation be a public JWK`);
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key)) {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAlg"])(alg, key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["types"], allowJwk ? 'JSON Web Key' : null));
    }
    if (key.type === 'secret') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (usage === 'sign' && key.type === 'public') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
    }
    if (usage === 'decrypt' && key.type === 'public') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
    }
    if (key.algorithm && usage === 'verify' && key.type === 'private') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
    }
    if (key.algorithm && usage === 'encrypt' && key.type === 'private') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
    }
};
function checkKeyType(allowJwk, alg, key, usage) {
    const symmetric = alg.startsWith('HS') || alg === 'dir' || alg.startsWith('PBES2') || /^A\d{3}(?:GCM)?KW$/.test(alg);
    if (symmetric) {
        symmetricTypeCheck(alg, key, usage, allowJwk);
    } else {
        asymmetricTypeCheck(alg, key, usage, allowJwk);
    }
}
const __TURBOPACK__default__export__ = checkKeyType.bind(undefined, false);
const checkKeyTypeWithJwk = checkKeyType.bind(undefined, true);
}),
"[project]/node_modules/jose/dist/node/esm/lib/validate_crit.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
;
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
    if (joseHeader.crit !== undefined && protectedHeader?.crit === undefined) {
        throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!protectedHeader || protectedHeader.crit === undefined) {
        return new Set();
    }
    if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input)=>typeof input !== 'string' || input.length === 0)) {
        throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let recognized;
    if (recognizedOption !== undefined) {
        recognized = new Map([
            ...Object.entries(recognizedOption),
            ...recognizedDefault.entries()
        ]);
    } else {
        recognized = recognizedDefault;
    }
    for (const parameter of protectedHeader.crit){
        if (!recognized.has(parameter)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOSENotSupported"](`Extension Header Parameter "${parameter}" is not recognized`);
        }
        if (joseHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" is missing`);
        }
        if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
        }
    }
    return new Set(protectedHeader.crit);
}
const __TURBOPACK__default__export__ = validateCrit;
}),
"[project]/node_modules/jose/dist/node/esm/jws/flattened/sign.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlattenedSign",
    ()=>FlattenedSign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/base64url.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/check_key_type.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/validate_crit.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
class FlattenedSign {
    _payload;
    _protectedHeader;
    _unprotectedHeader;
    constructor(payload){
        if (!(payload instanceof Uint8Array)) {
            throw new TypeError('payload must be an instance of Uint8Array');
        }
        this._payload = payload;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
    }
    async sign(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('either setProtectedHeader or setUnprotectedHeader must be called before #sign()');
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(this._protectedHeader, this._unprotectedHeader)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
        }
        const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader
        };
        const extensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"], new Map([
            [
                'b64',
                true
            ]
        ]), options?.crit, this._protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has('b64')) {
            b64 = this._protectedHeader.b64;
            if (typeof b64 !== 'boolean') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
            }
        }
        const { alg } = joseHeader;
        if (typeof alg !== 'string' || !alg) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkKeyTypeWithJwk"])(alg, key, 'sign');
        let payload = this._payload;
        if (b64) {
            payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(payload));
        }
        let protectedHeader;
        if (this._protectedHeader) {
            protectedHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(JSON.stringify(this._protectedHeader)));
        } else {
            protectedHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode('');
        }
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["concat"])(protectedHeader, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode('.'), payload);
        const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(alg, key, data);
        const jws = {
            signature: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(signature),
            payload: ''
        };
        if (b64) {
            jws.payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(payload);
        }
        if (this._unprotectedHeader) {
            jws.header = this._unprotectedHeader;
        }
        if (this._protectedHeader) {
            jws.protected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(protectedHeader);
        }
        return jws;
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/jws/compact/sign.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompactSign",
    ()=>CompactSign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$flattened$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/jws/flattened/sign.js [app-route] (ecmascript)");
;
class CompactSign {
    _flattened;
    constructor(payload){
        this._flattened = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$flattened$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FlattenedSign"](payload);
    }
    setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    async sign(key, options) {
        const jws = await this._flattened.sign(key, options);
        if (jws.payload === undefined) {
            throw new TypeError('use the flattened module for creating JWS with b64: false');
        }
        return `${jws.protected}.${jws.payload}.${jws.signature}`;
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/lib/epoch.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (date)=>Math.floor(date.getTime() / 1000);
}),
"[project]/node_modules/jose/dist/node/esm/lib/secs.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const year = day * 365.25;
const REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
const __TURBOPACK__default__export__ = (str)=>{
    const matched = REGEX.exec(str);
    if (!matched || matched[4] && matched[1]) {
        throw new TypeError('Invalid time period format');
    }
    const value = parseFloat(matched[2]);
    const unit = matched[3].toLowerCase();
    let numericDate;
    switch(unit){
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
        case 's':
            numericDate = Math.round(value);
            break;
        case 'minute':
        case 'minutes':
        case 'min':
        case 'mins':
        case 'm':
            numericDate = Math.round(value * minute);
            break;
        case 'hour':
        case 'hours':
        case 'hr':
        case 'hrs':
        case 'h':
            numericDate = Math.round(value * hour);
            break;
        case 'day':
        case 'days':
        case 'd':
            numericDate = Math.round(value * day);
            break;
        case 'week':
        case 'weeks':
        case 'w':
            numericDate = Math.round(value * week);
            break;
        default:
            numericDate = Math.round(value * year);
            break;
    }
    if (matched[1] === '-' || matched[4] === 'ago') {
        return -numericDate;
    }
    return numericDate;
};
}),
"[project]/node_modules/jose/dist/node/esm/jwt/produce.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProduceJWT",
    ()=>ProduceJWT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/epoch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$secs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/secs.js [app-route] (ecmascript)");
;
;
;
function validateInput(label, input) {
    if (!Number.isFinite(input)) {
        throw new TypeError(`Invalid ${label} input`);
    }
    return input;
}
class ProduceJWT {
    _payload;
    constructor(payload = {}){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(payload)) {
            throw new TypeError('JWT Claims Set MUST be an object');
        }
        this._payload = payload;
    }
    setIssuer(issuer) {
        this._payload = {
            ...this._payload,
            iss: issuer
        };
        return this;
    }
    setSubject(subject) {
        this._payload = {
            ...this._payload,
            sub: subject
        };
        return this;
    }
    setAudience(audience) {
        this._payload = {
            ...this._payload,
            aud: audience
        };
        return this;
    }
    setJti(jwtId) {
        this._payload = {
            ...this._payload,
            jti: jwtId
        };
        return this;
    }
    setNotBefore(input) {
        if (typeof input === 'number') {
            this._payload = {
                ...this._payload,
                nbf: validateInput('setNotBefore', input)
            };
        } else if (input instanceof Date) {
            this._payload = {
                ...this._payload,
                nbf: validateInput('setNotBefore', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(input))
            };
        } else {
            this._payload = {
                ...this._payload,
                nbf: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$secs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(input)
            };
        }
        return this;
    }
    setExpirationTime(input) {
        if (typeof input === 'number') {
            this._payload = {
                ...this._payload,
                exp: validateInput('setExpirationTime', input)
            };
        } else if (input instanceof Date) {
            this._payload = {
                ...this._payload,
                exp: validateInput('setExpirationTime', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(input))
            };
        } else {
            this._payload = {
                ...this._payload,
                exp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$secs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(input)
            };
        }
        return this;
    }
    setIssuedAt(input) {
        if (typeof input === 'undefined') {
            this._payload = {
                ...this._payload,
                iat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(new Date())
            };
        } else if (input instanceof Date) {
            this._payload = {
                ...this._payload,
                iat: validateInput('setIssuedAt', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(input))
            };
        } else if (typeof input === 'string') {
            this._payload = {
                ...this._payload,
                iat: validateInput('setIssuedAt', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$secs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(input))
            };
        } else {
            this._payload = {
                ...this._payload,
                iat: validateInput('setIssuedAt', input)
            };
        }
        return this;
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/jwt/sign.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignJWT",
    ()=>SignJWT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$compact$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/jws/compact/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$produce$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/jwt/produce.js [app-route] (ecmascript)");
;
;
;
;
class SignJWT extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$produce$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProduceJWT"] {
    _protectedHeader;
    setProtectedHeader(protectedHeader) {
        this._protectedHeader = protectedHeader;
        return this;
    }
    async sign(key, options) {
        const sig = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$compact$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompactSign"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encoder"].encode(JSON.stringify(this._payload)));
        sig.setProtectedHeader(this._protectedHeader);
        if (Array.isArray(this._protectedHeader?.crit) && this._protectedHeader.crit.includes('b64') && this._protectedHeader.b64 === false) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWTs MUST NOT use unencoded payload');
        }
        return sig.sign(key, options);
    }
}
}),
"[project]/node_modules/jose/dist/node/esm/util/base64url.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "encode",
    ()=>encode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/base64url.js [app-route] (ecmascript)");
;
const encode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"];
const decode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"];
}),
"[project]/node_modules/jose/dist/node/esm/util/decode_jwt.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeJwt",
    ()=>decodeJwt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/base64url.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
;
;
;
;
function decodeJwt(jwt) {
    if (typeof jwt !== 'string') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWTs must use Compact JWS serialization, JWT must be a string');
    const { 1: payload, length } = jwt.split('.');
    if (length === 5) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('Only JWTs using Compact JWS serialization can be decoded');
    if (length !== 3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('Invalid JWT');
    if (!payload) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWTs must contain a payload');
    let decoded;
    try {
        decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(payload);
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('Failed to base64url decode the payload');
    }
    let result;
    try {
        result = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(decoded));
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('Failed to parse the decoded payload as JSON');
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(result)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('Invalid JWT Claims Set');
    return result;
}
}),
"[project]/node_modules/uuid/dist/esm-node/native.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomUUID
};
}),
"[project]/node_modules/uuid/dist/esm-node/rng.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/node_modules/uuid/dist/esm-node/regex.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/regex.js [app-route] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/node_modules/uuid/dist/esm-node/stringify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    //
    // Note to future-self: No, you can't remove the `toLowerCase()` call.
    // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/native.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/rng.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/stringify.js [app-route] (ecmascript)");
;
;
;
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript)");
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/native.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID
};
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/rng.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/regex.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/regex.js [app-route] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/stringify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/native.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/rng.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/stringify.js [app-route] (ecmascript)");
;
;
;
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript)");
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript) <export default as validate>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)");
}),
"[project]/node_modules/fast-deep-equal/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// do not edit .js files directly - edit src/index.jst
module.exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};
}),
"[project]/node_modules/payload/node_modules/json-schema-traverse/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var traverse = module.exports = function(schema, opts, cb) {
    // Legacy support for v0.3.1 and earlier.
    if (typeof opts == 'function') {
        cb = opts;
        opts = {};
    }
    cb = opts.cb || cb;
    var pre = typeof cb == 'function' ? cb : cb.pre || function() {};
    var post = cb.post || function() {};
    _traverse(opts, pre, post, schema, '', schema);
};
traverse.keywords = {
    additionalItems: true,
    items: true,
    contains: true,
    additionalProperties: true,
    propertyNames: true,
    not: true,
    if: true,
    then: true,
    else: true
};
traverse.arrayKeywords = {
    items: true,
    allOf: true,
    anyOf: true,
    oneOf: true
};
traverse.propsKeywords = {
    $defs: true,
    definitions: true,
    properties: true,
    patternProperties: true,
    dependencies: true
};
traverse.skipKeywords = {
    default: true,
    enum: true,
    const: true,
    required: true,
    maximum: true,
    minimum: true,
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    multipleOf: true,
    maxLength: true,
    minLength: true,
    pattern: true,
    format: true,
    maxItems: true,
    minItems: true,
    uniqueItems: true,
    maxProperties: true,
    minProperties: true
};
function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
    if (schema && typeof schema == 'object' && !Array.isArray(schema)) {
        pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
        for(var key in schema){
            var sch = schema[key];
            if (Array.isArray(sch)) {
                if (key in traverse.arrayKeywords) {
                    for(var i = 0; i < sch.length; i++)_traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
                }
            } else if (key in traverse.propsKeywords) {
                if (sch && typeof sch == 'object') {
                    for(var prop in sch)_traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
                }
            } else if (key in traverse.keywords || opts.allKeys && !(key in traverse.skipKeywords)) {
                _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
            }
        }
        post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
    }
}
function escapeJsonPtr(str) {
    return str.replace(/~/g, '~0').replace(/\//g, '~1');
}
}),
"[project]/node_modules/fast-uri/lib/utils.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {(value: string) => boolean} */ const isUUID = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu);
/** @type {(value: string) => boolean} */ const isIPv4 = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
/**
 * @param {Array<string>} input
 * @returns {string}
 */ function stringArrayToHexStripped(input) {
    let acc = '';
    let code = 0;
    let i = 0;
    for(i = 0; i < input.length; i++){
        code = input[i].charCodeAt(0);
        if (code === 48) {
            continue;
        }
        if (!(code >= 48 && code <= 57 || code >= 65 && code <= 70 || code >= 97 && code <= 102)) {
            return '';
        }
        acc += input[i];
        break;
    }
    for(i += 1; i < input.length; i++){
        code = input[i].charCodeAt(0);
        if (!(code >= 48 && code <= 57 || code >= 65 && code <= 70 || code >= 97 && code <= 102)) {
            return '';
        }
        acc += input[i];
    }
    return acc;
}
/**
 * @typedef {Object} GetIPV6Result
 * @property {boolean} error - Indicates if there was an error parsing the IPv6 address.
 * @property {string} address - The parsed IPv6 address.
 * @property {string} [zone] - The zone identifier, if present.
 */ /**
 * @param {string} value
 * @returns {boolean}
 */ const nonSimpleDomain = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
/**
 * @param {Array<string>} buffer
 * @returns {boolean}
 */ function consumeIsZone(buffer) {
    buffer.length = 0;
    return true;
}
/**
 * @param {Array<string>} buffer
 * @param {Array<string>} address
 * @param {GetIPV6Result} output
 * @returns {boolean}
 */ function consumeHextets(buffer, address, output) {
    if (buffer.length) {
        const hex = stringArrayToHexStripped(buffer);
        if (hex !== '') {
            address.push(hex);
        } else {
            output.error = true;
            return false;
        }
        buffer.length = 0;
    }
    return true;
}
/**
 * @param {string} input
 * @returns {GetIPV6Result}
 */ function getIPV6(input) {
    let tokenCount = 0;
    const output = {
        error: false,
        address: '',
        zone: ''
    };
    /** @type {Array<string>} */ const address = [];
    /** @type {Array<string>} */ const buffer = [];
    let endipv6Encountered = false;
    let endIpv6 = false;
    let consume = consumeHextets;
    for(let i = 0; i < input.length; i++){
        const cursor = input[i];
        if (cursor === '[' || cursor === ']') {
            continue;
        }
        if (cursor === ':') {
            if (endipv6Encountered === true) {
                endIpv6 = true;
            }
            if (!consume(buffer, address, output)) {
                break;
            }
            if (++tokenCount > 7) {
                // not valid
                output.error = true;
                break;
            }
            if (i > 0 && input[i - 1] === ':') {
                endipv6Encountered = true;
            }
            address.push(':');
            continue;
        } else if (cursor === '%') {
            if (!consume(buffer, address, output)) {
                break;
            }
            // switch to zone detection
            consume = consumeIsZone;
        } else {
            buffer.push(cursor);
            continue;
        }
    }
    if (buffer.length) {
        if (consume === consumeIsZone) {
            output.zone = buffer.join('');
        } else if (endIpv6) {
            address.push(buffer.join(''));
        } else {
            address.push(stringArrayToHexStripped(buffer));
        }
    }
    output.address = address.join('');
    return output;
}
/**
 * @typedef {Object} NormalizeIPv6Result
 * @property {string} host - The normalized host.
 * @property {string} [escapedHost] - The escaped host.
 * @property {boolean} isIPV6 - Indicates if the host is an IPv6 address.
 */ /**
 * @param {string} host
 * @returns {NormalizeIPv6Result}
 */ function normalizeIPv6(host) {
    if (findToken(host, ':') < 2) {
        return {
            host,
            isIPV6: false
        };
    }
    const ipv6 = getIPV6(host);
    if (!ipv6.error) {
        let newHost = ipv6.address;
        let escapedHost = ipv6.address;
        if (ipv6.zone) {
            newHost += '%' + ipv6.zone;
            escapedHost += '%25' + ipv6.zone;
        }
        return {
            host: newHost,
            isIPV6: true,
            escapedHost
        };
    } else {
        return {
            host,
            isIPV6: false
        };
    }
}
/**
 * @param {string} str
 * @param {string} token
 * @returns {number}
 */ function findToken(str, token) {
    let ind = 0;
    for(let i = 0; i < str.length; i++){
        if (str[i] === token) ind++;
    }
    return ind;
}
/**
 * @param {string} path
 * @returns {string}
 *
 * @see https://datatracker.ietf.org/doc/html/rfc3986#section-5.2.4
 */ function removeDotSegments(path) {
    let input = path;
    const output = [];
    let nextSlash = -1;
    let len = 0;
    // eslint-disable-next-line no-cond-assign
    while(len = input.length){
        if (len === 1) {
            if (input === '.') {
                break;
            } else if (input === '/') {
                output.push('/');
                break;
            } else {
                output.push(input);
                break;
            }
        } else if (len === 2) {
            if (input[0] === '.') {
                if (input[1] === '.') {
                    break;
                } else if (input[1] === '/') {
                    input = input.slice(2);
                    continue;
                }
            } else if (input[0] === '/') {
                if (input[1] === '.' || input[1] === '/') {
                    output.push('/');
                    break;
                }
            }
        } else if (len === 3) {
            if (input === '/..') {
                if (output.length !== 0) {
                    output.pop();
                }
                output.push('/');
                break;
            }
        }
        if (input[0] === '.') {
            if (input[1] === '.') {
                if (input[2] === '/') {
                    input = input.slice(3);
                    continue;
                }
            } else if (input[1] === '/') {
                input = input.slice(2);
                continue;
            }
        } else if (input[0] === '/') {
            if (input[1] === '.') {
                if (input[2] === '/') {
                    input = input.slice(2);
                    continue;
                } else if (input[2] === '.') {
                    if (input[3] === '/') {
                        input = input.slice(3);
                        if (output.length !== 0) {
                            output.pop();
                        }
                        continue;
                    }
                }
            }
        }
        // Rule 2E: Move normal path segment to output
        if ((nextSlash = input.indexOf('/', 1)) === -1) {
            output.push(input);
            break;
        } else {
            output.push(input.slice(0, nextSlash));
            input = input.slice(nextSlash);
        }
    }
    return output.join('');
}
/**
 * @param {import('../types/index').URIComponent} component
 * @param {boolean} esc
 * @returns {import('../types/index').URIComponent}
 */ function normalizeComponentEncoding(component, esc) {
    const func = esc !== true ? escape : unescape;
    if (component.scheme !== undefined) {
        component.scheme = func(component.scheme);
    }
    if (component.userinfo !== undefined) {
        component.userinfo = func(component.userinfo);
    }
    if (component.host !== undefined) {
        component.host = func(component.host);
    }
    if (component.path !== undefined) {
        component.path = func(component.path);
    }
    if (component.query !== undefined) {
        component.query = func(component.query);
    }
    if (component.fragment !== undefined) {
        component.fragment = func(component.fragment);
    }
    return component;
}
/**
 * @param {import('../types/index').URIComponent} component
 * @returns {string|undefined}
 */ function recomposeAuthority(component) {
    const uriTokens = [];
    if (component.userinfo !== undefined) {
        uriTokens.push(component.userinfo);
        uriTokens.push('@');
    }
    if (component.host !== undefined) {
        let host = unescape(component.host);
        if (!isIPv4(host)) {
            const ipV6res = normalizeIPv6(host);
            if (ipV6res.isIPV6 === true) {
                host = `[${ipV6res.escapedHost}]`;
            } else {
                host = component.host;
            }
        }
        uriTokens.push(host);
    }
    if (typeof component.port === 'number' || typeof component.port === 'string') {
        uriTokens.push(':');
        uriTokens.push(String(component.port));
    }
    return uriTokens.length ? uriTokens.join('') : undefined;
}
;
module.exports = {
    nonSimpleDomain,
    recomposeAuthority,
    normalizeComponentEncoding,
    removeDotSegments,
    isIPv4,
    isUUID,
    normalizeIPv6,
    stringArrayToHexStripped
};
}),
"[project]/node_modules/fast-uri/lib/schemes.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { isUUID } = __turbopack_context__.r("[project]/node_modules/fast-uri/lib/utils.js [app-route] (ecmascript)");
const URN_REG = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
const supportedSchemeNames = [
    'http',
    'https',
    'ws',
    'wss',
    'urn',
    'urn:uuid'
];
/** @typedef {supportedSchemeNames[number]} SchemeName */ /**
 * @param {string} name
 * @returns {name is SchemeName}
 */ function isValidSchemeName(name) {
    return supportedSchemeNames.indexOf(name) !== -1;
}
/**
 * @callback SchemeFn
 * @param {import('../types/index').URIComponent} component
 * @param {import('../types/index').Options} options
 * @returns {import('../types/index').URIComponent}
 */ /**
 * @typedef {Object} SchemeHandler
 * @property {SchemeName} scheme - The scheme name.
 * @property {boolean} [domainHost] - Indicates if the scheme supports domain hosts.
 * @property {SchemeFn} parse - Function to parse the URI component for this scheme.
 * @property {SchemeFn} serialize - Function to serialize the URI component for this scheme.
 * @property {boolean} [skipNormalize] - Indicates if normalization should be skipped for this scheme.
 * @property {boolean} [absolutePath] - Indicates if the scheme uses absolute paths.
 * @property {boolean} [unicodeSupport] - Indicates if the scheme supports Unicode.
 */ /**
 * @param {import('../types/index').URIComponent} wsComponent
 * @returns {boolean}
 */ function wsIsSecure(wsComponent) {
    if (wsComponent.secure === true) {
        return true;
    } else if (wsComponent.secure === false) {
        return false;
    } else if (wsComponent.scheme) {
        return wsComponent.scheme.length === 3 && (wsComponent.scheme[0] === 'w' || wsComponent.scheme[0] === 'W') && (wsComponent.scheme[1] === 's' || wsComponent.scheme[1] === 'S') && (wsComponent.scheme[2] === 's' || wsComponent.scheme[2] === 'S');
    } else {
        return false;
    }
}
/** @type {SchemeFn} */ function httpParse(component) {
    if (!component.host) {
        component.error = component.error || 'HTTP URIs must have a host.';
    }
    return component;
}
/** @type {SchemeFn} */ function httpSerialize(component) {
    const secure = String(component.scheme).toLowerCase() === 'https';
    // normalize the default port
    if (component.port === (secure ? 443 : 80) || component.port === '') {
        component.port = undefined;
    }
    // normalize the empty path
    if (!component.path) {
        component.path = '/';
    }
    // NOTE: We do not parse query strings for HTTP URIs
    // as WWW Form Url Encoded query strings are part of the HTML4+ spec,
    // and not the HTTP spec.
    return component;
}
/** @type {SchemeFn} */ function wsParse(wsComponent) {
    // indicate if the secure flag is set
    wsComponent.secure = wsIsSecure(wsComponent);
    // construct resouce name
    wsComponent.resourceName = (wsComponent.path || '/') + (wsComponent.query ? '?' + wsComponent.query : '');
    wsComponent.path = undefined;
    wsComponent.query = undefined;
    return wsComponent;
}
/** @type {SchemeFn} */ function wsSerialize(wsComponent) {
    // normalize the default port
    if (wsComponent.port === (wsIsSecure(wsComponent) ? 443 : 80) || wsComponent.port === '') {
        wsComponent.port = undefined;
    }
    // ensure scheme matches secure flag
    if (typeof wsComponent.secure === 'boolean') {
        wsComponent.scheme = wsComponent.secure ? 'wss' : 'ws';
        wsComponent.secure = undefined;
    }
    // reconstruct path from resource name
    if (wsComponent.resourceName) {
        const [path, query] = wsComponent.resourceName.split('?');
        wsComponent.path = path && path !== '/' ? path : undefined;
        wsComponent.query = query;
        wsComponent.resourceName = undefined;
    }
    // forbid fragment component
    wsComponent.fragment = undefined;
    return wsComponent;
}
/** @type {SchemeFn} */ function urnParse(urnComponent, options) {
    if (!urnComponent.path) {
        urnComponent.error = 'URN can not be parsed';
        return urnComponent;
    }
    const matches = urnComponent.path.match(URN_REG);
    if (matches) {
        const scheme = options.scheme || urnComponent.scheme || 'urn';
        urnComponent.nid = matches[1].toLowerCase();
        urnComponent.nss = matches[2];
        const urnScheme = `${scheme}:${options.nid || urnComponent.nid}`;
        const schemeHandler = getSchemeHandler(urnScheme);
        urnComponent.path = undefined;
        if (schemeHandler) {
            urnComponent = schemeHandler.parse(urnComponent, options);
        }
    } else {
        urnComponent.error = urnComponent.error || 'URN can not be parsed.';
    }
    return urnComponent;
}
/** @type {SchemeFn} */ function urnSerialize(urnComponent, options) {
    if (urnComponent.nid === undefined) {
        throw new Error('URN without nid cannot be serialized');
    }
    const scheme = options.scheme || urnComponent.scheme || 'urn';
    const nid = urnComponent.nid.toLowerCase();
    const urnScheme = `${scheme}:${options.nid || nid}`;
    const schemeHandler = getSchemeHandler(urnScheme);
    if (schemeHandler) {
        urnComponent = schemeHandler.serialize(urnComponent, options);
    }
    const uriComponent = urnComponent;
    const nss = urnComponent.nss;
    uriComponent.path = `${nid || options.nid}:${nss}`;
    options.skipEscape = true;
    return uriComponent;
}
/** @type {SchemeFn} */ function urnuuidParse(urnComponent, options) {
    const uuidComponent = urnComponent;
    uuidComponent.uuid = uuidComponent.nss;
    uuidComponent.nss = undefined;
    if (!options.tolerant && (!uuidComponent.uuid || !isUUID(uuidComponent.uuid))) {
        uuidComponent.error = uuidComponent.error || 'UUID is not valid.';
    }
    return uuidComponent;
}
/** @type {SchemeFn} */ function urnuuidSerialize(uuidComponent) {
    const urnComponent = uuidComponent;
    // normalize UUID
    urnComponent.nss = (uuidComponent.uuid || '').toLowerCase();
    return urnComponent;
}
const http = {
    scheme: 'http',
    domainHost: true,
    parse: httpParse,
    serialize: httpSerialize
};
const https = {
    scheme: 'https',
    domainHost: http.domainHost,
    parse: httpParse,
    serialize: httpSerialize
};
const ws = {
    scheme: 'ws',
    domainHost: true,
    parse: wsParse,
    serialize: wsSerialize
};
const wss = {
    scheme: 'wss',
    domainHost: ws.domainHost,
    parse: ws.parse,
    serialize: ws.serialize
};
const urn = {
    scheme: 'urn',
    parse: urnParse,
    serialize: urnSerialize,
    skipNormalize: true
};
const urnuuid = {
    scheme: 'urn:uuid',
    parse: urnuuidParse,
    serialize: urnuuidSerialize,
    skipNormalize: true
};
const SCHEMES = {
    http,
    https,
    ws,
    wss,
    urn,
    'urn:uuid': urnuuid
};
Object.setPrototypeOf(SCHEMES, null);
/**
 * @param {string|undefined} scheme
 * @returns {SchemeHandler|undefined}
 */ function getSchemeHandler(scheme) {
    return scheme && (SCHEMES[scheme] || SCHEMES[scheme.toLowerCase()]) || undefined;
}
module.exports = {
    wsIsSecure,
    SCHEMES,
    isValidSchemeName,
    getSchemeHandler
};
}),
"[project]/node_modules/fast-uri/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { normalizeIPv6, removeDotSegments, recomposeAuthority, normalizeComponentEncoding, isIPv4, nonSimpleDomain } = __turbopack_context__.r("[project]/node_modules/fast-uri/lib/utils.js [app-route] (ecmascript)");
const { SCHEMES, getSchemeHandler } = __turbopack_context__.r("[project]/node_modules/fast-uri/lib/schemes.js [app-route] (ecmascript)");
/**
 * @template {import('./types/index').URIComponent|string} T
 * @param {T} uri
 * @param {import('./types/index').Options} [options]
 * @returns {T}
 */ function normalize(uri, options) {
    if (typeof uri === 'string') {
        uri = serialize(parse(uri, options), options);
    } else if (typeof uri === 'object') {
        uri = parse(serialize(uri, options), options);
    }
    return uri;
}
/**
 * @param {string} baseURI
 * @param {string} relativeURI
 * @param {import('./types/index').Options} [options]
 * @returns {string}
 */ function resolve(baseURI, relativeURI, options) {
    const schemelessOptions = options ? Object.assign({
        scheme: 'null'
    }, options) : {
        scheme: 'null'
    };
    const resolved = resolveComponent(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true);
    schemelessOptions.skipEscape = true;
    return serialize(resolved, schemelessOptions);
}
/**
 * @param {import ('./types/index').URIComponent} base
 * @param {import ('./types/index').URIComponent} relative
 * @param {import('./types/index').Options} [options]
 * @param {boolean} [skipNormalization=false]
 * @returns {import ('./types/index').URIComponent}
 */ function resolveComponent(base, relative, options, skipNormalization) {
    /** @type {import('./types/index').URIComponent} */ const target = {};
    if (!skipNormalization) {
        base = parse(serialize(base, options), options); // normalize base component
        relative = parse(serialize(relative, options), options); // normalize relative component
    }
    options = options || {};
    if (!options.tolerant && relative.scheme) {
        target.scheme = relative.scheme;
        // target.authority = relative.authority;
        target.userinfo = relative.userinfo;
        target.host = relative.host;
        target.port = relative.port;
        target.path = removeDotSegments(relative.path || '');
        target.query = relative.query;
    } else {
        if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
            // target.authority = relative.authority;
            target.userinfo = relative.userinfo;
            target.host = relative.host;
            target.port = relative.port;
            target.path = removeDotSegments(relative.path || '');
            target.query = relative.query;
        } else {
            if (!relative.path) {
                target.path = base.path;
                if (relative.query !== undefined) {
                    target.query = relative.query;
                } else {
                    target.query = base.query;
                }
            } else {
                if (relative.path[0] === '/') {
                    target.path = removeDotSegments(relative.path);
                } else {
                    if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
                        target.path = '/' + relative.path;
                    } else if (!base.path) {
                        target.path = relative.path;
                    } else {
                        target.path = base.path.slice(0, base.path.lastIndexOf('/') + 1) + relative.path;
                    }
                    target.path = removeDotSegments(target.path);
                }
                target.query = relative.query;
            }
            // target.authority = base.authority;
            target.userinfo = base.userinfo;
            target.host = base.host;
            target.port = base.port;
        }
        target.scheme = base.scheme;
    }
    target.fragment = relative.fragment;
    return target;
}
/**
 * @param {import ('./types/index').URIComponent|string} uriA
 * @param {import ('./types/index').URIComponent|string} uriB
 * @param {import ('./types/index').Options} options
 * @returns {boolean}
 */ function equal(uriA, uriB, options) {
    if (typeof uriA === 'string') {
        uriA = unescape(uriA);
        uriA = serialize(normalizeComponentEncoding(parse(uriA, options), true), {
            ...options,
            skipEscape: true
        });
    } else if (typeof uriA === 'object') {
        uriA = serialize(normalizeComponentEncoding(uriA, true), {
            ...options,
            skipEscape: true
        });
    }
    if (typeof uriB === 'string') {
        uriB = unescape(uriB);
        uriB = serialize(normalizeComponentEncoding(parse(uriB, options), true), {
            ...options,
            skipEscape: true
        });
    } else if (typeof uriB === 'object') {
        uriB = serialize(normalizeComponentEncoding(uriB, true), {
            ...options,
            skipEscape: true
        });
    }
    return uriA.toLowerCase() === uriB.toLowerCase();
}
/**
 * @param {Readonly<import('./types/index').URIComponent>} cmpts
 * @param {import('./types/index').Options} [opts]
 * @returns {string}
 */ function serialize(cmpts, opts) {
    const component = {
        host: cmpts.host,
        scheme: cmpts.scheme,
        userinfo: cmpts.userinfo,
        port: cmpts.port,
        path: cmpts.path,
        query: cmpts.query,
        nid: cmpts.nid,
        nss: cmpts.nss,
        uuid: cmpts.uuid,
        fragment: cmpts.fragment,
        reference: cmpts.reference,
        resourceName: cmpts.resourceName,
        secure: cmpts.secure,
        error: ''
    };
    const options = Object.assign({}, opts);
    const uriTokens = [];
    // find scheme handler
    const schemeHandler = getSchemeHandler(options.scheme || component.scheme);
    // perform scheme specific serialization
    if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(component, options);
    if (component.path !== undefined) {
        if (!options.skipEscape) {
            component.path = escape(component.path);
            if (component.scheme !== undefined) {
                component.path = component.path.split('%3A').join(':');
            }
        } else {
            component.path = unescape(component.path);
        }
    }
    if (options.reference !== 'suffix' && component.scheme) {
        uriTokens.push(component.scheme, ':');
    }
    const authority = recomposeAuthority(component);
    if (authority !== undefined) {
        if (options.reference !== 'suffix') {
            uriTokens.push('//');
        }
        uriTokens.push(authority);
        if (component.path && component.path[0] !== '/') {
            uriTokens.push('/');
        }
    }
    if (component.path !== undefined) {
        let s = component.path;
        if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
            s = removeDotSegments(s);
        }
        if (authority === undefined && s[0] === '/' && s[1] === '/') {
            // don't allow the path to start with "//"
            s = '/%2F' + s.slice(2);
        }
        uriTokens.push(s);
    }
    if (component.query !== undefined) {
        uriTokens.push('?', component.query);
    }
    if (component.fragment !== undefined) {
        uriTokens.push('#', component.fragment);
    }
    return uriTokens.join('');
}
const URI_PARSE = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
/**
 * @param {string} uri
 * @param {import('./types/index').Options} [opts]
 * @returns
 */ function parse(uri, opts) {
    const options = Object.assign({}, opts);
    /** @type {import('./types/index').URIComponent} */ const parsed = {
        scheme: undefined,
        userinfo: undefined,
        host: '',
        port: undefined,
        path: '',
        query: undefined,
        fragment: undefined
    };
    let isIP = false;
    if (options.reference === 'suffix') {
        if (options.scheme) {
            uri = options.scheme + ':' + uri;
        } else {
            uri = '//' + uri;
        }
    }
    const matches = uri.match(URI_PARSE);
    if (matches) {
        // store each component
        parsed.scheme = matches[1];
        parsed.userinfo = matches[3];
        parsed.host = matches[4];
        parsed.port = parseInt(matches[5], 10);
        parsed.path = matches[6] || '';
        parsed.query = matches[7];
        parsed.fragment = matches[8];
        // fix port number
        if (isNaN(parsed.port)) {
            parsed.port = matches[5];
        }
        if (parsed.host) {
            const ipv4result = isIPv4(parsed.host);
            if (ipv4result === false) {
                const ipv6result = normalizeIPv6(parsed.host);
                parsed.host = ipv6result.host.toLowerCase();
                isIP = ipv6result.isIPV6;
            } else {
                isIP = true;
            }
        }
        if (parsed.scheme === undefined && parsed.userinfo === undefined && parsed.host === undefined && parsed.port === undefined && parsed.query === undefined && !parsed.path) {
            parsed.reference = 'same-document';
        } else if (parsed.scheme === undefined) {
            parsed.reference = 'relative';
        } else if (parsed.fragment === undefined) {
            parsed.reference = 'absolute';
        } else {
            parsed.reference = 'uri';
        }
        // check for reference errors
        if (options.reference && options.reference !== 'suffix' && options.reference !== parsed.reference) {
            parsed.error = parsed.error || 'URI is not a ' + options.reference + ' reference.';
        }
        // find scheme handler
        const schemeHandler = getSchemeHandler(options.scheme || parsed.scheme);
        // check if scheme can't handle IRIs
        if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
            // if host component is a domain name
            if (parsed.host && (options.domainHost || schemeHandler && schemeHandler.domainHost) && isIP === false && nonSimpleDomain(parsed.host)) {
                // convert Unicode IDN -> ASCII IDN
                try {
                    parsed.host = URL.domainToASCII(parsed.host.toLowerCase());
                } catch (e) {
                    parsed.error = parsed.error || "Host's domain name can not be converted to ASCII: " + e;
                }
            }
        // convert IRI -> URI
        }
        if (!schemeHandler || schemeHandler && !schemeHandler.skipNormalize) {
            if (uri.indexOf('%') !== -1) {
                if (parsed.scheme !== undefined) {
                    parsed.scheme = unescape(parsed.scheme);
                }
                if (parsed.host !== undefined) {
                    parsed.host = unescape(parsed.host);
                }
            }
            if (parsed.path) {
                parsed.path = escape(unescape(parsed.path));
            }
            if (parsed.fragment) {
                parsed.fragment = encodeURI(decodeURIComponent(parsed.fragment));
            }
        }
        // perform scheme specific parsing
        if (schemeHandler && schemeHandler.parse) {
            schemeHandler.parse(parsed, options);
        }
    } else {
        parsed.error = parsed.error || 'URI can not be parsed.';
    }
    return parsed;
}
const fastUri = {
    SCHEMES,
    normalize,
    resolve,
    resolveComponent,
    equal,
    serialize,
    parse
};
module.exports = fastUri;
module.exports.default = fastUri;
module.exports.fastUri = fastUri;
}),
"[project]/node_modules/pluralize/pluralize.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* global define */ (function(root, pluralize) {
    /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
        // Node.
        module.exports = pluralize();
    } else //TURBOPACK unreachable
    ;
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    // Rule storage - pluralize and singularize need to be run sequentially,
    // while other rules can be optimized using an object for instant lookups.
    var pluralRules = [];
    var singularRules = [];
    var uncountables = {};
    var irregularPlurals = {};
    var irregularSingles = {};
    /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */ function sanitizeRule(rule) {
        if (typeof rule === 'string') {
            return new RegExp('^' + rule + '$', 'i');
        }
        return rule;
    }
    /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */ function restoreCase(word, token) {
        // Tokens are an exact match.
        if (word === token) return token;
        // Lower cased words. E.g. "hello".
        if (word === word.toLowerCase()) return token.toLowerCase();
        // Upper cased words. E.g. "WHISKY".
        if (word === word.toUpperCase()) return token.toUpperCase();
        // Title cased words. E.g. "Title".
        if (word[0] === word[0].toUpperCase()) {
            return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
        }
        // Lower cased words. E.g. "test".
        return token.toLowerCase();
    }
    /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */ function interpolate(str, args) {
        return str.replace(/\$(\d{1,2})/g, function(match, index) {
            return args[index] || '';
        });
    }
    /**
   * Replace a word using a rule.
   *
   * @param  {string} word
   * @param  {Array}  rule
   * @return {string}
   */ function replace(word, rule) {
        return word.replace(rule[0], function(match, index) {
            var result = interpolate(rule[1], arguments);
            if (match === '') {
                return restoreCase(word[index - 1], result);
            }
            return restoreCase(match, result);
        });
    }
    /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {string}   token
   * @param  {string}   word
   * @param  {Array}    rules
   * @return {string}
   */ function sanitizeWord(token, word, rules) {
        // Empty string or doesn't need fixing.
        if (!token.length || uncountables.hasOwnProperty(token)) {
            return word;
        }
        var len = rules.length;
        // Iterate over the sanitization rules and use the first one to match.
        while(len--){
            var rule = rules[len];
            if (rule[0].test(word)) return replace(word, rule);
        }
        return word;
    }
    /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */ function replaceWord(replaceMap, keepMap, rules) {
        return function(word) {
            // Get the correct token and case restoration functions.
            var token = word.toLowerCase();
            // Check against the keep object map.
            if (keepMap.hasOwnProperty(token)) {
                return restoreCase(word, token);
            }
            // Check against the replacement map for a direct word replacement.
            if (replaceMap.hasOwnProperty(token)) {
                return restoreCase(word, replaceMap[token]);
            }
            // Run all the rules against the word.
            return sanitizeWord(token, word, rules);
        };
    }
    /**
   * Check if a word is part of the map.
   */ function checkWord(replaceMap, keepMap, rules, bool) {
        return function(word) {
            var token = word.toLowerCase();
            if (keepMap.hasOwnProperty(token)) return true;
            if (replaceMap.hasOwnProperty(token)) return false;
            return sanitizeWord(token, token, rules) === token;
        };
    }
    /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {string}  word      The word to pluralize
   * @param  {number}  count     How many of the word exist
   * @param  {boolean} inclusive Whether to prefix with the number (e.g. 3 ducks)
   * @return {string}
   */ function pluralize(word, count, inclusive) {
        var pluralized = count === 1 ? pluralize.singular(word) : pluralize.plural(word);
        return (inclusive ? count + ' ' : '') + pluralized;
    }
    /**
   * Pluralize a word.
   *
   * @type {Function}
   */ pluralize.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);
    /**
   * Check if a word is plural.
   *
   * @type {Function}
   */ pluralize.isPlural = checkWord(irregularSingles, irregularPlurals, pluralRules);
    /**
   * Singularize a word.
   *
   * @type {Function}
   */ pluralize.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);
    /**
   * Check if a word is singular.
   *
   * @type {Function}
   */ pluralize.isSingular = checkWord(irregularPlurals, irregularSingles, singularRules);
    /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */ pluralize.addPluralRule = function(rule, replacement) {
        pluralRules.push([
            sanitizeRule(rule),
            replacement
        ]);
    };
    /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */ pluralize.addSingularRule = function(rule, replacement) {
        singularRules.push([
            sanitizeRule(rule),
            replacement
        ]);
    };
    /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */ pluralize.addUncountableRule = function(word) {
        if (typeof word === 'string') {
            uncountables[word.toLowerCase()] = true;
            return;
        }
        // Set singular and plural references for the word.
        pluralize.addPluralRule(word, '$0');
        pluralize.addSingularRule(word, '$0');
    };
    /**
   * Add an irregular word definition.
   *
   * @param {string} single
   * @param {string} plural
   */ pluralize.addIrregularRule = function(single, plural) {
        plural = plural.toLowerCase();
        single = single.toLowerCase();
        irregularSingles[single] = plural;
        irregularPlurals[plural] = single;
    };
    /**
   * Irregular rules.
   */ [
        // Pronouns.
        [
            'I',
            'we'
        ],
        [
            'me',
            'us'
        ],
        [
            'he',
            'they'
        ],
        [
            'she',
            'they'
        ],
        [
            'them',
            'them'
        ],
        [
            'myself',
            'ourselves'
        ],
        [
            'yourself',
            'yourselves'
        ],
        [
            'itself',
            'themselves'
        ],
        [
            'herself',
            'themselves'
        ],
        [
            'himself',
            'themselves'
        ],
        [
            'themself',
            'themselves'
        ],
        [
            'is',
            'are'
        ],
        [
            'was',
            'were'
        ],
        [
            'has',
            'have'
        ],
        [
            'this',
            'these'
        ],
        [
            'that',
            'those'
        ],
        // Words ending in with a consonant and `o`.
        [
            'echo',
            'echoes'
        ],
        [
            'dingo',
            'dingoes'
        ],
        [
            'volcano',
            'volcanoes'
        ],
        [
            'tornado',
            'tornadoes'
        ],
        [
            'torpedo',
            'torpedoes'
        ],
        // Ends with `us`.
        [
            'genus',
            'genera'
        ],
        [
            'viscus',
            'viscera'
        ],
        // Ends with `ma`.
        [
            'stigma',
            'stigmata'
        ],
        [
            'stoma',
            'stomata'
        ],
        [
            'dogma',
            'dogmata'
        ],
        [
            'lemma',
            'lemmata'
        ],
        [
            'schema',
            'schemata'
        ],
        [
            'anathema',
            'anathemata'
        ],
        // Other irregular rules.
        [
            'ox',
            'oxen'
        ],
        [
            'axe',
            'axes'
        ],
        [
            'die',
            'dice'
        ],
        [
            'yes',
            'yeses'
        ],
        [
            'foot',
            'feet'
        ],
        [
            'eave',
            'eaves'
        ],
        [
            'goose',
            'geese'
        ],
        [
            'tooth',
            'teeth'
        ],
        [
            'quiz',
            'quizzes'
        ],
        [
            'human',
            'humans'
        ],
        [
            'proof',
            'proofs'
        ],
        [
            'carve',
            'carves'
        ],
        [
            'valve',
            'valves'
        ],
        [
            'looey',
            'looies'
        ],
        [
            'thief',
            'thieves'
        ],
        [
            'groove',
            'grooves'
        ],
        [
            'pickaxe',
            'pickaxes'
        ],
        [
            'passerby',
            'passersby'
        ]
    ].forEach(function(rule) {
        return pluralize.addIrregularRule(rule[0], rule[1]);
    });
    /**
   * Pluralization rules.
   */ [
        [
            /s?$/i,
            's'
        ],
        [
            /[^\u0000-\u007F]$/i,
            '$0'
        ],
        [
            /([^aeiou]ese)$/i,
            '$1'
        ],
        [
            /(ax|test)is$/i,
            '$1es'
        ],
        [
            /(alias|[^aou]us|t[lm]as|gas|ris)$/i,
            '$1es'
        ],
        [
            /(e[mn]u)s?$/i,
            '$1s'
        ],
        [
            /([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,
            '$1'
        ],
        [
            /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
            '$1i'
        ],
        [
            /(alumn|alg|vertebr)(?:a|ae)$/i,
            '$1ae'
        ],
        [
            /(seraph|cherub)(?:im)?$/i,
            '$1im'
        ],
        [
            /(her|at|gr)o$/i,
            '$1oes'
        ],
        [
            /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
            '$1a'
        ],
        [
            /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
            '$1a'
        ],
        [
            /sis$/i,
            'ses'
        ],
        [
            /(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,
            '$1$2ves'
        ],
        [
            /([^aeiouy]|qu)y$/i,
            '$1ies'
        ],
        [
            /([^ch][ieo][ln])ey$/i,
            '$1ies'
        ],
        [
            /(x|ch|ss|sh|zz)$/i,
            '$1es'
        ],
        [
            /(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,
            '$1ices'
        ],
        [
            /\b((?:tit)?m|l)(?:ice|ouse)$/i,
            '$1ice'
        ],
        [
            /(pe)(?:rson|ople)$/i,
            '$1ople'
        ],
        [
            /(child)(?:ren)?$/i,
            '$1ren'
        ],
        [
            /eaux$/i,
            '$0'
        ],
        [
            /m[ae]n$/i,
            'men'
        ],
        [
            'thou',
            'you'
        ]
    ].forEach(function(rule) {
        return pluralize.addPluralRule(rule[0], rule[1]);
    });
    /**
   * Singularization rules.
   */ [
        [
            /s$/i,
            ''
        ],
        [
            /(ss)$/i,
            '$1'
        ],
        [
            /(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,
            '$1fe'
        ],
        [
            /(ar|(?:wo|[ae])l|[eo][ao])ves$/i,
            '$1f'
        ],
        [
            /ies$/i,
            'y'
        ],
        [
            /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
            '$1ie'
        ],
        [
            /\b(mon|smil)ies$/i,
            '$1ey'
        ],
        [
            /\b((?:tit)?m|l)ice$/i,
            '$1ouse'
        ],
        [
            /(seraph|cherub)im$/i,
            '$1'
        ],
        [
            /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
            '$1'
        ],
        [
            /(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,
            '$1sis'
        ],
        [
            /(movie|twelve|abuse|e[mn]u)s$/i,
            '$1'
        ],
        [
            /(test)(?:is|es)$/i,
            '$1is'
        ],
        [
            /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
            '$1us'
        ],
        [
            /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
            '$1um'
        ],
        [
            /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
            '$1on'
        ],
        [
            /(alumn|alg|vertebr)ae$/i,
            '$1a'
        ],
        [
            /(cod|mur|sil|vert|ind)ices$/i,
            '$1ex'
        ],
        [
            /(matr|append)ices$/i,
            '$1ix'
        ],
        [
            /(pe)(rson|ople)$/i,
            '$1rson'
        ],
        [
            /(child)ren$/i,
            '$1'
        ],
        [
            /(eau)x?$/i,
            '$1'
        ],
        [
            /men$/i,
            'man'
        ]
    ].forEach(function(rule) {
        return pluralize.addSingularRule(rule[0], rule[1]);
    });
    /**
   * Uncountable rules.
   */ [
        // Singular words with no plurals.
        'adulthood',
        'advice',
        'agenda',
        'aid',
        'aircraft',
        'alcohol',
        'ammo',
        'analytics',
        'anime',
        'athletics',
        'audio',
        'bison',
        'blood',
        'bream',
        'buffalo',
        'butter',
        'carp',
        'cash',
        'chassis',
        'chess',
        'clothing',
        'cod',
        'commerce',
        'cooperation',
        'corps',
        'debris',
        'diabetes',
        'digestion',
        'elk',
        'energy',
        'equipment',
        'excretion',
        'expertise',
        'firmware',
        'flounder',
        'fun',
        'gallows',
        'garbage',
        'graffiti',
        'hardware',
        'headquarters',
        'health',
        'herpes',
        'highjinks',
        'homework',
        'housework',
        'information',
        'jeans',
        'justice',
        'kudos',
        'labour',
        'literature',
        'machinery',
        'mackerel',
        'mail',
        'media',
        'mews',
        'moose',
        'music',
        'mud',
        'manga',
        'news',
        'only',
        'personnel',
        'pike',
        'plankton',
        'pliers',
        'police',
        'pollution',
        'premises',
        'rain',
        'research',
        'rice',
        'salmon',
        'scissors',
        'series',
        'sewage',
        'shambles',
        'shrimp',
        'software',
        'species',
        'staff',
        'swine',
        'tennis',
        'traffic',
        'transportation',
        'trout',
        'tuna',
        'wealth',
        'welfare',
        'whiting',
        'wildebeest',
        'wildlife',
        'you',
        /pok[eé]mon$/i,
        // Regexes.
        /[^aeiou]ese$/i,
        /deer$/i,
        /fish$/i,
        /measles$/i,
        /o[iu]s$/i,
        /pox$/i,
        /sheep$/i
    ].forEach(pluralize.addUncountableRule);
    return pluralize;
});
}),
"[project]/node_modules/deepmerge/dist/cjs.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === 'object';
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) {
        return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
     && Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
    ;
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
    }
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
            return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
    } else {
        return mergeObject(target, source, options);
    }
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
        throw new Error('first argument should be an array');
    }
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;
}),
"[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EndOfStreamError",
    ()=>EndOfStreamError,
    "defaultMessages",
    ()=>defaultMessages
]);
const defaultMessages = 'End-Of-Stream';
class EndOfStreamError extends Error {
    constructor(){
        super(defaultMessages);
    }
}
}),
"[project]/node_modules/peek-readable/lib/Deferred.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Deferred",
    ()=>Deferred
]);
class Deferred {
    constructor(){
        this.resolve = ()=>null;
        this.reject = ()=>null;
        this.promise = new Promise((resolve, reject)=>{
            this.reject = reject;
            this.resolve = resolve;
        });
    }
}
}),
"[project]/node_modules/peek-readable/lib/AbstractStreamReader.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractStreamReader",
    ()=>AbstractStreamReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
;
class AbstractStreamReader {
    constructor(){
        /**
         * Maximum request length on read-stream operation
         */ this.maxStreamReadSize = 1 * 1024 * 1024;
        this.endOfStream = false;
        /**
         * Store peeked data
         * @type {Array}
         */ this.peekQueue = [];
    }
    async peek(uint8Array, offset, length) {
        const bytesRead = await this.read(uint8Array, offset, length);
        this.peekQueue.push(uint8Array.subarray(offset, offset + bytesRead)); // Put read data back to peek buffer
        return bytesRead;
    }
    async read(buffer, offset, length) {
        if (length === 0) {
            return 0;
        }
        let bytesRead = this.readFromPeekBuffer(buffer, offset, length);
        bytesRead += await this.readRemainderFromStream(buffer, offset + bytesRead, length - bytesRead);
        if (bytesRead === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        }
        return bytesRead;
    }
    /**
     * Read chunk from stream
     * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
     * @param offset - Offset target
     * @param length - Number of bytes to read
     * @returns Number of bytes read
     */ readFromPeekBuffer(buffer, offset, length) {
        let remaining = length;
        let bytesRead = 0;
        // consume peeked data first
        while(this.peekQueue.length > 0 && remaining > 0){
            const peekData = this.peekQueue.pop(); // Front of queue
            if (!peekData) throw new Error('peekData should be defined');
            const lenCopy = Math.min(peekData.length, remaining);
            buffer.set(peekData.subarray(0, lenCopy), offset + bytesRead);
            bytesRead += lenCopy;
            remaining -= lenCopy;
            if (lenCopy < peekData.length) {
                // remainder back to queue
                this.peekQueue.push(peekData.subarray(lenCopy));
            }
        }
        return bytesRead;
    }
    async readRemainderFromStream(buffer, offset, initialRemaining) {
        let remaining = initialRemaining;
        let bytesRead = 0;
        // Continue reading from stream if required
        while(remaining > 0 && !this.endOfStream){
            const reqLen = Math.min(remaining, this.maxStreamReadSize);
            const chunkLen = await this.readFromStream(buffer, offset + bytesRead, reqLen);
            if (chunkLen === 0) break;
            bytesRead += chunkLen;
            remaining -= chunkLen;
        }
        return bytesRead;
    }
}
}),
"[project]/node_modules/peek-readable/lib/StreamReader.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StreamReader",
    ()=>StreamReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$Deferred$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/Deferred.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$AbstractStreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/AbstractStreamReader.js [app-route] (ecmascript)");
;
;
;
;
class StreamReader extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$AbstractStreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbstractStreamReader"] {
    constructor(s){
        super();
        this.s = s;
        /**
         * Deferred used for postponed read request (as not data is yet available to read)
         */ this.deferred = null;
        if (!s.read || !s.once) {
            throw new Error('Expected an instance of stream.Readable');
        }
        this.s.once('end', ()=>this.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]()));
        this.s.once('error', (err)=>this.reject(err));
        this.s.once('close', ()=>this.reject(new Error('Stream closed')));
    }
    /**
     * Read chunk from stream
     * @param buffer Target Uint8Array (or Buffer) to store data read from stream in
     * @param offset Offset target
     * @param length Number of bytes to read
     * @returns Number of bytes read
     */ async readFromStream(buffer, offset, length) {
        if (this.endOfStream) {
            return 0;
        }
        const readBuffer = this.s.read(length);
        if (readBuffer) {
            buffer.set(readBuffer, offset);
            return readBuffer.length;
        }
        const request = {
            buffer,
            offset,
            length,
            deferred: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$Deferred$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Deferred"]()
        };
        this.deferred = request.deferred;
        this.s.once('readable', ()=>{
            this.readDeferred(request);
        });
        return request.deferred.promise;
    }
    /**
     * Process deferred read request
     * @param request Deferred read request
     */ readDeferred(request) {
        const readBuffer = this.s.read(request.length);
        if (readBuffer) {
            request.buffer.set(readBuffer, request.offset);
            request.deferred.resolve(readBuffer.length);
            this.deferred = null;
        } else {
            this.s.once('readable', ()=>{
                this.readDeferred(request);
            });
        }
    }
    reject(err) {
        this.endOfStream = true;
        if (this.deferred) {
            this.deferred.reject(err);
            this.deferred = null;
        }
    }
    async abort() {
        this.reject(new Error('abort'));
    }
    async close() {
        return this.abort();
    }
}
}),
"[project]/node_modules/peek-readable/lib/WebStreamReader.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebStreamReader",
    ()=>WebStreamReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$AbstractStreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/AbstractStreamReader.js [app-route] (ecmascript)");
;
;
;
class WebStreamReader extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$AbstractStreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbstractStreamReader"] {
    constructor(stream){
        super();
        this.reader = stream.getReader({
            mode: 'byob'
        });
    }
    async readFromStream(buffer, offset, length) {
        if (this.endOfStream) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        }
        const result = await this.reader.read(new Uint8Array(length));
        if (result.done) {
            this.endOfStream = result.done;
        }
        if (result.value) {
            buffer.set(result.value, offset);
            return result.value.byteLength;
        }
        return 0;
    }
    abort() {
        return this.reader.cancel(); // Signals a loss of interest in the stream by a consumer
    }
    async close() {
        await this.abort();
        this.reader.releaseLock();
    }
}
}),
"[project]/node_modules/peek-readable/lib/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$StreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/StreamReader.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$WebStreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/WebStreamReader.js [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/node_modules/strtok3/lib/AbstractTokenizer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractTokenizer",
    ()=>AbstractTokenizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
;
class AbstractTokenizer {
    /**
     * Constructor
     * @param options Tokenizer options
     * @protected
     */ constructor(options){
        /**
         * Tokenizer-stream position
         */ this.position = 0;
        this.numBuffer = new Uint8Array(8);
        this.fileInfo = options?.fileInfo ?? {};
        this.onClose = options?.onClose;
    }
    /**
     * Read a token from the tokenizer-stream
     * @param token - The token to read
     * @param position - If provided, the desired position in the tokenizer-stream
     * @returns Promise with token data
     */ async readToken(token, position = this.position) {
        const uint8Array = new Uint8Array(token.len);
        const len = await this.readBuffer(uint8Array, {
            position
        });
        if (len < token.len) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        return token.get(uint8Array, 0);
    }
    /**
     * Peek a token from the tokenizer-stream.
     * @param token - Token to peek from the tokenizer-stream.
     * @param position - Offset where to begin reading within the file. If position is null, data will be read from the current file position.
     * @returns Promise with token data
     */ async peekToken(token, position = this.position) {
        const uint8Array = new Uint8Array(token.len);
        const len = await this.peekBuffer(uint8Array, {
            position
        });
        if (len < token.len) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        return token.get(uint8Array, 0);
    }
    /**
     * Read a numeric token from the stream
     * @param token - Numeric token
     * @returns Promise with number
     */ async readNumber(token) {
        const len = await this.readBuffer(this.numBuffer, {
            length: token.len
        });
        if (len < token.len) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        return token.get(this.numBuffer, 0);
    }
    /**
     * Read a numeric token from the stream
     * @param token - Numeric token
     * @returns Promise with number
     */ async peekNumber(token) {
        const len = await this.peekBuffer(this.numBuffer, {
            length: token.len
        });
        if (len < token.len) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        return token.get(this.numBuffer, 0);
    }
    /**
     * Ignore number of bytes, advances the pointer in under tokenizer-stream.
     * @param length - Number of bytes to ignore
     * @return resolves the number of bytes ignored, equals length if this available, otherwise the number of bytes available
     */ async ignore(length) {
        if (this.fileInfo.size !== undefined) {
            const bytesLeft = this.fileInfo.size - this.position;
            if (length > bytesLeft) {
                this.position += bytesLeft;
                return bytesLeft;
            }
        }
        this.position += length;
        return length;
    }
    async close() {
        await this.onClose?.();
    }
    normalizeOptions(uint8Array, options) {
        if (options && options.position !== undefined && options.position < this.position) {
            throw new Error('`options.position` must be equal or greater than `tokenizer.position`');
        }
        if (options) {
            return {
                mayBeLess: options.mayBeLess === true,
                offset: options.offset ? options.offset : 0,
                length: options.length ? options.length : uint8Array.length - (options.offset ? options.offset : 0),
                position: options.position ? options.position : this.position
            };
        }
        return {
            mayBeLess: false,
            offset: 0,
            length: uint8Array.length,
            position: this.position
        };
    }
}
}),
"[project]/node_modules/strtok3/lib/ReadStreamTokenizer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadStreamTokenizer",
    ()=>ReadStreamTokenizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/AbstractTokenizer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
;
;
const maxBufferSize = 256000;
class ReadStreamTokenizer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbstractTokenizer"] {
    /**
     * Constructor
     * @param streamReader stream-reader to read from
     * @param options Tokenizer options
     */ constructor(streamReader, options){
        super(options);
        this.streamReader = streamReader;
    }
    /**
     * Read buffer from tokenizer
     * @param uint8Array - Target Uint8Array to fill with data read from the tokenizer-stream
     * @param options - Read behaviour options
     * @returns Promise with number of bytes read
     */ async readBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const skipBytes = normOptions.position - this.position;
        if (skipBytes > 0) {
            await this.ignore(skipBytes);
            return this.readBuffer(uint8Array, options);
        }
        if (skipBytes < 0) {
            throw new Error('`options.position` must be equal or greater than `tokenizer.position`');
        }
        if (normOptions.length === 0) {
            return 0;
        }
        const bytesRead = await this.streamReader.read(uint8Array, normOptions.offset, normOptions.length);
        this.position += bytesRead;
        if ((!options || !options.mayBeLess) && bytesRead < normOptions.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        }
        return bytesRead;
    }
    /**
     * Peek (read ahead) buffer from tokenizer
     * @param uint8Array - Uint8Array (or Buffer) to write data to
     * @param options - Read behaviour options
     * @returns Promise with number of bytes peeked
     */ async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        let bytesRead = 0;
        if (normOptions.position) {
            const skipBytes = normOptions.position - this.position;
            if (skipBytes > 0) {
                const skipBuffer = new Uint8Array(normOptions.length + skipBytes);
                bytesRead = await this.peekBuffer(skipBuffer, {
                    mayBeLess: normOptions.mayBeLess
                });
                uint8Array.set(skipBuffer.subarray(skipBytes), normOptions.offset);
                return bytesRead - skipBytes;
            }
            if (skipBytes < 0) {
                throw new Error('Cannot peek from a negative offset in a stream');
            }
        }
        if (normOptions.length > 0) {
            try {
                bytesRead = await this.streamReader.peek(uint8Array, normOptions.offset, normOptions.length);
            } catch (err) {
                if (options?.mayBeLess && err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]) {
                    return 0;
                }
                throw err;
            }
            if (!normOptions.mayBeLess && bytesRead < normOptions.length) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
            }
        }
        return bytesRead;
    }
    async ignore(length) {
        // debug(`ignore ${this.position}...${this.position + length - 1}`);
        const bufSize = Math.min(maxBufferSize, length);
        const buf = new Uint8Array(bufSize);
        let totBytesRead = 0;
        while(totBytesRead < length){
            const remaining = length - totBytesRead;
            const bytesRead = await this.readBuffer(buf, {
                length: Math.min(bufSize, remaining)
            });
            if (bytesRead < 0) {
                return bytesRead;
            }
            totBytesRead += bytesRead;
        }
        return totBytesRead;
    }
}
}),
"[project]/node_modules/strtok3/lib/BufferTokenizer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BufferTokenizer",
    ()=>BufferTokenizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/AbstractTokenizer.js [app-route] (ecmascript)");
;
;
class BufferTokenizer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbstractTokenizer"] {
    /**
     * Construct BufferTokenizer
     * @param uint8Array - Uint8Array to tokenize
     * @param options Tokenizer options
     */ constructor(uint8Array, options){
        super(options);
        this.uint8Array = uint8Array;
        this.fileInfo.size = this.fileInfo.size ? this.fileInfo.size : uint8Array.length;
    }
    /**
     * Read buffer from tokenizer
     * @param uint8Array - Uint8Array to tokenize
     * @param options - Read behaviour options
     * @returns {Promise<number>}
     */ async readBuffer(uint8Array, options) {
        if (options?.position) {
            if (options.position < this.position) {
                throw new Error('`options.position` must be equal or greater than `tokenizer.position`');
            }
            this.position = options.position;
        }
        const bytesRead = await this.peekBuffer(uint8Array, options);
        this.position += bytesRead;
        return bytesRead;
    }
    /**
     * Peek (read ahead) buffer from tokenizer
     * @param uint8Array
     * @param options - Read behaviour options
     * @returns {Promise<number>}
     */ async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const bytes2read = Math.min(this.uint8Array.length - normOptions.position, normOptions.length);
        if (!normOptions.mayBeLess && bytes2read < normOptions.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        }
        uint8Array.set(this.uint8Array.subarray(normOptions.position, normOptions.position + bytes2read), normOptions.offset);
        return bytes2read;
    }
    close() {
        return super.close();
    }
}
}),
"[project]/node_modules/strtok3/lib/core.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromBuffer",
    ()=>fromBuffer,
    "fromStream",
    ()=>fromStream,
    "fromWebStream",
    ()=>fromWebStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$StreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/StreamReader.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$WebStreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/WebStreamReader.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$ReadStreamTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/ReadStreamTokenizer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$BufferTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/BufferTokenizer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/AbstractTokenizer.js [app-route] (ecmascript)");
;
;
;
;
;
function fromStream(stream, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$ReadStreamTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReadStreamTokenizer"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$StreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["StreamReader"](stream), options);
}
function fromWebStream(webStream, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$ReadStreamTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReadStreamTokenizer"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$WebStreamReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebStreamReader"](webStream), options);
}
function fromBuffer(uint8Array, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$BufferTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BufferTokenizer"](uint8Array, options);
}
}),
"[project]/node_modules/strtok3/lib/FileTokenizer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileTokenizer",
    ()=>FileTokenizer,
    "fromFile",
    ()=>fromFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/AbstractTokenizer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
;
;
;
class FileTokenizer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbstractTokenizer"] {
    constructor(fileHandle, options){
        super(options);
        this.fileHandle = fileHandle;
    }
    /**
     * Read buffer from file
     * @param uint8Array - Uint8Array to write result to
     * @param options - Read behaviour options
     * @returns Promise number of bytes read
     */ async readBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        this.position = normOptions.position;
        if (normOptions.length === 0) return 0;
        const res = await this.fileHandle.read(uint8Array, normOptions.offset, normOptions.length, normOptions.position);
        this.position += res.bytesRead;
        if (res.bytesRead < normOptions.length && (!options || !options.mayBeLess)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        }
        return res.bytesRead;
    }
    /**
     * Peek buffer from file
     * @param uint8Array - Uint8Array (or Buffer) to write data to
     * @param options - Read behaviour options
     * @returns Promise number of bytes read
     */ async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const res = await this.fileHandle.read(uint8Array, normOptions.offset, normOptions.length, normOptions.position);
        if (!normOptions.mayBeLess && res.bytesRead < normOptions.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]();
        }
        return res.bytesRead;
    }
    async close() {
        await this.fileHandle.close();
        return super.close();
    }
}
async function fromFile(sourceFilePath) {
    const fileHandle = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["open"])(sourceFilePath, 'r');
    const stat = await fileHandle.stat();
    return new FileTokenizer(fileHandle, {
        fileInfo: {
            path: sourceFilePath,
            size: stat.size
        }
    });
}
}),
"[project]/node_modules/strtok3/lib/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromStream",
    ()=>fromStream
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/core.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$FileTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/FileTokenizer.js [app-route] (ecmascript)");
;
;
;
;
async function fromStream(stream, options) {
    const augmentedOptions = options ?? {};
    augmentedOptions.fileInfo = augmentedOptions.fileInfo ?? {};
    if (stream.path) {
        const stat = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["stat"])(stream.path);
        augmentedOptions.fileInfo.path = stream.path;
        augmentedOptions.fileInfo.size = stat.size;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromStream"])(stream, augmentedOptions);
}
}),
"[project]/node_modules/strtok3/lib/core.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractTokenizer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbstractTokenizer"],
    "EndOfStreamError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"],
    "fromBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromBuffer"],
    "fromStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromStream"],
    "fromWebStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromWebStream"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/core.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$AbstractTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/AbstractTokenizer.js [app-route] (ecmascript)");
}),
"[project]/node_modules/ieee754/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8){}
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8){}
    if (e === 0) {
        e = 1 - eBias;
    } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) {
            value += rt / c;
        } else {
            value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8){}
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8){}
    buffer[offset + i - d] |= s * 128;
};
}),
"[project]/node_modules/@borewit/text-codec/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "textDecode",
    ()=>textDecode,
    "textEncode",
    ()=>textEncode
]);
const WINDOWS_1252_EXTRA = {
    0x80: "€",
    0x82: "‚",
    0x83: "ƒ",
    0x84: "„",
    0x85: "…",
    0x86: "†",
    0x87: "‡",
    0x88: "ˆ",
    0x89: "‰",
    0x8a: "Š",
    0x8b: "‹",
    0x8c: "Œ",
    0x8e: "Ž",
    0x91: "‘",
    0x92: "’",
    0x93: "“",
    0x94: "”",
    0x95: "•",
    0x96: "–",
    0x97: "—",
    0x98: "˜",
    0x99: "™",
    0x9a: "š",
    0x9b: "›",
    0x9c: "œ",
    0x9e: "ž",
    0x9f: "Ÿ"
};
const WINDOWS_1252_REVERSE = {};
for (const [code, char] of Object.entries(WINDOWS_1252_EXTRA)){
    WINDOWS_1252_REVERSE[char] = Number.parseInt(code, 10);
}
// ---------- Cached decoders/encoders ----------
let _utf8Decoder;
let _utf8Encoder;
function utf8Decoder() {
    if (typeof globalThis.TextDecoder === "undefined") return undefined;
    return _utf8Decoder !== null && _utf8Decoder !== void 0 ? _utf8Decoder : _utf8Decoder = new globalThis.TextDecoder("utf-8");
}
function utf8Encoder() {
    if (typeof globalThis.TextEncoder === "undefined") return undefined;
    return _utf8Encoder !== null && _utf8Encoder !== void 0 ? _utf8Encoder : _utf8Encoder = new globalThis.TextEncoder();
}
// Safe chunk size well under your measured ~105k cliff.
// 32k keeps memory reasonable and is plenty fast.
const CHUNK = 32 * 1024;
function textDecode(bytes, encoding = "utf-8") {
    switch(encoding.toLowerCase()){
        case "utf-8":
        case "utf8":
            {
                const dec = utf8Decoder();
                return dec ? dec.decode(bytes) : decodeUTF8(bytes);
            }
        case "utf-16le":
            return decodeUTF16LE(bytes);
        case "us-ascii":
        case "ascii":
            return decodeASCII(bytes);
        case "latin1":
        case "iso-8859-1":
            return decodeLatin1(bytes);
        case "windows-1252":
            return decodeWindows1252(bytes);
        default:
            throw new RangeError(`Encoding '${encoding}' not supported`);
    }
}
function textEncode(input = "", encoding = "utf-8") {
    switch(encoding.toLowerCase()){
        case "utf-8":
        case "utf8":
            {
                const enc = utf8Encoder();
                return enc ? enc.encode(input) : encodeUTF8(input);
            }
        case "utf-16le":
            return encodeUTF16LE(input);
        case "us-ascii":
        case "ascii":
            return encodeASCII(input);
        case "latin1":
        case "iso-8859-1":
            return encodeLatin1(input);
        case "windows-1252":
            return encodeWindows1252(input);
        default:
            throw new RangeError(`Encoding '${encoding}' not supported`);
    }
}
// --- Internal helpers ---
function decodeUTF8(bytes) {
    const parts = [];
    let out = "";
    let i = 0;
    while(i < bytes.length){
        const b1 = bytes[i++];
        if (b1 < 0x80) {
            out += String.fromCharCode(b1);
        } else if (b1 < 0xe0) {
            const b2 = bytes[i++] & 0x3f;
            out += String.fromCharCode((b1 & 0x1f) << 6 | b2);
        } else if (b1 < 0xf0) {
            const b2 = bytes[i++] & 0x3f;
            const b3 = bytes[i++] & 0x3f;
            out += String.fromCharCode((b1 & 0x0f) << 12 | b2 << 6 | b3);
        } else {
            const b2 = bytes[i++] & 0x3f;
            const b3 = bytes[i++] & 0x3f;
            const b4 = bytes[i++] & 0x3f;
            let cp = (b1 & 0x07) << 18 | b2 << 12 | b3 << 6 | b4;
            cp -= 0x10000;
            out += String.fromCharCode(0xd800 + (cp >> 10 & 0x3ff), 0xdc00 + (cp & 0x3ff));
        }
        if (out.length >= CHUNK) {
            parts.push(out);
            out = "";
        }
    }
    if (out) parts.push(out);
    return parts.join("");
}
function decodeUTF16LE(bytes) {
    // Use chunked fromCharCode on 16-bit code units.
    // If odd length, ignore trailing byte (common behavior).
    const len = bytes.length & ~1;
    if (len === 0) return "";
    const parts = [];
    // Build a temporary code-unit array per chunk.
    const maxUnits = CHUNK; // CHUNK code units per chunk
    for(let i = 0; i < len;){
        const unitsThis = Math.min(maxUnits, len - i >> 1);
        const units = new Array(unitsThis);
        for(let j = 0; j < unitsThis; j++, i += 2){
            units[j] = bytes[i] | bytes[i + 1] << 8;
        }
        parts.push(String.fromCharCode.apply(null, units));
    }
    return parts.join("");
}
function decodeASCII(bytes) {
    // 7-bit ASCII: mask high bit. (Kept to match your original semantics.)
    const parts = [];
    for(let i = 0; i < bytes.length; i += CHUNK){
        const end = Math.min(bytes.length, i + CHUNK);
        const codes = new Array(end - i);
        for(let j = i, k = 0; j < end; j++, k++){
            codes[k] = bytes[j] & 0x7f;
        }
        parts.push(String.fromCharCode.apply(null, codes));
    }
    return parts.join("");
}
function decodeLatin1(bytes) {
    // Latin-1 is 0x00..0xFF direct mapping; avoid spread.
    const parts = [];
    for(let i = 0; i < bytes.length; i += CHUNK){
        const end = Math.min(bytes.length, i + CHUNK);
        const codes = new Array(end - i);
        for(let j = i, k = 0; j < end; j++, k++){
            codes[k] = bytes[j];
        }
        parts.push(String.fromCharCode.apply(null, codes));
    }
    return parts.join("");
}
function decodeWindows1252(bytes) {
    // Only 0x80..0x9F need mapping; others are direct 1-byte codes.
    const parts = [];
    let out = "";
    for(let i = 0; i < bytes.length; i++){
        const b = bytes[i];
        const extra = b >= 0x80 && b <= 0x9f ? WINDOWS_1252_EXTRA[b] : undefined;
        out += extra !== null && extra !== void 0 ? extra : String.fromCharCode(b);
        if (out.length >= CHUNK) {
            parts.push(out);
            out = "";
        }
    }
    if (out) parts.push(out);
    return parts.join("");
}
function encodeUTF8(str) {
    const out = [];
    for(let i = 0; i < str.length; i++){
        let cp = str.charCodeAt(i);
        // surrogate pair
        if (cp >= 0xd800 && cp <= 0xdbff && i + 1 < str.length) {
            const lo = str.charCodeAt(i + 1);
            if (lo >= 0xdc00 && lo <= 0xdfff) {
                cp = 0x10000 + (cp - 0xd800 << 10) + (lo - 0xdc00);
                i++;
            }
        }
        if (cp < 0x80) {
            out.push(cp);
        } else if (cp < 0x800) {
            out.push(0xc0 | cp >> 6, 0x80 | cp & 0x3f);
        } else if (cp < 0x10000) {
            out.push(0xe0 | cp >> 12, 0x80 | cp >> 6 & 0x3f, 0x80 | cp & 0x3f);
        } else {
            out.push(0xf0 | cp >> 18, 0x80 | cp >> 12 & 0x3f, 0x80 | cp >> 6 & 0x3f, 0x80 | cp & 0x3f);
        }
    }
    return new Uint8Array(out);
}
function encodeUTF16LE(str) {
    const out = new Uint8Array(str.length * 2);
    for(let i = 0; i < str.length; i++){
        const code = str.charCodeAt(i);
        const o = i * 2;
        out[o] = code & 0xff;
        out[o + 1] = code >>> 8;
    }
    return out;
}
function encodeASCII(str) {
    // 7-bit ASCII: mask high bit
    const out = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++)out[i] = str.charCodeAt(i) & 0x7f;
    return out;
}
function encodeLatin1(str) {
    const out = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++)out[i] = str.charCodeAt(i) & 0xff;
    return out;
}
function encodeWindows1252(str) {
    const out = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++){
        const ch = str[i];
        const code = ch.charCodeAt(0);
        if (code <= 0xff) {
            out[i] = code;
            continue;
        }
        const mapped = WINDOWS_1252_REVERSE[ch];
        out[i] = mapped !== undefined ? mapped : 0x3f; // '?'
    }
    return out;
}
}),
"[project]/node_modules/token-types/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnsiStringType",
    ()=>AnsiStringType,
    "Float16_BE",
    ()=>Float16_BE,
    "Float16_LE",
    ()=>Float16_LE,
    "Float32_BE",
    ()=>Float32_BE,
    "Float32_LE",
    ()=>Float32_LE,
    "Float64_BE",
    ()=>Float64_BE,
    "Float64_LE",
    ()=>Float64_LE,
    "Float80_BE",
    ()=>Float80_BE,
    "Float80_LE",
    ()=>Float80_LE,
    "INT16_BE",
    ()=>INT16_BE,
    "INT16_LE",
    ()=>INT16_LE,
    "INT24_BE",
    ()=>INT24_BE,
    "INT24_LE",
    ()=>INT24_LE,
    "INT32_BE",
    ()=>INT32_BE,
    "INT32_LE",
    ()=>INT32_LE,
    "INT64_BE",
    ()=>INT64_BE,
    "INT64_LE",
    ()=>INT64_LE,
    "INT8",
    ()=>INT8,
    "IgnoreType",
    ()=>IgnoreType,
    "StringType",
    ()=>StringType,
    "UINT16_BE",
    ()=>UINT16_BE,
    "UINT16_LE",
    ()=>UINT16_LE,
    "UINT24_BE",
    ()=>UINT24_BE,
    "UINT24_LE",
    ()=>UINT24_LE,
    "UINT32_BE",
    ()=>UINT32_BE,
    "UINT32_LE",
    ()=>UINT32_LE,
    "UINT64_BE",
    ()=>UINT64_BE,
    "UINT64_LE",
    ()=>UINT64_LE,
    "UINT8",
    ()=>UINT8,
    "Uint8ArrayType",
    ()=>Uint8ArrayType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ieee754/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$borewit$2f$text$2d$codec$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@borewit/text-codec/lib/index.js [app-route] (ecmascript)");
;
;
// Primitive types
function dv(array) {
    return new DataView(array.buffer, array.byteOffset);
}
const UINT8 = {
    len: 1,
    get (array, offset) {
        return dv(array).getUint8(offset);
    },
    put (array, offset, value) {
        dv(array).setUint8(offset, value);
        return offset + 1;
    }
};
const UINT16_LE = {
    len: 2,
    get (array, offset) {
        return dv(array).getUint16(offset, true);
    },
    put (array, offset, value) {
        dv(array).setUint16(offset, value, true);
        return offset + 2;
    }
};
const UINT16_BE = {
    len: 2,
    get (array, offset) {
        return dv(array).getUint16(offset);
    },
    put (array, offset, value) {
        dv(array).setUint16(offset, value);
        return offset + 2;
    }
};
const UINT24_LE = {
    len: 3,
    get (array, offset) {
        const dataView = dv(array);
        return dataView.getUint8(offset) + (dataView.getUint16(offset + 1, true) << 8);
    },
    put (array, offset, value) {
        const dataView = dv(array);
        dataView.setUint8(offset, value & 0xff);
        dataView.setUint16(offset + 1, value >> 8, true);
        return offset + 3;
    }
};
const UINT24_BE = {
    len: 3,
    get (array, offset) {
        const dataView = dv(array);
        return (dataView.getUint16(offset) << 8) + dataView.getUint8(offset + 2);
    },
    put (array, offset, value) {
        const dataView = dv(array);
        dataView.setUint16(offset, value >> 8);
        dataView.setUint8(offset + 2, value & 0xff);
        return offset + 3;
    }
};
const UINT32_LE = {
    len: 4,
    get (array, offset) {
        return dv(array).getUint32(offset, true);
    },
    put (array, offset, value) {
        dv(array).setUint32(offset, value, true);
        return offset + 4;
    }
};
const UINT32_BE = {
    len: 4,
    get (array, offset) {
        return dv(array).getUint32(offset);
    },
    put (array, offset, value) {
        dv(array).setUint32(offset, value);
        return offset + 4;
    }
};
const INT8 = {
    len: 1,
    get (array, offset) {
        return dv(array).getInt8(offset);
    },
    put (array, offset, value) {
        dv(array).setInt8(offset, value);
        return offset + 1;
    }
};
const INT16_BE = {
    len: 2,
    get (array, offset) {
        return dv(array).getInt16(offset);
    },
    put (array, offset, value) {
        dv(array).setInt16(offset, value);
        return offset + 2;
    }
};
const INT16_LE = {
    len: 2,
    get (array, offset) {
        return dv(array).getInt16(offset, true);
    },
    put (array, offset, value) {
        dv(array).setInt16(offset, value, true);
        return offset + 2;
    }
};
const INT24_LE = {
    len: 3,
    get (array, offset) {
        const unsigned = UINT24_LE.get(array, offset);
        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;
    },
    put (array, offset, value) {
        const dataView = dv(array);
        dataView.setUint8(offset, value & 0xff);
        dataView.setUint16(offset + 1, value >> 8, true);
        return offset + 3;
    }
};
const INT24_BE = {
    len: 3,
    get (array, offset) {
        const unsigned = UINT24_BE.get(array, offset);
        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;
    },
    put (array, offset, value) {
        const dataView = dv(array);
        dataView.setUint16(offset, value >> 8);
        dataView.setUint8(offset + 2, value & 0xff);
        return offset + 3;
    }
};
const INT32_BE = {
    len: 4,
    get (array, offset) {
        return dv(array).getInt32(offset);
    },
    put (array, offset, value) {
        dv(array).setInt32(offset, value);
        return offset + 4;
    }
};
const INT32_LE = {
    len: 4,
    get (array, offset) {
        return dv(array).getInt32(offset, true);
    },
    put (array, offset, value) {
        dv(array).setInt32(offset, value, true);
        return offset + 4;
    }
};
const UINT64_LE = {
    len: 8,
    get (array, offset) {
        return dv(array).getBigUint64(offset, true);
    },
    put (array, offset, value) {
        dv(array).setBigUint64(offset, value, true);
        return offset + 8;
    }
};
const INT64_LE = {
    len: 8,
    get (array, offset) {
        return dv(array).getBigInt64(offset, true);
    },
    put (array, offset, value) {
        dv(array).setBigInt64(offset, value, true);
        return offset + 8;
    }
};
const UINT64_BE = {
    len: 8,
    get (array, offset) {
        return dv(array).getBigUint64(offset);
    },
    put (array, offset, value) {
        dv(array).setBigUint64(offset, value);
        return offset + 8;
    }
};
const INT64_BE = {
    len: 8,
    get (array, offset) {
        return dv(array).getBigInt64(offset);
    },
    put (array, offset, value) {
        dv(array).setBigInt64(offset, value);
        return offset + 8;
    }
};
const Float16_BE = {
    len: 2,
    get (dataView, offset) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["read"](dataView, offset, false, 10, this.len);
    },
    put (dataView, offset, value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["write"](dataView, value, offset, false, 10, this.len);
        return offset + this.len;
    }
};
const Float16_LE = {
    len: 2,
    get (array, offset) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["read"](array, offset, true, 10, this.len);
    },
    put (array, offset, value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["write"](array, value, offset, true, 10, this.len);
        return offset + this.len;
    }
};
const Float32_BE = {
    len: 4,
    get (array, offset) {
        return dv(array).getFloat32(offset);
    },
    put (array, offset, value) {
        dv(array).setFloat32(offset, value);
        return offset + 4;
    }
};
const Float32_LE = {
    len: 4,
    get (array, offset) {
        return dv(array).getFloat32(offset, true);
    },
    put (array, offset, value) {
        dv(array).setFloat32(offset, value, true);
        return offset + 4;
    }
};
const Float64_BE = {
    len: 8,
    get (array, offset) {
        return dv(array).getFloat64(offset);
    },
    put (array, offset, value) {
        dv(array).setFloat64(offset, value);
        return offset + 8;
    }
};
const Float64_LE = {
    len: 8,
    get (array, offset) {
        return dv(array).getFloat64(offset, true);
    },
    put (array, offset, value) {
        dv(array).setFloat64(offset, value, true);
        return offset + 8;
    }
};
const Float80_BE = {
    len: 10,
    get (array, offset) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["read"](array, offset, false, 63, this.len);
    },
    put (array, offset, value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["write"](array, value, offset, false, 63, this.len);
        return offset + this.len;
    }
};
const Float80_LE = {
    len: 10,
    get (array, offset) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["read"](array, offset, true, 63, this.len);
    },
    put (array, offset, value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ieee754$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["write"](array, value, offset, true, 63, this.len);
        return offset + this.len;
    }
};
class IgnoreType {
    /**
     * @param len number of bytes to ignore
     */ constructor(len){
        this.len = len;
    }
    // ToDo: don't read, but skip data
    get(_array, _off) {}
}
class Uint8ArrayType {
    constructor(len){
        this.len = len;
    }
    get(array, offset) {
        return array.subarray(offset, offset + this.len);
    }
}
class StringType {
    constructor(len, encoding){
        this.len = len;
        this.encoding = encoding;
    }
    get(data, offset = 0) {
        const bytes = data.subarray(offset, offset + this.len);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$borewit$2f$text$2d$codec$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["textDecode"])(bytes, this.encoding);
    }
}
class AnsiStringType extends StringType {
    constructor(len){
        super(len, 'windows-1252');
    }
}
}),
"[project]/node_modules/uint8array-extras/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areUint8ArraysEqual",
    ()=>areUint8ArraysEqual,
    "assertUint8Array",
    ()=>assertUint8Array,
    "assertUint8ArrayOrArrayBuffer",
    ()=>assertUint8ArrayOrArrayBuffer,
    "base64ToString",
    ()=>base64ToString,
    "base64ToUint8Array",
    ()=>base64ToUint8Array,
    "compareUint8Arrays",
    ()=>compareUint8Arrays,
    "concatUint8Arrays",
    ()=>concatUint8Arrays,
    "getUintBE",
    ()=>getUintBE,
    "hexToUint8Array",
    ()=>hexToUint8Array,
    "includes",
    ()=>includes,
    "indexOf",
    ()=>indexOf,
    "isUint8Array",
    ()=>isUint8Array,
    "stringToBase64",
    ()=>stringToBase64,
    "stringToUint8Array",
    ()=>stringToUint8Array,
    "toUint8Array",
    ()=>toUint8Array,
    "uint8ArrayToBase64",
    ()=>uint8ArrayToBase64,
    "uint8ArrayToHex",
    ()=>uint8ArrayToHex,
    "uint8ArrayToString",
    ()=>uint8ArrayToString
]);
const objectToString = Object.prototype.toString;
const uint8ArrayStringified = '[object Uint8Array]';
const arrayBufferStringified = '[object ArrayBuffer]';
function isType(value, typeConstructor, typeStringified) {
    if (!value) {
        return false;
    }
    if (value.constructor === typeConstructor) {
        return true;
    }
    return objectToString.call(value) === typeStringified;
}
function isUint8Array(value) {
    return isType(value, Uint8Array, uint8ArrayStringified);
}
function isArrayBuffer(value) {
    return isType(value, ArrayBuffer, arrayBufferStringified);
}
function isUint8ArrayOrArrayBuffer(value) {
    return isUint8Array(value) || isArrayBuffer(value);
}
function assertUint8Array(value) {
    if (!isUint8Array(value)) {
        throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof value}\``);
    }
}
function assertUint8ArrayOrArrayBuffer(value) {
    if (!isUint8ArrayOrArrayBuffer(value)) {
        throw new TypeError(`Expected \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof value}\``);
    }
}
function toUint8Array(value) {
    if (value instanceof ArrayBuffer) {
        return new Uint8Array(value);
    }
    if (ArrayBuffer.isView(value)) {
        return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    }
    throw new TypeError(`Unsupported value, got \`${typeof value}\`.`);
}
function concatUint8Arrays(arrays, totalLength) {
    if (arrays.length === 0) {
        return new Uint8Array(0);
    }
    totalLength ??= arrays.reduce((accumulator, currentValue)=>accumulator + currentValue.length, 0);
    const returnValue = new Uint8Array(totalLength);
    let offset = 0;
    for (const array of arrays){
        assertUint8Array(array);
        returnValue.set(array, offset);
        offset += array.length;
    }
    return returnValue;
}
function areUint8ArraysEqual(a, b) {
    assertUint8Array(a);
    assertUint8Array(b);
    if (a === b) {
        return true;
    }
    if (a.length !== b.length) {
        return false;
    }
    // eslint-disable-next-line unicorn/no-for-loop
    for(let index = 0; index < a.length; index++){
        if (a[index] !== b[index]) {
            return false;
        }
    }
    return true;
}
function compareUint8Arrays(a, b) {
    assertUint8Array(a);
    assertUint8Array(b);
    const length = Math.min(a.length, b.length);
    for(let index = 0; index < length; index++){
        const diff = a[index] - b[index];
        if (diff !== 0) {
            return Math.sign(diff);
        }
    }
    // At this point, all the compared elements are equal.
    // The shorter array should come first if the arrays are of different lengths.
    return Math.sign(a.length - b.length);
}
const cachedDecoders = {
    utf8: new globalThis.TextDecoder('utf8')
};
function uint8ArrayToString(array, encoding = 'utf8') {
    assertUint8ArrayOrArrayBuffer(array);
    cachedDecoders[encoding] ??= new globalThis.TextDecoder(encoding);
    return cachedDecoders[encoding].decode(array);
}
function assertString(value) {
    if (typeof value !== 'string') {
        throw new TypeError(`Expected \`string\`, got \`${typeof value}\``);
    }
}
const cachedEncoder = new globalThis.TextEncoder();
function stringToUint8Array(string) {
    assertString(string);
    return cachedEncoder.encode(string);
}
function base64ToBase64Url(base64) {
    return base64.replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
}
function base64UrlToBase64(base64url) {
    const base64 = base64url.replaceAll('-', '+').replaceAll('_', '/');
    const padding = (4 - base64.length % 4) % 4;
    return base64 + '='.repeat(padding);
}
// Reference: https://phuoc.ng/collection/this-vs-that/concat-vs-push/
// Important: Keep this value divisible by 3 so intermediate chunks produce no Base64 padding.
const MAX_BLOCK_SIZE = 65_535;
function uint8ArrayToBase64(array, { urlSafe = false } = {}) {
    assertUint8Array(array);
    let base64 = '';
    for(let index = 0; index < array.length; index += MAX_BLOCK_SIZE){
        const chunk = array.subarray(index, index + MAX_BLOCK_SIZE);
        // Required as `btoa` and `atob` don't properly support Unicode: https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
        base64 += globalThis.btoa(String.fromCodePoint.apply(undefined, chunk));
    }
    return urlSafe ? base64ToBase64Url(base64) : base64;
}
function base64ToUint8Array(base64String) {
    assertString(base64String);
    return Uint8Array.from(globalThis.atob(base64UrlToBase64(base64String)), (x)=>x.codePointAt(0));
}
function stringToBase64(string, { urlSafe = false } = {}) {
    assertString(string);
    return uint8ArrayToBase64(stringToUint8Array(string), {
        urlSafe
    });
}
function base64ToString(base64String) {
    assertString(base64String);
    return uint8ArrayToString(base64ToUint8Array(base64String));
}
const byteToHexLookupTable = Array.from({
    length: 256
}, (_, index)=>index.toString(16).padStart(2, '0'));
function uint8ArrayToHex(array) {
    assertUint8Array(array);
    // Concatenating a string is faster than using an array.
    let hexString = '';
    // eslint-disable-next-line unicorn/no-for-loop -- Max performance is critical.
    for(let index = 0; index < array.length; index++){
        hexString += byteToHexLookupTable[array[index]];
    }
    return hexString;
}
const hexToDecimalLookupTable = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
};
function hexToUint8Array(hexString) {
    assertString(hexString);
    if (hexString.length % 2 !== 0) {
        throw new Error('Invalid Hex string length.');
    }
    const resultLength = hexString.length / 2;
    const bytes = new Uint8Array(resultLength);
    for(let index = 0; index < resultLength; index++){
        const highNibble = hexToDecimalLookupTable[hexString[index * 2]];
        const lowNibble = hexToDecimalLookupTable[hexString[index * 2 + 1]];
        if (highNibble === undefined || lowNibble === undefined) {
            throw new Error(`Invalid Hex character encountered at position ${index * 2}`);
        }
        bytes[index] = highNibble << 4 | lowNibble; // eslint-disable-line no-bitwise
    }
    return bytes;
}
function getUintBE(view) {
    const { byteLength } = view;
    if (byteLength === 6) {
        return view.getUint16(0) * 2 ** 32 + view.getUint32(2);
    }
    if (byteLength === 5) {
        return view.getUint8(0) * 2 ** 32 + view.getUint32(1);
    }
    if (byteLength === 4) {
        return view.getUint32(0);
    }
    if (byteLength === 3) {
        return view.getUint8(0) * 2 ** 16 + view.getUint16(1);
    }
    if (byteLength === 2) {
        return view.getUint16(0);
    }
    if (byteLength === 1) {
        return view.getUint8(0);
    }
}
function indexOf(array, value) {
    const arrayLength = array.length;
    const valueLength = value.length;
    if (valueLength === 0) {
        return -1;
    }
    if (valueLength > arrayLength) {
        return -1;
    }
    const validOffsetLength = arrayLength - valueLength;
    for(let index = 0; index <= validOffsetLength; index++){
        let isMatch = true;
        for(let index2 = 0; index2 < valueLength; index2++){
            if (array[index + index2] !== value[index2]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            return index;
        }
    }
    return -1;
}
function includes(array, value) {
    return indexOf(array, value) !== -1;
}
}),
"[project]/node_modules/file-type/util.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stringToBytes",
    ()=>stringToBytes,
    "tarHeaderChecksumMatches",
    ()=>tarHeaderChecksumMatches,
    "uint32SyncSafeToken",
    ()=>uint32SyncSafeToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/token-types/lib/index.js [app-route] (ecmascript)");
;
function stringToBytes(string) {
    return [
        ...string
    ].map((character)=>character.charCodeAt(0)); // eslint-disable-line unicorn/prefer-code-point
}
function tarHeaderChecksumMatches(arrayBuffer, offset = 0) {
    const readSum = Number.parseInt(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](6).get(arrayBuffer, 148).replace(/\0.*$/, '').trim(), 8); // Read sum in header
    if (Number.isNaN(readSum)) {
        return false;
    }
    let sum = 8 * 0x20; // Initialize signed bit sum
    for(let index = offset; index < offset + 148; index++){
        sum += arrayBuffer[index];
    }
    for(let index = offset + 156; index < offset + 512; index++){
        sum += arrayBuffer[index];
    }
    return readSum === sum;
}
const uint32SyncSafeToken = {
    get: (buffer, offset)=>buffer[offset + 3] & 0x7F | buffer[offset + 2] << 7 | buffer[offset + 1] << 14 | buffer[offset] << 21,
    len: 4
};
}),
"[project]/node_modules/file-type/supported.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extensions",
    ()=>extensions,
    "mimeTypes",
    ()=>mimeTypes
]);
const extensions = [
    'jpg',
    'png',
    'apng',
    'gif',
    'webp',
    'flif',
    'xcf',
    'cr2',
    'cr3',
    'orf',
    'arw',
    'dng',
    'nef',
    'rw2',
    'raf',
    'tif',
    'bmp',
    'icns',
    'jxr',
    'psd',
    'indd',
    'zip',
    'tar',
    'rar',
    'gz',
    'bz2',
    '7z',
    'dmg',
    'mp4',
    'mid',
    'mkv',
    'webm',
    'mov',
    'avi',
    'mpg',
    'mp2',
    'mp3',
    'm4a',
    'oga',
    'ogg',
    'ogv',
    'opus',
    'flac',
    'wav',
    'spx',
    'amr',
    'pdf',
    'epub',
    'elf',
    'macho',
    'exe',
    'swf',
    'rtf',
    'wasm',
    'woff',
    'woff2',
    'eot',
    'ttf',
    'otf',
    'ico',
    'flv',
    'ps',
    'xz',
    'sqlite',
    'nes',
    'crx',
    'xpi',
    'cab',
    'deb',
    'ar',
    'rpm',
    'Z',
    'lz',
    'cfb',
    'mxf',
    'mts',
    'blend',
    'bpg',
    'docx',
    'pptx',
    'xlsx',
    '3gp',
    '3g2',
    'j2c',
    'jp2',
    'jpm',
    'jpx',
    'mj2',
    'aif',
    'qcp',
    'odt',
    'ods',
    'odp',
    'xml',
    'mobi',
    'heic',
    'cur',
    'ktx',
    'ape',
    'wv',
    'dcm',
    'ics',
    'glb',
    'pcap',
    'dsf',
    'lnk',
    'alias',
    'voc',
    'ac3',
    'm4v',
    'm4p',
    'm4b',
    'f4v',
    'f4p',
    'f4b',
    'f4a',
    'mie',
    'asf',
    'ogm',
    'ogx',
    'mpc',
    'arrow',
    'shp',
    'aac',
    'mp1',
    'it',
    's3m',
    'xm',
    'ai',
    'skp',
    'avif',
    'eps',
    'lzh',
    'pgp',
    'asar',
    'stl',
    'chm',
    '3mf',
    'zst',
    'jxl',
    'vcf',
    'jls',
    'pst',
    'dwg',
    'parquet',
    'class',
    'arj',
    'cpio',
    'ace',
    'avro',
    'icc',
    'fbx',
    'vsdx'
];
const mimeTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/flif',
    'image/x-xcf',
    'image/x-canon-cr2',
    'image/x-canon-cr3',
    'image/tiff',
    'image/bmp',
    'image/vnd.ms-photo',
    'image/vnd.adobe.photoshop',
    'application/x-indesign',
    'application/epub+zip',
    'application/x-xpinstall',
    'application/vnd.oasis.opendocument.text',
    'application/vnd.oasis.opendocument.spreadsheet',
    'application/vnd.oasis.opendocument.presentation',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/zip',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/gzip',
    'application/x-bzip2',
    'application/x-7z-compressed',
    'application/x-apple-diskimage',
    'application/x-apache-arrow',
    'video/mp4',
    'audio/midi',
    'video/x-matroska',
    'video/webm',
    'video/quicktime',
    'video/vnd.avi',
    'audio/wav',
    'audio/qcelp',
    'audio/x-ms-asf',
    'video/x-ms-asf',
    'application/vnd.ms-asf',
    'video/mpeg',
    'video/3gpp',
    'audio/mpeg',
    'audio/mp4',
    'audio/opus',
    'video/ogg',
    'audio/ogg',
    'application/ogg',
    'audio/x-flac',
    'audio/ape',
    'audio/wavpack',
    'audio/amr',
    'application/pdf',
    'application/x-elf',
    'application/x-mach-binary',
    'application/x-msdownload',
    'application/x-shockwave-flash',
    'application/rtf',
    'application/wasm',
    'font/woff',
    'font/woff2',
    'application/vnd.ms-fontobject',
    'font/ttf',
    'font/otf',
    'image/x-icon',
    'video/x-flv',
    'application/postscript',
    'application/eps',
    'application/x-xz',
    'application/x-sqlite3',
    'application/x-nintendo-nes-rom',
    'application/x-google-chrome-extension',
    'application/vnd.ms-cab-compressed',
    'application/x-deb',
    'application/x-unix-archive',
    'application/x-rpm',
    'application/x-compress',
    'application/x-lzip',
    'application/x-cfb',
    'application/x-mie',
    'application/mxf',
    'video/mp2t',
    'application/x-blender',
    'image/bpg',
    'image/j2c',
    'image/jp2',
    'image/jpx',
    'image/jpm',
    'image/mj2',
    'audio/aiff',
    'application/xml',
    'application/x-mobipocket-ebook',
    'image/heif',
    'image/heif-sequence',
    'image/heic',
    'image/heic-sequence',
    'image/icns',
    'image/ktx',
    'application/dicom',
    'audio/x-musepack',
    'text/calendar',
    'text/vcard',
    'model/gltf-binary',
    'application/vnd.tcpdump.pcap',
    'audio/x-dsf',
    'application/x.ms.shortcut',
    'application/x.apple.alias',
    'audio/x-voc',
    'audio/vnd.dolby.dd-raw',
    'audio/x-m4a',
    'image/apng',
    'image/x-olympus-orf',
    'image/x-sony-arw',
    'image/x-adobe-dng',
    'image/x-nikon-nef',
    'image/x-panasonic-rw2',
    'image/x-fujifilm-raf',
    'video/x-m4v',
    'video/3gpp2',
    'application/x-esri-shape',
    'audio/aac',
    'audio/x-it',
    'audio/x-s3m',
    'audio/x-xm',
    'video/MP1S',
    'video/MP2P',
    'application/vnd.sketchup.skp',
    'image/avif',
    'application/x-lzh-compressed',
    'application/pgp-encrypted',
    'application/x-asar',
    'model/stl',
    'application/vnd.ms-htmlhelp',
    'model/3mf',
    'image/jxl',
    'application/zstd',
    'image/jls',
    'application/vnd.ms-outlook',
    'image/vnd.dwg',
    'application/x-parquet',
    'application/java-vm',
    'application/x-arj',
    'application/x-cpio',
    'application/x-ace-compressed',
    'application/avro',
    'application/vnd.iccprofile',
    'application/x.autodesk.fbx',
    'application/vnd.visio'
];
}),
"[project]/node_modules/file-type/core.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileTypeParser",
    ()=>FileTypeParser,
    "fileTypeFromBlob",
    ()=>fileTypeFromBlob,
    "fileTypeFromBuffer",
    ()=>fileTypeFromBuffer,
    "fileTypeFromStream",
    ()=>fileTypeFromStream,
    "fileTypeFromTokenizer",
    ()=>fileTypeFromTokenizer,
    "reasonableDetectionSizeInBytes",
    ()=>reasonableDetectionSizeInBytes,
    "supportedExtensions",
    ()=>supportedExtensions,
    "supportedMimeTypes",
    ()=>supportedMimeTypes
]);
/**
Primary entry point, Node.js specific entry point is index.js
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/token-types/lib/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/core.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peek-readable/lib/EndOfStreamError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uint8array-extras/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-type/util.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$supported$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-type/supported.js [app-route] (ecmascript)");
;
;
;
;
;
const reasonableDetectionSizeInBytes = 4100; // A fair amount of file-types are detectable within this range.
async function fileTypeFromStream(stream) {
    return new FileTypeParser().fromStream(stream);
}
async function fileTypeFromBuffer(input) {
    return new FileTypeParser().fromBuffer(input);
}
async function fileTypeFromBlob(blob) {
    return new FileTypeParser().fromBlob(blob);
}
function _check(buffer, headers, options) {
    options = {
        offset: 0,
        ...options
    };
    for (const [index, header] of headers.entries()){
        // If a bitmask is set
        if (options.mask) {
            // If header doesn't equal `buf` with bits masked off
            if (header !== (options.mask[index] & buffer[index + options.offset])) {
                return false;
            }
        } else if (header !== buffer[index + options.offset]) {
            return false;
        }
    }
    return true;
}
async function fileTypeFromTokenizer(tokenizer) {
    return new FileTypeParser().fromTokenizer(tokenizer);
}
class FileTypeParser {
    constructor(options){
        this.detectors = options?.customDetectors;
        this.fromTokenizer = this.fromTokenizer.bind(this);
        this.fromBuffer = this.fromBuffer.bind(this);
        this.parse = this.parse.bind(this);
    }
    async fromTokenizer(tokenizer) {
        const initialPosition = tokenizer.position;
        for (const detector of this.detectors || []){
            const fileType = await detector(tokenizer);
            if (fileType) {
                return fileType;
            }
            if (initialPosition !== tokenizer.position) {
                return undefined; // Cannot proceed scanning of the tokenizer is at an arbitrary position
            }
        }
        return this.parse(tokenizer);
    }
    async fromBuffer(input) {
        if (!(input instanceof Uint8Array || input instanceof ArrayBuffer)) {
            throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof input}\``);
        }
        const buffer = input instanceof Uint8Array ? input : new Uint8Array(input);
        if (!(buffer?.length > 1)) {
            return;
        }
        return this.fromTokenizer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromBuffer"](buffer));
    }
    async fromBlob(blob) {
        return this.fromStream(blob.stream());
    }
    async fromStream(stream) {
        const tokenizer = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromWebStream"](stream);
        try {
            return await this.fromTokenizer(tokenizer);
        } finally{
            await tokenizer.close();
        }
    }
    check(header, options) {
        return _check(this.buffer, header, options);
    }
    checkString(header, options) {
        return this.check((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringToBytes"])(header), options);
    }
    async parse(tokenizer) {
        this.buffer = new Uint8Array(reasonableDetectionSizeInBytes);
        // Keep reading until EOF if the file size is unknown.
        if (tokenizer.fileInfo.size === undefined) {
            tokenizer.fileInfo.size = Number.MAX_SAFE_INTEGER;
        }
        this.tokenizer = tokenizer;
        await tokenizer.peekBuffer(this.buffer, {
            length: 12,
            mayBeLess: true
        });
        // -- 2-byte signatures --
        if (this.check([
            0x42,
            0x4D
        ])) {
            return {
                ext: 'bmp',
                mime: 'image/bmp'
            };
        }
        if (this.check([
            0x0B,
            0x77
        ])) {
            return {
                ext: 'ac3',
                mime: 'audio/vnd.dolby.dd-raw'
            };
        }
        if (this.check([
            0x78,
            0x01
        ])) {
            return {
                ext: 'dmg',
                mime: 'application/x-apple-diskimage'
            };
        }
        if (this.check([
            0x4D,
            0x5A
        ])) {
            return {
                ext: 'exe',
                mime: 'application/x-msdownload'
            };
        }
        if (this.check([
            0x25,
            0x21
        ])) {
            await tokenizer.peekBuffer(this.buffer, {
                length: 24,
                mayBeLess: true
            });
            if (this.checkString('PS-Adobe-', {
                offset: 2
            }) && this.checkString(' EPSF-', {
                offset: 14
            })) {
                return {
                    ext: 'eps',
                    mime: 'application/eps'
                };
            }
            return {
                ext: 'ps',
                mime: 'application/postscript'
            };
        }
        if (this.check([
            0x1F,
            0xA0
        ]) || this.check([
            0x1F,
            0x9D
        ])) {
            return {
                ext: 'Z',
                mime: 'application/x-compress'
            };
        }
        if (this.check([
            0xC7,
            0x71
        ])) {
            return {
                ext: 'cpio',
                mime: 'application/x-cpio'
            };
        }
        if (this.check([
            0x60,
            0xEA
        ])) {
            return {
                ext: 'arj',
                mime: 'application/x-arj'
            };
        }
        // -- 3-byte signatures --
        if (this.check([
            0xEF,
            0xBB,
            0xBF
        ])) {
            // Strip off UTF-8-BOM
            this.tokenizer.ignore(3);
            return this.parse(tokenizer);
        }
        if (this.check([
            0x47,
            0x49,
            0x46
        ])) {
            return {
                ext: 'gif',
                mime: 'image/gif'
            };
        }
        if (this.check([
            0x49,
            0x49,
            0xBC
        ])) {
            return {
                ext: 'jxr',
                mime: 'image/vnd.ms-photo'
            };
        }
        if (this.check([
            0x1F,
            0x8B,
            0x8
        ])) {
            return {
                ext: 'gz',
                mime: 'application/gzip'
            };
        }
        if (this.check([
            0x42,
            0x5A,
            0x68
        ])) {
            return {
                ext: 'bz2',
                mime: 'application/x-bzip2'
            };
        }
        if (this.checkString('ID3')) {
            await tokenizer.ignore(6); // Skip ID3 header until the header size
            const id3HeaderLength = await tokenizer.readToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uint32SyncSafeToken"]);
            if (tokenizer.position + id3HeaderLength > tokenizer.fileInfo.size) {
                // Guess file type based on ID3 header for backward compatibility
                return {
                    ext: 'mp3',
                    mime: 'audio/mpeg'
                };
            }
            await tokenizer.ignore(id3HeaderLength);
            return this.fromTokenizer(tokenizer); // Skip ID3 header, recursion
        }
        // Musepack, SV7
        if (this.checkString('MP+')) {
            return {
                ext: 'mpc',
                mime: 'audio/x-musepack'
            };
        }
        if ((this.buffer[0] === 0x43 || this.buffer[0] === 0x46) && this.check([
            0x57,
            0x53
        ], {
            offset: 1
        })) {
            return {
                ext: 'swf',
                mime: 'application/x-shockwave-flash'
            };
        }
        // -- 4-byte signatures --
        // Requires a sample size of 4 bytes
        if (this.check([
            0xFF,
            0xD8,
            0xFF
        ])) {
            if (this.check([
                0xF7
            ], {
                offset: 3
            })) {
                return {
                    ext: 'jls',
                    mime: 'image/jls'
                };
            }
            return {
                ext: 'jpg',
                mime: 'image/jpeg'
            };
        }
        if (this.check([
            0x4F,
            0x62,
            0x6A,
            0x01
        ])) {
            return {
                ext: 'avro',
                mime: 'application/avro'
            };
        }
        if (this.checkString('FLIF')) {
            return {
                ext: 'flif',
                mime: 'image/flif'
            };
        }
        if (this.checkString('8BPS')) {
            return {
                ext: 'psd',
                mime: 'image/vnd.adobe.photoshop'
            };
        }
        if (this.checkString('WEBP', {
            offset: 8
        })) {
            return {
                ext: 'webp',
                mime: 'image/webp'
            };
        }
        // Musepack, SV8
        if (this.checkString('MPCK')) {
            return {
                ext: 'mpc',
                mime: 'audio/x-musepack'
            };
        }
        if (this.checkString('FORM')) {
            return {
                ext: 'aif',
                mime: 'audio/aiff'
            };
        }
        if (this.checkString('icns', {
            offset: 0
        })) {
            return {
                ext: 'icns',
                mime: 'image/icns'
            };
        }
        // Zip-based file formats
        // Need to be before the `zip` check
        if (this.check([
            0x50,
            0x4B,
            0x3,
            0x4
        ])) {
            try {
                while(tokenizer.position + 30 < tokenizer.fileInfo.size){
                    await tokenizer.readBuffer(this.buffer, {
                        length: 30
                    });
                    const view = new DataView(this.buffer.buffer);
                    // https://en.wikipedia.org/wiki/Zip_(file_format)#File_headers
                    const zipHeader = {
                        compressedSize: view.getUint32(18, true),
                        uncompressedSize: view.getUint32(22, true),
                        filenameLength: view.getUint16(26, true),
                        extraFieldLength: view.getUint16(28, true)
                    };
                    zipHeader.filename = await tokenizer.readToken(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](zipHeader.filenameLength, 'utf-8'));
                    await tokenizer.ignore(zipHeader.extraFieldLength);
                    // Assumes signed `.xpi` from addons.mozilla.org
                    if (zipHeader.filename === 'META-INF/mozilla.rsa') {
                        return {
                            ext: 'xpi',
                            mime: 'application/x-xpinstall'
                        };
                    }
                    if (zipHeader.filename.endsWith('.rels') || zipHeader.filename.endsWith('.xml')) {
                        const type = zipHeader.filename.split('/')[0];
                        switch(type){
                            case '_rels':
                                break;
                            case 'word':
                                return {
                                    ext: 'docx',
                                    mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                                };
                            case 'ppt':
                                return {
                                    ext: 'pptx',
                                    mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
                                };
                            case 'xl':
                                return {
                                    ext: 'xlsx',
                                    mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                                };
                            case 'visio':
                                return {
                                    ext: 'vsdx',
                                    mime: 'application/vnd.visio'
                                };
                            default:
                                break;
                        }
                    }
                    if (zipHeader.filename.startsWith('xl/')) {
                        return {
                            ext: 'xlsx',
                            mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                        };
                    }
                    if (zipHeader.filename.startsWith('3D/') && zipHeader.filename.endsWith('.model')) {
                        return {
                            ext: '3mf',
                            mime: 'model/3mf'
                        };
                    }
                    // The docx, xlsx and pptx file types extend the Office Open XML file format:
                    // https://en.wikipedia.org/wiki/Office_Open_XML_file_formats
                    // We look for:
                    // - one entry named '[Content_Types].xml' or '_rels/.rels',
                    // - one entry indicating specific type of file.
                    // MS Office, OpenOffice and LibreOffice may put the parts in different order, so the check should not rely on it.
                    if (zipHeader.filename === 'mimetype' && zipHeader.compressedSize === zipHeader.uncompressedSize) {
                        let mimeType = await tokenizer.readToken(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](zipHeader.compressedSize, 'utf-8'));
                        mimeType = mimeType.trim();
                        switch(mimeType){
                            case 'application/epub+zip':
                                return {
                                    ext: 'epub',
                                    mime: 'application/epub+zip'
                                };
                            case 'application/vnd.oasis.opendocument.text':
                                return {
                                    ext: 'odt',
                                    mime: 'application/vnd.oasis.opendocument.text'
                                };
                            case 'application/vnd.oasis.opendocument.spreadsheet':
                                return {
                                    ext: 'ods',
                                    mime: 'application/vnd.oasis.opendocument.spreadsheet'
                                };
                            case 'application/vnd.oasis.opendocument.presentation':
                                return {
                                    ext: 'odp',
                                    mime: 'application/vnd.oasis.opendocument.presentation'
                                };
                            default:
                        }
                    }
                    // Try to find next header manually when current one is corrupted
                    if (zipHeader.compressedSize === 0) {
                        let nextHeaderIndex = -1;
                        while(nextHeaderIndex < 0 && tokenizer.position < tokenizer.fileInfo.size){
                            await tokenizer.peekBuffer(this.buffer, {
                                mayBeLess: true
                            });
                            nextHeaderIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["indexOf"])(this.buffer, new Uint8Array([
                                0x50,
                                0x4B,
                                0x03,
                                0x04
                            ]));
                            // Move position to the next header if found, skip the whole buffer otherwise
                            await tokenizer.ignore(nextHeaderIndex >= 0 ? nextHeaderIndex : this.buffer.length);
                        }
                    } else {
                        await tokenizer.ignore(zipHeader.compressedSize);
                    }
                }
            } catch (error) {
                if (!(error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"])) {
                    throw error;
                }
            }
            return {
                ext: 'zip',
                mime: 'application/zip'
            };
        }
        if (this.checkString('OggS')) {
            // This is an OGG container
            await tokenizer.ignore(28);
            const type = new Uint8Array(8);
            await tokenizer.readBuffer(type);
            // Needs to be before `ogg` check
            if (_check(type, [
                0x4F,
                0x70,
                0x75,
                0x73,
                0x48,
                0x65,
                0x61,
                0x64
            ])) {
                return {
                    ext: 'opus',
                    mime: 'audio/opus'
                };
            }
            // If ' theora' in header.
            if (_check(type, [
                0x80,
                0x74,
                0x68,
                0x65,
                0x6F,
                0x72,
                0x61
            ])) {
                return {
                    ext: 'ogv',
                    mime: 'video/ogg'
                };
            }
            // If '\x01video' in header.
            if (_check(type, [
                0x01,
                0x76,
                0x69,
                0x64,
                0x65,
                0x6F,
                0x00
            ])) {
                return {
                    ext: 'ogm',
                    mime: 'video/ogg'
                };
            }
            // If ' FLAC' in header  https://xiph.org/flac/faq.html
            if (_check(type, [
                0x7F,
                0x46,
                0x4C,
                0x41,
                0x43
            ])) {
                return {
                    ext: 'oga',
                    mime: 'audio/ogg'
                };
            }
            // 'Speex  ' in header https://en.wikipedia.org/wiki/Speex
            if (_check(type, [
                0x53,
                0x70,
                0x65,
                0x65,
                0x78,
                0x20,
                0x20
            ])) {
                return {
                    ext: 'spx',
                    mime: 'audio/ogg'
                };
            }
            // If '\x01vorbis' in header
            if (_check(type, [
                0x01,
                0x76,
                0x6F,
                0x72,
                0x62,
                0x69,
                0x73
            ])) {
                return {
                    ext: 'ogg',
                    mime: 'audio/ogg'
                };
            }
            // Default OGG container https://www.iana.org/assignments/media-types/application/ogg
            return {
                ext: 'ogx',
                mime: 'application/ogg'
            };
        }
        if (this.check([
            0x50,
            0x4B
        ]) && (this.buffer[2] === 0x3 || this.buffer[2] === 0x5 || this.buffer[2] === 0x7) && (this.buffer[3] === 0x4 || this.buffer[3] === 0x6 || this.buffer[3] === 0x8)) {
            return {
                ext: 'zip',
                mime: 'application/zip'
            };
        }
        //
        // File Type Box (https://en.wikipedia.org/wiki/ISO_base_media_file_format)
        // It's not required to be first, but it's recommended to be. Almost all ISO base media files start with `ftyp` box.
        // `ftyp` box must contain a brand major identifier, which must consist of ISO 8859-1 printable characters.
        // Here we check for 8859-1 printable characters (for simplicity, it's a mask which also catches one non-printable character).
        if (this.checkString('ftyp', {
            offset: 4
        }) && (this.buffer[8] & 0x60) !== 0x00 // Brand major, first character ASCII?
        ) {
            // They all can have MIME `video/mp4` except `application/mp4` special-case which is hard to detect.
            // For some cases, we're specific, everything else falls to `video/mp4` with `mp4` extension.
            const brandMajor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](4, 'latin1').get(this.buffer, 8).replace('\0', ' ').trim();
            switch(brandMajor){
                case 'avif':
                case 'avis':
                    return {
                        ext: 'avif',
                        mime: 'image/avif'
                    };
                case 'mif1':
                    return {
                        ext: 'heic',
                        mime: 'image/heif'
                    };
                case 'msf1':
                    return {
                        ext: 'heic',
                        mime: 'image/heif-sequence'
                    };
                case 'heic':
                case 'heix':
                    return {
                        ext: 'heic',
                        mime: 'image/heic'
                    };
                case 'hevc':
                case 'hevx':
                    return {
                        ext: 'heic',
                        mime: 'image/heic-sequence'
                    };
                case 'qt':
                    return {
                        ext: 'mov',
                        mime: 'video/quicktime'
                    };
                case 'M4V':
                case 'M4VH':
                case 'M4VP':
                    return {
                        ext: 'm4v',
                        mime: 'video/x-m4v'
                    };
                case 'M4P':
                    return {
                        ext: 'm4p',
                        mime: 'video/mp4'
                    };
                case 'M4B':
                    return {
                        ext: 'm4b',
                        mime: 'audio/mp4'
                    };
                case 'M4A':
                    return {
                        ext: 'm4a',
                        mime: 'audio/x-m4a'
                    };
                case 'F4V':
                    return {
                        ext: 'f4v',
                        mime: 'video/mp4'
                    };
                case 'F4P':
                    return {
                        ext: 'f4p',
                        mime: 'video/mp4'
                    };
                case 'F4A':
                    return {
                        ext: 'f4a',
                        mime: 'audio/mp4'
                    };
                case 'F4B':
                    return {
                        ext: 'f4b',
                        mime: 'audio/mp4'
                    };
                case 'crx':
                    return {
                        ext: 'cr3',
                        mime: 'image/x-canon-cr3'
                    };
                default:
                    if (brandMajor.startsWith('3g')) {
                        if (brandMajor.startsWith('3g2')) {
                            return {
                                ext: '3g2',
                                mime: 'video/3gpp2'
                            };
                        }
                        return {
                            ext: '3gp',
                            mime: 'video/3gpp'
                        };
                    }
                    return {
                        ext: 'mp4',
                        mime: 'video/mp4'
                    };
            }
        }
        if (this.checkString('MThd')) {
            return {
                ext: 'mid',
                mime: 'audio/midi'
            };
        }
        if (this.checkString('wOFF') && (this.check([
            0x00,
            0x01,
            0x00,
            0x00
        ], {
            offset: 4
        }) || this.checkString('OTTO', {
            offset: 4
        }))) {
            return {
                ext: 'woff',
                mime: 'font/woff'
            };
        }
        if (this.checkString('wOF2') && (this.check([
            0x00,
            0x01,
            0x00,
            0x00
        ], {
            offset: 4
        }) || this.checkString('OTTO', {
            offset: 4
        }))) {
            return {
                ext: 'woff2',
                mime: 'font/woff2'
            };
        }
        if (this.check([
            0xD4,
            0xC3,
            0xB2,
            0xA1
        ]) || this.check([
            0xA1,
            0xB2,
            0xC3,
            0xD4
        ])) {
            return {
                ext: 'pcap',
                mime: 'application/vnd.tcpdump.pcap'
            };
        }
        // Sony DSD Stream File (DSF)
        if (this.checkString('DSD ')) {
            return {
                ext: 'dsf',
                mime: 'audio/x-dsf'
            };
        }
        if (this.checkString('LZIP')) {
            return {
                ext: 'lz',
                mime: 'application/x-lzip'
            };
        }
        if (this.checkString('fLaC')) {
            return {
                ext: 'flac',
                mime: 'audio/x-flac'
            };
        }
        if (this.check([
            0x42,
            0x50,
            0x47,
            0xFB
        ])) {
            return {
                ext: 'bpg',
                mime: 'image/bpg'
            };
        }
        if (this.checkString('wvpk')) {
            return {
                ext: 'wv',
                mime: 'audio/wavpack'
            };
        }
        if (this.checkString('%PDF')) {
            try {
                await tokenizer.ignore(1350);
                const maxBufferSize = 10 * 1024 * 1024;
                const buffer = new Uint8Array(Math.min(maxBufferSize, tokenizer.fileInfo.size));
                await tokenizer.readBuffer(buffer, {
                    mayBeLess: true
                });
                // Check if this is an Adobe Illustrator file
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["includes"])(buffer, new TextEncoder().encode('AIPrivateData'))) {
                    return {
                        ext: 'ai',
                        mime: 'application/postscript'
                    };
                }
            } catch (error) {
                // Swallow end of stream error if file is too small for the Adobe AI check
                if (!(error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peek$2d$readable$2f$lib$2f$EndOfStreamError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"])) {
                    throw error;
                }
            }
            // Assume this is just a normal PDF
            return {
                ext: 'pdf',
                mime: 'application/pdf'
            };
        }
        if (this.check([
            0x00,
            0x61,
            0x73,
            0x6D
        ])) {
            return {
                ext: 'wasm',
                mime: 'application/wasm'
            };
        }
        // TIFF, little-endian type
        if (this.check([
            0x49,
            0x49
        ])) {
            const fileType = await this.readTiffHeader(false);
            if (fileType) {
                return fileType;
            }
        }
        // TIFF, big-endian type
        if (this.check([
            0x4D,
            0x4D
        ])) {
            const fileType = await this.readTiffHeader(true);
            if (fileType) {
                return fileType;
            }
        }
        if (this.checkString('MAC ')) {
            return {
                ext: 'ape',
                mime: 'audio/ape'
            };
        }
        // https://github.com/file/file/blob/master/magic/Magdir/matroska
        if (this.check([
            0x1A,
            0x45,
            0xDF,
            0xA3
        ])) {
            async function readField() {
                const msb = await tokenizer.peekNumber(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT8"]);
                let mask = 0x80;
                let ic = 0; // 0 = A, 1 = B, 2 = C, 3 = D
                while((msb & mask) === 0 && mask !== 0){
                    ++ic;
                    mask >>= 1;
                }
                const id = new Uint8Array(ic + 1);
                await tokenizer.readBuffer(id);
                return id;
            }
            async function readElement() {
                const idField = await readField();
                const lengthField = await readField();
                lengthField[0] ^= 0x80 >> lengthField.length - 1;
                const nrLength = Math.min(6, lengthField.length); // JavaScript can max read 6 bytes integer
                const idView = new DataView(idField.buffer);
                const lengthView = new DataView(lengthField.buffer, lengthField.length - nrLength, nrLength);
                return {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUintBE"])(idView),
                    len: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8array$2d$extras$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUintBE"])(lengthView)
                };
            }
            async function readChildren(children) {
                while(children > 0){
                    const element = await readElement();
                    if (element.id === 0x42_82) {
                        const rawValue = await tokenizer.readToken(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](element.len));
                        return rawValue.replaceAll(/\00.*$/g, ''); // Return DocType
                    }
                    await tokenizer.ignore(element.len); // ignore payload
                    --children;
                }
            }
            const re = await readElement();
            const docType = await readChildren(re.len);
            switch(docType){
                case 'webm':
                    return {
                        ext: 'webm',
                        mime: 'video/webm'
                    };
                case 'matroska':
                    return {
                        ext: 'mkv',
                        mime: 'video/x-matroska'
                    };
                default:
                    return;
            }
        }
        // RIFF file format which might be AVI, WAV, QCP, etc
        if (this.check([
            0x52,
            0x49,
            0x46,
            0x46
        ])) {
            if (this.check([
                0x41,
                0x56,
                0x49
            ], {
                offset: 8
            })) {
                return {
                    ext: 'avi',
                    mime: 'video/vnd.avi'
                };
            }
            if (this.check([
                0x57,
                0x41,
                0x56,
                0x45
            ], {
                offset: 8
            })) {
                return {
                    ext: 'wav',
                    mime: 'audio/wav'
                };
            }
            // QLCM, QCP file
            if (this.check([
                0x51,
                0x4C,
                0x43,
                0x4D
            ], {
                offset: 8
            })) {
                return {
                    ext: 'qcp',
                    mime: 'audio/qcelp'
                };
            }
        }
        if (this.checkString('SQLi')) {
            return {
                ext: 'sqlite',
                mime: 'application/x-sqlite3'
            };
        }
        if (this.check([
            0x4E,
            0x45,
            0x53,
            0x1A
        ])) {
            return {
                ext: 'nes',
                mime: 'application/x-nintendo-nes-rom'
            };
        }
        if (this.checkString('Cr24')) {
            return {
                ext: 'crx',
                mime: 'application/x-google-chrome-extension'
            };
        }
        if (this.checkString('MSCF') || this.checkString('ISc(')) {
            return {
                ext: 'cab',
                mime: 'application/vnd.ms-cab-compressed'
            };
        }
        if (this.check([
            0xED,
            0xAB,
            0xEE,
            0xDB
        ])) {
            return {
                ext: 'rpm',
                mime: 'application/x-rpm'
            };
        }
        if (this.check([
            0xC5,
            0xD0,
            0xD3,
            0xC6
        ])) {
            return {
                ext: 'eps',
                mime: 'application/eps'
            };
        }
        if (this.check([
            0x28,
            0xB5,
            0x2F,
            0xFD
        ])) {
            return {
                ext: 'zst',
                mime: 'application/zstd'
            };
        }
        if (this.check([
            0x7F,
            0x45,
            0x4C,
            0x46
        ])) {
            return {
                ext: 'elf',
                mime: 'application/x-elf'
            };
        }
        if (this.check([
            0x21,
            0x42,
            0x44,
            0x4E
        ])) {
            return {
                ext: 'pst',
                mime: 'application/vnd.ms-outlook'
            };
        }
        if (this.checkString('PAR1')) {
            return {
                ext: 'parquet',
                mime: 'application/x-parquet'
            };
        }
        if (this.check([
            0xCF,
            0xFA,
            0xED,
            0xFE
        ])) {
            return {
                ext: 'macho',
                mime: 'application/x-mach-binary'
            };
        }
        // -- 5-byte signatures --
        if (this.check([
            0x4F,
            0x54,
            0x54,
            0x4F,
            0x00
        ])) {
            return {
                ext: 'otf',
                mime: 'font/otf'
            };
        }
        if (this.checkString('#!AMR')) {
            return {
                ext: 'amr',
                mime: 'audio/amr'
            };
        }
        if (this.checkString('{\\rtf')) {
            return {
                ext: 'rtf',
                mime: 'application/rtf'
            };
        }
        if (this.check([
            0x46,
            0x4C,
            0x56,
            0x01
        ])) {
            return {
                ext: 'flv',
                mime: 'video/x-flv'
            };
        }
        if (this.checkString('IMPM')) {
            return {
                ext: 'it',
                mime: 'audio/x-it'
            };
        }
        if (this.checkString('-lh0-', {
            offset: 2
        }) || this.checkString('-lh1-', {
            offset: 2
        }) || this.checkString('-lh2-', {
            offset: 2
        }) || this.checkString('-lh3-', {
            offset: 2
        }) || this.checkString('-lh4-', {
            offset: 2
        }) || this.checkString('-lh5-', {
            offset: 2
        }) || this.checkString('-lh6-', {
            offset: 2
        }) || this.checkString('-lh7-', {
            offset: 2
        }) || this.checkString('-lzs-', {
            offset: 2
        }) || this.checkString('-lz4-', {
            offset: 2
        }) || this.checkString('-lz5-', {
            offset: 2
        }) || this.checkString('-lhd-', {
            offset: 2
        })) {
            return {
                ext: 'lzh',
                mime: 'application/x-lzh-compressed'
            };
        }
        // MPEG program stream (PS or MPEG-PS)
        if (this.check([
            0x00,
            0x00,
            0x01,
            0xBA
        ])) {
            //  MPEG-PS, MPEG-1 Part 1
            if (this.check([
                0x21
            ], {
                offset: 4,
                mask: [
                    0xF1
                ]
            })) {
                return {
                    ext: 'mpg',
                    mime: 'video/MP1S'
                };
            }
            // MPEG-PS, MPEG-2 Part 1
            if (this.check([
                0x44
            ], {
                offset: 4,
                mask: [
                    0xC4
                ]
            })) {
                return {
                    ext: 'mpg',
                    mime: 'video/MP2P'
                };
            }
        }
        if (this.checkString('ITSF')) {
            return {
                ext: 'chm',
                mime: 'application/vnd.ms-htmlhelp'
            };
        }
        if (this.check([
            0xCA,
            0xFE,
            0xBA,
            0xBE
        ])) {
            return {
                ext: 'class',
                mime: 'application/java-vm'
            };
        }
        // -- 6-byte signatures --
        if (this.check([
            0xFD,
            0x37,
            0x7A,
            0x58,
            0x5A,
            0x00
        ])) {
            return {
                ext: 'xz',
                mime: 'application/x-xz'
            };
        }
        if (this.checkString('<?xml ')) {
            return {
                ext: 'xml',
                mime: 'application/xml'
            };
        }
        if (this.check([
            0x37,
            0x7A,
            0xBC,
            0xAF,
            0x27,
            0x1C
        ])) {
            return {
                ext: '7z',
                mime: 'application/x-7z-compressed'
            };
        }
        if (this.check([
            0x52,
            0x61,
            0x72,
            0x21,
            0x1A,
            0x7
        ]) && (this.buffer[6] === 0x0 || this.buffer[6] === 0x1)) {
            return {
                ext: 'rar',
                mime: 'application/x-rar-compressed'
            };
        }
        if (this.checkString('solid ')) {
            return {
                ext: 'stl',
                mime: 'model/stl'
            };
        }
        if (this.checkString('AC')) {
            const version = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](4, 'latin1').get(this.buffer, 2);
            if (version.match('^d*') && version >= 1000 && version <= 1050) {
                return {
                    ext: 'dwg',
                    mime: 'image/vnd.dwg'
                };
            }
        }
        if (this.checkString('070707')) {
            return {
                ext: 'cpio',
                mime: 'application/x-cpio'
            };
        }
        // -- 7-byte signatures --
        if (this.checkString('BLENDER')) {
            return {
                ext: 'blend',
                mime: 'application/x-blender'
            };
        }
        if (this.checkString('!<arch>')) {
            await tokenizer.ignore(8);
            const string = await tokenizer.readToken(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](13, 'ascii'));
            if (string === 'debian-binary') {
                return {
                    ext: 'deb',
                    mime: 'application/x-deb'
                };
            }
            return {
                ext: 'ar',
                mime: 'application/x-unix-archive'
            };
        }
        if (this.checkString('**ACE', {
            offset: 7
        })) {
            await tokenizer.peekBuffer(this.buffer, {
                length: 14,
                mayBeLess: true
            });
            if (this.checkString('**', {
                offset: 12
            })) {
                return {
                    ext: 'ace',
                    mime: 'application/x-ace-compressed'
                };
            }
        }
        // -- 8-byte signatures --
        if (this.check([
            0x89,
            0x50,
            0x4E,
            0x47,
            0x0D,
            0x0A,
            0x1A,
            0x0A
        ])) {
            // APNG format (https://wiki.mozilla.org/APNG_Specification)
            // 1. Find the first IDAT (image data) chunk (49 44 41 54)
            // 2. Check if there is an "acTL" chunk before the IDAT one (61 63 54 4C)
            // Offset calculated as follows:
            // - 8 bytes: PNG signature
            // - 4 (length) + 4 (chunk type) + 13 (chunk data) + 4 (CRC): IHDR chunk
            await tokenizer.ignore(8); // ignore PNG signature
            async function readChunkHeader() {
                return {
                    length: await tokenizer.readToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INT32_BE"]),
                    type: await tokenizer.readToken(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](4, 'latin1'))
                };
            }
            do {
                const chunk = await readChunkHeader();
                if (chunk.length < 0) {
                    return; // Invalid chunk length
                }
                switch(chunk.type){
                    case 'IDAT':
                        return {
                            ext: 'png',
                            mime: 'image/png'
                        };
                    case 'acTL':
                        return {
                            ext: 'apng',
                            mime: 'image/apng'
                        };
                    default:
                        await tokenizer.ignore(chunk.length + 4); // Ignore chunk-data + CRC
                }
            }while (tokenizer.position + 8 < tokenizer.fileInfo.size)
            return {
                ext: 'png',
                mime: 'image/png'
            };
        }
        if (this.check([
            0x41,
            0x52,
            0x52,
            0x4F,
            0x57,
            0x31,
            0x00,
            0x00
        ])) {
            return {
                ext: 'arrow',
                mime: 'application/x-apache-arrow'
            };
        }
        if (this.check([
            0x67,
            0x6C,
            0x54,
            0x46,
            0x02,
            0x00,
            0x00,
            0x00
        ])) {
            return {
                ext: 'glb',
                mime: 'model/gltf-binary'
            };
        }
        // `mov` format variants
        if (this.check([
            0x66,
            0x72,
            0x65,
            0x65
        ], {
            offset: 4
        }) // `free`
         || this.check([
            0x6D,
            0x64,
            0x61,
            0x74
        ], {
            offset: 4
        }) // `mdat` MJPEG
         || this.check([
            0x6D,
            0x6F,
            0x6F,
            0x76
        ], {
            offset: 4
        }) // `moov`
         || this.check([
            0x77,
            0x69,
            0x64,
            0x65
        ], {
            offset: 4
        }) // `wide`
        ) {
            return {
                ext: 'mov',
                mime: 'video/quicktime'
            };
        }
        // -- 9-byte signatures --
        if (this.check([
            0x49,
            0x49,
            0x52,
            0x4F,
            0x08,
            0x00,
            0x00,
            0x00,
            0x18
        ])) {
            return {
                ext: 'orf',
                mime: 'image/x-olympus-orf'
            };
        }
        if (this.checkString('gimp xcf ')) {
            return {
                ext: 'xcf',
                mime: 'image/x-xcf'
            };
        }
        // -- 12-byte signatures --
        if (this.check([
            0x49,
            0x49,
            0x55,
            0x00,
            0x18,
            0x00,
            0x00,
            0x00,
            0x88,
            0xE7,
            0x74,
            0xD8
        ])) {
            return {
                ext: 'rw2',
                mime: 'image/x-panasonic-rw2'
            };
        }
        // ASF_Header_Object first 80 bytes
        if (this.check([
            0x30,
            0x26,
            0xB2,
            0x75,
            0x8E,
            0x66,
            0xCF,
            0x11,
            0xA6,
            0xD9
        ])) {
            async function readHeader() {
                const guid = new Uint8Array(16);
                await tokenizer.readBuffer(guid);
                return {
                    id: guid,
                    size: Number(await tokenizer.readToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT64_LE"]))
                };
            }
            await tokenizer.ignore(30);
            // Search for header should be in first 1KB of file.
            while(tokenizer.position + 24 < tokenizer.fileInfo.size){
                const header = await readHeader();
                let payload = header.size - 24;
                if (_check(header.id, [
                    0x91,
                    0x07,
                    0xDC,
                    0xB7,
                    0xB7,
                    0xA9,
                    0xCF,
                    0x11,
                    0x8E,
                    0xE6,
                    0x00,
                    0xC0,
                    0x0C,
                    0x20,
                    0x53,
                    0x65
                ])) {
                    // Sync on Stream-Properties-Object (B7DC0791-A9B7-11CF-8EE6-00C00C205365)
                    const typeId = new Uint8Array(16);
                    payload -= await tokenizer.readBuffer(typeId);
                    if (_check(typeId, [
                        0x40,
                        0x9E,
                        0x69,
                        0xF8,
                        0x4D,
                        0x5B,
                        0xCF,
                        0x11,
                        0xA8,
                        0xFD,
                        0x00,
                        0x80,
                        0x5F,
                        0x5C,
                        0x44,
                        0x2B
                    ])) {
                        // Found audio:
                        return {
                            ext: 'asf',
                            mime: 'audio/x-ms-asf'
                        };
                    }
                    if (_check(typeId, [
                        0xC0,
                        0xEF,
                        0x19,
                        0xBC,
                        0x4D,
                        0x5B,
                        0xCF,
                        0x11,
                        0xA8,
                        0xFD,
                        0x00,
                        0x80,
                        0x5F,
                        0x5C,
                        0x44,
                        0x2B
                    ])) {
                        // Found video:
                        return {
                            ext: 'asf',
                            mime: 'video/x-ms-asf'
                        };
                    }
                    break;
                }
                await tokenizer.ignore(payload);
            }
            // Default to ASF generic extension
            return {
                ext: 'asf',
                mime: 'application/vnd.ms-asf'
            };
        }
        if (this.check([
            0xAB,
            0x4B,
            0x54,
            0x58,
            0x20,
            0x31,
            0x31,
            0xBB,
            0x0D,
            0x0A,
            0x1A,
            0x0A
        ])) {
            return {
                ext: 'ktx',
                mime: 'image/ktx'
            };
        }
        if ((this.check([
            0x7E,
            0x10,
            0x04
        ]) || this.check([
            0x7E,
            0x18,
            0x04
        ])) && this.check([
            0x30,
            0x4D,
            0x49,
            0x45
        ], {
            offset: 4
        })) {
            return {
                ext: 'mie',
                mime: 'application/x-mie'
            };
        }
        if (this.check([
            0x27,
            0x0A,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00
        ], {
            offset: 2
        })) {
            return {
                ext: 'shp',
                mime: 'application/x-esri-shape'
            };
        }
        if (this.check([
            0xFF,
            0x4F,
            0xFF,
            0x51
        ])) {
            return {
                ext: 'j2c',
                mime: 'image/j2c'
            };
        }
        if (this.check([
            0x00,
            0x00,
            0x00,
            0x0C,
            0x6A,
            0x50,
            0x20,
            0x20,
            0x0D,
            0x0A,
            0x87,
            0x0A
        ])) {
            // JPEG-2000 family
            await tokenizer.ignore(20);
            const type = await tokenizer.readToken(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringType"](4, 'ascii'));
            switch(type){
                case 'jp2 ':
                    return {
                        ext: 'jp2',
                        mime: 'image/jp2'
                    };
                case 'jpx ':
                    return {
                        ext: 'jpx',
                        mime: 'image/jpx'
                    };
                case 'jpm ':
                    return {
                        ext: 'jpm',
                        mime: 'image/jpm'
                    };
                case 'mjp2':
                    return {
                        ext: 'mj2',
                        mime: 'image/mj2'
                    };
                default:
                    return;
            }
        }
        if (this.check([
            0xFF,
            0x0A
        ]) || this.check([
            0x00,
            0x00,
            0x00,
            0x0C,
            0x4A,
            0x58,
            0x4C,
            0x20,
            0x0D,
            0x0A,
            0x87,
            0x0A
        ])) {
            return {
                ext: 'jxl',
                mime: 'image/jxl'
            };
        }
        if (this.check([
            0xFE,
            0xFF
        ])) {
            if (this.check([
                0,
                60,
                0,
                63,
                0,
                120,
                0,
                109,
                0,
                108
            ], {
                offset: 2
            })) {
                return {
                    ext: 'xml',
                    mime: 'application/xml'
                };
            }
            return undefined; // Some unknown text based format
        }
        // -- Unsafe signatures --
        if (this.check([
            0x0,
            0x0,
            0x1,
            0xBA
        ]) || this.check([
            0x0,
            0x0,
            0x1,
            0xB3
        ])) {
            return {
                ext: 'mpg',
                mime: 'video/mpeg'
            };
        }
        if (this.check([
            0x00,
            0x01,
            0x00,
            0x00,
            0x00
        ])) {
            return {
                ext: 'ttf',
                mime: 'font/ttf'
            };
        }
        if (this.check([
            0x00,
            0x00,
            0x01,
            0x00
        ])) {
            return {
                ext: 'ico',
                mime: 'image/x-icon'
            };
        }
        if (this.check([
            0x00,
            0x00,
            0x02,
            0x00
        ])) {
            return {
                ext: 'cur',
                mime: 'image/x-icon'
            };
        }
        if (this.check([
            0xD0,
            0xCF,
            0x11,
            0xE0,
            0xA1,
            0xB1,
            0x1A,
            0xE1
        ])) {
            // Detected Microsoft Compound File Binary File (MS-CFB) Format.
            return {
                ext: 'cfb',
                mime: 'application/x-cfb'
            };
        }
        // Increase sample size from 12 to 256.
        await tokenizer.peekBuffer(this.buffer, {
            length: Math.min(256, tokenizer.fileInfo.size),
            mayBeLess: true
        });
        if (this.check([
            0x61,
            0x63,
            0x73,
            0x70
        ], {
            offset: 36
        })) {
            return {
                ext: 'icc',
                mime: 'application/vnd.iccprofile'
            };
        }
        // -- 15-byte signatures --
        if (this.checkString('BEGIN:')) {
            if (this.checkString('VCARD', {
                offset: 6
            })) {
                return {
                    ext: 'vcf',
                    mime: 'text/vcard'
                };
            }
            if (this.checkString('VCALENDAR', {
                offset: 6
            })) {
                return {
                    ext: 'ics',
                    mime: 'text/calendar'
                };
            }
        }
        // `raf` is here just to keep all the raw image detectors together.
        if (this.checkString('FUJIFILMCCD-RAW')) {
            return {
                ext: 'raf',
                mime: 'image/x-fujifilm-raf'
            };
        }
        if (this.checkString('Extended Module:')) {
            return {
                ext: 'xm',
                mime: 'audio/x-xm'
            };
        }
        if (this.checkString('Creative Voice File')) {
            return {
                ext: 'voc',
                mime: 'audio/x-voc'
            };
        }
        if (this.check([
            0x04,
            0x00,
            0x00,
            0x00
        ]) && this.buffer.length >= 16) {
            const jsonSize = new DataView(this.buffer.buffer).getUint32(12, true);
            if (jsonSize > 12 && this.buffer.length >= jsonSize + 16) {
                try {
                    const header = new TextDecoder().decode(this.buffer.slice(16, jsonSize + 16));
                    const json = JSON.parse(header);
                    // Check if Pickle is ASAR
                    if (json.files) {
                        return {
                            ext: 'asar',
                            mime: 'application/x-asar'
                        };
                    }
                } catch  {}
            }
        }
        if (this.check([
            0x06,
            0x0E,
            0x2B,
            0x34,
            0x02,
            0x05,
            0x01,
            0x01,
            0x0D,
            0x01,
            0x02,
            0x01,
            0x01,
            0x02
        ])) {
            return {
                ext: 'mxf',
                mime: 'application/mxf'
            };
        }
        if (this.checkString('SCRM', {
            offset: 44
        })) {
            return {
                ext: 's3m',
                mime: 'audio/x-s3m'
            };
        }
        // Raw MPEG-2 transport stream (188-byte packets)
        if (this.check([
            0x47
        ]) && this.check([
            0x47
        ], {
            offset: 188
        })) {
            return {
                ext: 'mts',
                mime: 'video/mp2t'
            };
        }
        // Blu-ray Disc Audio-Video (BDAV) MPEG-2 transport stream has 4-byte TP_extra_header before each 188-byte packet
        if (this.check([
            0x47
        ], {
            offset: 4
        }) && this.check([
            0x47
        ], {
            offset: 196
        })) {
            return {
                ext: 'mts',
                mime: 'video/mp2t'
            };
        }
        if (this.check([
            0x42,
            0x4F,
            0x4F,
            0x4B,
            0x4D,
            0x4F,
            0x42,
            0x49
        ], {
            offset: 60
        })) {
            return {
                ext: 'mobi',
                mime: 'application/x-mobipocket-ebook'
            };
        }
        if (this.check([
            0x44,
            0x49,
            0x43,
            0x4D
        ], {
            offset: 128
        })) {
            return {
                ext: 'dcm',
                mime: 'application/dicom'
            };
        }
        if (this.check([
            0x4C,
            0x00,
            0x00,
            0x00,
            0x01,
            0x14,
            0x02,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0xC0,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x46
        ])) {
            return {
                ext: 'lnk',
                mime: 'application/x.ms.shortcut'
            };
        }
        if (this.check([
            0x62,
            0x6F,
            0x6F,
            0x6B,
            0x00,
            0x00,
            0x00,
            0x00,
            0x6D,
            0x61,
            0x72,
            0x6B,
            0x00,
            0x00,
            0x00,
            0x00
        ])) {
            return {
                ext: 'alias',
                mime: 'application/x.apple.alias'
            };
        }
        if (this.checkString('Kaydara FBX Binary  \u0000')) {
            return {
                ext: 'fbx',
                mime: 'application/x.autodesk.fbx'
            };
        }
        if (this.check([
            0x4C,
            0x50
        ], {
            offset: 34
        }) && (this.check([
            0x00,
            0x00,
            0x01
        ], {
            offset: 8
        }) || this.check([
            0x01,
            0x00,
            0x02
        ], {
            offset: 8
        }) || this.check([
            0x02,
            0x00,
            0x02
        ], {
            offset: 8
        }))) {
            return {
                ext: 'eot',
                mime: 'application/vnd.ms-fontobject'
            };
        }
        if (this.check([
            0x06,
            0x06,
            0xED,
            0xF5,
            0xD8,
            0x1D,
            0x46,
            0xE5,
            0xBD,
            0x31,
            0xEF,
            0xE7,
            0xFE,
            0x74,
            0xB7,
            0x1D
        ])) {
            return {
                ext: 'indd',
                mime: 'application/x-indesign'
            };
        }
        // Increase sample size from 256 to 512
        await tokenizer.peekBuffer(this.buffer, {
            length: Math.min(512, tokenizer.fileInfo.size),
            mayBeLess: true
        });
        // Requires a buffer size of 512 bytes
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tarHeaderChecksumMatches"])(this.buffer)) {
            return {
                ext: 'tar',
                mime: 'application/x-tar'
            };
        }
        if (this.check([
            0xFF,
            0xFE
        ])) {
            if (this.check([
                60,
                0,
                63,
                0,
                120,
                0,
                109,
                0,
                108,
                0
            ], {
                offset: 2
            })) {
                return {
                    ext: 'xml',
                    mime: 'application/xml'
                };
            }
            if (this.check([
                0xFF,
                0x0E,
                0x53,
                0x00,
                0x6B,
                0x00,
                0x65,
                0x00,
                0x74,
                0x00,
                0x63,
                0x00,
                0x68,
                0x00,
                0x55,
                0x00,
                0x70,
                0x00,
                0x20,
                0x00,
                0x4D,
                0x00,
                0x6F,
                0x00,
                0x64,
                0x00,
                0x65,
                0x00,
                0x6C,
                0x00
            ], {
                offset: 2
            })) {
                return {
                    ext: 'skp',
                    mime: 'application/vnd.sketchup.skp'
                };
            }
            return undefined; // Some text based format
        }
        if (this.checkString('-----BEGIN PGP MESSAGE-----')) {
            return {
                ext: 'pgp',
                mime: 'application/pgp-encrypted'
            };
        }
        // Check MPEG 1 or 2 Layer 3 header, or 'layer 0' for ADTS (MPEG sync-word 0xFFE)
        if (this.buffer.length >= 2 && this.check([
            0xFF,
            0xE0
        ], {
            offset: 0,
            mask: [
                0xFF,
                0xE0
            ]
        })) {
            if (this.check([
                0x10
            ], {
                offset: 1,
                mask: [
                    0x16
                ]
            })) {
                // Check for (ADTS) MPEG-2
                if (this.check([
                    0x08
                ], {
                    offset: 1,
                    mask: [
                        0x08
                    ]
                })) {
                    return {
                        ext: 'aac',
                        mime: 'audio/aac'
                    };
                }
                // Must be (ADTS) MPEG-4
                return {
                    ext: 'aac',
                    mime: 'audio/aac'
                };
            }
            // MPEG 1 or 2 Layer 3 header
            // Check for MPEG layer 3
            if (this.check([
                0x02
            ], {
                offset: 1,
                mask: [
                    0x06
                ]
            })) {
                return {
                    ext: 'mp3',
                    mime: 'audio/mpeg'
                };
            }
            // Check for MPEG layer 2
            if (this.check([
                0x04
            ], {
                offset: 1,
                mask: [
                    0x06
                ]
            })) {
                return {
                    ext: 'mp2',
                    mime: 'audio/mpeg'
                };
            }
            // Check for MPEG layer 1
            if (this.check([
                0x06
            ], {
                offset: 1,
                mask: [
                    0x06
                ]
            })) {
                return {
                    ext: 'mp1',
                    mime: 'audio/mpeg'
                };
            }
        }
    }
    async readTiffTag(bigEndian) {
        const tagId = await this.tokenizer.readToken(bigEndian ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT16_BE"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT16_LE"]);
        this.tokenizer.ignore(10);
        switch(tagId){
            case 50_341:
                return {
                    ext: 'arw',
                    mime: 'image/x-sony-arw'
                };
            case 50_706:
                return {
                    ext: 'dng',
                    mime: 'image/x-adobe-dng'
                };
            default:
        }
    }
    async readTiffIFD(bigEndian) {
        const numberOfTags = await this.tokenizer.readToken(bigEndian ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT16_BE"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT16_LE"]);
        for(let n = 0; n < numberOfTags; ++n){
            const fileType = await this.readTiffTag(bigEndian);
            if (fileType) {
                return fileType;
            }
        }
    }
    async readTiffHeader(bigEndian) {
        const version = (bigEndian ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT16_BE"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT16_LE"]).get(this.buffer, 2);
        const ifdOffset = (bigEndian ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT32_BE"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$token$2d$types$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UINT32_LE"]).get(this.buffer, 4);
        if (version === 42) {
            // TIFF file header
            if (ifdOffset >= 6) {
                if (this.checkString('CR', {
                    offset: 8
                })) {
                    return {
                        ext: 'cr2',
                        mime: 'image/x-canon-cr2'
                    };
                }
                if (ifdOffset >= 8 && (this.check([
                    0x1C,
                    0x00,
                    0xFE,
                    0x00
                ], {
                    offset: 8
                }) || this.check([
                    0x1F,
                    0x00,
                    0x0B,
                    0x00
                ], {
                    offset: 8
                }))) {
                    return {
                        ext: 'nef',
                        mime: 'image/x-nikon-nef'
                    };
                }
            }
            await this.tokenizer.ignore(ifdOffset);
            const fileType = await this.readTiffIFD(bigEndian);
            return fileType ?? {
                ext: 'tif',
                mime: 'image/tiff'
            };
        }
        if (version === 43) {
            return {
                ext: 'tif',
                mime: 'image/tiff'
            };
        }
    }
}
const supportedExtensions = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$supported$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extensions"]);
const supportedMimeTypes = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$supported$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mimeTypes"]);
}),
"[project]/node_modules/file-type/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeFileTypeParser",
    ()=>NodeFileTypeParser,
    "fileTypeFromFile",
    ()=>fileTypeFromFile,
    "fileTypeFromStream",
    ()=>fileTypeFromStream,
    "fileTypeStream",
    ()=>fileTypeStream
]);
/**
Node.js specific entry point.
*/ var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream$2f$web__$5b$external$5d$__$28$node$3a$stream$2f$web$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:stream/web [external] (node:stream/web, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/core.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$FileTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/strtok3/lib/FileTokenizer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-type/core.js [app-route] (ecmascript)");
;
;
;
class NodeFileTypeParser extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FileTypeParser"] {
    async fromStream(stream) {
        const tokenizer = await (stream instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream$2f$web__$5b$external$5d$__$28$node$3a$stream$2f$web$2c$__cjs$29$__["ReadableStream"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromWebStream"](stream) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromStream"](stream));
        try {
            return super.fromTokenizer(tokenizer);
        } finally{
            await tokenizer.close();
        }
    }
    async fromFile(path) {
        const tokenizer = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$FileTokenizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromFile"](path);
        try {
            return await super.fromTokenizer(tokenizer);
        } finally{
            await tokenizer.close();
        }
    }
    async toDetectionStream(readableStream, options = {}) {
        const { default: stream } = await __turbopack_context__.A("[externals]/node:stream [external] (node:stream, cjs, async loader)");
        const { sampleSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["reasonableDetectionSizeInBytes"] } = options;
        return new Promise((resolve, reject)=>{
            readableStream.on('error', reject);
            readableStream.once('readable', ()=>{
                (async ()=>{
                    try {
                        // Set up output stream
                        const pass = new stream.PassThrough();
                        const outputStream = stream.pipeline ? stream.pipeline(readableStream, pass, ()=>{}) : readableStream.pipe(pass);
                        // Read the input stream and detect the filetype
                        const chunk = readableStream.read(sampleSize) ?? readableStream.read() ?? new Uint8Array(0);
                        try {
                            pass.fileType = await this.fromBuffer(chunk);
                        } catch (error) {
                            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$strtok3$2f$lib$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndOfStreamError"]) {
                                pass.fileType = undefined;
                            } else {
                                reject(error);
                            }
                        }
                        resolve(outputStream);
                    } catch (error) {
                        reject(error);
                    }
                })();
            });
        });
    }
}
async function fileTypeFromFile(path, fileTypeOptions) {
    return new NodeFileTypeParser(fileTypeOptions).fromFile(path, fileTypeOptions);
}
async function fileTypeFromStream(stream, fileTypeOptions) {
    return new NodeFileTypeParser(fileTypeOptions).fromStream(stream);
}
async function fileTypeStream(readableStream, options = {}) {
    return new NodeFileTypeParser().toDetectionStream(readableStream, options);
}
;
}),
"[project]/node_modules/range-parser/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * range-parser
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015-2016 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module exports.
 * @public
 */ module.exports = rangeParser;
/**
 * Parse "Range" header `str` relative to the given file `size`.
 *
 * @param {Number} size
 * @param {String} str
 * @param {Object} [options]
 * @return {Array}
 * @public
 */ function rangeParser(size, str, options) {
    if (typeof str !== 'string') {
        throw new TypeError('argument str must be a string');
    }
    var index = str.indexOf('=');
    if (index === -1) {
        return -2;
    }
    // split the range string
    var arr = str.slice(index + 1).split(',');
    var ranges = [];
    // add ranges type
    ranges.type = str.slice(0, index);
    // parse all ranges
    for(var i = 0; i < arr.length; i++){
        var range = arr[i].split('-');
        var start = parseInt(range[0], 10);
        var end = parseInt(range[1], 10);
        // -nnn
        if (isNaN(start)) {
            start = size - end;
            end = size - 1;
        // nnn-
        } else if (isNaN(end)) {
            end = size - 1;
        }
        // limit last-byte-pos to current length
        if (end > size - 1) {
            end = size - 1;
        }
        // invalid or unsatisifiable
        if (isNaN(start) || isNaN(end) || start > end || start < 0) {
            continue;
        }
        // add range
        ranges.push({
            start: start,
            end: end
        });
    }
    if (ranges.length < 1) {
        // unsatisifiable
        return -1;
    }
    return options && options.combine ? combineRanges(ranges) : ranges;
}
/**
 * Combine overlapping & adjacent ranges.
 * @private
 */ function combineRanges(ranges) {
    var ordered = ranges.map(mapWithIndex).sort(sortByRangeStart);
    for(var j = 0, i = 1; i < ordered.length; i++){
        var range = ordered[i];
        var current = ordered[j];
        if (range.start > current.end + 1) {
            // next range
            ordered[++j] = range;
        } else if (range.end > current.end) {
            // extend range
            current.end = range.end;
            current.index = Math.min(current.index, range.index);
        }
    }
    // trim ordered array
    ordered.length = j + 1;
    // generate combined range
    var combined = ordered.sort(sortByRangeIndex).map(mapWithoutIndex);
    // copy ranges type
    combined.type = ranges.type;
    return combined;
}
/**
 * Map function to add index value to ranges.
 * @private
 */ function mapWithIndex(range, index) {
    return {
        start: range.start,
        end: range.end,
        index: index
    };
}
/**
 * Map function to remove index value from ranges.
 * @private
 */ function mapWithoutIndex(range) {
    return {
        start: range.start,
        end: range.end
    };
}
/**
 * Sort function to sort ranges by index.
 * @private
 */ function sortByRangeIndex(a, b) {
    return a.index - b.index;
}
/**
 * Sort function to sort ranges by start position.
 * @private
 */ function sortByRangeStart(a, b) {
    return a.start - b.start;
}
}),
"[project]/node_modules/truncate-utf8-bytes/lib/truncate.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function isHighSurrogate(codePoint) {
    return codePoint >= 0xd800 && codePoint <= 0xdbff;
}
function isLowSurrogate(codePoint) {
    return codePoint >= 0xdc00 && codePoint <= 0xdfff;
}
// Truncate string by size in bytes
module.exports = function truncate(getLength, string, byteLength) {
    if (typeof string !== "string") {
        throw new Error("Input must be string");
    }
    var charLength = string.length;
    var curByteLength = 0;
    var codePoint;
    var segment;
    for(var i = 0; i < charLength; i += 1){
        codePoint = string.charCodeAt(i);
        segment = string[i];
        if (isHighSurrogate(codePoint) && isLowSurrogate(string.charCodeAt(i + 1))) {
            i += 1;
            segment += string[i];
        }
        curByteLength += getLength(segment);
        if (curByteLength === byteLength) {
            return string.slice(0, i + 1);
        } else if (curByteLength > byteLength) {
            return string.slice(0, i - segment.length + 1);
        }
    }
    return string;
};
}),
"[project]/node_modules/truncate-utf8-bytes/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var truncate = __turbopack_context__.r("[project]/node_modules/truncate-utf8-bytes/lib/truncate.js [app-route] (ecmascript)");
var getLength = Buffer.byteLength.bind(Buffer);
module.exports = truncate.bind(null, getLength);
}),
"[project]/node_modules/sanitize-filename/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*jshint node:true*/ /**
 * Replaces characters in strings that are illegal/unsafe for filenames.
 * Unsafe characters are either removed or replaced by a substitute set
 * in the optional `options` object.
 *
 * Illegal Characters on Various Operating Systems
 * / ? < > \ : * | "
 * https://kb.acronis.com/content/39790
 *
 * Unicode Control codes
 * C0 0x00-0x1f & C1 (0x80-0x9f)
 * http://en.wikipedia.org/wiki/C0_and_C1_control_codes
 *
 * Reserved filenames on Unix-based systems (".", "..")
 * Reserved filenames in Windows ("CON", "PRN", "AUX", "NUL", "COM1",
 * "COM2", "COM3", "COM4", "COM5", "COM6", "COM7", "COM8", "COM9",
 * "LPT1", "LPT2", "LPT3", "LPT4", "LPT5", "LPT6", "LPT7", "LPT8", and
 * "LPT9") case-insesitively and with or without filename extensions.
 *
 * Capped at 255 characters in length.
 * http://unix.stackexchange.com/questions/32795/what-is-the-maximum-allowed-filename-and-folder-size-with-ecryptfs
 *
 * @param  {String} input   Original filename
 * @param  {Object} options {replacement: String | Function }
 * @return {String}         Sanitized filename
 */ var truncate = __turbopack_context__.r("[project]/node_modules/truncate-utf8-bytes/index.js [app-route] (ecmascript)");
var illegalRe = /[\/\?<>\\:\*\|"]/g;
var controlRe = /[\x00-\x1f\x80-\x9f]/g;
var reservedRe = /^\.+$/;
var windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
var windowsTrailingRe = /[\. ]+$/;
function sanitize(input, replacement) {
    if (typeof input !== 'string') {
        throw new Error('Input must be string');
    }
    var sanitized = input.replace(illegalRe, replacement).replace(controlRe, replacement).replace(reservedRe, replacement).replace(windowsReservedRe, replacement).replace(windowsTrailingRe, replacement);
    return truncate(sanitized, 255);
}
module.exports = function(input, options) {
    var replacement = options && options.replacement || '';
    var output = sanitize(input, replacement);
    if (replacement === '') {
        return output;
    }
    return sanitize(output, '');
};
}),
"[project]/node_modules/payload/node_modules/ipaddr.js/lib/ipaddr.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(root) {
    'use strict';
    // A list of regular expressions that match arbitrary IPv4 addresses,
    // for which a number of weird notations exist.
    // Note that an address like 0010.0xa5.1.1 is considered legal.
    const ipv4Part = '(0?\\d+|0x[a-f0-9]+)';
    const ipv4Regexes = {
        fourOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, 'i'),
        threeOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, 'i'),
        twoOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}$`, 'i'),
        longValue: new RegExp(`^${ipv4Part}$`, 'i')
    };
    // Regular Expression for checking Octal numbers
    const octalRegex = new RegExp(`^0[0-7]+$`, 'i');
    const hexRegex = new RegExp(`^0x[a-f0-9]+$`, 'i');
    const zoneIndex = '%[0-9a-z]{1,}';
    // IPv6-matching regular expressions.
    // For IPv6, the task is simpler: it is enough to match the colon-delimited
    // hexadecimal IPv6 and a transitional variant with dotted-decimal IPv4 at
    // the end.
    const ipv6Part = '(?:[0-9a-f]+::?)+';
    const ipv6Regexes = {
        zoneIndex: new RegExp(zoneIndex, 'i'),
        'native': new RegExp(`^(::)?(${ipv6Part})?([0-9a-f]+)?(::)?(${zoneIndex})?$`, 'i'),
        deprecatedTransitional: new RegExp(`^(?:::)(${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?)$`, 'i'),
        transitional: new RegExp(`^((?:${ipv6Part})|(?:::)(?:${ipv6Part})?)${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?$`, 'i')
    };
    // Expand :: in an IPv6 address or address part consisting of `parts` groups.
    function expandIPv6(string, parts) {
        // More than one '::' means invalid adddress
        if (string.indexOf('::') !== string.lastIndexOf('::')) {
            return null;
        }
        let colonCount = 0;
        let lastColon = -1;
        let zoneId = (string.match(ipv6Regexes.zoneIndex) || [])[0];
        let replacement, replacementCount;
        // Remove zone index and save it for later
        if (zoneId) {
            zoneId = zoneId.substring(1);
            string = string.replace(/%.+$/, '');
        }
        // How many parts do we already have?
        while((lastColon = string.indexOf(':', lastColon + 1)) >= 0){
            colonCount++;
        }
        // 0::0 is two parts more than ::
        if (string.substr(0, 2) === '::') {
            colonCount--;
        }
        if (string.substr(-2, 2) === '::') {
            colonCount--;
        }
        // The following loop would hang if colonCount > parts
        if (colonCount > parts) {
            return null;
        }
        // replacement = ':' + '0:' * (parts - colonCount)
        replacementCount = parts - colonCount;
        replacement = ':';
        while(replacementCount--){
            replacement += '0:';
        }
        // Insert the missing zeroes
        string = string.replace('::', replacement);
        // Trim any garbage which may be hanging around if :: was at the edge in
        // the source strin
        if (string[0] === ':') {
            string = string.slice(1);
        }
        if (string[string.length - 1] === ':') {
            string = string.slice(0, -1);
        }
        parts = function() {
            const ref = string.split(':');
            const results = [];
            for(let i = 0; i < ref.length; i++){
                results.push(parseInt(ref[i], 16));
            }
            return results;
        }();
        return {
            parts: parts,
            zoneId: zoneId
        };
    }
    // A generic CIDR (Classless Inter-Domain Routing) RFC1518 range matcher.
    function matchCIDR(first, second, partSize, cidrBits) {
        if (first.length !== second.length) {
            throw new Error('ipaddr: cannot match CIDR for objects with different lengths');
        }
        let part = 0;
        let shift;
        while(cidrBits > 0){
            shift = partSize - cidrBits;
            if (shift < 0) {
                shift = 0;
            }
            if (first[part] >> shift !== second[part] >> shift) {
                return false;
            }
            cidrBits -= partSize;
            part += 1;
        }
        return true;
    }
    function parseIntAuto(string) {
        // Hexadedimal base 16 (0x#)
        if (hexRegex.test(string)) {
            return parseInt(string, 16);
        }
        // While octal representation is discouraged by ECMAScript 3
        // and forbidden by ECMAScript 5, we silently allow it to
        // work only if the rest of the string has numbers less than 8.
        if (string[0] === '0' && !isNaN(parseInt(string[1], 10))) {
            if (octalRegex.test(string)) {
                return parseInt(string, 8);
            }
            throw new Error(`ipaddr: cannot parse ${string} as octal`);
        }
        // Always include the base 10 radix!
        return parseInt(string, 10);
    }
    function padPart(part, length) {
        while(part.length < length){
            part = `0${part}`;
        }
        return part;
    }
    const ipaddr = {};
    // An IPv4 address (RFC791).
    ipaddr.IPv4 = function() {
        // Constructs a new IPv4 address from an array of four octets
        // in network order (MSB first)
        // Verifies the input.
        function IPv4(octets) {
            if (octets.length !== 4) {
                throw new Error('ipaddr: ipv4 octet count should be 4');
            }
            let i, octet;
            for(i = 0; i < octets.length; i++){
                octet = octets[i];
                if (!(0 <= octet && octet <= 255)) {
                    throw new Error('ipaddr: ipv4 octet should fit in 8 bits');
                }
            }
            this.octets = octets;
        }
        // Special IPv4 address ranges.
        // See also https://en.wikipedia.org/wiki/Reserved_IP_addresses
        IPv4.prototype.SpecialRanges = {
            unspecified: [
                [
                    new IPv4([
                        0,
                        0,
                        0,
                        0
                    ]),
                    8
                ]
            ],
            broadcast: [
                [
                    new IPv4([
                        255,
                        255,
                        255,
                        255
                    ]),
                    32
                ]
            ],
            // RFC3171
            multicast: [
                [
                    new IPv4([
                        224,
                        0,
                        0,
                        0
                    ]),
                    4
                ]
            ],
            // RFC3927
            linkLocal: [
                [
                    new IPv4([
                        169,
                        254,
                        0,
                        0
                    ]),
                    16
                ]
            ],
            // RFC5735
            loopback: [
                [
                    new IPv4([
                        127,
                        0,
                        0,
                        0
                    ]),
                    8
                ]
            ],
            // RFC6598
            carrierGradeNat: [
                [
                    new IPv4([
                        100,
                        64,
                        0,
                        0
                    ]),
                    10
                ]
            ],
            // RFC1918
            'private': [
                [
                    new IPv4([
                        10,
                        0,
                        0,
                        0
                    ]),
                    8
                ],
                [
                    new IPv4([
                        172,
                        16,
                        0,
                        0
                    ]),
                    12
                ],
                [
                    new IPv4([
                        192,
                        168,
                        0,
                        0
                    ]),
                    16
                ]
            ],
            // Reserved and testing-only ranges; RFCs 5735, 5737, 2544, 1700
            reserved: [
                [
                    new IPv4([
                        192,
                        0,
                        0,
                        0
                    ]),
                    24
                ],
                [
                    new IPv4([
                        192,
                        0,
                        2,
                        0
                    ]),
                    24
                ],
                [
                    new IPv4([
                        192,
                        88,
                        99,
                        0
                    ]),
                    24
                ],
                [
                    new IPv4([
                        198,
                        18,
                        0,
                        0
                    ]),
                    15
                ],
                [
                    new IPv4([
                        198,
                        51,
                        100,
                        0
                    ]),
                    24
                ],
                [
                    new IPv4([
                        203,
                        0,
                        113,
                        0
                    ]),
                    24
                ],
                [
                    new IPv4([
                        240,
                        0,
                        0,
                        0
                    ]),
                    4
                ]
            ],
            // RFC7534, RFC7535
            as112: [
                [
                    new IPv4([
                        192,
                        175,
                        48,
                        0
                    ]),
                    24
                ],
                [
                    new IPv4([
                        192,
                        31,
                        196,
                        0
                    ]),
                    24
                ]
            ],
            // RFC7450
            amt: [
                [
                    new IPv4([
                        192,
                        52,
                        193,
                        0
                    ]),
                    24
                ]
            ]
        };
        // The 'kind' method exists on both IPv4 and IPv6 classes.
        IPv4.prototype.kind = function() {
            return 'ipv4';
        };
        // Checks if this address matches other one within given CIDR range.
        IPv4.prototype.match = function(other, cidrRange) {
            let ref;
            if (cidrRange === undefined) {
                ref = other;
                other = ref[0];
                cidrRange = ref[1];
            }
            if (other.kind() !== 'ipv4') {
                throw new Error('ipaddr: cannot match ipv4 address with non-ipv4 one');
            }
            return matchCIDR(this.octets, other.octets, 8, cidrRange);
        };
        // returns a number of leading ones in IPv4 address, making sure that
        // the rest is a solid sequence of 0's (valid netmask)
        // returns either the CIDR length or null if mask is not valid
        IPv4.prototype.prefixLengthFromSubnetMask = function() {
            let cidr = 0;
            // non-zero encountered stop scanning for zeroes
            let stop = false;
            // number of zeroes in octet
            const zerotable = {
                0: 8,
                128: 7,
                192: 6,
                224: 5,
                240: 4,
                248: 3,
                252: 2,
                254: 1,
                255: 0
            };
            let i, octet, zeros;
            for(i = 3; i >= 0; i -= 1){
                octet = this.octets[i];
                if (octet in zerotable) {
                    zeros = zerotable[octet];
                    if (stop && zeros !== 0) {
                        return null;
                    }
                    if (zeros !== 8) {
                        stop = true;
                    }
                    cidr += zeros;
                } else {
                    return null;
                }
            }
            return 32 - cidr;
        };
        // Checks if the address corresponds to one of the special ranges.
        IPv4.prototype.range = function() {
            return ipaddr.subnetMatch(this, this.SpecialRanges);
        };
        // Returns an array of byte-sized values in network order (MSB first)
        IPv4.prototype.toByteArray = function() {
            return this.octets.slice(0);
        };
        // Converts this IPv4 address to an IPv4-mapped IPv6 address.
        IPv4.prototype.toIPv4MappedAddress = function() {
            return ipaddr.IPv6.parse(`::ffff:${this.toString()}`);
        };
        // Symmetrical method strictly for aligning with the IPv6 methods.
        IPv4.prototype.toNormalizedString = function() {
            return this.toString();
        };
        // Returns the address in convenient, decimal-dotted format.
        IPv4.prototype.toString = function() {
            return this.octets.join('.');
        };
        return IPv4;
    }();
    // A utility function to return broadcast address given the IPv4 interface and prefix length in CIDR notation
    ipaddr.IPv4.broadcastAddressFromCIDR = function(string) {
        try {
            const cidr = this.parseCIDR(string);
            const ipInterfaceOctets = cidr[0].toByteArray();
            const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
            const octets = [];
            let i = 0;
            while(i < 4){
                // Broadcast address is bitwise OR between ip interface and inverted mask
                octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
                i++;
            }
            return new this(octets);
        } catch (e) {
            throw new Error('ipaddr: the address does not have IPv4 CIDR format');
        }
    };
    // Checks if a given string is formatted like IPv4 address.
    ipaddr.IPv4.isIPv4 = function(string) {
        return this.parser(string) !== null;
    };
    // Checks if a given string is a valid IPv4 address.
    ipaddr.IPv4.isValid = function(string) {
        try {
            new this(this.parser(string));
            return true;
        } catch (e) {
            return false;
        }
    };
    // Checks if a given string is a valid IPv4 address in CIDR notation.
    ipaddr.IPv4.isValidCIDR = function(string) {
        try {
            this.parseCIDR(string);
            return true;
        } catch (e) {
            return false;
        }
    };
    // Checks if a given string is a full four-part IPv4 Address.
    ipaddr.IPv4.isValidFourPartDecimal = function(string) {
        if (ipaddr.IPv4.isValid(string) && string.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) {
            return true;
        } else {
            return false;
        }
    };
    // A utility function to return network address given the IPv4 interface and prefix length in CIDR notation
    ipaddr.IPv4.networkAddressFromCIDR = function(string) {
        let cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
        try {
            cidr = this.parseCIDR(string);
            ipInterfaceOctets = cidr[0].toByteArray();
            subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
            octets = [];
            i = 0;
            while(i < 4){
                // Network address is bitwise AND between ip interface and mask
                octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
                i++;
            }
            return new this(octets);
        } catch (e) {
            throw new Error('ipaddr: the address does not have IPv4 CIDR format');
        }
    };
    // Tries to parse and validate a string with IPv4 address.
    // Throws an error if it fails.
    ipaddr.IPv4.parse = function(string) {
        const parts = this.parser(string);
        if (parts === null) {
            throw new Error('ipaddr: string is not formatted like an IPv4 Address');
        }
        return new this(parts);
    };
    // Parses the string as an IPv4 Address with CIDR Notation.
    ipaddr.IPv4.parseCIDR = function(string) {
        let match;
        if (match = string.match(/^(.+)\/(\d+)$/)) {
            const maskLength = parseInt(match[2]);
            if (maskLength >= 0 && maskLength <= 32) {
                const parsed = [
                    this.parse(match[1]),
                    maskLength
                ];
                Object.defineProperty(parsed, 'toString', {
                    value: function() {
                        return this.join('/');
                    }
                });
                return parsed;
            }
        }
        throw new Error('ipaddr: string is not formatted like an IPv4 CIDR range');
    };
    // Classful variants (like a.b, where a is an octet, and b is a 24-bit
    // value representing last three octets; this corresponds to a class C
    // address) are omitted due to classless nature of modern Internet.
    ipaddr.IPv4.parser = function(string) {
        let match, part, value;
        // parseInt recognizes all that octal & hexadecimal weirdness for us
        if (match = string.match(ipv4Regexes.fourOctet)) {
            return function() {
                const ref = match.slice(1, 6);
                const results = [];
                for(let i = 0; i < ref.length; i++){
                    part = ref[i];
                    results.push(parseIntAuto(part));
                }
                return results;
            }();
        } else if (match = string.match(ipv4Regexes.longValue)) {
            value = parseIntAuto(match[1]);
            if (value > 0xffffffff || value < 0) {
                throw new Error('ipaddr: address outside defined range');
            }
            return (function() {
                const results = [];
                let shift;
                for(shift = 0; shift <= 24; shift += 8){
                    results.push(value >> shift & 0xff);
                }
                return results;
            })().reverse();
        } else if (match = string.match(ipv4Regexes.twoOctet)) {
            return function() {
                const ref = match.slice(1, 4);
                const results = [];
                value = parseIntAuto(ref[1]);
                if (value > 0xffffff || value < 0) {
                    throw new Error('ipaddr: address outside defined range');
                }
                results.push(parseIntAuto(ref[0]));
                results.push(value >> 16 & 0xff);
                results.push(value >> 8 & 0xff);
                results.push(value & 0xff);
                return results;
            }();
        } else if (match = string.match(ipv4Regexes.threeOctet)) {
            return function() {
                const ref = match.slice(1, 5);
                const results = [];
                value = parseIntAuto(ref[2]);
                if (value > 0xffff || value < 0) {
                    throw new Error('ipaddr: address outside defined range');
                }
                results.push(parseIntAuto(ref[0]));
                results.push(parseIntAuto(ref[1]));
                results.push(value >> 8 & 0xff);
                results.push(value & 0xff);
                return results;
            }();
        } else {
            return null;
        }
    };
    // A utility function to return subnet mask in IPv4 format given the prefix length
    ipaddr.IPv4.subnetMaskFromPrefixLength = function(prefix) {
        prefix = parseInt(prefix);
        if (prefix < 0 || prefix > 32) {
            throw new Error('ipaddr: invalid IPv4 prefix length');
        }
        const octets = [
            0,
            0,
            0,
            0
        ];
        let j = 0;
        const filledOctetCount = Math.floor(prefix / 8);
        while(j < filledOctetCount){
            octets[j] = 255;
            j++;
        }
        if (filledOctetCount < 4) {
            octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
        }
        return new this(octets);
    };
    // An IPv6 address (RFC2460)
    ipaddr.IPv6 = function() {
        // Constructs an IPv6 address from an array of eight 16 - bit parts
        // or sixteen 8 - bit parts in network order(MSB first).
        // Throws an error if the input is invalid.
        function IPv6(parts, zoneId) {
            let i, part;
            if (parts.length === 16) {
                this.parts = [];
                for(i = 0; i <= 14; i += 2){
                    this.parts.push(parts[i] << 8 | parts[i + 1]);
                }
            } else if (parts.length === 8) {
                this.parts = parts;
            } else {
                throw new Error('ipaddr: ipv6 part count should be 8 or 16');
            }
            for(i = 0; i < this.parts.length; i++){
                part = this.parts[i];
                if (!(0 <= part && part <= 0xffff)) {
                    throw new Error('ipaddr: ipv6 part should fit in 16 bits');
                }
            }
            if (zoneId) {
                this.zoneId = zoneId;
            }
        }
        // Special IPv6 ranges
        IPv6.prototype.SpecialRanges = {
            // RFC4291, here and after
            unspecified: [
                new IPv6([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                128
            ],
            linkLocal: [
                new IPv6([
                    0xfe80,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                10
            ],
            multicast: [
                new IPv6([
                    0xff00,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                8
            ],
            loopback: [
                new IPv6([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ]),
                128
            ],
            uniqueLocal: [
                new IPv6([
                    0xfc00,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                7
            ],
            ipv4Mapped: [
                new IPv6([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0xffff,
                    0,
                    0
                ]),
                96
            ],
            // RFC6666
            discard: [
                new IPv6([
                    0x100,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                64
            ],
            // RFC6145
            rfc6145: [
                new IPv6([
                    0,
                    0,
                    0,
                    0,
                    0xffff,
                    0,
                    0,
                    0
                ]),
                96
            ],
            // RFC6052
            rfc6052: [
                new IPv6([
                    0x64,
                    0xff9b,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                96
            ],
            // RFC3056
            '6to4': [
                new IPv6([
                    0x2002,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                16
            ],
            // RFC6052, RFC6146
            teredo: [
                new IPv6([
                    0x2001,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                32
            ],
            // RFC5180
            benchmarking: [
                new IPv6([
                    0x2001,
                    0x2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                48
            ],
            // RFC7450
            amt: [
                new IPv6([
                    0x2001,
                    0x3,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                32
            ],
            as112v6: [
                [
                    new IPv6([
                        0x2001,
                        0x4,
                        0x112,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    48
                ],
                [
                    new IPv6([
                        0x2620,
                        0x4f,
                        0x8000,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    48
                ]
            ],
            deprecated: [
                new IPv6([
                    0x2001,
                    0x10,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                28
            ],
            orchid2: [
                new IPv6([
                    0x2001,
                    0x20,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                28
            ],
            droneRemoteIdProtocolEntityTags: [
                new IPv6([
                    0x2001,
                    0x30,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                28
            ],
            reserved: [
                // RFC3849
                [
                    new IPv6([
                        0x2001,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    23
                ],
                // RFC2928
                [
                    new IPv6([
                        0x2001,
                        0xdb8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]),
                    32
                ]
            ]
        };
        // Checks if this address is an IPv4-mapped IPv6 address.
        IPv6.prototype.isIPv4MappedAddress = function() {
            return this.range() === 'ipv4Mapped';
        };
        // The 'kind' method exists on both IPv4 and IPv6 classes.
        IPv6.prototype.kind = function() {
            return 'ipv6';
        };
        // Checks if this address matches other one within given CIDR range.
        IPv6.prototype.match = function(other, cidrRange) {
            let ref;
            if (cidrRange === undefined) {
                ref = other;
                other = ref[0];
                cidrRange = ref[1];
            }
            if (other.kind() !== 'ipv6') {
                throw new Error('ipaddr: cannot match ipv6 address with non-ipv6 one');
            }
            return matchCIDR(this.parts, other.parts, 16, cidrRange);
        };
        // returns a number of leading ones in IPv6 address, making sure that
        // the rest is a solid sequence of 0's (valid netmask)
        // returns either the CIDR length or null if mask is not valid
        IPv6.prototype.prefixLengthFromSubnetMask = function() {
            let cidr = 0;
            // non-zero encountered stop scanning for zeroes
            let stop = false;
            // number of zeroes in octet
            const zerotable = {
                0: 16,
                32768: 15,
                49152: 14,
                57344: 13,
                61440: 12,
                63488: 11,
                64512: 10,
                65024: 9,
                65280: 8,
                65408: 7,
                65472: 6,
                65504: 5,
                65520: 4,
                65528: 3,
                65532: 2,
                65534: 1,
                65535: 0
            };
            let part, zeros;
            for(let i = 7; i >= 0; i -= 1){
                part = this.parts[i];
                if (part in zerotable) {
                    zeros = zerotable[part];
                    if (stop && zeros !== 0) {
                        return null;
                    }
                    if (zeros !== 16) {
                        stop = true;
                    }
                    cidr += zeros;
                } else {
                    return null;
                }
            }
            return 128 - cidr;
        };
        // Checks if the address corresponds to one of the special ranges.
        IPv6.prototype.range = function() {
            return ipaddr.subnetMatch(this, this.SpecialRanges);
        };
        // Returns an array of byte-sized values in network order (MSB first)
        IPv6.prototype.toByteArray = function() {
            let part;
            const bytes = [];
            const ref = this.parts;
            for(let i = 0; i < ref.length; i++){
                part = ref[i];
                bytes.push(part >> 8);
                bytes.push(part & 0xff);
            }
            return bytes;
        };
        // Returns the address in expanded format with all zeroes included, like
        // 2001:0db8:0008:0066:0000:0000:0000:0001
        IPv6.prototype.toFixedLengthString = function() {
            const addr = (function() {
                const results = [];
                for(let i = 0; i < this.parts.length; i++){
                    results.push(padPart(this.parts[i].toString(16), 4));
                }
                return results;
            }).call(this).join(':');
            let suffix = '';
            if (this.zoneId) {
                suffix = `%${this.zoneId}`;
            }
            return addr + suffix;
        };
        // Converts this address to IPv4 address if it is an IPv4-mapped IPv6 address.
        // Throws an error otherwise.
        IPv6.prototype.toIPv4Address = function() {
            if (!this.isIPv4MappedAddress()) {
                throw new Error('ipaddr: trying to convert a generic ipv6 address to ipv4');
            }
            const ref = this.parts.slice(-2);
            const high = ref[0];
            const low = ref[1];
            return new ipaddr.IPv4([
                high >> 8,
                high & 0xff,
                low >> 8,
                low & 0xff
            ]);
        };
        // Returns the address in expanded format with all zeroes included, like
        // 2001:db8:8:66:0:0:0:1
        //
        // Deprecated: use toFixedLengthString() instead.
        IPv6.prototype.toNormalizedString = function() {
            const addr = (function() {
                const results = [];
                for(let i = 0; i < this.parts.length; i++){
                    results.push(this.parts[i].toString(16));
                }
                return results;
            }).call(this).join(':');
            let suffix = '';
            if (this.zoneId) {
                suffix = `%${this.zoneId}`;
            }
            return addr + suffix;
        };
        // Returns the address in compact, human-readable format like
        // 2001:db8:8:66::1
        // in line with RFC 5952 (see https://tools.ietf.org/html/rfc5952#section-4)
        IPv6.prototype.toRFC5952String = function() {
            const regex = /((^|:)(0(:|$)){2,})/g;
            const string = this.toNormalizedString();
            let bestMatchIndex = 0;
            let bestMatchLength = -1;
            let match;
            while(match = regex.exec(string)){
                if (match[0].length > bestMatchLength) {
                    bestMatchIndex = match.index;
                    bestMatchLength = match[0].length;
                }
            }
            if (bestMatchLength < 0) {
                return string;
            }
            return `${string.substring(0, bestMatchIndex)}::${string.substring(bestMatchIndex + bestMatchLength)}`;
        };
        // Returns the address in compact, human-readable format like
        // 2001:db8:8:66::1
        // Calls toRFC5952String under the hood.
        IPv6.prototype.toString = function() {
            return this.toRFC5952String();
        };
        return IPv6;
    }();
    // A utility function to return broadcast address given the IPv6 interface and prefix length in CIDR notation
    ipaddr.IPv6.broadcastAddressFromCIDR = function(string) {
        try {
            const cidr = this.parseCIDR(string);
            const ipInterfaceOctets = cidr[0].toByteArray();
            const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
            const octets = [];
            let i = 0;
            while(i < 16){
                // Broadcast address is bitwise OR between ip interface and inverted mask
                octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
                i++;
            }
            return new this(octets);
        } catch (e) {
            throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`);
        }
    };
    // Checks if a given string is formatted like IPv6 address.
    ipaddr.IPv6.isIPv6 = function(string) {
        return this.parser(string) !== null;
    };
    // Checks to see if string is a valid IPv6 Address
    ipaddr.IPv6.isValid = function(string) {
        // Since IPv6.isValid is always called first, this shortcut
        // provides a substantial performance gain.
        if (typeof string === 'string' && string.indexOf(':') === -1) {
            return false;
        }
        try {
            const addr = this.parser(string);
            new this(addr.parts, addr.zoneId);
            return true;
        } catch (e) {
            return false;
        }
    };
    // Checks if a given string is a valid IPv6 address in CIDR notation.
    ipaddr.IPv6.isValidCIDR = function(string) {
        // See note in IPv6.isValid
        if (typeof string === 'string' && string.indexOf(':') === -1) {
            return false;
        }
        try {
            this.parseCIDR(string);
            return true;
        } catch (e) {
            return false;
        }
    };
    // A utility function to return network address given the IPv6 interface and prefix length in CIDR notation
    ipaddr.IPv6.networkAddressFromCIDR = function(string) {
        let cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
        try {
            cidr = this.parseCIDR(string);
            ipInterfaceOctets = cidr[0].toByteArray();
            subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
            octets = [];
            i = 0;
            while(i < 16){
                // Network address is bitwise AND between ip interface and mask
                octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
                i++;
            }
            return new this(octets);
        } catch (e) {
            throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`);
        }
    };
    // Tries to parse and validate a string with IPv6 address.
    // Throws an error if it fails.
    ipaddr.IPv6.parse = function(string) {
        const addr = this.parser(string);
        if (addr.parts === null) {
            throw new Error('ipaddr: string is not formatted like an IPv6 Address');
        }
        return new this(addr.parts, addr.zoneId);
    };
    ipaddr.IPv6.parseCIDR = function(string) {
        let maskLength, match, parsed;
        if (match = string.match(/^(.+)\/(\d+)$/)) {
            maskLength = parseInt(match[2]);
            if (maskLength >= 0 && maskLength <= 128) {
                parsed = [
                    this.parse(match[1]),
                    maskLength
                ];
                Object.defineProperty(parsed, 'toString', {
                    value: function() {
                        return this.join('/');
                    }
                });
                return parsed;
            }
        }
        throw new Error('ipaddr: string is not formatted like an IPv6 CIDR range');
    };
    // Parse an IPv6 address.
    ipaddr.IPv6.parser = function(string) {
        let addr, i, match, octet, octets, zoneId;
        if (match = string.match(ipv6Regexes.deprecatedTransitional)) {
            return this.parser(`::ffff:${match[1]}`);
        }
        if (ipv6Regexes.native.test(string)) {
            return expandIPv6(string, 8);
        }
        if (match = string.match(ipv6Regexes.transitional)) {
            zoneId = match[6] || '';
            addr = match[1];
            if (!match[1].endsWith('::')) {
                addr = addr.slice(0, -1);
            }
            addr = expandIPv6(addr + zoneId, 6);
            if (addr.parts) {
                octets = [
                    parseInt(match[2]),
                    parseInt(match[3]),
                    parseInt(match[4]),
                    parseInt(match[5])
                ];
                for(i = 0; i < octets.length; i++){
                    octet = octets[i];
                    if (!(0 <= octet && octet <= 255)) {
                        return null;
                    }
                }
                addr.parts.push(octets[0] << 8 | octets[1]);
                addr.parts.push(octets[2] << 8 | octets[3]);
                return {
                    parts: addr.parts,
                    zoneId: addr.zoneId
                };
            }
        }
        return null;
    };
    // A utility function to return subnet mask in IPv6 format given the prefix length
    ipaddr.IPv6.subnetMaskFromPrefixLength = function(prefix) {
        prefix = parseInt(prefix);
        if (prefix < 0 || prefix > 128) {
            throw new Error('ipaddr: invalid IPv6 prefix length');
        }
        const octets = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        let j = 0;
        const filledOctetCount = Math.floor(prefix / 8);
        while(j < filledOctetCount){
            octets[j] = 255;
            j++;
        }
        if (filledOctetCount < 16) {
            octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
        }
        return new this(octets);
    };
    // Try to parse an array in network order (MSB first) for IPv4 and IPv6
    ipaddr.fromByteArray = function(bytes) {
        const length = bytes.length;
        if (length === 4) {
            return new ipaddr.IPv4(bytes);
        } else if (length === 16) {
            return new ipaddr.IPv6(bytes);
        } else {
            throw new Error('ipaddr: the binary input is neither an IPv6 nor IPv4 address');
        }
    };
    // Checks if the address is valid IP address
    ipaddr.isValid = function(string) {
        return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string);
    };
    // Checks if the address is valid IP address in CIDR notation
    ipaddr.isValidCIDR = function(string) {
        return ipaddr.IPv6.isValidCIDR(string) || ipaddr.IPv4.isValidCIDR(string);
    };
    // Attempts to parse an IP Address, first through IPv6 then IPv4.
    // Throws an error if it could not be parsed.
    ipaddr.parse = function(string) {
        if (ipaddr.IPv6.isValid(string)) {
            return ipaddr.IPv6.parse(string);
        } else if (ipaddr.IPv4.isValid(string)) {
            return ipaddr.IPv4.parse(string);
        } else {
            throw new Error('ipaddr: the address has neither IPv6 nor IPv4 format');
        }
    };
    // Attempt to parse CIDR notation, first through IPv6 then IPv4.
    // Throws an error if it could not be parsed.
    ipaddr.parseCIDR = function(string) {
        try {
            return ipaddr.IPv6.parseCIDR(string);
        } catch (e) {
            try {
                return ipaddr.IPv4.parseCIDR(string);
            } catch (e2) {
                throw new Error('ipaddr: the address has neither IPv6 nor IPv4 CIDR format');
            }
        }
    };
    // Parse an address and return plain IPv4 address if it is an IPv4-mapped address
    ipaddr.process = function(string) {
        const addr = this.parse(string);
        if (addr.kind() === 'ipv6' && addr.isIPv4MappedAddress()) {
            return addr.toIPv4Address();
        } else {
            return addr;
        }
    };
    // An utility function to ease named range matching. See examples below.
    // rangeList can contain both IPv4 and IPv6 subnet entries and will not throw errors
    // on matching IPv4 addresses to IPv6 ranges or vice versa.
    ipaddr.subnetMatch = function(address, rangeList, defaultName) {
        let i, rangeName, rangeSubnets, subnet;
        if (defaultName === undefined || defaultName === null) {
            defaultName = 'unicast';
        }
        for(rangeName in rangeList){
            if (Object.prototype.hasOwnProperty.call(rangeList, rangeName)) {
                rangeSubnets = rangeList[rangeName];
                // ECMA5 Array.isArray isn't available everywhere
                if (rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)) {
                    rangeSubnets = [
                        rangeSubnets
                    ];
                }
                for(i = 0; i < rangeSubnets.length; i++){
                    subnet = rangeSubnets[i];
                    if (address.kind() === subnet[0].kind() && address.match.apply(address, subnet)) {
                        return rangeName;
                    }
                }
            }
        }
        return defaultName;
    };
    // Export for both the CommonJS and browser-like environment
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
        module.exports = ipaddr;
    } else {
        root.ipaddr = ipaddr;
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/node_modules/image-size/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>imageSize,
    "disableTypes",
    ()=>disableTypes,
    "imageSize",
    ()=>imageSize,
    "types",
    ()=>types
]);
// lib/types/utils.ts
var decoder = new TextDecoder();
var toUTF8String = (input, start = 0, end = input.length)=>decoder.decode(input.slice(start, end));
var toHexString = (input, start = 0, end = input.length)=>input.slice(start, end).reduce((memo, i)=>memo + `0${i.toString(16)}`.slice(-2), "");
var getView = (input, offset)=>new DataView(input.buffer, input.byteOffset + offset);
var readInt16LE = (input, offset = 0)=>getView(input, offset).getInt16(0, true);
var readUInt16BE = (input, offset = 0)=>getView(input, offset).getUint16(0, false);
var readUInt16LE = (input, offset = 0)=>getView(input, offset).getUint16(0, true);
var readUInt24LE = (input, offset = 0)=>{
    const view = getView(input, offset);
    return view.getUint16(0, true) + (view.getUint8(2) << 16);
};
var readInt32LE = (input, offset = 0)=>getView(input, offset).getInt32(0, true);
var readUInt32BE = (input, offset = 0)=>getView(input, offset).getUint32(0, false);
var readUInt32LE = (input, offset = 0)=>getView(input, offset).getUint32(0, true);
var readUInt64 = (input, offset, isBigEndian)=>getView(input, offset).getBigUint64(0, !isBigEndian);
var methods = {
    readUInt16BE,
    readUInt16LE,
    readUInt32BE,
    readUInt32LE
};
function readUInt(input, bits, offset = 0, isBigEndian = false) {
    const endian = isBigEndian ? "BE" : "LE";
    const methodName = `readUInt${bits}${endian}`;
    return methods[methodName](input, offset);
}
function readBox(input, offset) {
    if (input.length - offset < 4) return;
    const boxSize = readUInt32BE(input, offset);
    if (input.length - offset < boxSize) return;
    return {
        name: toUTF8String(input, 4 + offset, 8 + offset),
        offset,
        size: boxSize
    };
}
function findBox(input, boxName, currentOffset) {
    while(currentOffset < input.length){
        const box = readBox(input, currentOffset);
        if (!box) break;
        if (box.name === boxName) return box;
        currentOffset += box.size > 0 ? box.size : 8;
    }
}
// lib/types/bmp.ts
var BMP = {
    validate: (input)=>toUTF8String(input, 0, 2) === "BM",
    calculate: (input)=>({
            height: Math.abs(readInt32LE(input, 22)),
            width: readUInt32LE(input, 18)
        })
};
// lib/types/ico.ts
var TYPE_ICON = 1;
var SIZE_HEADER = 2 + 2 + 2;
var SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
    const value = input[offset];
    return value === 0 ? 256 : value;
}
function getImageSize(input, imageIndex) {
    const offset = SIZE_HEADER + imageIndex * SIZE_IMAGE_ENTRY;
    return {
        height: getSizeFromOffset(input, offset + 1),
        width: getSizeFromOffset(input, offset)
    };
}
var ICO = {
    validate (input) {
        const reserved = readUInt16LE(input, 0);
        const imageCount = readUInt16LE(input, 4);
        if (reserved !== 0 || imageCount === 0) return false;
        const imageType = readUInt16LE(input, 2);
        return imageType === TYPE_ICON;
    },
    calculate (input) {
        const nbImages = readUInt16LE(input, 4);
        const imageSize2 = getImageSize(input, 0);
        if (nbImages === 1) return imageSize2;
        const images = [];
        for(let imageIndex = 0; imageIndex < nbImages; imageIndex += 1){
            images.push(getImageSize(input, imageIndex));
        }
        return {
            width: imageSize2.width,
            height: imageSize2.height,
            images
        };
    }
};
// lib/types/cur.ts
var TYPE_CURSOR = 2;
var CUR = {
    validate (input) {
        const reserved = readUInt16LE(input, 0);
        const imageCount = readUInt16LE(input, 4);
        if (reserved !== 0 || imageCount === 0) return false;
        const imageType = readUInt16LE(input, 2);
        return imageType === TYPE_CURSOR;
    },
    calculate: (input)=>ICO.calculate(input)
};
// lib/types/dds.ts
var DDS = {
    validate: (input)=>readUInt32LE(input, 0) === 542327876,
    calculate: (input)=>({
            height: readUInt32LE(input, 12),
            width: readUInt32LE(input, 16)
        })
};
// lib/types/gif.ts
var gifRegexp = /^GIF8[79]a/;
var GIF = {
    validate: (input)=>gifRegexp.test(toUTF8String(input, 0, 6)),
    calculate: (input)=>({
            height: readUInt16LE(input, 8),
            width: readUInt16LE(input, 6)
        })
};
// lib/types/heif.ts
var brandMap = {
    avif: "avif",
    mif1: "heif",
    msf1: "heif",
    // heif-sequence
    heic: "heic",
    heix: "heic",
    hevc: "heic",
    // heic-sequence
    hevx: "heic"
};
var HEIF = {
    validate (input) {
        const boxType = toUTF8String(input, 4, 8);
        if (boxType !== "ftyp") return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox) return false;
        const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
        return brand in brandMap;
    },
    calculate (input) {
        const metaBox = findBox(input, "meta", 0);
        const iprpBox = metaBox && findBox(input, "iprp", metaBox.offset + 12);
        const ipcoBox = iprpBox && findBox(input, "ipco", iprpBox.offset + 8);
        if (!ipcoBox) {
            throw new TypeError("Invalid HEIF, no ipco box found");
        }
        const type = toUTF8String(input, 8, 12);
        const images = [];
        let currentOffset = ipcoBox.offset + 8;
        while(currentOffset < ipcoBox.offset + ipcoBox.size){
            const ispeBox = findBox(input, "ispe", currentOffset);
            if (!ispeBox) break;
            const rawWidth = readUInt32BE(input, ispeBox.offset + 12);
            const rawHeight = readUInt32BE(input, ispeBox.offset + 16);
            const clapBox = findBox(input, "clap", currentOffset);
            let width = rawWidth;
            let height = rawHeight;
            if (clapBox && clapBox.offset < ipcoBox.offset + ipcoBox.size) {
                const cropRight = readUInt32BE(input, clapBox.offset + 12);
                width = rawWidth - cropRight;
            }
            images.push({
                height,
                width
            });
            currentOffset = ispeBox.offset + ispeBox.size;
        }
        if (images.length === 0) {
            throw new TypeError("Invalid HEIF, no sizes found");
        }
        return {
            width: images[0].width,
            height: images[0].height,
            type,
            ...images.length > 1 ? {
                images
            } : {}
        };
    }
};
// lib/types/icns.ts
var SIZE_HEADER2 = 4 + 4;
var FILE_LENGTH_OFFSET = 4;
var ENTRY_LENGTH_OFFSET = 4;
var ICON_TYPE_SIZE = {
    ICON: 32,
    "ICN#": 32,
    // m => 16 x 16
    "icm#": 16,
    icm4: 16,
    icm8: 16,
    // s => 16 x 16
    "ics#": 16,
    ics4: 16,
    ics8: 16,
    is32: 16,
    s8mk: 16,
    icp4: 16,
    // l => 32 x 32
    icl4: 32,
    icl8: 32,
    il32: 32,
    l8mk: 32,
    icp5: 32,
    ic11: 32,
    // h => 48 x 48
    ich4: 48,
    ich8: 48,
    ih32: 48,
    h8mk: 48,
    // . => 64 x 64
    icp6: 64,
    ic12: 32,
    // t => 128 x 128
    it32: 128,
    t8mk: 128,
    ic07: 128,
    // . => 256 x 256
    ic08: 256,
    ic13: 256,
    // . => 512 x 512
    ic09: 512,
    ic14: 512,
    // . => 1024 x 1024
    ic10: 1024
};
function readImageHeader(input, imageOffset) {
    const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
    return [
        toUTF8String(input, imageOffset, imageLengthOffset),
        readUInt32BE(input, imageLengthOffset)
    ];
}
function getImageSize2(type) {
    const size = ICON_TYPE_SIZE[type];
    return {
        width: size,
        height: size,
        type
    };
}
var ICNS = {
    validate: (input)=>toUTF8String(input, 0, 4) === "icns",
    calculate (input) {
        const inputLength = input.length;
        const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
        let imageOffset = SIZE_HEADER2;
        const images = [];
        while(imageOffset < fileLength && imageOffset < inputLength){
            const imageHeader = readImageHeader(input, imageOffset);
            const imageSize2 = getImageSize2(imageHeader[0]);
            images.push(imageSize2);
            imageOffset += imageHeader[1];
        }
        if (images.length === 0) {
            throw new TypeError("Invalid ICNS, no sizes found");
        }
        return {
            width: images[0].width,
            height: images[0].height,
            ...images.length > 1 ? {
                images
            } : {}
        };
    }
};
// lib/types/j2c.ts
var J2C = {
    // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
    validate: (input)=>readUInt32BE(input, 0) === 4283432785,
    calculate: (input)=>({
            height: readUInt32BE(input, 12),
            width: readUInt32BE(input, 8)
        })
};
// lib/types/jp2.ts
var JP2 = {
    validate (input) {
        const boxType = toUTF8String(input, 4, 8);
        if (boxType !== "jP  ") return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox) return false;
        const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
        return brand === "jp2 ";
    },
    calculate (input) {
        const jp2hBox = findBox(input, "jp2h", 0);
        const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
        if (ihdrBox) {
            return {
                height: readUInt32BE(input, ihdrBox.offset + 8),
                width: readUInt32BE(input, ihdrBox.offset + 12)
            };
        }
        throw new TypeError("Unsupported JPEG 2000 format");
    }
};
// lib/types/jpg.ts
var EXIF_MARKER = "45786966";
var APP1_DATA_SIZE_BYTES = 2;
var EXIF_HEADER_BYTES = 6;
var TIFF_BYTE_ALIGN_BYTES = 2;
var BIG_ENDIAN_BYTE_ALIGN = "4d4d";
var LITTLE_ENDIAN_BYTE_ALIGN = "4949";
var IDF_ENTRY_BYTES = 12;
var NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
    return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
    return {
        height: readUInt16BE(input, index),
        width: readUInt16BE(input, index + 2)
    };
}
function extractOrientation(exifBlock, isBigEndian) {
    const idfOffset = 8;
    const offset = EXIF_HEADER_BYTES + idfOffset;
    const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
    for(let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++){
        const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
        const end = start + IDF_ENTRY_BYTES;
        if (start > exifBlock.length) {
            return;
        }
        const block = exifBlock.slice(start, end);
        const tagNumber = readUInt(block, 16, 0, isBigEndian);
        if (tagNumber === 274) {
            const dataFormat = readUInt(block, 16, 2, isBigEndian);
            if (dataFormat !== 3) {
                return;
            }
            const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
            if (numberOfComponents !== 1) {
                return;
            }
            return readUInt(block, 16, 8, isBigEndian);
        }
    }
}
function validateExifBlock(input, index) {
    const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
    const byteAlign = toHexString(exifBlock, EXIF_HEADER_BYTES, EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES);
    const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
    const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
    if (isBigEndian || isLittleEndian) {
        return extractOrientation(exifBlock, isBigEndian);
    }
}
function validateInput(input, index) {
    if (index > input.length) {
        throw new TypeError("Corrupt JPG, exceeded buffer limits");
    }
}
var JPG = {
    validate: (input)=>toHexString(input, 0, 2) === "ffd8",
    calculate (_input) {
        let input = _input.slice(4);
        let orientation;
        let next;
        while(input.length){
            const i = readUInt16BE(input, 0);
            validateInput(input, i);
            if (input[i] !== 255) {
                input = input.slice(1);
                continue;
            }
            if (isEXIF(input)) {
                orientation = validateExifBlock(input, i);
            }
            next = input[i + 1];
            if (next === 192 || next === 193 || next === 194) {
                const size = extractSize(input, i + 5);
                if (!orientation) {
                    return size;
                }
                return {
                    height: size.height,
                    orientation,
                    width: size.width
                };
            }
            input = input.slice(i + 2);
        }
        throw new TypeError("Invalid JPG, no size found");
    }
};
// lib/utils/bit-reader.ts
var BitReader = class {
    constructor(input, endianness){
        this.input = input;
        this.endianness = endianness;
        // Skip the first 16 bits (2 bytes) of signature
        this.byteOffset = 2;
        this.bitOffset = 0;
    }
    /** Reads a specified number of bits, and move the offset */ getBits(length = 1) {
        let result = 0;
        let bitsRead = 0;
        while(bitsRead < length){
            if (this.byteOffset >= this.input.length) {
                throw new Error("Reached end of input");
            }
            const currentByte = this.input[this.byteOffset];
            const bitsLeft = 8 - this.bitOffset;
            const bitsToRead = Math.min(length - bitsRead, bitsLeft);
            if (this.endianness === "little-endian") {
                const mask = (1 << bitsToRead) - 1;
                const bits = currentByte >> this.bitOffset & mask;
                result |= bits << bitsRead;
            } else {
                const mask = (1 << bitsToRead) - 1 << 8 - this.bitOffset - bitsToRead;
                const bits = (currentByte & mask) >> 8 - this.bitOffset - bitsToRead;
                result = result << bitsToRead | bits;
            }
            bitsRead += bitsToRead;
            this.bitOffset += bitsToRead;
            if (this.bitOffset === 8) {
                this.byteOffset++;
                this.bitOffset = 0;
            }
        }
        return result;
    }
};
// lib/types/jxl-stream.ts
function calculateImageDimension(reader, isSmallImage) {
    if (isSmallImage) {
        return 8 * (1 + reader.getBits(5));
    }
    const sizeClass = reader.getBits(2);
    const extraBits = [
        9,
        13,
        18,
        30
    ][sizeClass];
    return 1 + reader.getBits(extraBits);
}
function calculateImageWidth(reader, isSmallImage, widthMode, height) {
    if (isSmallImage && widthMode === 0) {
        return 8 * (1 + reader.getBits(5));
    }
    if (widthMode === 0) {
        return calculateImageDimension(reader, false);
    }
    const aspectRatios = [
        1,
        1.2,
        4 / 3,
        1.5,
        16 / 9,
        5 / 4,
        2
    ];
    return Math.floor(height * aspectRatios[widthMode - 1]);
}
var JXLStream = {
    validate: (input)=>{
        return toHexString(input, 0, 2) === "ff0a";
    },
    calculate (input) {
        const reader = new BitReader(input, "little-endian");
        const isSmallImage = reader.getBits(1) === 1;
        const height = calculateImageDimension(reader, isSmallImage);
        const widthMode = reader.getBits(3);
        const width = calculateImageWidth(reader, isSmallImage, widthMode, height);
        return {
            width,
            height
        };
    }
};
// lib/types/jxl.ts
function extractCodestream(input) {
    const jxlcBox = findBox(input, "jxlc", 0);
    if (jxlcBox) {
        return input.slice(jxlcBox.offset + 8, jxlcBox.offset + jxlcBox.size);
    }
    const partialStreams = extractPartialStreams(input);
    if (partialStreams.length > 0) {
        return concatenateCodestreams(partialStreams);
    }
    return void 0;
}
function extractPartialStreams(input) {
    const partialStreams = [];
    let offset = 0;
    while(offset < input.length){
        const jxlpBox = findBox(input, "jxlp", offset);
        if (!jxlpBox) break;
        partialStreams.push(input.slice(jxlpBox.offset + 12, jxlpBox.offset + jxlpBox.size));
        offset = jxlpBox.offset + jxlpBox.size;
    }
    return partialStreams;
}
function concatenateCodestreams(partialCodestreams) {
    const totalLength = partialCodestreams.reduce((acc, curr)=>acc + curr.length, 0);
    const codestream = new Uint8Array(totalLength);
    let position = 0;
    for (const partial of partialCodestreams){
        codestream.set(partial, position);
        position += partial.length;
    }
    return codestream;
}
var JXL = {
    validate: (input)=>{
        const boxType = toUTF8String(input, 4, 8);
        if (boxType !== "JXL ") return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox) return false;
        const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
        return brand === "jxl ";
    },
    calculate (input) {
        const codestream = extractCodestream(input);
        if (codestream) return JXLStream.calculate(codestream);
        throw new Error("No codestream found in JXL container");
    }
};
// lib/types/ktx.ts
var KTX = {
    validate: (input)=>{
        const signature = toUTF8String(input, 1, 7);
        return [
            "KTX 11",
            "KTX 20"
        ].includes(signature);
    },
    calculate: (input)=>{
        const type = input[5] === 49 ? "ktx" : "ktx2";
        const offset = type === "ktx" ? 36 : 20;
        return {
            height: readUInt32LE(input, offset + 4),
            width: readUInt32LE(input, offset),
            type
        };
    }
};
// lib/types/png.ts
var pngSignature = "PNG\r\n\n";
var pngImageHeaderChunkName = "IHDR";
var pngFriedChunkName = "CgBI";
var PNG = {
    validate (input) {
        if (pngSignature === toUTF8String(input, 1, 8)) {
            let chunkName = toUTF8String(input, 12, 16);
            if (chunkName === pngFriedChunkName) {
                chunkName = toUTF8String(input, 28, 32);
            }
            if (chunkName !== pngImageHeaderChunkName) {
                throw new TypeError("Invalid PNG");
            }
            return true;
        }
        return false;
    },
    calculate (input) {
        if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
            return {
                height: readUInt32BE(input, 36),
                width: readUInt32BE(input, 32)
            };
        }
        return {
            height: readUInt32BE(input, 20),
            width: readUInt32BE(input, 16)
        };
    }
};
// lib/types/pnm.ts
var PNMTypes = {
    P1: "pbm/ascii",
    P2: "pgm/ascii",
    P3: "ppm/ascii",
    P4: "pbm",
    P5: "pgm",
    P6: "ppm",
    P7: "pam",
    PF: "pfm"
};
var handlers = {
    default: (lines)=>{
        let dimensions = [];
        while(lines.length > 0){
            const line = lines.shift();
            if (line[0] === "#") {
                continue;
            }
            dimensions = line.split(" ");
            break;
        }
        if (dimensions.length === 2) {
            return {
                height: Number.parseInt(dimensions[1], 10),
                width: Number.parseInt(dimensions[0], 10)
            };
        }
        throw new TypeError("Invalid PNM");
    },
    pam: (lines)=>{
        const size = {};
        while(lines.length > 0){
            const line = lines.shift();
            if (line.length > 16 || line.charCodeAt(0) > 128) {
                continue;
            }
            const [key, value] = line.split(" ");
            if (key && value) {
                size[key.toLowerCase()] = Number.parseInt(value, 10);
            }
            if (size.height && size.width) {
                break;
            }
        }
        if (size.height && size.width) {
            return {
                height: size.height,
                width: size.width
            };
        }
        throw new TypeError("Invalid PAM");
    }
};
var PNM = {
    validate: (input)=>toUTF8String(input, 0, 2) in PNMTypes,
    calculate (input) {
        const signature = toUTF8String(input, 0, 2);
        const type = PNMTypes[signature];
        const lines = toUTF8String(input, 3).split(/[\r\n]+/);
        const handler = handlers[type] || handlers.default;
        return handler(lines);
    }
};
// lib/types/psd.ts
var PSD = {
    validate: (input)=>toUTF8String(input, 0, 4) === "8BPS",
    calculate: (input)=>({
            height: readUInt32BE(input, 14),
            width: readUInt32BE(input, 18)
        })
};
// lib/types/svg.ts
var svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
var extractorRegExps = {
    height: /\sheight=(['"])([^%]+?)\1/,
    root: svgReg,
    viewbox: /\sviewBox=(['"])(.+?)\1/i,
    width: /\swidth=(['"])([^%]+?)\1/
};
var INCH_CM = 2.54;
var units = {
    in: 96,
    cm: 96 / INCH_CM,
    em: 16,
    ex: 8,
    m: 96 / INCH_CM * 100,
    mm: 96 / INCH_CM / 10,
    pc: 96 / 72 / 12,
    pt: 96 / 72,
    px: 1
};
var unitsReg = new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`);
function parseLength(len) {
    const m = unitsReg.exec(len);
    if (!m) {
        return void 0;
    }
    return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
    const bounds = viewbox.split(" ");
    return {
        height: parseLength(bounds[3]),
        width: parseLength(bounds[2])
    };
}
function parseAttributes(root) {
    const width = root.match(extractorRegExps.width);
    const height = root.match(extractorRegExps.height);
    const viewbox = root.match(extractorRegExps.viewbox);
    return {
        height: height && parseLength(height[2]),
        viewbox: viewbox && parseViewbox(viewbox[2]),
        width: width && parseLength(width[2])
    };
}
function calculateByDimensions(attrs) {
    return {
        height: attrs.height,
        width: attrs.width
    };
}
function calculateByViewbox(attrs, viewbox) {
    const ratio = viewbox.width / viewbox.height;
    if (attrs.width) {
        return {
            height: Math.floor(attrs.width / ratio),
            width: attrs.width
        };
    }
    if (attrs.height) {
        return {
            height: attrs.height,
            width: Math.floor(attrs.height * ratio)
        };
    }
    return {
        height: viewbox.height,
        width: viewbox.width
    };
}
var SVG = {
    // Scan only the first kilo-byte to speed up the check on larger files
    validate: (input)=>svgReg.test(toUTF8String(input, 0, 1e3)),
    calculate (input) {
        const root = toUTF8String(input).match(extractorRegExps.root);
        if (root) {
            const attrs = parseAttributes(root[0]);
            if (attrs.width && attrs.height) {
                return calculateByDimensions(attrs);
            }
            if (attrs.viewbox) {
                return calculateByViewbox(attrs, attrs.viewbox);
            }
        }
        throw new TypeError("Invalid SVG");
    }
};
// lib/types/tga.ts
var TGA = {
    validate (input) {
        return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
    },
    calculate (input) {
        return {
            height: readUInt16LE(input, 14),
            width: readUInt16LE(input, 12)
        };
    }
};
// lib/types/tiff.ts
var CONSTANTS = {
    TAG: {
        WIDTH: 256,
        HEIGHT: 257,
        COMPRESSION: 259
    },
    TYPE: {
        SHORT: 3,
        LONG: 4,
        LONG8: 16
    },
    ENTRY_SIZE: {
        STANDARD: 12,
        BIG: 20
    },
    COUNT_SIZE: {
        STANDARD: 2,
        BIG: 8
    }
};
function readIFD(input, { isBigEndian, isBigTiff }) {
    const ifdOffset = isBigTiff ? Number(readUInt64(input, 8, isBigEndian)) : readUInt(input, 32, 4, isBigEndian);
    const entryCountSize = isBigTiff ? CONSTANTS.COUNT_SIZE.BIG : CONSTANTS.COUNT_SIZE.STANDARD;
    return input.slice(ifdOffset + entryCountSize);
}
function readTagValue(input, type, offset, isBigEndian) {
    switch(type){
        case CONSTANTS.TYPE.SHORT:
            return readUInt(input, 16, offset, isBigEndian);
        case CONSTANTS.TYPE.LONG:
            return readUInt(input, 32, offset, isBigEndian);
        case CONSTANTS.TYPE.LONG8:
            {
                const value = Number(readUInt64(input, offset, isBigEndian));
                if (value > Number.MAX_SAFE_INTEGER) {
                    throw new TypeError("Value too large");
                }
                return value;
            }
        default:
            return 0;
    }
}
function nextTag(input, isBigTiff) {
    const entrySize = isBigTiff ? CONSTANTS.ENTRY_SIZE.BIG : CONSTANTS.ENTRY_SIZE.STANDARD;
    if (input.length > entrySize) {
        return input.slice(entrySize);
    }
}
function extractTags(input, { isBigEndian, isBigTiff }) {
    const tags = {};
    let temp = input;
    while(temp?.length){
        const code = readUInt(temp, 16, 0, isBigEndian);
        const type = readUInt(temp, 16, 2, isBigEndian);
        const length = isBigTiff ? Number(readUInt64(temp, 4, isBigEndian)) : readUInt(temp, 32, 4, isBigEndian);
        if (code === 0) break;
        if (length === 1 && (type === CONSTANTS.TYPE.SHORT || type === CONSTANTS.TYPE.LONG || isBigTiff && type === CONSTANTS.TYPE.LONG8)) {
            const valueOffset = isBigTiff ? 12 : 8;
            tags[code] = readTagValue(temp, type, valueOffset, isBigEndian);
        }
        temp = nextTag(temp, isBigTiff);
    }
    return tags;
}
function determineFormat(input) {
    const signature = toUTF8String(input, 0, 2);
    const version = readUInt(input, 16, 2, signature === "MM");
    return {
        isBigEndian: signature === "MM",
        isBigTiff: version === 43
    };
}
function validateBigTIFFHeader(input, isBigEndian) {
    const byteSize = readUInt(input, 16, 4, isBigEndian);
    const reserved = readUInt(input, 16, 6, isBigEndian);
    if (byteSize !== 8 || reserved !== 0) {
        throw new TypeError("Invalid BigTIFF header");
    }
}
var signatures = /* @__PURE__ */ new Set([
    "49492a00",
    // Little Endian
    "4d4d002a",
    // Big Endian
    "49492b00",
    // BigTIFF Little Endian
    "4d4d002b"
]);
var TIFF = {
    validate: (input)=>{
        const signature = toHexString(input, 0, 4);
        return signatures.has(signature);
    },
    calculate (input) {
        const format = determineFormat(input);
        if (format.isBigTiff) {
            validateBigTIFFHeader(input, format.isBigEndian);
        }
        const ifdBuffer = readIFD(input, format);
        const tags = extractTags(ifdBuffer, format);
        const info = {
            height: tags[CONSTANTS.TAG.HEIGHT],
            width: tags[CONSTANTS.TAG.WIDTH],
            type: format.isBigTiff ? "bigtiff" : "tiff"
        };
        if (tags[CONSTANTS.TAG.COMPRESSION]) {
            info.compression = tags[CONSTANTS.TAG.COMPRESSION];
        }
        if (!info.width || !info.height) {
            throw new TypeError("Invalid Tiff. Missing tags");
        }
        return info;
    }
};
// lib/types/webp.ts
function calculateExtended(input) {
    return {
        height: 1 + readUInt24LE(input, 7),
        width: 1 + readUInt24LE(input, 4)
    };
}
function calculateLossless(input) {
    return {
        height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
        width: 1 + ((input[2] & 63) << 8 | input[1])
    };
}
function calculateLossy(input) {
    return {
        height: readInt16LE(input, 8) & 16383,
        width: readInt16LE(input, 6) & 16383
    };
}
var WEBP = {
    validate (input) {
        const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
        const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
        const vp8Header = "VP8" === toUTF8String(input, 12, 15);
        return riffHeader && webpHeader && vp8Header;
    },
    calculate (_input) {
        const chunkHeader = toUTF8String(_input, 12, 16);
        const input = _input.slice(20, 30);
        if (chunkHeader === "VP8X") {
            const extendedHeader = input[0];
            const validStart = (extendedHeader & 192) === 0;
            const validEnd = (extendedHeader & 1) === 0;
            if (validStart && validEnd) {
                return calculateExtended(input);
            }
            throw new TypeError("Invalid WebP");
        }
        if (chunkHeader === "VP8 " && input[0] !== 47) {
            return calculateLossy(input);
        }
        const signature = toHexString(input, 3, 6);
        if (chunkHeader === "VP8L" && signature !== "9d012a") {
            return calculateLossless(input);
        }
        throw new TypeError("Invalid WebP");
    }
};
// lib/types/index.ts
var typeHandlers = /* @__PURE__ */ new Map([
    [
        "bmp",
        BMP
    ],
    [
        "cur",
        CUR
    ],
    [
        "dds",
        DDS
    ],
    [
        "gif",
        GIF
    ],
    [
        "heif",
        HEIF
    ],
    [
        "icns",
        ICNS
    ],
    [
        "ico",
        ICO
    ],
    [
        "j2c",
        J2C
    ],
    [
        "jp2",
        JP2
    ],
    [
        "jpg",
        JPG
    ],
    [
        "jxl",
        JXL
    ],
    [
        "jxl-stream",
        JXLStream
    ],
    [
        "ktx",
        KTX
    ],
    [
        "png",
        PNG
    ],
    [
        "pnm",
        PNM
    ],
    [
        "psd",
        PSD
    ],
    [
        "svg",
        SVG
    ],
    [
        "tga",
        TGA
    ],
    [
        "tiff",
        TIFF
    ],
    [
        "webp",
        WEBP
    ]
]);
var types = Array.from(typeHandlers.keys());
// lib/detector.ts
var firstBytes = /* @__PURE__ */ new Map([
    [
        0,
        "heif"
    ],
    [
        56,
        "psd"
    ],
    [
        66,
        "bmp"
    ],
    [
        68,
        "dds"
    ],
    [
        71,
        "gif"
    ],
    [
        73,
        "tiff"
    ],
    [
        77,
        "tiff"
    ],
    [
        82,
        "webp"
    ],
    [
        105,
        "icns"
    ],
    [
        137,
        "png"
    ],
    [
        255,
        "jpg"
    ]
]);
function detector(input) {
    const byte = input[0];
    const type = firstBytes.get(byte);
    if (type && typeHandlers.get(type).validate(input)) {
        return type;
    }
    return types.find((type2)=>typeHandlers.get(type2).validate(input));
}
// lib/lookup.ts
var globalOptions = {
    disabledTypes: []
};
function imageSize(input) {
    const type = detector(input);
    if (typeof type !== "undefined") {
        if (globalOptions.disabledTypes.indexOf(type) > -1) {
            throw new TypeError(`disabled file type: ${type}`);
        }
        const size = typeHandlers.get(type).calculate(input);
        if (size !== void 0) {
            size.type = size.type ?? type;
            if (size.images && size.images.length > 1) {
                const largestImage = size.images.reduce((largest, current)=>{
                    return current.width * current.height > largest.width * largest.height ? current : largest;
                }, size.images[0]);
                size.width = largestImage.width;
                size.height = largestImage.height;
            }
            return size;
        }
    }
    throw new TypeError(`unsupported file type: ${type}`);
}
var disableTypes = (types2)=>{
    globalOptions.disabledTypes = types2;
};
;
}),
"[project]/node_modules/image-size/dist/fromFile.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "imageSizeFromFile",
    ()=>imageSizeFromFile,
    "setConcurrency",
    ()=>setConcurrency
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
// lib/fromFile.ts
// lib/types/utils.ts
var decoder = new TextDecoder();
var toUTF8String = (input, start = 0, end = input.length)=>decoder.decode(input.slice(start, end));
var toHexString = (input, start = 0, end = input.length)=>input.slice(start, end).reduce((memo, i)=>memo + `0${i.toString(16)}`.slice(-2), "");
var getView = (input, offset)=>new DataView(input.buffer, input.byteOffset + offset);
var readInt16LE = (input, offset = 0)=>getView(input, offset).getInt16(0, true);
var readUInt16BE = (input, offset = 0)=>getView(input, offset).getUint16(0, false);
var readUInt16LE = (input, offset = 0)=>getView(input, offset).getUint16(0, true);
var readUInt24LE = (input, offset = 0)=>{
    const view = getView(input, offset);
    return view.getUint16(0, true) + (view.getUint8(2) << 16);
};
var readInt32LE = (input, offset = 0)=>getView(input, offset).getInt32(0, true);
var readUInt32BE = (input, offset = 0)=>getView(input, offset).getUint32(0, false);
var readUInt32LE = (input, offset = 0)=>getView(input, offset).getUint32(0, true);
var readUInt64 = (input, offset, isBigEndian)=>getView(input, offset).getBigUint64(0, !isBigEndian);
var methods = {
    readUInt16BE,
    readUInt16LE,
    readUInt32BE,
    readUInt32LE
};
function readUInt(input, bits, offset = 0, isBigEndian = false) {
    const endian = isBigEndian ? "BE" : "LE";
    const methodName = `readUInt${bits}${endian}`;
    return methods[methodName](input, offset);
}
function readBox(input, offset) {
    if (input.length - offset < 4) return;
    const boxSize = readUInt32BE(input, offset);
    if (input.length - offset < boxSize) return;
    return {
        name: toUTF8String(input, 4 + offset, 8 + offset),
        offset,
        size: boxSize
    };
}
function findBox(input, boxName, currentOffset) {
    while(currentOffset < input.length){
        const box = readBox(input, currentOffset);
        if (!box) break;
        if (box.name === boxName) return box;
        currentOffset += box.size > 0 ? box.size : 8;
    }
}
// lib/types/bmp.ts
var BMP = {
    validate: (input)=>toUTF8String(input, 0, 2) === "BM",
    calculate: (input)=>({
            height: Math.abs(readInt32LE(input, 22)),
            width: readUInt32LE(input, 18)
        })
};
// lib/types/ico.ts
var TYPE_ICON = 1;
var SIZE_HEADER = 2 + 2 + 2;
var SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
    const value = input[offset];
    return value === 0 ? 256 : value;
}
function getImageSize(input, imageIndex) {
    const offset = SIZE_HEADER + imageIndex * SIZE_IMAGE_ENTRY;
    return {
        height: getSizeFromOffset(input, offset + 1),
        width: getSizeFromOffset(input, offset)
    };
}
var ICO = {
    validate (input) {
        const reserved = readUInt16LE(input, 0);
        const imageCount = readUInt16LE(input, 4);
        if (reserved !== 0 || imageCount === 0) return false;
        const imageType = readUInt16LE(input, 2);
        return imageType === TYPE_ICON;
    },
    calculate (input) {
        const nbImages = readUInt16LE(input, 4);
        const imageSize2 = getImageSize(input, 0);
        if (nbImages === 1) return imageSize2;
        const images = [];
        for(let imageIndex = 0; imageIndex < nbImages; imageIndex += 1){
            images.push(getImageSize(input, imageIndex));
        }
        return {
            width: imageSize2.width,
            height: imageSize2.height,
            images
        };
    }
};
// lib/types/cur.ts
var TYPE_CURSOR = 2;
var CUR = {
    validate (input) {
        const reserved = readUInt16LE(input, 0);
        const imageCount = readUInt16LE(input, 4);
        if (reserved !== 0 || imageCount === 0) return false;
        const imageType = readUInt16LE(input, 2);
        return imageType === TYPE_CURSOR;
    },
    calculate: (input)=>ICO.calculate(input)
};
// lib/types/dds.ts
var DDS = {
    validate: (input)=>readUInt32LE(input, 0) === 542327876,
    calculate: (input)=>({
            height: readUInt32LE(input, 12),
            width: readUInt32LE(input, 16)
        })
};
// lib/types/gif.ts
var gifRegexp = /^GIF8[79]a/;
var GIF = {
    validate: (input)=>gifRegexp.test(toUTF8String(input, 0, 6)),
    calculate: (input)=>({
            height: readUInt16LE(input, 8),
            width: readUInt16LE(input, 6)
        })
};
// lib/types/heif.ts
var brandMap = {
    avif: "avif",
    mif1: "heif",
    msf1: "heif",
    // heif-sequence
    heic: "heic",
    heix: "heic",
    hevc: "heic",
    // heic-sequence
    hevx: "heic"
};
var HEIF = {
    validate (input) {
        const boxType = toUTF8String(input, 4, 8);
        if (boxType !== "ftyp") return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox) return false;
        const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
        return brand in brandMap;
    },
    calculate (input) {
        const metaBox = findBox(input, "meta", 0);
        const iprpBox = metaBox && findBox(input, "iprp", metaBox.offset + 12);
        const ipcoBox = iprpBox && findBox(input, "ipco", iprpBox.offset + 8);
        if (!ipcoBox) {
            throw new TypeError("Invalid HEIF, no ipco box found");
        }
        const type = toUTF8String(input, 8, 12);
        const images = [];
        let currentOffset = ipcoBox.offset + 8;
        while(currentOffset < ipcoBox.offset + ipcoBox.size){
            const ispeBox = findBox(input, "ispe", currentOffset);
            if (!ispeBox) break;
            const rawWidth = readUInt32BE(input, ispeBox.offset + 12);
            const rawHeight = readUInt32BE(input, ispeBox.offset + 16);
            const clapBox = findBox(input, "clap", currentOffset);
            let width = rawWidth;
            let height = rawHeight;
            if (clapBox && clapBox.offset < ipcoBox.offset + ipcoBox.size) {
                const cropRight = readUInt32BE(input, clapBox.offset + 12);
                width = rawWidth - cropRight;
            }
            images.push({
                height,
                width
            });
            currentOffset = ispeBox.offset + ispeBox.size;
        }
        if (images.length === 0) {
            throw new TypeError("Invalid HEIF, no sizes found");
        }
        return {
            width: images[0].width,
            height: images[0].height,
            type,
            ...images.length > 1 ? {
                images
            } : {}
        };
    }
};
// lib/types/icns.ts
var SIZE_HEADER2 = 4 + 4;
var FILE_LENGTH_OFFSET = 4;
var ENTRY_LENGTH_OFFSET = 4;
var ICON_TYPE_SIZE = {
    ICON: 32,
    "ICN#": 32,
    // m => 16 x 16
    "icm#": 16,
    icm4: 16,
    icm8: 16,
    // s => 16 x 16
    "ics#": 16,
    ics4: 16,
    ics8: 16,
    is32: 16,
    s8mk: 16,
    icp4: 16,
    // l => 32 x 32
    icl4: 32,
    icl8: 32,
    il32: 32,
    l8mk: 32,
    icp5: 32,
    ic11: 32,
    // h => 48 x 48
    ich4: 48,
    ich8: 48,
    ih32: 48,
    h8mk: 48,
    // . => 64 x 64
    icp6: 64,
    ic12: 32,
    // t => 128 x 128
    it32: 128,
    t8mk: 128,
    ic07: 128,
    // . => 256 x 256
    ic08: 256,
    ic13: 256,
    // . => 512 x 512
    ic09: 512,
    ic14: 512,
    // . => 1024 x 1024
    ic10: 1024
};
function readImageHeader(input, imageOffset) {
    const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
    return [
        toUTF8String(input, imageOffset, imageLengthOffset),
        readUInt32BE(input, imageLengthOffset)
    ];
}
function getImageSize2(type) {
    const size = ICON_TYPE_SIZE[type];
    return {
        width: size,
        height: size,
        type
    };
}
var ICNS = {
    validate: (input)=>toUTF8String(input, 0, 4) === "icns",
    calculate (input) {
        const inputLength = input.length;
        const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
        let imageOffset = SIZE_HEADER2;
        const images = [];
        while(imageOffset < fileLength && imageOffset < inputLength){
            const imageHeader = readImageHeader(input, imageOffset);
            const imageSize2 = getImageSize2(imageHeader[0]);
            images.push(imageSize2);
            imageOffset += imageHeader[1];
        }
        if (images.length === 0) {
            throw new TypeError("Invalid ICNS, no sizes found");
        }
        return {
            width: images[0].width,
            height: images[0].height,
            ...images.length > 1 ? {
                images
            } : {}
        };
    }
};
// lib/types/j2c.ts
var J2C = {
    // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
    validate: (input)=>readUInt32BE(input, 0) === 4283432785,
    calculate: (input)=>({
            height: readUInt32BE(input, 12),
            width: readUInt32BE(input, 8)
        })
};
// lib/types/jp2.ts
var JP2 = {
    validate (input) {
        const boxType = toUTF8String(input, 4, 8);
        if (boxType !== "jP  ") return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox) return false;
        const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
        return brand === "jp2 ";
    },
    calculate (input) {
        const jp2hBox = findBox(input, "jp2h", 0);
        const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
        if (ihdrBox) {
            return {
                height: readUInt32BE(input, ihdrBox.offset + 8),
                width: readUInt32BE(input, ihdrBox.offset + 12)
            };
        }
        throw new TypeError("Unsupported JPEG 2000 format");
    }
};
// lib/types/jpg.ts
var EXIF_MARKER = "45786966";
var APP1_DATA_SIZE_BYTES = 2;
var EXIF_HEADER_BYTES = 6;
var TIFF_BYTE_ALIGN_BYTES = 2;
var BIG_ENDIAN_BYTE_ALIGN = "4d4d";
var LITTLE_ENDIAN_BYTE_ALIGN = "4949";
var IDF_ENTRY_BYTES = 12;
var NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
    return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
    return {
        height: readUInt16BE(input, index),
        width: readUInt16BE(input, index + 2)
    };
}
function extractOrientation(exifBlock, isBigEndian) {
    const idfOffset = 8;
    const offset = EXIF_HEADER_BYTES + idfOffset;
    const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
    for(let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++){
        const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
        const end = start + IDF_ENTRY_BYTES;
        if (start > exifBlock.length) {
            return;
        }
        const block = exifBlock.slice(start, end);
        const tagNumber = readUInt(block, 16, 0, isBigEndian);
        if (tagNumber === 274) {
            const dataFormat = readUInt(block, 16, 2, isBigEndian);
            if (dataFormat !== 3) {
                return;
            }
            const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
            if (numberOfComponents !== 1) {
                return;
            }
            return readUInt(block, 16, 8, isBigEndian);
        }
    }
}
function validateExifBlock(input, index) {
    const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
    const byteAlign = toHexString(exifBlock, EXIF_HEADER_BYTES, EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES);
    const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
    const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
    if (isBigEndian || isLittleEndian) {
        return extractOrientation(exifBlock, isBigEndian);
    }
}
function validateInput(input, index) {
    if (index > input.length) {
        throw new TypeError("Corrupt JPG, exceeded buffer limits");
    }
}
var JPG = {
    validate: (input)=>toHexString(input, 0, 2) === "ffd8",
    calculate (_input) {
        let input = _input.slice(4);
        let orientation;
        let next;
        while(input.length){
            const i = readUInt16BE(input, 0);
            validateInput(input, i);
            if (input[i] !== 255) {
                input = input.slice(1);
                continue;
            }
            if (isEXIF(input)) {
                orientation = validateExifBlock(input, i);
            }
            next = input[i + 1];
            if (next === 192 || next === 193 || next === 194) {
                const size = extractSize(input, i + 5);
                if (!orientation) {
                    return size;
                }
                return {
                    height: size.height,
                    orientation,
                    width: size.width
                };
            }
            input = input.slice(i + 2);
        }
        throw new TypeError("Invalid JPG, no size found");
    }
};
// lib/utils/bit-reader.ts
var BitReader = class {
    constructor(input, endianness){
        this.input = input;
        this.endianness = endianness;
        // Skip the first 16 bits (2 bytes) of signature
        this.byteOffset = 2;
        this.bitOffset = 0;
    }
    /** Reads a specified number of bits, and move the offset */ getBits(length = 1) {
        let result = 0;
        let bitsRead = 0;
        while(bitsRead < length){
            if (this.byteOffset >= this.input.length) {
                throw new Error("Reached end of input");
            }
            const currentByte = this.input[this.byteOffset];
            const bitsLeft = 8 - this.bitOffset;
            const bitsToRead = Math.min(length - bitsRead, bitsLeft);
            if (this.endianness === "little-endian") {
                const mask = (1 << bitsToRead) - 1;
                const bits = currentByte >> this.bitOffset & mask;
                result |= bits << bitsRead;
            } else {
                const mask = (1 << bitsToRead) - 1 << 8 - this.bitOffset - bitsToRead;
                const bits = (currentByte & mask) >> 8 - this.bitOffset - bitsToRead;
                result = result << bitsToRead | bits;
            }
            bitsRead += bitsToRead;
            this.bitOffset += bitsToRead;
            if (this.bitOffset === 8) {
                this.byteOffset++;
                this.bitOffset = 0;
            }
        }
        return result;
    }
};
// lib/types/jxl-stream.ts
function calculateImageDimension(reader, isSmallImage) {
    if (isSmallImage) {
        return 8 * (1 + reader.getBits(5));
    }
    const sizeClass = reader.getBits(2);
    const extraBits = [
        9,
        13,
        18,
        30
    ][sizeClass];
    return 1 + reader.getBits(extraBits);
}
function calculateImageWidth(reader, isSmallImage, widthMode, height) {
    if (isSmallImage && widthMode === 0) {
        return 8 * (1 + reader.getBits(5));
    }
    if (widthMode === 0) {
        return calculateImageDimension(reader, false);
    }
    const aspectRatios = [
        1,
        1.2,
        4 / 3,
        1.5,
        16 / 9,
        5 / 4,
        2
    ];
    return Math.floor(height * aspectRatios[widthMode - 1]);
}
var JXLStream = {
    validate: (input)=>{
        return toHexString(input, 0, 2) === "ff0a";
    },
    calculate (input) {
        const reader = new BitReader(input, "little-endian");
        const isSmallImage = reader.getBits(1) === 1;
        const height = calculateImageDimension(reader, isSmallImage);
        const widthMode = reader.getBits(3);
        const width = calculateImageWidth(reader, isSmallImage, widthMode, height);
        return {
            width,
            height
        };
    }
};
// lib/types/jxl.ts
function extractCodestream(input) {
    const jxlcBox = findBox(input, "jxlc", 0);
    if (jxlcBox) {
        return input.slice(jxlcBox.offset + 8, jxlcBox.offset + jxlcBox.size);
    }
    const partialStreams = extractPartialStreams(input);
    if (partialStreams.length > 0) {
        return concatenateCodestreams(partialStreams);
    }
    return void 0;
}
function extractPartialStreams(input) {
    const partialStreams = [];
    let offset = 0;
    while(offset < input.length){
        const jxlpBox = findBox(input, "jxlp", offset);
        if (!jxlpBox) break;
        partialStreams.push(input.slice(jxlpBox.offset + 12, jxlpBox.offset + jxlpBox.size));
        offset = jxlpBox.offset + jxlpBox.size;
    }
    return partialStreams;
}
function concatenateCodestreams(partialCodestreams) {
    const totalLength = partialCodestreams.reduce((acc, curr)=>acc + curr.length, 0);
    const codestream = new Uint8Array(totalLength);
    let position = 0;
    for (const partial of partialCodestreams){
        codestream.set(partial, position);
        position += partial.length;
    }
    return codestream;
}
var JXL = {
    validate: (input)=>{
        const boxType = toUTF8String(input, 4, 8);
        if (boxType !== "JXL ") return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox) return false;
        const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
        return brand === "jxl ";
    },
    calculate (input) {
        const codestream = extractCodestream(input);
        if (codestream) return JXLStream.calculate(codestream);
        throw new Error("No codestream found in JXL container");
    }
};
// lib/types/ktx.ts
var KTX = {
    validate: (input)=>{
        const signature = toUTF8String(input, 1, 7);
        return [
            "KTX 11",
            "KTX 20"
        ].includes(signature);
    },
    calculate: (input)=>{
        const type = input[5] === 49 ? "ktx" : "ktx2";
        const offset = type === "ktx" ? 36 : 20;
        return {
            height: readUInt32LE(input, offset + 4),
            width: readUInt32LE(input, offset),
            type
        };
    }
};
// lib/types/png.ts
var pngSignature = "PNG\r\n\n";
var pngImageHeaderChunkName = "IHDR";
var pngFriedChunkName = "CgBI";
var PNG = {
    validate (input) {
        if (pngSignature === toUTF8String(input, 1, 8)) {
            let chunkName = toUTF8String(input, 12, 16);
            if (chunkName === pngFriedChunkName) {
                chunkName = toUTF8String(input, 28, 32);
            }
            if (chunkName !== pngImageHeaderChunkName) {
                throw new TypeError("Invalid PNG");
            }
            return true;
        }
        return false;
    },
    calculate (input) {
        if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
            return {
                height: readUInt32BE(input, 36),
                width: readUInt32BE(input, 32)
            };
        }
        return {
            height: readUInt32BE(input, 20),
            width: readUInt32BE(input, 16)
        };
    }
};
// lib/types/pnm.ts
var PNMTypes = {
    P1: "pbm/ascii",
    P2: "pgm/ascii",
    P3: "ppm/ascii",
    P4: "pbm",
    P5: "pgm",
    P6: "ppm",
    P7: "pam",
    PF: "pfm"
};
var handlers = {
    default: (lines)=>{
        let dimensions = [];
        while(lines.length > 0){
            const line = lines.shift();
            if (line[0] === "#") {
                continue;
            }
            dimensions = line.split(" ");
            break;
        }
        if (dimensions.length === 2) {
            return {
                height: Number.parseInt(dimensions[1], 10),
                width: Number.parseInt(dimensions[0], 10)
            };
        }
        throw new TypeError("Invalid PNM");
    },
    pam: (lines)=>{
        const size = {};
        while(lines.length > 0){
            const line = lines.shift();
            if (line.length > 16 || line.charCodeAt(0) > 128) {
                continue;
            }
            const [key, value] = line.split(" ");
            if (key && value) {
                size[key.toLowerCase()] = Number.parseInt(value, 10);
            }
            if (size.height && size.width) {
                break;
            }
        }
        if (size.height && size.width) {
            return {
                height: size.height,
                width: size.width
            };
        }
        throw new TypeError("Invalid PAM");
    }
};
var PNM = {
    validate: (input)=>toUTF8String(input, 0, 2) in PNMTypes,
    calculate (input) {
        const signature = toUTF8String(input, 0, 2);
        const type = PNMTypes[signature];
        const lines = toUTF8String(input, 3).split(/[\r\n]+/);
        const handler = handlers[type] || handlers.default;
        return handler(lines);
    }
};
// lib/types/psd.ts
var PSD = {
    validate: (input)=>toUTF8String(input, 0, 4) === "8BPS",
    calculate: (input)=>({
            height: readUInt32BE(input, 14),
            width: readUInt32BE(input, 18)
        })
};
// lib/types/svg.ts
var svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
var extractorRegExps = {
    height: /\sheight=(['"])([^%]+?)\1/,
    root: svgReg,
    viewbox: /\sviewBox=(['"])(.+?)\1/i,
    width: /\swidth=(['"])([^%]+?)\1/
};
var INCH_CM = 2.54;
var units = {
    in: 96,
    cm: 96 / INCH_CM,
    em: 16,
    ex: 8,
    m: 96 / INCH_CM * 100,
    mm: 96 / INCH_CM / 10,
    pc: 96 / 72 / 12,
    pt: 96 / 72,
    px: 1
};
var unitsReg = new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`);
function parseLength(len) {
    const m = unitsReg.exec(len);
    if (!m) {
        return void 0;
    }
    return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
    const bounds = viewbox.split(" ");
    return {
        height: parseLength(bounds[3]),
        width: parseLength(bounds[2])
    };
}
function parseAttributes(root) {
    const width = root.match(extractorRegExps.width);
    const height = root.match(extractorRegExps.height);
    const viewbox = root.match(extractorRegExps.viewbox);
    return {
        height: height && parseLength(height[2]),
        viewbox: viewbox && parseViewbox(viewbox[2]),
        width: width && parseLength(width[2])
    };
}
function calculateByDimensions(attrs) {
    return {
        height: attrs.height,
        width: attrs.width
    };
}
function calculateByViewbox(attrs, viewbox) {
    const ratio = viewbox.width / viewbox.height;
    if (attrs.width) {
        return {
            height: Math.floor(attrs.width / ratio),
            width: attrs.width
        };
    }
    if (attrs.height) {
        return {
            height: attrs.height,
            width: Math.floor(attrs.height * ratio)
        };
    }
    return {
        height: viewbox.height,
        width: viewbox.width
    };
}
var SVG = {
    // Scan only the first kilo-byte to speed up the check on larger files
    validate: (input)=>svgReg.test(toUTF8String(input, 0, 1e3)),
    calculate (input) {
        const root = toUTF8String(input).match(extractorRegExps.root);
        if (root) {
            const attrs = parseAttributes(root[0]);
            if (attrs.width && attrs.height) {
                return calculateByDimensions(attrs);
            }
            if (attrs.viewbox) {
                return calculateByViewbox(attrs, attrs.viewbox);
            }
        }
        throw new TypeError("Invalid SVG");
    }
};
// lib/types/tga.ts
var TGA = {
    validate (input) {
        return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
    },
    calculate (input) {
        return {
            height: readUInt16LE(input, 14),
            width: readUInt16LE(input, 12)
        };
    }
};
// lib/types/tiff.ts
var CONSTANTS = {
    TAG: {
        WIDTH: 256,
        HEIGHT: 257,
        COMPRESSION: 259
    },
    TYPE: {
        SHORT: 3,
        LONG: 4,
        LONG8: 16
    },
    ENTRY_SIZE: {
        STANDARD: 12,
        BIG: 20
    },
    COUNT_SIZE: {
        STANDARD: 2,
        BIG: 8
    }
};
function readIFD(input, { isBigEndian, isBigTiff }) {
    const ifdOffset = isBigTiff ? Number(readUInt64(input, 8, isBigEndian)) : readUInt(input, 32, 4, isBigEndian);
    const entryCountSize = isBigTiff ? CONSTANTS.COUNT_SIZE.BIG : CONSTANTS.COUNT_SIZE.STANDARD;
    return input.slice(ifdOffset + entryCountSize);
}
function readTagValue(input, type, offset, isBigEndian) {
    switch(type){
        case CONSTANTS.TYPE.SHORT:
            return readUInt(input, 16, offset, isBigEndian);
        case CONSTANTS.TYPE.LONG:
            return readUInt(input, 32, offset, isBigEndian);
        case CONSTANTS.TYPE.LONG8:
            {
                const value = Number(readUInt64(input, offset, isBigEndian));
                if (value > Number.MAX_SAFE_INTEGER) {
                    throw new TypeError("Value too large");
                }
                return value;
            }
        default:
            return 0;
    }
}
function nextTag(input, isBigTiff) {
    const entrySize = isBigTiff ? CONSTANTS.ENTRY_SIZE.BIG : CONSTANTS.ENTRY_SIZE.STANDARD;
    if (input.length > entrySize) {
        return input.slice(entrySize);
    }
}
function extractTags(input, { isBigEndian, isBigTiff }) {
    const tags = {};
    let temp = input;
    while(temp?.length){
        const code = readUInt(temp, 16, 0, isBigEndian);
        const type = readUInt(temp, 16, 2, isBigEndian);
        const length = isBigTiff ? Number(readUInt64(temp, 4, isBigEndian)) : readUInt(temp, 32, 4, isBigEndian);
        if (code === 0) break;
        if (length === 1 && (type === CONSTANTS.TYPE.SHORT || type === CONSTANTS.TYPE.LONG || isBigTiff && type === CONSTANTS.TYPE.LONG8)) {
            const valueOffset = isBigTiff ? 12 : 8;
            tags[code] = readTagValue(temp, type, valueOffset, isBigEndian);
        }
        temp = nextTag(temp, isBigTiff);
    }
    return tags;
}
function determineFormat(input) {
    const signature = toUTF8String(input, 0, 2);
    const version = readUInt(input, 16, 2, signature === "MM");
    return {
        isBigEndian: signature === "MM",
        isBigTiff: version === 43
    };
}
function validateBigTIFFHeader(input, isBigEndian) {
    const byteSize = readUInt(input, 16, 4, isBigEndian);
    const reserved = readUInt(input, 16, 6, isBigEndian);
    if (byteSize !== 8 || reserved !== 0) {
        throw new TypeError("Invalid BigTIFF header");
    }
}
var signatures = /* @__PURE__ */ new Set([
    "49492a00",
    // Little Endian
    "4d4d002a",
    // Big Endian
    "49492b00",
    // BigTIFF Little Endian
    "4d4d002b"
]);
var TIFF = {
    validate: (input)=>{
        const signature = toHexString(input, 0, 4);
        return signatures.has(signature);
    },
    calculate (input) {
        const format = determineFormat(input);
        if (format.isBigTiff) {
            validateBigTIFFHeader(input, format.isBigEndian);
        }
        const ifdBuffer = readIFD(input, format);
        const tags = extractTags(ifdBuffer, format);
        const info = {
            height: tags[CONSTANTS.TAG.HEIGHT],
            width: tags[CONSTANTS.TAG.WIDTH],
            type: format.isBigTiff ? "bigtiff" : "tiff"
        };
        if (tags[CONSTANTS.TAG.COMPRESSION]) {
            info.compression = tags[CONSTANTS.TAG.COMPRESSION];
        }
        if (!info.width || !info.height) {
            throw new TypeError("Invalid Tiff. Missing tags");
        }
        return info;
    }
};
// lib/types/webp.ts
function calculateExtended(input) {
    return {
        height: 1 + readUInt24LE(input, 7),
        width: 1 + readUInt24LE(input, 4)
    };
}
function calculateLossless(input) {
    return {
        height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
        width: 1 + ((input[2] & 63) << 8 | input[1])
    };
}
function calculateLossy(input) {
    return {
        height: readInt16LE(input, 8) & 16383,
        width: readInt16LE(input, 6) & 16383
    };
}
var WEBP = {
    validate (input) {
        const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
        const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
        const vp8Header = "VP8" === toUTF8String(input, 12, 15);
        return riffHeader && webpHeader && vp8Header;
    },
    calculate (_input) {
        const chunkHeader = toUTF8String(_input, 12, 16);
        const input = _input.slice(20, 30);
        if (chunkHeader === "VP8X") {
            const extendedHeader = input[0];
            const validStart = (extendedHeader & 192) === 0;
            const validEnd = (extendedHeader & 1) === 0;
            if (validStart && validEnd) {
                return calculateExtended(input);
            }
            throw new TypeError("Invalid WebP");
        }
        if (chunkHeader === "VP8 " && input[0] !== 47) {
            return calculateLossy(input);
        }
        const signature = toHexString(input, 3, 6);
        if (chunkHeader === "VP8L" && signature !== "9d012a") {
            return calculateLossless(input);
        }
        throw new TypeError("Invalid WebP");
    }
};
// lib/types/index.ts
var typeHandlers = /* @__PURE__ */ new Map([
    [
        "bmp",
        BMP
    ],
    [
        "cur",
        CUR
    ],
    [
        "dds",
        DDS
    ],
    [
        "gif",
        GIF
    ],
    [
        "heif",
        HEIF
    ],
    [
        "icns",
        ICNS
    ],
    [
        "ico",
        ICO
    ],
    [
        "j2c",
        J2C
    ],
    [
        "jp2",
        JP2
    ],
    [
        "jpg",
        JPG
    ],
    [
        "jxl",
        JXL
    ],
    [
        "jxl-stream",
        JXLStream
    ],
    [
        "ktx",
        KTX
    ],
    [
        "png",
        PNG
    ],
    [
        "pnm",
        PNM
    ],
    [
        "psd",
        PSD
    ],
    [
        "svg",
        SVG
    ],
    [
        "tga",
        TGA
    ],
    [
        "tiff",
        TIFF
    ],
    [
        "webp",
        WEBP
    ]
]);
var types = Array.from(typeHandlers.keys());
// lib/detector.ts
var firstBytes = /* @__PURE__ */ new Map([
    [
        0,
        "heif"
    ],
    [
        56,
        "psd"
    ],
    [
        66,
        "bmp"
    ],
    [
        68,
        "dds"
    ],
    [
        71,
        "gif"
    ],
    [
        73,
        "tiff"
    ],
    [
        77,
        "tiff"
    ],
    [
        82,
        "webp"
    ],
    [
        105,
        "icns"
    ],
    [
        137,
        "png"
    ],
    [
        255,
        "jpg"
    ]
]);
function detector(input) {
    const byte = input[0];
    const type = firstBytes.get(byte);
    if (type && typeHandlers.get(type).validate(input)) {
        return type;
    }
    return types.find((type2)=>typeHandlers.get(type2).validate(input));
}
// lib/lookup.ts
var globalOptions = {
    disabledTypes: []
};
function imageSize(input) {
    const type = detector(input);
    if (typeof type !== "undefined") {
        if (globalOptions.disabledTypes.indexOf(type) > -1) {
            throw new TypeError(`disabled file type: ${type}`);
        }
        const size = typeHandlers.get(type).calculate(input);
        if (size !== void 0) {
            size.type = size.type ?? type;
            if (size.images && size.images.length > 1) {
                const largestImage = size.images.reduce((largest, current)=>{
                    return current.width * current.height > largest.width * largest.height ? current : largest;
                }, size.images[0]);
                size.width = largestImage.width;
                size.height = largestImage.height;
            }
            return size;
        }
    }
    throw new TypeError(`unsupported file type: ${type}`);
}
// lib/fromFile.ts
var MaxInputSize = 512 * 1024;
var queue = [];
var concurrency = 100;
var setConcurrency = (c)=>{
    concurrency = c;
};
var processQueue = async ()=>{
    const jobs = queue.splice(0, concurrency);
    const promises2 = jobs.map(async ({ filePath, resolve: resolve2, reject })=>{
        let handle;
        try {
            handle = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].open(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["resolve"](filePath), "r");
        } catch (err) {
            return reject(err);
        }
        try {
            const { size } = await handle.stat();
            if (size <= 0) {
                throw new Error("Empty file");
            }
            const inputSize = Math.min(size, MaxInputSize);
            const input = new Uint8Array(inputSize);
            await handle.read(input, 0, inputSize, 0);
            resolve2(imageSize(input));
        } catch (err) {
            reject(err);
        } finally{
            await handle.close();
        }
    });
    await Promise.allSettled(promises2);
    if (queue.length) setTimeout(processQueue, 100);
};
var imageSizeFromFile = async (filePath)=>new Promise((resolve2, reject)=>{
        queue.push({
            filePath,
            resolve: resolve2,
            reject
        });
        processQueue();
    });
;
}),
"[project]/node_modules/croner/dist/croner.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cron",
    ()=>R,
    "CronDate",
    ()=>f,
    "CronPattern",
    ()=>d,
    "scheduledJobs",
    ()=>y
]);
function h(n, t, e, r, s, i, a, l) {
    return h.fromTZ(h.tp(n, t, e, r, s, i, a), l);
}
h.fromTZISO = (n, t, e)=>h.fromTZ(k(n, t), e);
h.fromTZ = function(n, t) {
    let e = new Date(Date.UTC(n.y, n.m - 1, n.d, n.h, n.i, n.s)), r = D(n.tz, e), s = new Date(e.getTime() - r), i = D(n.tz, s);
    if (i - r === 0) return s;
    {
        let a = new Date(e.getTime() - i), l = D(n.tz, a);
        if (l - i === 0) return a;
        if (!t && l - i > 0) return a;
        if (t) throw new Error("Invalid date passed to fromTZ()");
        return s;
    }
};
h.toTZ = function(n, t) {
    let e = n.toLocaleString("en-US", {
        timeZone: t
    }).replace(/[\u202f]/, " "), r = new Date(e);
    return {
        y: r.getFullYear(),
        m: r.getMonth() + 1,
        d: r.getDate(),
        h: r.getHours(),
        i: r.getMinutes(),
        s: r.getSeconds(),
        tz: t
    };
};
h.tp = (n, t, e, r, s, i, a)=>({
        y: n,
        m: t,
        d: e,
        h: r,
        i: s,
        s: i,
        tz: a
    });
function D(n, t = new Date) {
    let e = t.toLocaleString("en-US", {
        timeZone: n,
        timeZoneName: "shortOffset"
    }).split(" ").slice(-1)[0], r = t.toLocaleString("en-US").replace(/[\u202f]/, " ");
    return Date.parse(`${r} GMT`) - Date.parse(`${r} ${e}`);
}
function k(n, t) {
    let e = new Date(Date.parse(n));
    if (isNaN(e)) throw new Error("minitz: Invalid ISO8601 passed to parser.");
    let r = n.substring(9);
    return n.includes("Z") || r.includes("-") || r.includes("+") ? h.tp(e.getUTCFullYear(), e.getUTCMonth() + 1, e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), "Etc/UTC") : h.tp(e.getFullYear(), e.getMonth() + 1, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), t);
}
h.minitz = h;
var b = 32, p = 31 | b, v = [
    1,
    2,
    4,
    8,
    16
], d = class {
    pattern;
    timezone;
    second;
    minute;
    hour;
    day;
    month;
    dayOfWeek;
    lastDayOfMonth;
    starDOM;
    starDOW;
    constructor(t, e){
        this.pattern = t, this.timezone = e, this.second = Array(60).fill(0), this.minute = Array(60).fill(0), this.hour = Array(24).fill(0), this.day = Array(31).fill(0), this.month = Array(12).fill(0), this.dayOfWeek = Array(7).fill(0), this.lastDayOfMonth = !1, this.starDOM = !1, this.starDOW = !1, this.parse();
    }
    parse() {
        if (!(typeof this.pattern == "string" || this.pattern instanceof String)) throw new TypeError("CronPattern: Pattern has to be of type string.");
        this.pattern.indexOf("@") >= 0 && (this.pattern = this.handleNicknames(this.pattern).trim());
        let t = this.pattern.replace(/\s+/g, " ").split(" ");
        if (t.length < 5 || t.length > 6) throw new TypeError("CronPattern: invalid configuration format ('" + this.pattern + "'), exactly five or six space separated parts are required.");
        if (t.length === 5 && t.unshift("0"), t[3].indexOf("L") >= 0 && (t[3] = t[3].replace("L", ""), this.lastDayOfMonth = !0), t[3] == "*" && (this.starDOM = !0), t[4].length >= 3 && (t[4] = this.replaceAlphaMonths(t[4])), t[5].length >= 3 && (t[5] = this.replaceAlphaDays(t[5])), t[5] == "*" && (this.starDOW = !0), this.pattern.indexOf("?") >= 0) {
            let e = new f(new Date, this.timezone).getDate(!0);
            t[0] = t[0].replace("?", e.getSeconds().toString()), t[1] = t[1].replace("?", e.getMinutes().toString()), t[2] = t[2].replace("?", e.getHours().toString()), this.starDOM || (t[3] = t[3].replace("?", e.getDate().toString())), t[4] = t[4].replace("?", (e.getMonth() + 1).toString()), this.starDOW || (t[5] = t[5].replace("?", e.getDay().toString()));
        }
        this.throwAtIllegalCharacters(t), this.partToArray("second", t[0], 0, 1), this.partToArray("minute", t[1], 0, 1), this.partToArray("hour", t[2], 0, 1), this.partToArray("day", t[3], -1, 1), this.partToArray("month", t[4], -1, 1), this.partToArray("dayOfWeek", t[5], 0, p), this.dayOfWeek[7] && (this.dayOfWeek[0] = this.dayOfWeek[7]);
    }
    partToArray(t, e, r, s) {
        let i = this[t], a = t === "day" && this.lastDayOfMonth;
        if (e === "" && !a) throw new TypeError("CronPattern: configuration entry " + t + " (" + e + ") is empty, check for trailing spaces.");
        if (e === "*") return i.fill(s);
        let l = e.split(",");
        if (l.length > 1) for(let o = 0; o < l.length; o++)this.partToArray(t, l[o], r, s);
        else e.indexOf("-") !== -1 && e.indexOf("/") !== -1 ? this.handleRangeWithStepping(e, t, r, s) : e.indexOf("-") !== -1 ? this.handleRange(e, t, r, s) : e.indexOf("/") !== -1 ? this.handleStepping(e, t, r, s) : e !== "" && this.handleNumber(e, t, r, s);
    }
    throwAtIllegalCharacters(t) {
        for(let e = 0; e < t.length; e++)if ((e === 5 ? /[^/*0-9,\-#L]+/ : /[^/*0-9,-]+/).test(t[e])) throw new TypeError("CronPattern: configuration entry " + e + " (" + t[e] + ") contains illegal characters.");
    }
    handleNumber(t, e, r, s) {
        let i = this.extractNth(t, e), a = parseInt(i[0], 10) + r;
        if (isNaN(a)) throw new TypeError("CronPattern: " + e + " is not a number: '" + t + "'");
        this.setPart(e, a, i[1] || s);
    }
    setPart(t, e, r) {
        if (!Object.prototype.hasOwnProperty.call(this, t)) throw new TypeError("CronPattern: Invalid part specified: " + t);
        if (t === "dayOfWeek") {
            if (e === 7 && (e = 0), e < 0 || e > 6) throw new RangeError("CronPattern: Invalid value for dayOfWeek: " + e);
            this.setNthWeekdayOfMonth(e, r);
            return;
        }
        if (t === "second" || t === "minute") {
            if (e < 0 || e >= 60) throw new RangeError("CronPattern: Invalid value for " + t + ": " + e);
        } else if (t === "hour") {
            if (e < 0 || e >= 24) throw new RangeError("CronPattern: Invalid value for " + t + ": " + e);
        } else if (t === "day") {
            if (e < 0 || e >= 31) throw new RangeError("CronPattern: Invalid value for " + t + ": " + e);
        } else if (t === "month" && (e < 0 || e >= 12)) throw new RangeError("CronPattern: Invalid value for " + t + ": " + e);
        this[t][e] = r;
    }
    handleRangeWithStepping(t, e, r, s) {
        let i = this.extractNth(t, e), a = i[0].match(/^(\d+)-(\d+)\/(\d+)$/);
        if (a === null) throw new TypeError("CronPattern: Syntax error, illegal range with stepping: '" + t + "'");
        let [, l, o, u] = a, c = parseInt(l, 10) + r, w = parseInt(o, 10) + r, C = parseInt(u, 10);
        if (isNaN(c)) throw new TypeError("CronPattern: Syntax error, illegal lower range (NaN)");
        if (isNaN(w)) throw new TypeError("CronPattern: Syntax error, illegal upper range (NaN)");
        if (isNaN(C)) throw new TypeError("CronPattern: Syntax error, illegal stepping: (NaN)");
        if (C === 0) throw new TypeError("CronPattern: Syntax error, illegal stepping: 0");
        if (C > this[e].length) throw new TypeError("CronPattern: Syntax error, steps cannot be greater than maximum value of part (" + this[e].length + ")");
        if (c > w) throw new TypeError("CronPattern: From value is larger than to value: '" + t + "'");
        for(let T = c; T <= w; T += C)this.setPart(e, T, i[1] || s);
    }
    extractNth(t, e) {
        let r = t, s;
        if (r.includes("#")) {
            if (e !== "dayOfWeek") throw new Error("CronPattern: nth (#) only allowed in day-of-week field");
            s = r.split("#")[1], r = r.split("#")[0];
        }
        return [
            r,
            s
        ];
    }
    handleRange(t, e, r, s) {
        let i = this.extractNth(t, e), a = i[0].split("-");
        if (a.length !== 2) throw new TypeError("CronPattern: Syntax error, illegal range: '" + t + "'");
        let l = parseInt(a[0], 10) + r, o = parseInt(a[1], 10) + r;
        if (isNaN(l)) throw new TypeError("CronPattern: Syntax error, illegal lower range (NaN)");
        if (isNaN(o)) throw new TypeError("CronPattern: Syntax error, illegal upper range (NaN)");
        if (l > o) throw new TypeError("CronPattern: From value is larger than to value: '" + t + "'");
        for(let u = l; u <= o; u++)this.setPart(e, u, i[1] || s);
    }
    handleStepping(t, e, r, s) {
        let i = this.extractNth(t, e), a = i[0].split("/");
        if (a.length !== 2) throw new TypeError("CronPattern: Syntax error, illegal stepping: '" + t + "'");
        a[0] === "" && (a[0] = "*");
        let l = 0;
        a[0] !== "*" && (l = parseInt(a[0], 10) + r);
        let o = parseInt(a[1], 10);
        if (isNaN(o)) throw new TypeError("CronPattern: Syntax error, illegal stepping: (NaN)");
        if (o === 0) throw new TypeError("CronPattern: Syntax error, illegal stepping: 0");
        if (o > this[e].length) throw new TypeError("CronPattern: Syntax error, max steps for part is (" + this[e].length + ")");
        for(let u = l; u < this[e].length; u += o)this.setPart(e, u, i[1] || s);
    }
    replaceAlphaDays(t) {
        return t.replace(/-sun/gi, "-7").replace(/sun/gi, "0").replace(/mon/gi, "1").replace(/tue/gi, "2").replace(/wed/gi, "3").replace(/thu/gi, "4").replace(/fri/gi, "5").replace(/sat/gi, "6");
    }
    replaceAlphaMonths(t) {
        return t.replace(/jan/gi, "1").replace(/feb/gi, "2").replace(/mar/gi, "3").replace(/apr/gi, "4").replace(/may/gi, "5").replace(/jun/gi, "6").replace(/jul/gi, "7").replace(/aug/gi, "8").replace(/sep/gi, "9").replace(/oct/gi, "10").replace(/nov/gi, "11").replace(/dec/gi, "12");
    }
    handleNicknames(t) {
        let e = t.trim().toLowerCase();
        return e === "@yearly" || e === "@annually" ? "0 0 1 1 *" : e === "@monthly" ? "0 0 1 * *" : e === "@weekly" ? "0 0 * * 0" : e === "@daily" ? "0 0 * * *" : e === "@hourly" ? "0 * * * *" : t;
    }
    setNthWeekdayOfMonth(t, e) {
        if (typeof e != "number" && e === "L") this.dayOfWeek[t] = this.dayOfWeek[t] | b;
        else if (e === p) this.dayOfWeek[t] = p;
        else if (e < 6 && e > 0) this.dayOfWeek[t] = this.dayOfWeek[t] | v[e - 1];
        else throw new TypeError(`CronPattern: nth weekday out of range, should be 1-5 or L. Value: ${e}, Type: ${typeof e}`);
    }
};
var O = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
], m = [
    [
        "month",
        "year",
        0
    ],
    [
        "day",
        "month",
        -1
    ],
    [
        "hour",
        "day",
        0
    ],
    [
        "minute",
        "hour",
        0
    ],
    [
        "second",
        "minute",
        0
    ]
], f = class n {
    tz;
    ms;
    second;
    minute;
    hour;
    day;
    month;
    year;
    constructor(t, e){
        if (this.tz = e, t && t instanceof Date) if (!isNaN(t)) this.fromDate(t);
        else throw new TypeError("CronDate: Invalid date passed to CronDate constructor");
        else if (t === void 0) this.fromDate(new Date);
        else if (t && typeof t == "string") this.fromString(t);
        else if (t instanceof n) this.fromCronDate(t);
        else throw new TypeError("CronDate: Invalid type (" + typeof t + ") passed to CronDate constructor");
    }
    isNthWeekdayOfMonth(t, e, r, s) {
        let a = new Date(Date.UTC(t, e, r)).getUTCDay(), l = 0;
        for(let o = 1; o <= r; o++)new Date(Date.UTC(t, e, o)).getUTCDay() === a && l++;
        if (s & p && v[l - 1] & s) return !0;
        if (s & b) {
            let o = new Date(Date.UTC(t, e + 1, 0)).getUTCDate();
            for(let u = r + 1; u <= o; u++)if (new Date(Date.UTC(t, e, u)).getUTCDay() === a) return !1;
            return !0;
        }
        return !1;
    }
    fromDate(t) {
        if (this.tz !== void 0) if (typeof this.tz == "number") this.ms = t.getUTCMilliseconds(), this.second = t.getUTCSeconds(), this.minute = t.getUTCMinutes() + this.tz, this.hour = t.getUTCHours(), this.day = t.getUTCDate(), this.month = t.getUTCMonth(), this.year = t.getUTCFullYear(), this.apply();
        else {
            let e = h.toTZ(t, this.tz);
            this.ms = t.getMilliseconds(), this.second = e.s, this.minute = e.i, this.hour = e.h, this.day = e.d, this.month = e.m - 1, this.year = e.y;
        }
        else this.ms = t.getMilliseconds(), this.second = t.getSeconds(), this.minute = t.getMinutes(), this.hour = t.getHours(), this.day = t.getDate(), this.month = t.getMonth(), this.year = t.getFullYear();
    }
    fromCronDate(t) {
        this.tz = t.tz, this.year = t.year, this.month = t.month, this.day = t.day, this.hour = t.hour, this.minute = t.minute, this.second = t.second, this.ms = t.ms;
    }
    apply() {
        if (this.month > 11 || this.day > O[this.month] || this.hour > 59 || this.minute > 59 || this.second > 59 || this.hour < 0 || this.minute < 0 || this.second < 0) {
            let t = new Date(Date.UTC(this.year, this.month, this.day, this.hour, this.minute, this.second, this.ms));
            return this.ms = t.getUTCMilliseconds(), this.second = t.getUTCSeconds(), this.minute = t.getUTCMinutes(), this.hour = t.getUTCHours(), this.day = t.getUTCDate(), this.month = t.getUTCMonth(), this.year = t.getUTCFullYear(), !0;
        } else return !1;
    }
    fromString(t) {
        if (typeof this.tz == "number") {
            let e = h.fromTZISO(t);
            this.ms = e.getUTCMilliseconds(), this.second = e.getUTCSeconds(), this.minute = e.getUTCMinutes(), this.hour = e.getUTCHours(), this.day = e.getUTCDate(), this.month = e.getUTCMonth(), this.year = e.getUTCFullYear(), this.apply();
        } else return this.fromDate(h.fromTZISO(t, this.tz));
    }
    findNext(t, e, r, s) {
        let i = this[e], a;
        r.lastDayOfMonth && (this.month !== 1 ? a = O[this.month] : a = new Date(Date.UTC(this.year, this.month + 1, 0, 0, 0, 0, 0)).getUTCDate());
        let l = !r.starDOW && e == "day" ? new Date(Date.UTC(this.year, this.month, 1, 0, 0, 0, 0)).getUTCDay() : void 0;
        for(let o = this[e] + s; o < r[e].length; o++){
            let u = r[e][o];
            if (e === "day" && r.lastDayOfMonth && o - s == a && (u = 1), e === "day" && !r.starDOW) {
                let c = r.dayOfWeek[(l + (o - s - 1)) % 7];
                if (c && c & p) c = this.isNthWeekdayOfMonth(this.year, this.month, o - s, c) ? 1 : 0;
                else if (c) throw new Error(`CronDate: Invalid value for dayOfWeek encountered. ${c}`);
                t.legacyMode && !r.starDOM ? u = u || c : u = u && c;
            }
            if (u) return this[e] = o - s, i !== this[e] ? 2 : 1;
        }
        return 3;
    }
    recurse(t, e, r) {
        let s = this.findNext(e, m[r][0], t, m[r][2]);
        if (s > 1) {
            let i = r + 1;
            for(; i < m.length;)this[m[i][0]] = -m[i][2], i++;
            if (s === 3) return this[m[r][1]]++, this[m[r][0]] = -m[r][2], this.apply(), this.recurse(t, e, 0);
            if (this.apply()) return this.recurse(t, e, r - 1);
        }
        return r += 1, r >= m.length ? this : this.year >= 3e3 ? null : this.recurse(t, e, r);
    }
    increment(t, e, r) {
        return this.second += e.interval !== void 0 && e.interval > 1 && r ? e.interval : 1, this.ms = 0, this.apply(), this.recurse(t, e, 0);
    }
    getDate(t) {
        return t || this.tz === void 0 ? new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.ms) : typeof this.tz == "number" ? new Date(Date.UTC(this.year, this.month, this.day, this.hour, this.minute - this.tz, this.second, this.ms)) : h.fromTZ(h.tp(this.year, this.month + 1, this.day, this.hour, this.minute, this.second, this.tz), !1);
    }
    getTime() {
        return this.getDate(!1).getTime();
    }
};
function N(n) {
    if (n === void 0 && (n = {}), delete n.name, n.legacyMode = n.legacyMode === void 0 ? !0 : n.legacyMode, n.paused = n.paused === void 0 ? !1 : n.paused, n.maxRuns = n.maxRuns === void 0 ? 1 / 0 : n.maxRuns, n.catch = n.catch === void 0 ? !1 : n.catch, n.interval = n.interval === void 0 ? 0 : parseInt(n.interval.toString(), 10), n.utcOffset = n.utcOffset === void 0 ? void 0 : parseInt(n.utcOffset.toString(), 10), n.unref = n.unref === void 0 ? !1 : n.unref, n.startAt && (n.startAt = new f(n.startAt, n.timezone)), n.stopAt && (n.stopAt = new f(n.stopAt, n.timezone)), n.interval !== null) {
        if (isNaN(n.interval)) throw new Error("CronOptions: Supplied value for interval is not a number");
        if (n.interval < 0) throw new Error("CronOptions: Supplied value for interval can not be negative");
    }
    if (n.utcOffset !== void 0) {
        if (isNaN(n.utcOffset)) throw new Error("CronOptions: Invalid value passed for utcOffset, should be number representing minutes offset from UTC.");
        if (n.utcOffset < -870 || n.utcOffset > 870) throw new Error("CronOptions: utcOffset out of bounds.");
        if (n.utcOffset !== void 0 && n.timezone) throw new Error("CronOptions: Combining 'utcOffset' with 'timezone' is not allowed.");
    }
    if (n.unref !== !0 && n.unref !== !1) throw new Error("CronOptions: Unref should be either true, false or undefined(false).");
    return n;
}
function g(n) {
    return Object.prototype.toString.call(n) === "[object Function]" || typeof n == "function" || n instanceof Function;
}
function S(n) {
    return g(n);
}
function P(n) {
    typeof Deno < "u" && typeof Deno.unrefTimer < "u" ? Deno.unrefTimer(n) : n && typeof n.unref < "u" && n.unref();
}
var _ = 30 * 1e3, y = [], R = class {
    name;
    options;
    _states;
    fn;
    constructor(t, e, r){
        let s, i;
        if (g(e)) i = e;
        else if (typeof e == "object") s = e;
        else if (e !== void 0) throw new Error("Cron: Invalid argument passed for optionsIn. Should be one of function, or object (options).");
        if (g(r)) i = r;
        else if (typeof r == "object") s = r;
        else if (r !== void 0) throw new Error("Cron: Invalid argument passed for funcIn. Should be one of function, or object (options).");
        if (this.name = s?.name, this.options = N(s), this._states = {
            kill: !1,
            blocking: !1,
            previousRun: void 0,
            currentRun: void 0,
            once: void 0,
            currentTimeout: void 0,
            maxRuns: s ? s.maxRuns : void 0,
            paused: s ? s.paused : !1,
            pattern: new d("* * * * *")
        }, t && (t instanceof Date || typeof t == "string" && t.indexOf(":") > 0) ? this._states.once = new f(t, this.options.timezone || this.options.utcOffset) : this._states.pattern = new d(t, this.options.timezone), this.name) {
            if (y.find((l)=>l.name === this.name)) throw new Error("Cron: Tried to initialize new named job '" + this.name + "', but name already taken.");
            y.push(this);
        }
        return i !== void 0 && S(i) && (this.fn = i, this.schedule()), this;
    }
    nextRun(t) {
        let e = this._next(t);
        return e ? e.getDate(!1) : null;
    }
    nextRuns(t, e) {
        this._states.maxRuns !== void 0 && t > this._states.maxRuns && (t = this._states.maxRuns);
        let r = [], s = e || this._states.currentRun || void 0;
        for(; t-- && (s = this.nextRun(s));)r.push(s);
        return r;
    }
    getPattern() {
        return this._states.pattern ? this._states.pattern.pattern : void 0;
    }
    isRunning() {
        let t = this.nextRun(this._states.currentRun), e = !this._states.paused, r = this.fn !== void 0, s = !this._states.kill;
        return e && r && s && t !== null;
    }
    isStopped() {
        return this._states.kill;
    }
    isBusy() {
        return this._states.blocking;
    }
    currentRun() {
        return this._states.currentRun ? this._states.currentRun.getDate() : null;
    }
    previousRun() {
        return this._states.previousRun ? this._states.previousRun.getDate() : null;
    }
    msToNext(t) {
        let e = this._next(t);
        return e ? t instanceof f || t instanceof Date ? e.getTime() - t.getTime() : e.getTime() - new f(t).getTime() : null;
    }
    stop() {
        this._states.kill = !0, this._states.currentTimeout && clearTimeout(this._states.currentTimeout);
        let t = y.indexOf(this);
        t >= 0 && y.splice(t, 1);
    }
    pause() {
        return this._states.paused = !0, !this._states.kill;
    }
    resume() {
        return this._states.paused = !1, !this._states.kill;
    }
    schedule(t) {
        if (t && this.fn) throw new Error("Cron: It is not allowed to schedule two functions using the same Croner instance.");
        t && (this.fn = t);
        let e = this.msToNext(), r = this.nextRun(this._states.currentRun);
        return e == null || isNaN(e) || r === null ? this : (e > _ && (e = _), this._states.currentTimeout = setTimeout(()=>this._checkTrigger(r), e), this._states.currentTimeout && this.options.unref && P(this._states.currentTimeout), this);
    }
    async _trigger(t) {
        if (this._states.blocking = !0, this._states.currentRun = new f(void 0, this.options.timezone || this.options.utcOffset), this.options.catch) try {
            this.fn !== void 0 && await this.fn(this, this.options.context);
        } catch (e) {
            g(this.options.catch) && this.options.catch(e, this);
        }
        else this.fn !== void 0 && await this.fn(this, this.options.context);
        this._states.previousRun = new f(t, this.options.timezone || this.options.utcOffset), this._states.blocking = !1;
    }
    async trigger() {
        await this._trigger();
    }
    runsLeft() {
        return this._states.maxRuns;
    }
    _checkTrigger(t) {
        let e = new Date, r = !this._states.paused && e.getTime() >= t.getTime(), s = this._states.blocking && this.options.protect;
        r && !s ? (this._states.maxRuns !== void 0 && this._states.maxRuns--, this._trigger()) : r && s && g(this.options.protect) && setTimeout(()=>this.options.protect(this), 0), this.schedule();
    }
    _next(t) {
        let e = !!(t || this._states.currentRun), r = !1;
        !t && this.options.startAt && this.options.interval && ([t, e] = this._calculatePreviousRun(t, e), r = !t), t = new f(t, this.options.timezone || this.options.utcOffset), this.options.startAt && t && t.getTime() < this.options.startAt.getTime() && (t = this.options.startAt);
        let s = this._states.once || new f(t, this.options.timezone || this.options.utcOffset);
        return !r && s !== this._states.once && (s = s.increment(this._states.pattern, this.options, e)), this._states.once && this._states.once.getTime() <= t.getTime() || s === null || this._states.maxRuns !== void 0 && this._states.maxRuns <= 0 || this._states.kill || this.options.stopAt && s.getTime() >= this.options.stopAt.getTime() ? null : s;
    }
    _calculatePreviousRun(t, e) {
        let r = new f(void 0, this.options.timezone || this.options.utcOffset), s = t;
        if (this.options.startAt.getTime() <= r.getTime()) {
            s = this.options.startAt;
            let i = s.getTime() + this.options.interval * 1e3;
            for(; i <= r.getTime();)s = new f(s, this.options.timezone || this.options.utcOffset).increment(this._states.pattern, this.options, !0), i = s.getTime() + this.options.interval * 1e3;
            e = !0;
        }
        return s === null && (s = void 0), [
            s,
            e
        ];
    }
};
;
}),
"[project]/node_modules/resolve-pkg-maps/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveExports",
    ()=>v,
    "resolveImports",
    ()=>T
]);
const A = (r)=>r !== null && typeof r == "object", a = (r, t)=>Object.assign(new Error(`[${r}]: ${t}`), {
        code: r
    }), _ = "ERR_INVALID_PACKAGE_CONFIG", E = "ERR_INVALID_PACKAGE_TARGET", I = "ERR_PACKAGE_PATH_NOT_EXPORTED", P = "ERR_PACKAGE_IMPORT_NOT_DEFINED", R = /^\d+$/, O = /^(\.{1,2}|node_modules)$/i, w = /\/|\\/;
var h = ((r)=>(r.Export = "exports", r.Import = "imports", r))(h || {});
const f = (r, t, e, o, c)=>{
    if (t == null) return [];
    if (typeof t == "string") {
        const [n, ...i] = t.split(w);
        if (n === ".." || i.some((l)=>O.test(l))) throw a(E, `Invalid "${r}" target "${t}" defined in the package config`);
        return [
            c ? t.replace(/\*/g, c) : t
        ];
    }
    if (Array.isArray(t)) return t.flatMap((n)=>f(r, n, e, o, c));
    if (A(t)) {
        for (const n of Object.keys(t)){
            if (R.test(n)) throw a(_, "Cannot contain numeric property keys");
            if (n === "default" || o.includes(n)) return f(r, t[n], e, o, c);
        }
        return [];
    }
    throw a(E, `Invalid "${r}" target "${t}"`);
}, s = "*", m = (r, t)=>{
    const e = r.indexOf(s), o = t.indexOf(s);
    return e === o ? t.length > r.length : o > e;
};
function d(r, t) {
    if (!t.includes(s) && r.hasOwnProperty(t)) return [
        t
    ];
    let e, o;
    for (const c of Object.keys(r))if (c.includes(s)) {
        const [n, i, l] = c.split(s);
        if (l === void 0 && t.startsWith(n) && t.endsWith(i)) {
            const g = t.slice(n.length, -i.length || void 0);
            g && (!e || m(e, c)) && (e = c, o = g);
        }
    }
    return [
        e,
        o
    ];
}
const p = (r)=>Object.keys(r).reduce((t, e)=>{
        const o = e === "" || e[0] !== ".";
        if (t === void 0 || t === o) return o;
        throw a(_, '"exports" cannot contain some keys starting with "." and some not');
    }, void 0), u = /^\w+:/, v = (r, t, e)=>{
    if (!r) throw new Error('"exports" is required');
    t = t === "" ? "." : `./${t}`, (typeof r == "string" || Array.isArray(r) || A(r) && p(r)) && (r = {
        ".": r
    });
    const [o, c] = d(r, t), n = f(h.Export, r[o], t, e, c);
    if (n.length === 0) throw a(I, t === "." ? 'No "exports" main defined' : `Package subpath '${t}' is not defined by "exports"`);
    for (const i of n)if (!i.startsWith("./") && !u.test(i)) throw a(E, `Invalid "exports" target "${i}" defined in the package config`);
    return n;
}, T = (r, t, e)=>{
    if (!r) throw new Error('"imports" is required');
    const [o, c] = d(r, t), n = f(h.Import, r[o], t, e, c);
    if (n.length === 0) throw a(P, `Package import specifier "${t}" is not defined in package`);
    return n;
};
;
}),
"[project]/node_modules/payload/node_modules/get-tsconfig/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFilesMatcher",
    ()=>He,
    "createPathsMatcher",
    ()=>Ie,
    "getTsconfig",
    ()=>De,
    "parseTsconfig",
    ()=>fe
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$module__$5b$external$5d$__$28$node$3a$module$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:module [external] (node:module, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resolve$2d$pkg$2d$maps$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resolve-pkg-maps/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var ve = Object.defineProperty;
var l = (e, t)=>ve(e, "name", {
        value: t,
        configurable: !0
    });
;
;
;
;
;
function B(e) {
    return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
l(B, "slash");
const R = l((e)=>{
    const t = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"][e];
    return (i, ...n)=>{
        const o = `${e}:${n.join(":")}`;
        let s = i == null ? void 0 : i.get(o);
        return s === void 0 && (s = Reflect.apply(t, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"], n), i == null || i.set(o, s)), s;
    };
}, "cacheFs"), F = R("existsSync"), je = R("readFileSync"), P = R("statSync"), ne = l((e, t, i)=>{
    for(;;){
        const n = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].posix.join(e, t);
        if (F(i, n)) return n;
        const o = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(e);
        if (o === e) return;
        e = o;
    }
}, "findUp"), J = /^\.{1,2}(\/.*)?$/, M = l((e)=>{
    const t = B(e);
    return J.test(t) ? t : `./${t}`;
}, "normalizeRelativePath");
function _e(e, t = !1) {
    const i = e.length;
    let n = 0, o = "", s = 0, r = 16, f = 0, u = 0, p = 0, T = 0, w = 0;
    function O(c, m) {
        let g = 0, y = 0;
        for(; g < c || !m;){
            let j = e.charCodeAt(n);
            if (j >= 48 && j <= 57) y = y * 16 + j - 48;
            else if (j >= 65 && j <= 70) y = y * 16 + j - 65 + 10;
            else if (j >= 97 && j <= 102) y = y * 16 + j - 97 + 10;
            else break;
            n++, g++;
        }
        return g < c && (y = -1), y;
    }
    l(O, "scanHexDigits");
    function v(c) {
        n = c, o = "", s = 0, r = 16, w = 0;
    }
    l(v, "setPosition");
    function A() {
        let c = n;
        if (e.charCodeAt(n) === 48) n++;
        else for(n++; n < e.length && N(e.charCodeAt(n));)n++;
        if (n < e.length && e.charCodeAt(n) === 46) if (n++, n < e.length && N(e.charCodeAt(n))) for(n++; n < e.length && N(e.charCodeAt(n));)n++;
        else return w = 3, e.substring(c, n);
        let m = n;
        if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101)) if (n++, (n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) && n++, n < e.length && N(e.charCodeAt(n))) {
            for(n++; n < e.length && N(e.charCodeAt(n));)n++;
            m = n;
        } else w = 3;
        return e.substring(c, m);
    }
    l(A, "scanNumber");
    function b() {
        let c = "", m = n;
        for(;;){
            if (n >= i) {
                c += e.substring(m, n), w = 2;
                break;
            }
            const g = e.charCodeAt(n);
            if (g === 34) {
                c += e.substring(m, n), n++;
                break;
            }
            if (g === 92) {
                if (c += e.substring(m, n), n++, n >= i) {
                    w = 2;
                    break;
                }
                switch(e.charCodeAt(n++)){
                    case 34:
                        c += '"';
                        break;
                    case 92:
                        c += "\\";
                        break;
                    case 47:
                        c += "/";
                        break;
                    case 98:
                        c += "\b";
                        break;
                    case 102:
                        c += "\f";
                        break;
                    case 110:
                        c += `
`;
                        break;
                    case 114:
                        c += "\r";
                        break;
                    case 116:
                        c += "	";
                        break;
                    case 117:
                        const j = O(4, !0);
                        j >= 0 ? c += String.fromCharCode(j) : w = 4;
                        break;
                    default:
                        w = 5;
                }
                m = n;
                continue;
            }
            if (g >= 0 && g <= 31) if (h(g)) {
                c += e.substring(m, n), w = 2;
                break;
            } else w = 6;
            n++;
        }
        return c;
    }
    l(b, "scanString");
    function $() {
        if (o = "", w = 0, s = n, u = f, T = p, n >= i) return s = i, r = 17;
        let c = e.charCodeAt(n);
        if (G(c)) {
            do n++, o += String.fromCharCode(c), c = e.charCodeAt(n);
            while (G(c))
            return r = 15;
        }
        if (h(c)) return n++, o += String.fromCharCode(c), c === 13 && e.charCodeAt(n) === 10 && (n++, o += `
`), f++, p = n, r = 14;
        switch(c){
            case 123:
                return n++, r = 1;
            case 125:
                return n++, r = 2;
            case 91:
                return n++, r = 3;
            case 93:
                return n++, r = 4;
            case 58:
                return n++, r = 6;
            case 44:
                return n++, r = 5;
            case 34:
                return n++, o = b(), r = 10;
            case 47:
                const m = n - 1;
                if (e.charCodeAt(n + 1) === 47) {
                    for(n += 2; n < i && !h(e.charCodeAt(n));)n++;
                    return o = e.substring(m, n), r = 12;
                }
                if (e.charCodeAt(n + 1) === 42) {
                    n += 2;
                    const g = i - 1;
                    let y = !1;
                    for(; n < g;){
                        const j = e.charCodeAt(n);
                        if (j === 42 && e.charCodeAt(n + 1) === 47) {
                            n += 2, y = !0;
                            break;
                        }
                        n++, h(j) && (j === 13 && e.charCodeAt(n) === 10 && n++, f++, p = n);
                    }
                    return y || (n++, w = 1), o = e.substring(m, n), r = 13;
                }
                return o += String.fromCharCode(c), n++, r = 16;
            case 45:
                if (o += String.fromCharCode(c), n++, n === i || !N(e.charCodeAt(n))) return r = 16;
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return o += A(), r = 11;
            default:
                for(; n < i && U(c);)n++, c = e.charCodeAt(n);
                if (s !== n) {
                    switch(o = e.substring(s, n), o){
                        case "true":
                            return r = 8;
                        case "false":
                            return r = 9;
                        case "null":
                            return r = 7;
                    }
                    return r = 16;
                }
                return o += String.fromCharCode(c), n++, r = 16;
        }
    }
    l($, "scanNext");
    function U(c) {
        if (G(c) || h(c)) return !1;
        switch(c){
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
                return !1;
        }
        return !0;
    }
    l(U, "isUnknownContentCharacter");
    function E() {
        let c;
        do c = $();
        while (c >= 12 && c <= 15)
        return c;
    }
    return l(E, "scanNextNonTrivia"), {
        setPosition: v,
        getPosition: l(()=>n, "getPosition"),
        scan: t ? E : $,
        getToken: l(()=>r, "getToken"),
        getTokenValue: l(()=>o, "getTokenValue"),
        getTokenOffset: l(()=>s, "getTokenOffset"),
        getTokenLength: l(()=>n - s, "getTokenLength"),
        getTokenStartLine: l(()=>u, "getTokenStartLine"),
        getTokenStartCharacter: l(()=>s - T, "getTokenStartCharacter"),
        getTokenError: l(()=>w, "getTokenError")
    };
}
l(_e, "createScanner");
function G(e) {
    return e === 32 || e === 9;
}
l(G, "isWhiteSpace");
function h(e) {
    return e === 10 || e === 13;
}
l(h, "isLineBreak");
function N(e) {
    return e >= 48 && e <= 57;
}
l(N, "isDigit");
var te;
(function(e) {
    e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
})(te || (te = {})), new Array(20).fill(0).map((e, t)=>" ".repeat(t));
const D = 200;
new Array(D).fill(0).map((e, t)=>`
` + " ".repeat(t)), new Array(D).fill(0).map((e, t)=>"\r" + " ".repeat(t)), new Array(D).fill(0).map((e, t)=>`\r
` + " ".repeat(t)), new Array(D).fill(0).map((e, t)=>`
` + "	".repeat(t)), new Array(D).fill(0).map((e, t)=>"\r" + "	".repeat(t)), new Array(D).fill(0).map((e, t)=>`\r
` + "	".repeat(t));
var x;
(function(e) {
    e.DEFAULT = {
        allowTrailingComma: !1
    };
})(x || (x = {}));
function $e(e, t = [], i = x.DEFAULT) {
    let n = null, o = [];
    const s = [];
    function r(u) {
        Array.isArray(o) ? o.push(u) : n !== null && (o[n] = u);
    }
    return l(r, "onValue"), ye(e, {
        onObjectBegin: l(()=>{
            const u = {};
            r(u), s.push(o), o = u, n = null;
        }, "onObjectBegin"),
        onObjectProperty: l((u)=>{
            n = u;
        }, "onObjectProperty"),
        onObjectEnd: l(()=>{
            o = s.pop();
        }, "onObjectEnd"),
        onArrayBegin: l(()=>{
            const u = [];
            r(u), s.push(o), o = u, n = null;
        }, "onArrayBegin"),
        onArrayEnd: l(()=>{
            o = s.pop();
        }, "onArrayEnd"),
        onLiteralValue: r,
        onError: l((u, p, T)=>{
            t.push({
                error: u,
                offset: p,
                length: T
            });
        }, "onError")
    }, i), o[0];
}
l($e, "parse$1");
function ye(e, t, i = x.DEFAULT) {
    const n = _e(e, !1), o = [];
    function s(k) {
        return k ? ()=>k(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : ()=>!0;
    }
    l(s, "toNoArgVisit");
    function r(k) {
        return k ? ()=>k(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), ()=>o.slice()) : ()=>!0;
    }
    l(r, "toNoArgVisitWithPath");
    function f(k) {
        return k ? (_)=>k(_, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : ()=>!0;
    }
    l(f, "toOneArgVisit");
    function u(k) {
        return k ? (_)=>k(_, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), ()=>o.slice()) : ()=>!0;
    }
    l(u, "toOneArgVisitWithPath");
    const p = r(t.onObjectBegin), T = u(t.onObjectProperty), w = s(t.onObjectEnd), O = r(t.onArrayBegin), v = s(t.onArrayEnd), A = u(t.onLiteralValue), b = f(t.onSeparator), $ = s(t.onComment), U = f(t.onError), E = i && i.disallowComments, c = i && i.allowTrailingComma;
    function m() {
        for(;;){
            const k = n.scan();
            switch(n.getTokenError()){
                case 4:
                    g(14);
                    break;
                case 5:
                    g(15);
                    break;
                case 3:
                    g(13);
                    break;
                case 1:
                    E || g(11);
                    break;
                case 2:
                    g(12);
                    break;
                case 6:
                    g(16);
                    break;
            }
            switch(k){
                case 12:
                case 13:
                    E ? g(10) : $();
                    break;
                case 16:
                    g(1);
                    break;
                case 15:
                case 14:
                    break;
                default:
                    return k;
            }
        }
    }
    l(m, "scanNext");
    function g(k, _ = [], C = []) {
        if (U(k), _.length + C.length > 0) {
            let d = n.getToken();
            for(; d !== 17;){
                if (_.indexOf(d) !== -1) {
                    m();
                    break;
                } else if (C.indexOf(d) !== -1) break;
                d = m();
            }
        }
    }
    l(g, "handleError");
    function y(k) {
        const _ = n.getTokenValue();
        return k ? A(_) : (T(_), o.push(_)), m(), !0;
    }
    l(y, "parseString");
    function j() {
        switch(n.getToken()){
            case 11:
                const k = n.getTokenValue();
                let _ = Number(k);
                isNaN(_) && (g(2), _ = 0), A(_);
                break;
            case 7:
                A(null);
                break;
            case 8:
                A(!0);
                break;
            case 9:
                A(!1);
                break;
            default:
                return !1;
        }
        return m(), !0;
    }
    l(j, "parseLiteral");
    function ke() {
        return n.getToken() !== 10 ? (g(3, [], [
            2,
            5
        ]), !1) : (y(!1), n.getToken() === 6 ? (b(":"), m(), V() || g(4, [], [
            2,
            5
        ])) : g(5, [], [
            2,
            5
        ]), o.pop(), !0);
    }
    l(ke, "parseProperty");
    function be() {
        p(), m();
        let k = !1;
        for(; n.getToken() !== 2 && n.getToken() !== 17;){
            if (n.getToken() === 5) {
                if (k || g(4, [], []), b(","), m(), n.getToken() === 2 && c) break;
            } else k && g(6, [], []);
            ke() || g(4, [], [
                2,
                5
            ]), k = !0;
        }
        return w(), n.getToken() !== 2 ? g(7, [
            2
        ], []) : m(), !0;
    }
    l(be, "parseObject");
    function we() {
        O(), m();
        let k = !0, _ = !1;
        for(; n.getToken() !== 4 && n.getToken() !== 17;){
            if (n.getToken() === 5) {
                if (_ || g(4, [], []), b(","), m(), n.getToken() === 4 && c) break;
            } else _ && g(6, [], []);
            k ? (o.push(0), k = !1) : o[o.length - 1]++, V() || g(4, [], [
                4,
                5
            ]), _ = !0;
        }
        return v(), k || o.pop(), n.getToken() !== 4 ? g(8, [
            4
        ], []) : m(), !0;
    }
    l(we, "parseArray");
    function V() {
        switch(n.getToken()){
            case 3:
                return we();
            case 1:
                return be();
            case 10:
                return y(!0);
            default:
                return j();
        }
    }
    return l(V, "parseValue"), m(), n.getToken() === 17 ? i.allowEmptyContent ? !0 : (g(4, [], []), !1) : V() ? (n.getToken() !== 17 && g(9, [], []), !0) : (g(4, [], []), !1);
}
l(ye, "visit");
var ie;
(function(e) {
    e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(ie || (ie = {}));
var oe;
(function(e) {
    e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(oe || (oe = {}));
const Be = $e;
var se;
(function(e) {
    e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(se || (se = {}));
const le = l((e, t)=>Be(je(t, e, "utf8")), "readJsonc"), z = Symbol("implicitBaseUrl"), L = "${configDir}", Fe = l(()=>{
    const { findPnpApi: e } = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$module__$5b$external$5d$__$28$node$3a$module$2c$__cjs$29$__["default"];
    return e && e(process.cwd());
}, "getPnpApi"), Q = l((e, t, i, n)=>{
    const o = `resolveFromPackageJsonPath:${e}:${t}:${i}`;
    if (n != null && n.has(o)) return n.get(o);
    const s = le(e, n);
    if (!s) return;
    let r = t || "tsconfig.json";
    if (!i && s.exports) try {
        const [f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resolve$2d$pkg$2d$maps$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveExports"])(s.exports, t, [
            "require",
            "types"
        ]);
        r = f;
    } catch  {
        return !1;
    }
    else !t && s.tsconfig && (r = s.tsconfig);
    return r = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(e, "..", r), n == null || n.set(o, r), r;
}, "resolveFromPackageJsonPath"), H = "package.json", X = "tsconfig.json", Le = l((e, t, i)=>{
    let n = e;
    if (e === ".." && (n = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(n, X)), e[0] === "." && (n = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(t, n)), __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].isAbsolute(n)) {
        if (F(i, n)) {
            if (P(i, n).isFile()) return n;
        } else if (!n.endsWith(".json")) {
            const v = `${n}.json`;
            if (F(i, v)) return v;
        }
        return;
    }
    const [o, ...s] = e.split("/"), r = o[0] === "@" ? `${o}/${s.shift()}` : o, f = s.join("/"), u = Fe();
    if (u) {
        const { resolveRequest: v } = u;
        try {
            if (r === e) {
                const A = v(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(r, H), t);
                if (A) {
                    const b = Q(A, f, !1, i);
                    if (b && F(i, b)) return b;
                }
            } else {
                let A;
                try {
                    A = v(e, t, {
                        extensions: [
                            ".json"
                        ]
                    });
                } catch  {
                    A = v(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(e, X), t);
                }
                if (A) return A;
            }
        } catch  {}
    }
    const p = ne(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(t), __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join("node_modules", r), i);
    if (!p || !P(i, p).isDirectory()) return;
    const T = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(p, H);
    if (F(i, T)) {
        const v = Q(T, f, !1, i);
        if (v === !1) return;
        if (v && F(i, v) && P(i, v).isFile()) return v;
    }
    const w = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(p, f), O = w.endsWith(".json");
    if (!O) {
        const v = `${w}.json`;
        if (F(i, v)) return v;
    }
    if (F(i, w)) {
        if (P(i, w).isDirectory()) {
            const v = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(w, H);
            if (F(i, v)) {
                const b = Q(v, "", !0, i);
                if (b && F(i, b)) return b;
            }
            const A = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(w, X);
            if (F(i, A)) return A;
        } else if (O) return w;
    }
}, "resolveExtendsPath"), Y = l((e, t)=>M(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].relative(e, t)), "pathRelative"), re = [
    "files",
    "include",
    "exclude"
], Ue = l((e, t, i, n)=>{
    const o = Le(e, t, n);
    if (!o) throw new Error(`File '${e}' not found.`);
    if (i.has(o)) throw new Error(`Circularity detected while resolving configuration: ${o}`);
    i.add(o);
    const s = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(o), r = ue(o, n, i);
    delete r.references;
    const { compilerOptions: f } = r;
    if (f) {
        const { baseUrl: u } = f;
        u && !u.startsWith(L) && (f.baseUrl = B(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].relative(t, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(s, u))) || "./");
        let { outDir: p } = f;
        p && (p.startsWith(L) || (p = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].relative(t, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(s, p))), f.outDir = B(p) || "./");
    }
    for (const u of re){
        const p = r[u];
        p && (r[u] = p.map((T)=>T.startsWith(L) ? T : B(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].relative(t, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(s, T)))));
    }
    return r;
}, "resolveExtends"), Ee = [
    "outDir",
    "declarationDir"
], ue = l((e, t, i = new Set)=>{
    let n;
    try {
        n = le(e, t) || {};
    } catch  {
        throw new Error(`Cannot resolve tsconfig at path: ${e}`);
    }
    if (typeof n != "object") throw new SyntaxError(`Failed to parse tsconfig at: ${e}`);
    const o = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(e);
    if (n.compilerOptions) {
        const { compilerOptions: s } = n;
        s.paths && !s.baseUrl && (s[z] = o);
    }
    if (n.extends) {
        const s = Array.isArray(n.extends) ? n.extends : [
            n.extends
        ];
        delete n.extends;
        for (const r of s.reverse()){
            const f = Ue(r, o, new Set(i), t), u = {
                ...f,
                ...n,
                compilerOptions: {
                    ...f.compilerOptions,
                    ...n.compilerOptions
                }
            };
            f.watchOptions && (u.watchOptions = {
                ...f.watchOptions,
                ...n.watchOptions
            }), n = u;
        }
    }
    if (n.compilerOptions) {
        const { compilerOptions: s } = n, r = [
            "baseUrl",
            "rootDir"
        ];
        for (const f of r){
            const u = s[f];
            if (u && !u.startsWith(L)) {
                const p = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(o, u), T = Y(o, p);
                s[f] = T;
            }
        }
        for (const f of Ee){
            let u = s[f];
            u && (Array.isArray(n.exclude) || (n.exclude = []), n.exclude.includes(u) || n.exclude.push(u), u.startsWith(L) || (u = M(u)), s[f] = u);
        }
    } else n.compilerOptions = {};
    if (n.include ? (n.include = n.include.map(B), n.files && delete n.files) : n.files && (n.files = n.files.map((s)=>s.startsWith(L) ? s : M(s))), n.watchOptions) {
        const { watchOptions: s } = n;
        s.excludeDirectories && (s.excludeDirectories = s.excludeDirectories.map((r)=>B(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(o, r))));
    }
    return n;
}, "_parseTsconfig"), I = l((e, t)=>{
    if (e.startsWith(L)) return B(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(t, e.slice(L.length)));
}, "interpolateConfigDir"), Ne = [
    "outDir",
    "declarationDir",
    "outFile",
    "rootDir",
    "baseUrl",
    "tsBuildInfoFile"
], fe = l((e, t = new Map)=>{
    const i = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(e), n = ue(i, t), o = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(i), { compilerOptions: s } = n;
    if (s) {
        for (const f of Ne){
            const u = s[f];
            if (u) {
                const p = I(u, o);
                s[f] = p ? Y(o, p) : u;
            }
        }
        for (const f of [
            "rootDirs",
            "typeRoots"
        ]){
            const u = s[f];
            u && (s[f] = u.map((p)=>{
                const T = I(p, o);
                return T ? Y(o, T) : p;
            }));
        }
        const { paths: r } = s;
        if (r) for (const f of Object.keys(r))r[f] = r[f].map((u)=>{
            var p;
            return (p = I(u, o)) != null ? p : u;
        });
    }
    for (const r of re){
        const f = n[r];
        f && (n[r] = f.map((u)=>{
            var p;
            return (p = I(u, o)) != null ? p : u;
        }));
    }
    return n;
}, "parseTsconfig"), De = l((e = process.cwd(), t = "tsconfig.json", i = new Map)=>{
    const n = ne(B(e), t, i);
    if (!n) return null;
    const o = fe(n, i);
    return {
        path: n,
        config: o
    };
}, "getTsconfig"), he = /\*/g, ce = l((e, t)=>{
    const i = e.match(he);
    if (i && i.length > 1) throw new Error(t);
}, "assertStarCount"), de = l((e)=>{
    if (e.includes("*")) {
        const [t, i] = e.split("*");
        return {
            prefix: t,
            suffix: i
        };
    }
    return e;
}, "parsePattern"), Pe = l(({ prefix: e, suffix: t }, i)=>i.startsWith(e) && i.endsWith(t), "isPatternMatch"), xe = l((e, t, i)=>Object.entries(e).map(([n, o])=>(ce(n, `Pattern '${n}' can have at most one '*' character.`), {
            pattern: de(n),
            substitutions: o.map((s)=>{
                if (ce(s, `Substitution '${s}' in pattern '${n}' can have at most one '*' character.`), !t && !J.test(s)) throw new Error("Non-relative paths are not allowed when 'baseUrl' is not set. Did you forget a leading './'?");
                return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(i, s);
            })
        })), "parsePaths"), Ie = l((e)=>{
    const { compilerOptions: t } = e.config;
    if (!t) return null;
    const { baseUrl: i, paths: n } = t;
    if (!i && !n) return null;
    const o = z in t && t[z], s = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(e.path), i || o || "."), r = n ? xe(n, i, s) : [];
    return (f)=>{
        if (J.test(f)) return [];
        const u = [];
        for (const O of r){
            if (O.pattern === f) return O.substitutions.map(B);
            typeof O.pattern != "string" && u.push(O);
        }
        let p, T = -1;
        for (const O of u)Pe(O.pattern, f) && O.pattern.prefix.length > T && (T = O.pattern.prefix.length, p = O);
        if (!p) return i ? [
            B(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(s, f))
        ] : [];
        const w = f.slice(p.pattern.prefix.length, f.length - p.pattern.suffix.length);
        return p.substitutions.map((O)=>B(O.replace("*", w)));
    };
}, "createPathsMatcher"), pe = l((e)=>{
    let t = "";
    for(let i = 0; i < e.length; i += 1){
        const n = e[i], o = n.toUpperCase();
        t += n === o ? n.toLowerCase() : o;
    }
    return t;
}, "s"), Se = 65, We = 97, Ve = l(()=>Math.floor(Math.random() * 26), "m"), Re = l((e)=>Array.from({
        length: e
    }, ()=>String.fromCodePoint(Ve() + (Math.random() > .5 ? Se : We))).join(""), "S"), Je = l((e = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"])=>{
    const t = process.execPath;
    if (e.existsSync(t)) return !e.existsSync(pe(t));
    const i = `/${Re(10)}`;
    e.writeFileSync(i, "");
    const n = !e.existsSync(pe(i));
    return e.unlinkSync(i), n;
}, "l"), { join: S } = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].posix, Z = {
    ts: [
        ".ts",
        ".tsx",
        ".d.ts"
    ],
    cts: [
        ".cts",
        ".d.cts"
    ],
    mts: [
        ".mts",
        ".d.mts"
    ]
}, Me = l((e)=>{
    const t = [
        ...Z.ts
    ], i = [
        ...Z.cts
    ], n = [
        ...Z.mts
    ];
    return e != null && e.allowJs && (t.push(".js", ".jsx"), i.push(".cjs"), n.push(".mjs")), [
        ...t,
        ...i,
        ...n
    ];
}, "getSupportedExtensions"), Ge = l((e)=>{
    const t = [];
    if (!e) return t;
    const { outDir: i, declarationDir: n } = e;
    return i && t.push(i), n && t.push(n), t;
}, "getDefaultExcludeSpec"), ae = l((e)=>e.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`), "escapeForRegexp"), ze = [
    "node_modules",
    "bower_components",
    "jspm_packages"
], q = `(?!(${ze.join("|")})(/|$))`, Qe = /(?:^|\/)[^.*?]+$/, ge = "**/*", W = "[^/]", K = "[^./]", me = process.platform === "win32", He = l(({ config: e, path: t }, i = Je())=>{
    if ("extends" in e) throw new Error("tsconfig#extends must be resolved. Use getTsconfig or parseTsconfig to resolve it.");
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].isAbsolute(t)) throw new Error("The tsconfig path must be absolute");
    me && (t = B(t));
    const n = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(t), { files: o, include: s, exclude: r, compilerOptions: f } = e, u = o == null ? void 0 : o.map((b)=>S(n, b)), p = Me(f), T = i ? "" : "i", O = (r || Ge(f)).map((b)=>{
        const $ = S(n, b), U = ae($).replaceAll(String.raw`\*\*/`, "(.+/)?").replaceAll(String.raw`\*`, `${W}*`).replaceAll(String.raw`\?`, W);
        return new RegExp(`^${U}($|/)`, T);
    }), v = o || s ? s : [
        ge
    ], A = v ? v.map((b)=>{
        let $ = S(n, b);
        Qe.test($) && ($ = S($, ge));
        const U = ae($).replaceAll(String.raw`/\*\*`, `(/${q}${K}${W}*)*?`).replaceAll(/(\/)?\\\*/g, (E, c)=>{
            const m = `(${K}|(\\.(?!min\\.js$))?)*`;
            return c ? `/${q}${K}${m}` : m;
        }).replaceAll(/(\/)?\\\?/g, (E, c)=>{
            const m = W;
            return c ? `/${q}${m}` : m;
        });
        return new RegExp(`^${U}$`, T);
    }) : void 0;
    return (b)=>{
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].isAbsolute(b)) throw new Error("filePath must be absolute");
        if (me && (b = B(b)), u != null && u.includes(b)) return e;
        if (!(!p.some(($)=>b.endsWith($)) || O.some(($)=>$.test(b))) && A && A.some(($)=>$.test(b))) return e;
    };
}, "createFilesMatcher");
;
}),
"[project]/node_modules/kleur/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { FORCE_COLOR, NODE_DISABLE_COLORS, TERM } = process.env;
const $ = {
    enabled: !NODE_DISABLE_COLORS && TERM !== 'dumb' && FORCE_COLOR !== '0',
    // modifiers
    reset: init(0, 0),
    bold: init(1, 22),
    dim: init(2, 22),
    italic: init(3, 23),
    underline: init(4, 24),
    inverse: init(7, 27),
    hidden: init(8, 28),
    strikethrough: init(9, 29),
    // colors
    black: init(30, 39),
    red: init(31, 39),
    green: init(32, 39),
    yellow: init(33, 39),
    blue: init(34, 39),
    magenta: init(35, 39),
    cyan: init(36, 39),
    white: init(37, 39),
    gray: init(90, 39),
    grey: init(90, 39),
    // background colors
    bgBlack: init(40, 49),
    bgRed: init(41, 49),
    bgGreen: init(42, 49),
    bgYellow: init(43, 49),
    bgBlue: init(44, 49),
    bgMagenta: init(45, 49),
    bgCyan: init(46, 49),
    bgWhite: init(47, 49)
};
function run(arr, str) {
    let i = 0, tmp, beg = '', end = '';
    for(; i < arr.length; i++){
        tmp = arr[i];
        beg += tmp.open;
        end += tmp.close;
        if (str.includes(tmp.close)) {
            str = str.replace(tmp.rgx, tmp.close + tmp.open);
        }
    }
    return beg + str + end;
}
function chain(has, keys) {
    let ctx = {
        has,
        keys
    };
    ctx.reset = $.reset.bind(ctx);
    ctx.bold = $.bold.bind(ctx);
    ctx.dim = $.dim.bind(ctx);
    ctx.italic = $.italic.bind(ctx);
    ctx.underline = $.underline.bind(ctx);
    ctx.inverse = $.inverse.bind(ctx);
    ctx.hidden = $.hidden.bind(ctx);
    ctx.strikethrough = $.strikethrough.bind(ctx);
    ctx.black = $.black.bind(ctx);
    ctx.red = $.red.bind(ctx);
    ctx.green = $.green.bind(ctx);
    ctx.yellow = $.yellow.bind(ctx);
    ctx.blue = $.blue.bind(ctx);
    ctx.magenta = $.magenta.bind(ctx);
    ctx.cyan = $.cyan.bind(ctx);
    ctx.white = $.white.bind(ctx);
    ctx.gray = $.gray.bind(ctx);
    ctx.grey = $.grey.bind(ctx);
    ctx.bgBlack = $.bgBlack.bind(ctx);
    ctx.bgRed = $.bgRed.bind(ctx);
    ctx.bgGreen = $.bgGreen.bind(ctx);
    ctx.bgYellow = $.bgYellow.bind(ctx);
    ctx.bgBlue = $.bgBlue.bind(ctx);
    ctx.bgMagenta = $.bgMagenta.bind(ctx);
    ctx.bgCyan = $.bgCyan.bind(ctx);
    ctx.bgWhite = $.bgWhite.bind(ctx);
    return ctx;
}
function init(open, close) {
    let blk = {
        open: `\x1b[${open}m`,
        close: `\x1b[${close}m`,
        rgx: new RegExp(`\\x1b\\[${close}m`, 'g')
    };
    return function(txt) {
        if (this !== void 0 && this.has !== void 0) {
            this.has.includes(open) || (this.has.push(open), this.keys.push(blk));
            return txt === void 0 ? this : $.enabled ? run(this.keys, txt + '') : txt + '';
        }
        return txt === void 0 ? chain([
            open
        ], [
            blk
        ]) : $.enabled ? run([
            blk
        ], txt + '') : txt + '';
    };
}
module.exports = $;
}),
"[project]/node_modules/sisteransi/src/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const ESC = '\x1B';
const CSI = `${ESC}[`;
const beep = '\u0007';
const cursor = {
    to (x, y) {
        if (!y) return `${CSI}${x + 1}G`;
        return `${CSI}${y + 1};${x + 1}H`;
    },
    move (x, y) {
        let ret = '';
        if (x < 0) ret += `${CSI}${-x}D`;
        else if (x > 0) ret += `${CSI}${x}C`;
        if (y < 0) ret += `${CSI}${-y}A`;
        else if (y > 0) ret += `${CSI}${y}B`;
        return ret;
    },
    up: (count = 1)=>`${CSI}${count}A`,
    down: (count = 1)=>`${CSI}${count}B`,
    forward: (count = 1)=>`${CSI}${count}C`,
    backward: (count = 1)=>`${CSI}${count}D`,
    nextLine: (count = 1)=>`${CSI}E`.repeat(count),
    prevLine: (count = 1)=>`${CSI}F`.repeat(count),
    left: `${CSI}G`,
    hide: `${CSI}?25l`,
    show: `${CSI}?25h`,
    save: `${ESC}7`,
    restore: `${ESC}8`
};
const scroll = {
    up: (count = 1)=>`${CSI}S`.repeat(count),
    down: (count = 1)=>`${CSI}T`.repeat(count)
};
const erase = {
    screen: `${CSI}2J`,
    up: (count = 1)=>`${CSI}1J`.repeat(count),
    down: (count = 1)=>`${CSI}J`.repeat(count),
    line: `${CSI}2K`,
    lineEnd: `${CSI}K`,
    lineStart: `${CSI}1K`,
    lines (count) {
        let clear = '';
        for(let i = 0; i < count; i++)clear += this.line + (i < count - 1 ? cursor.up() : '');
        if (count) clear += cursor.left;
        return clear;
    }
};
module.exports = {
    cursor,
    scroll,
    erase,
    beep
};
}),
"[project]/node_modules/to-no-case/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Export.
 */ module.exports = toNoCase;
/**
 * Test whether a string is camel-case.
 */ var hasSpace = /\s/;
var hasSeparator = /(_|-|\.|:)/;
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;
/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */ function toNoCase(string) {
    if (hasSpace.test(string)) return string.toLowerCase();
    if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase();
    if (hasCamel.test(string)) return uncamelize(string).toLowerCase();
    return string.toLowerCase();
}
/**
 * Separator splitter.
 */ var separatorSplitter = /[\W_]+(.|$)/g;
/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */ function unseparate(string) {
    return string.replace(separatorSplitter, function(m, next) {
        return next ? ' ' + next : '';
    });
}
/**
 * Camelcase splitter.
 */ var camelSplitter = /(.)([A-Z]+)/g;
/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */ function uncamelize(string) {
    return string.replace(camelSplitter, function(m, previous, uppers) {
        return previous + ' ' + uppers.toLowerCase().split('').join(' ');
    });
}
}),
"[project]/node_modules/to-space-case/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var clean = __turbopack_context__.r("[project]/node_modules/to-no-case/index.js [app-route] (ecmascript)");
/**
 * Export.
 */ module.exports = toSpaceCase;
/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */ function toSpaceCase(string) {
    return clean(string).replace(/[\W_]+(.|$)/g, function(matches, match) {
        return match ? ' ' + match : '';
    }).trim();
}
}),
"[project]/node_modules/to-snake-case/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var toSpace = __turbopack_context__.r("[project]/node_modules/to-space-case/index.js [app-route] (ecmascript)");
/**
 * Export.
 */ module.exports = toSnakeCase;
/**
 * Convert a `string` to snake case.
 *
 * @param {String} string
 * @return {String}
 */ function toSnakeCase(string) {
    return toSpace(string).replace(/\s/g, '_');
}
}),
"[externals]/typescript [external] (typescript, cjs, [project]/node_modules/typescript)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("typescript-279735412610ef8d", () => require("typescript-279735412610ef8d"));

module.exports = mod;
}),
"[project]/node_modules/console-table-printer/dist/src/utils/colored-console-line.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_COLOR_MAP = void 0;
exports.DEFAULT_COLOR_MAP = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    white_bold: '\x1b[01m',
    reset: '\x1b[0m'
};
class ColoredConsoleLine {
    constructor(colorMap = exports.DEFAULT_COLOR_MAP){
        this.text = '';
        this.colorMap = colorMap;
    }
    addCharsWithColor(color, text) {
        const colorAnsi = this.colorMap[color];
        this.text += colorAnsi !== undefined ? `${colorAnsi}${text}${this.colorMap.reset}` : text;
    }
    renderConsole() {
        return this.text;
    }
}
exports.default = ColoredConsoleLine;
}),
"[project]/node_modules/console-table-printer/dist/src/utils/table-constants.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_HEADER_ALIGNMENT = exports.DEFAULT_ROW_ALIGNMENT = exports.DEFAULT_HEADER_FONT_COLOR = exports.DEFAULT_ROW_FONT_COLOR = exports.COLORS = exports.ALIGNMENTS = exports.DEFAULT_TABLE_STYLE = exports.DEFAULT_ROW_SEPARATOR = exports.DEFAULT_COLUMN_LEN = void 0;
exports.DEFAULT_COLUMN_LEN = 20;
exports.DEFAULT_ROW_SEPARATOR = false;
exports.DEFAULT_TABLE_STYLE = {
    /*
        Default Style
        ┌────────────┬─────┬──────┐
        │ foo        │ bar │ baz  │
        │ frobnicate │ bar │ quuz │
        └────────────┴─────┴──────┘
        */ headerTop: {
        left: '┌',
        mid: '┬',
        right: '┐',
        other: '─'
    },
    headerBottom: {
        left: '├',
        mid: '┼',
        right: '┤',
        other: '─'
    },
    tableBottom: {
        left: '└',
        mid: '┴',
        right: '┘',
        other: '─'
    },
    vertical: '│',
    rowSeparator: {
        left: '├',
        mid: '┼',
        right: '┤',
        other: '─'
    }
};
exports.ALIGNMENTS = [
    'right',
    'left',
    'center'
];
exports.COLORS = [
    'red',
    'green',
    'yellow',
    'white',
    'blue',
    'magenta',
    'cyan',
    'white_bold',
    'reset'
];
exports.DEFAULT_ROW_FONT_COLOR = 'white';
exports.DEFAULT_HEADER_FONT_COLOR = 'white_bold';
exports.DEFAULT_ROW_ALIGNMENT = 'right';
exports.DEFAULT_HEADER_ALIGNMENT = 'center';
}),
"[project]/node_modules/console-table-printer/dist/src/internalTable/input-converter.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rawColumnToInternalColumn = exports.objIfExists = void 0;
const table_constants_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-constants.js [app-route] (ecmascript)");
const objIfExists = (key, val)=>{
    if (!val) {
        return {};
    }
    return {
        [key]: val
    };
};
exports.objIfExists = objIfExists;
const rawColumnToInternalColumn = (column)=>{
    var _a;
    return Object.assign(Object.assign(Object.assign(Object.assign({
        name: column.name,
        title: (_a = column.title) !== null && _a !== void 0 ? _a : column.name
    }, (0, exports.objIfExists)('color', column.color)), (0, exports.objIfExists)('maxLen', column.maxLen)), (0, exports.objIfExists)('minLen', column.minLen)), {
        alignment: column.alignment || table_constants_1.DEFAULT_ROW_ALIGNMENT
    });
};
exports.rawColumnToInternalColumn = rawColumnToInternalColumn;
}),
"[project]/node_modules/console-table-printer/dist/src/utils/console-utils.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findWidthInConsole = exports.stripAnsi = void 0;
const simple_wcswidth_1 = __turbopack_context__.r("[project]/node_modules/simple-wcswidth/dist/index.js [app-route] (ecmascript)");
/* eslint-disable no-control-regex */ const colorRegex = /\x1b\[\d{1,3}(;\d{1,3})*m/g; // \x1b[30m \x1b[305m \x1b[38;5m
const stripAnsi = (str)=>str.replace(colorRegex, '');
exports.stripAnsi = stripAnsi;
const findWidthInConsole = (str, charLength)=>{
    let strLen = 0;
    str = (0, exports.stripAnsi)(str);
    if (charLength) {
        Object.entries(charLength).forEach(([key, value])=>{
            // count appearance of the key in the string and remove from original string
            let regex = new RegExp(key, 'g');
            strLen += (str.match(regex) || []).length * value;
            str = str.replace(key, '');
        });
    }
    strLen += (0, simple_wcswidth_1.wcswidth)(str);
    return strLen;
};
exports.findWidthInConsole = findWidthInConsole;
}),
"[project]/node_modules/console-table-printer/dist/src/utils/string-utils.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.biggestWordInSentence = exports.textWithPadding = exports.splitTextIntoTextsOfMinLen = void 0;
const console_utils_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/console-utils.js [app-route] (ecmascript)");
// ("How are you?",10) => ["How are ", "you?"]
const splitTextIntoTextsOfMinLen = (inpStr, width, charLength)=>{
    const ret = [];
    const lines = inpStr.split(/[\n\r]/);
    lines.forEach((line)=>{
        const spaceSeparatedStrings = line.split(' ');
        let now = [];
        let cnt = 0;
        spaceSeparatedStrings.forEach((strWithoutSpace)=>{
            const consoleWidth = (0, console_utils_1.findWidthInConsole)(strWithoutSpace, charLength);
            if (cnt + consoleWidth <= width) {
                cnt += consoleWidth + 1; // 1 for the space
                now.push(strWithoutSpace);
            } else {
                if (now.length > 0) ret.push(now.join(' '));
                now = [
                    strWithoutSpace
                ];
                cnt = consoleWidth + 1;
            }
        });
        ret.push(now.join(' '));
    });
    return ret;
};
exports.splitTextIntoTextsOfMinLen = splitTextIntoTextsOfMinLen;
// ("How are you?",center, 20) => "    How are you?    "
// ("How are you?",right, 20)  => "        How are you?"
// ("How are you?",center, 4)  => "How\nare\nyou?"
const textWithPadding = (text, alignment, columnLen, charLength)=>{
    const curTextSize = (0, console_utils_1.findWidthInConsole)(text, charLength);
    // alignments for center padding case
    const leftPadding = Math.floor((columnLen - curTextSize) / 2);
    const rightPadding = columnLen - leftPadding - curTextSize;
    // handle edge cases where the text size is larger than the column length
    if (columnLen < curTextSize) {
        const splittedLines = (0, exports.splitTextIntoTextsOfMinLen)(text, columnLen);
        if (splittedLines.length === 1) {
            return text;
        }
        return splittedLines.map((singleLine)=>(0, exports.textWithPadding)(singleLine, alignment, columnLen, charLength)).join('\n');
    }
    // console.log(text, columnLen, curTextSize);
    switch(alignment){
        case 'left':
            return text.concat(' '.repeat(columnLen - curTextSize));
        case 'center':
            return ' '.repeat(leftPadding).concat(text).concat(' '.repeat(rightPadding));
        case 'right':
        default:
            return ' '.repeat(columnLen - curTextSize).concat(text);
    }
};
exports.textWithPadding = textWithPadding;
// ("How are you?",10) => ["How are ", "you?"]
const biggestWordInSentence = (inpStr, charLength)=>inpStr.split(' ').reduce((a, b)=>Math.max(a, (0, console_utils_1.findWidthInConsole)(b, charLength)), 0);
exports.biggestWordInSentence = biggestWordInSentence;
}),
"[project]/node_modules/console-table-printer/dist/src/utils/table-helpers.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getWidthLimitedColumnsArray = exports.createHeaderAsRow = exports.renderTableHorizontalBorders = exports.findLenOfColumn = exports.createRow = exports.createColumFromComputedColumn = exports.createColumFromOnlyName = exports.createTableHorizontalBorders = exports.convertRawRowOptionsToStandard = exports.cellText = void 0;
const input_converter_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/internalTable/input-converter.js [app-route] (ecmascript)");
const console_utils_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/console-utils.js [app-route] (ecmascript)");
const string_utils_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/string-utils.js [app-route] (ecmascript)");
const table_constants_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-constants.js [app-route] (ecmascript)");
const max = (a, b)=>Math.max(a, b);
// takes any input that is given by user and converts to string
const cellText = (text)=>text === undefined || text === null ? '' : `${text}`;
exports.cellText = cellText;
const convertRawRowOptionsToStandard = (options)=>{
    if (options) {
        return {
            color: options.color,
            separator: options.separator || table_constants_1.DEFAULT_ROW_SEPARATOR
        };
    }
    return undefined;
};
exports.convertRawRowOptionsToStandard = convertRawRowOptionsToStandard;
const createTableHorizontalBorders = ({ left, mid, right, other }, column_lengths)=>{
    // ╚
    let ret = left;
    // ╚═══════╩═══════════════════════════════════════╩════════╩
    column_lengths.forEach((len)=>{
        ret += other.repeat(len + 2);
        ret += mid;
    });
    // ╚═══════╩═══════════════════════════════════════╩════════
    ret = ret.slice(0, -mid.length);
    // ╚═══════╩═══════════════════════════════════════╩════════╝
    ret += right;
    return ret;
};
exports.createTableHorizontalBorders = createTableHorizontalBorders;
const createColumFromOnlyName = (name)=>({
        name,
        title: name
    });
exports.createColumFromOnlyName = createColumFromOnlyName;
const createColumFromComputedColumn = (column)=>{
    var _a;
    return Object.assign(Object.assign(Object.assign(Object.assign({
        name: column.name,
        title: (_a = column.title) !== null && _a !== void 0 ? _a : column.name
    }, (0, input_converter_1.objIfExists)('color', column.color)), (0, input_converter_1.objIfExists)('maxLen', column.maxLen)), (0, input_converter_1.objIfExists)('minLen', column.minLen)), {
        alignment: column.alignment || table_constants_1.DEFAULT_ROW_ALIGNMENT
    });
};
exports.createColumFromComputedColumn = createColumFromComputedColumn;
const createRow = (color, text, separator)=>({
        color,
        separator,
        text
    });
exports.createRow = createRow;
const findLenOfColumn = (column, rows, charLength)=>{
    const columnId = column.name;
    const columnTitle = column.title;
    let length = max(0, (column === null || column === void 0 ? void 0 : column.minLen) || 0);
    if (column.maxLen) {
        // if customer input is mentioned a max width, lets see if all other can fit here
        // if others cant fit find the max word length so that at least the table can be printed
        length = max(length, max(column.maxLen, (0, string_utils_1.biggestWordInSentence)(columnTitle, charLength)));
        length = rows.reduce((acc, row)=>max(acc, (0, string_utils_1.biggestWordInSentence)((0, exports.cellText)(row.text[columnId]), charLength)), length);
        return length;
    }
    length = max(length, (0, console_utils_1.findWidthInConsole)(columnTitle, charLength));
    rows.forEach((row)=>{
        length = max(length, (0, console_utils_1.findWidthInConsole)((0, exports.cellText)(row.text[columnId]), charLength));
    });
    return length;
};
exports.findLenOfColumn = findLenOfColumn;
const renderTableHorizontalBorders = (style, column_lengths)=>{
    const str = (0, exports.createTableHorizontalBorders)(style, column_lengths);
    return str;
};
exports.renderTableHorizontalBorders = renderTableHorizontalBorders;
const createHeaderAsRow = (createRowFn, columns)=>{
    const headerColor = table_constants_1.DEFAULT_HEADER_FONT_COLOR;
    const row = createRowFn(headerColor, {}, false);
    columns.forEach((column)=>{
        row.text[column.name] = column.title;
    });
    return row;
};
exports.createHeaderAsRow = createHeaderAsRow;
// { col1: ['How', 'Is', 'Going'], col2: ['I am', 'Tom'],  }
const getWidthLimitedColumnsArray = (columns, row, charLength)=>{
    const ret = {};
    columns.forEach((column)=>{
        ret[column.name] = (0, string_utils_1.splitTextIntoTextsOfMinLen)((0, exports.cellText)(row.text[column.name]), column.length || table_constants_1.DEFAULT_COLUMN_LEN, charLength);
    });
    return ret;
};
exports.getWidthLimitedColumnsArray = getWidthLimitedColumnsArray;
}),
"[project]/node_modules/console-table-printer/dist/src/internalTable/table-pre-processors.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.preProcessRows = exports.preProcessColumns = void 0;
const table_helpers_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-helpers.js [app-route] (ecmascript)");
const createComputedColumnsIfNecessary = (table)=>{
    if (table.computedColumns.length) {
        table.computedColumns.forEach((computedColumn)=>{
            table.addColumn(computedColumn);
            table.rows.forEach((row)=>{
                row.text[computedColumn.name] = computedColumn.function(row.text);
            });
        });
    }
};
const disableColumnsIfNecessary = (table)=>{
    if (table.enabledColumns.length) {
        table.columns = table.columns.filter((col)=>table.enabledColumns.includes(col.name));
    }
};
const enableColumnsIfNecessary = (table)=>{
    if (table.disabledColumns.length) {
        table.columns = table.columns.filter((col)=>!table.disabledColumns.includes(col.name));
    }
};
const findColumnWidth = (table)=>{
    table.columns.forEach((column)=>{
        column.length = (0, table_helpers_1.findLenOfColumn)(column, table.rows, table.charLength);
    });
};
const preProcessColumns = (table)=>{
    createComputedColumnsIfNecessary(table);
    enableColumnsIfNecessary(table);
    disableColumnsIfNecessary(table);
    findColumnWidth(table);
};
exports.preProcessColumns = preProcessColumns;
const preProcessRows = (table)=>{
    const newRows = table.rows.filter((r)=>table.filterFunction(r.text)).sort((r1, r2)=>table.sortFunction(r1.text, r2.text));
    table.rows = newRows;
};
exports.preProcessRows = preProcessRows;
}),
"[project]/node_modules/console-table-printer/dist/src/internalTable/internal-table-printer.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.printSimpleTable = exports.renderSimpleTable = exports.renderTable = void 0;
const colored_console_line_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/colored-console-line.js [app-route] (ecmascript)"));
const string_utils_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/string-utils.js [app-route] (ecmascript)");
const table_constants_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-constants.js [app-route] (ecmascript)");
const table_helpers_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-helpers.js [app-route] (ecmascript)");
const internal_table_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/internalTable/internal-table.js [app-route] (ecmascript)"));
const table_pre_processors_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/internalTable/table-pre-processors.js [app-route] (ecmascript)");
// ║ Index ║         ║        ║
const renderOneLine = (tableStyle, columns, currentLineIndex, widthLimitedColumnsArray, isHeader, row, colorMap, charLength)=>{
    const line = new colored_console_line_1.default(colorMap);
    line.addCharsWithColor('', tableStyle.vertical); // dont Color the Column borders
    columns.forEach((column)=>{
        const thisLineHasText = currentLineIndex < widthLimitedColumnsArray[column.name].length;
        const textForThisLine = thisLineHasText ? (0, table_helpers_1.cellText)(widthLimitedColumnsArray[column.name][currentLineIndex]) : '';
        line.addCharsWithColor(table_constants_1.DEFAULT_ROW_FONT_COLOR, ' ');
        line.addCharsWithColor(isHeader && table_constants_1.DEFAULT_HEADER_FONT_COLOR || column.color || row.color, (0, string_utils_1.textWithPadding)(textForThisLine, column.alignment || table_constants_1.DEFAULT_ROW_ALIGNMENT, column.length || table_constants_1.DEFAULT_COLUMN_LEN, charLength));
        line.addCharsWithColor('', ` ${tableStyle.vertical}`); // dont Color the Column borders
    });
    return line.renderConsole();
};
// ║ Bold  ║    text ║  value ║
// ║ Index ║         ║        ║
const renderWidthLimitedLines = (tableStyle, columns, row, colorMap, isHeader, charLength)=>{
    // { col1: ['How', 'Is', 'Going'], col2: ['I am', 'Tom'],  }
    const widthLimitedColumnsArray = (0, table_helpers_1.getWidthLimitedColumnsArray)(columns, row, charLength);
    const totalLines = Object.values(widthLimitedColumnsArray).reduce((a, b)=>Math.max(a, b.length), 0);
    const ret = [];
    for(let currentLineIndex = 0; currentLineIndex < totalLines; currentLineIndex += 1){
        const singleLine = renderOneLine(tableStyle, columns, currentLineIndex, widthLimitedColumnsArray, isHeader, row, colorMap, charLength);
        ret.push(singleLine);
    }
    return ret;
};
// ║ 1     ║     I would like some red wine please ║ 10.212 ║
const renderRow = (table, row)=>{
    let ret = [];
    ret = ret.concat(renderWidthLimitedLines(table.tableStyle, table.columns, row, table.colorMap, undefined, table.charLength));
    return ret;
};
/*
                  The analysis Result
 ╔═══════╦═══════════════════════════════════════╦════════╗
*/ const renderTableTitle = (table)=>{
    const ret = [];
    if (table.title === undefined) {
        return ret;
    }
    const getTableWidth = ()=>{
        const reducer = (accumulator, currentValue)=>// ║ cell ║, 2 spaces + cellTextSize + one border on the left
            accumulator + currentValue + 2 + 1;
        return table.columns.map((m)=>m.length || table_constants_1.DEFAULT_COLUMN_LEN).reduce(reducer, 1);
    };
    const titleWithPadding = (0, string_utils_1.textWithPadding)(table.title, table_constants_1.DEFAULT_HEADER_ALIGNMENT, getTableWidth());
    const styledText = new colored_console_line_1.default(table.colorMap);
    styledText.addCharsWithColor(table_constants_1.DEFAULT_HEADER_FONT_COLOR, titleWithPadding);
    //                  The analysis Result
    ret.push(styledText.renderConsole());
    return ret;
};
/*
 ╔═══════╦═══════════════════════════════════════╦════════╗
 ║ index ║                                  text ║  value ║
 ╟═══════╬═══════════════════════════════════════╬════════╢
*/ const renderTableHeaders = (table)=>{
    let ret = [];
    // ╔═══════╦═══════════════════════════════════════╦════════╗
    ret.push((0, table_helpers_1.renderTableHorizontalBorders)(table.tableStyle.headerTop, table.columns.map((m)=>m.length || table_constants_1.DEFAULT_COLUMN_LEN)));
    // ║ index ║                                  text ║  value ║
    const row = (0, table_helpers_1.createHeaderAsRow)(table_helpers_1.createRow, table.columns);
    ret = ret.concat(renderWidthLimitedLines(table.tableStyle, table.columns, row, table.colorMap, true));
    // ╟═══════╬═══════════════════════════════════════╬════════╢
    ret.push((0, table_helpers_1.renderTableHorizontalBorders)(table.tableStyle.headerBottom, table.columns.map((m)=>m.length || table_constants_1.DEFAULT_COLUMN_LEN)));
    return ret;
};
const renderTableEnding = (table)=>{
    const ret = [];
    // ╚═══════╩═══════════════════════════════════════╩════════╝
    ret.push((0, table_helpers_1.renderTableHorizontalBorders)(table.tableStyle.tableBottom, table.columns.map((m)=>m.length || table_constants_1.DEFAULT_COLUMN_LEN)));
    return ret;
};
const renderRowSeparator = (table, row)=>{
    const ret = [];
    const lastRowIndex = table.rows.length - 1;
    const currentRowIndex = table.rows.indexOf(row);
    if (currentRowIndex !== lastRowIndex && row.separator) {
        // ╟═══════╬═══════════════════════════════════════╬════════╢
        ret.push((0, table_helpers_1.renderTableHorizontalBorders)(table.tableStyle.rowSeparator, table.columns.map((m)=>m.length || table_constants_1.DEFAULT_COLUMN_LEN)));
    }
    return ret;
};
const renderTable = (table)=>{
    (0, table_pre_processors_1.preProcessColumns)(table); // enable / disable cols, find maxLn of each col/ computed Columns
    (0, table_pre_processors_1.preProcessRows)(table); // sort and filter
    const ret = [];
    renderTableTitle(table).forEach((row)=>ret.push(row));
    renderTableHeaders(table).forEach((row)=>ret.push(row));
    table.rows.forEach((row)=>{
        renderRow(table, row).forEach((row_)=>ret.push(row_));
        renderRowSeparator(table, row).forEach((row_)=>ret.push(row_));
    });
    renderTableEnding(table).forEach((row)=>ret.push(row));
    return ret.join('\n');
};
exports.renderTable = renderTable;
const renderSimpleTable = (rows)=>{
    const table = new internal_table_1.default();
    table.addRows(rows);
    return (0, exports.renderTable)(table);
};
exports.renderSimpleTable = renderSimpleTable;
const printSimpleTable = (rows)=>{
    console.log((0, exports.renderSimpleTable)(rows));
};
exports.printSimpleTable = printSimpleTable;
}),
"[project]/node_modules/console-table-printer/dist/src/internalTable/internal-table.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const colored_console_line_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/colored-console-line.js [app-route] (ecmascript)");
const table_constants_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-constants.js [app-route] (ecmascript)");
const table_helpers_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-helpers.js [app-route] (ecmascript)");
const input_converter_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/internalTable/input-converter.js [app-route] (ecmascript)");
const internal_table_printer_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/internalTable/internal-table-printer.js [app-route] (ecmascript)");
const DEFAULT_ROW_SORT_FUNC = ()=>0;
const DEFAULT_ROW_FILTER_FUNC = ()=>true;
class TableInternal {
    initSimple(columns) {
        this.columns = columns.map((column)=>({
                name: column,
                title: column,
                alignment: table_constants_1.DEFAULT_ROW_ALIGNMENT
            }));
    }
    initDetailed(options) {
        var _a;
        this.title = (options === null || options === void 0 ? void 0 : options.title) || this.title;
        this.tableStyle = (options === null || options === void 0 ? void 0 : options.style) || this.tableStyle;
        this.sortFunction = (options === null || options === void 0 ? void 0 : options.sort) || this.sortFunction;
        this.filterFunction = (options === null || options === void 0 ? void 0 : options.filter) || this.filterFunction;
        this.enabledColumns = (options === null || options === void 0 ? void 0 : options.enabledColumns) || this.enabledColumns;
        this.disabledColumns = (options === null || options === void 0 ? void 0 : options.disabledColumns) || this.disabledColumns;
        this.computedColumns = (options === null || options === void 0 ? void 0 : options.computedColumns) || this.computedColumns;
        this.columns = ((_a = options === null || options === void 0 ? void 0 : options.columns) === null || _a === void 0 ? void 0 : _a.map(input_converter_1.rawColumnToInternalColumn)) || this.columns;
        this.rowSeparator = (options === null || options === void 0 ? void 0 : options.rowSeparator) || this.rowSeparator;
        this.charLength = (options === null || options === void 0 ? void 0 : options.charLength) || this.charLength;
        if (options === null || options === void 0 ? void 0 : options.shouldDisableColors) {
            this.colorMap = {};
        } else if (options === null || options === void 0 ? void 0 : options.colorMap) {
            this.colorMap = Object.assign(Object.assign({}, this.colorMap), options.colorMap);
        }
        if (options.rows !== undefined) {
            this.addRows(options.rows);
        }
    }
    constructor(options){
        // default construction
        this.rows = [];
        this.columns = [];
        this.title = undefined;
        this.tableStyle = table_constants_1.DEFAULT_TABLE_STYLE;
        this.filterFunction = DEFAULT_ROW_FILTER_FUNC;
        this.sortFunction = DEFAULT_ROW_SORT_FUNC;
        this.enabledColumns = [];
        this.disabledColumns = [];
        this.computedColumns = [];
        this.rowSeparator = table_constants_1.DEFAULT_ROW_SEPARATOR;
        this.colorMap = colored_console_line_1.DEFAULT_COLOR_MAP;
        this.charLength = {};
        if (options instanceof Array) {
            this.initSimple(options);
        } else if (typeof options === 'object') {
            this.initDetailed(options);
        }
    }
    createColumnFromRow(text) {
        const colNames = this.columns.map((col)=>col.name);
        Object.keys(text).forEach((key)=>{
            if (!colNames.includes(key)) {
                this.columns.push((0, table_helpers_1.createColumFromOnlyName)(key));
            }
        });
    }
    addColumn(textOrObj) {
        if (typeof textOrObj === 'string') {
            this.columns.push((0, table_helpers_1.createColumFromOnlyName)(textOrObj));
        } else {
            this.columns.push((0, table_helpers_1.createColumFromComputedColumn)(textOrObj));
        }
    }
    addColumns(toBeInsertedColumns) {
        toBeInsertedColumns.forEach((toBeInsertedColumn)=>{
            this.addColumn(toBeInsertedColumn);
        });
    }
    addRow(text, options) {
        this.createColumnFromRow(text);
        this.rows.push((0, table_helpers_1.createRow)((options === null || options === void 0 ? void 0 : options.color) || table_constants_1.DEFAULT_ROW_FONT_COLOR, text, (options === null || options === void 0 ? void 0 : options.separator) !== undefined ? options === null || options === void 0 ? void 0 : options.separator : this.rowSeparator));
    }
    addRows(toBeInsertedRows, options) {
        toBeInsertedRows.forEach((toBeInsertedRow)=>{
            this.addRow(toBeInsertedRow, options);
        });
    }
    renderTable() {
        return (0, internal_table_printer_1.renderTable)(this);
    }
}
exports.default = TableInternal;
}),
"[project]/node_modules/console-table-printer/dist/src/console-table-printer.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const internal_table_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/internalTable/internal-table.js [app-route] (ecmascript)"));
const table_helpers_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-helpers.js [app-route] (ecmascript)");
class Table {
    constructor(options){
        this.table = new internal_table_1.default(options);
    }
    addColumn(column) {
        this.table.addColumn(column);
        return this;
    }
    addColumns(columns) {
        this.table.addColumns(columns);
        return this;
    }
    addRow(text, rowOptions) {
        this.table.addRow(text, (0, table_helpers_1.convertRawRowOptionsToStandard)(rowOptions));
        return this;
    }
    addRows(toBeInsertedRows, rowOptions) {
        this.table.addRows(toBeInsertedRows, (0, table_helpers_1.convertRawRowOptionsToStandard)(rowOptions));
        return this;
    }
    printTable() {
        const tableRendered = this.table.renderTable();
        console.log(tableRendered);
    }
    render() {
        return this.table.renderTable();
    }
}
exports.default = Table;
}),
"[project]/node_modules/console-table-printer/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderTable = exports.printTable = exports.Table = void 0;
const console_table_printer_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/console-table-printer.js [app-route] (ecmascript)"));
exports.Table = console_table_printer_1.default;
const internal_table_printer_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/internalTable/internal-table-printer.js [app-route] (ecmascript)");
Object.defineProperty(exports, "printTable", {
    enumerable: true,
    get: function() {
        return internal_table_printer_1.printSimpleTable;
    }
});
Object.defineProperty(exports, "renderTable", {
    enumerable: true,
    get: function() {
        return internal_table_printer_1.renderSimpleTable;
    }
});
}),
"[project]/node_modules/simple-wcswidth/dist/src/non-spacing-chars.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* sorted list of non-overlapping intervals of non-spacing characters */ /* generated by "uniset +cat=Me +cat=Mn +cat=Cf -00AD +1160-11FF +200B c" */ const combining = [
    {
        first: 0x0300,
        last: 0x036f
    },
    {
        first: 0x0483,
        last: 0x0486
    },
    {
        first: 0x0488,
        last: 0x0489
    },
    {
        first: 0x0591,
        last: 0x05bd
    },
    {
        first: 0x05bf,
        last: 0x05bf
    },
    {
        first: 0x05c1,
        last: 0x05c2
    },
    {
        first: 0x05c4,
        last: 0x05c5
    },
    {
        first: 0x05c7,
        last: 0x05c7
    },
    {
        first: 0x0600,
        last: 0x0603
    },
    {
        first: 0x0610,
        last: 0x0615
    },
    {
        first: 0x064b,
        last: 0x065e
    },
    {
        first: 0x0670,
        last: 0x0670
    },
    {
        first: 0x06d6,
        last: 0x06e4
    },
    {
        first: 0x06e7,
        last: 0x06e8
    },
    {
        first: 0x06ea,
        last: 0x06ed
    },
    {
        first: 0x070f,
        last: 0x070f
    },
    {
        first: 0x0711,
        last: 0x0711
    },
    {
        first: 0x0730,
        last: 0x074a
    },
    {
        first: 0x07a6,
        last: 0x07b0
    },
    {
        first: 0x07eb,
        last: 0x07f3
    },
    {
        first: 0x0901,
        last: 0x0902
    },
    {
        first: 0x093c,
        last: 0x093c
    },
    {
        first: 0x0941,
        last: 0x0948
    },
    {
        first: 0x094d,
        last: 0x094d
    },
    {
        first: 0x0951,
        last: 0x0954
    },
    {
        first: 0x0962,
        last: 0x0963
    },
    {
        first: 0x0981,
        last: 0x0981
    },
    {
        first: 0x09bc,
        last: 0x09bc
    },
    {
        first: 0x09c1,
        last: 0x09c4
    },
    {
        first: 0x09cd,
        last: 0x09cd
    },
    {
        first: 0x09e2,
        last: 0x09e3
    },
    {
        first: 0x0a01,
        last: 0x0a02
    },
    {
        first: 0x0a3c,
        last: 0x0a3c
    },
    {
        first: 0x0a41,
        last: 0x0a42
    },
    {
        first: 0x0a47,
        last: 0x0a48
    },
    {
        first: 0x0a4b,
        last: 0x0a4d
    },
    {
        first: 0x0a70,
        last: 0x0a71
    },
    {
        first: 0x0a81,
        last: 0x0a82
    },
    {
        first: 0x0abc,
        last: 0x0abc
    },
    {
        first: 0x0ac1,
        last: 0x0ac5
    },
    {
        first: 0x0ac7,
        last: 0x0ac8
    },
    {
        first: 0x0acd,
        last: 0x0acd
    },
    {
        first: 0x0ae2,
        last: 0x0ae3
    },
    {
        first: 0x0b01,
        last: 0x0b01
    },
    {
        first: 0x0b3c,
        last: 0x0b3c
    },
    {
        first: 0x0b3f,
        last: 0x0b3f
    },
    {
        first: 0x0b41,
        last: 0x0b43
    },
    {
        first: 0x0b4d,
        last: 0x0b4d
    },
    {
        first: 0x0b56,
        last: 0x0b56
    },
    {
        first: 0x0b82,
        last: 0x0b82
    },
    {
        first: 0x0bc0,
        last: 0x0bc0
    },
    {
        first: 0x0bcd,
        last: 0x0bcd
    },
    {
        first: 0x0c3e,
        last: 0x0c40
    },
    {
        first: 0x0c46,
        last: 0x0c48
    },
    {
        first: 0x0c4a,
        last: 0x0c4d
    },
    {
        first: 0x0c55,
        last: 0x0c56
    },
    {
        first: 0x0cbc,
        last: 0x0cbc
    },
    {
        first: 0x0cbf,
        last: 0x0cbf
    },
    {
        first: 0x0cc6,
        last: 0x0cc6
    },
    {
        first: 0x0ccc,
        last: 0x0ccd
    },
    {
        first: 0x0ce2,
        last: 0x0ce3
    },
    {
        first: 0x0d41,
        last: 0x0d43
    },
    {
        first: 0x0d4d,
        last: 0x0d4d
    },
    {
        first: 0x0dca,
        last: 0x0dca
    },
    {
        first: 0x0dd2,
        last: 0x0dd4
    },
    {
        first: 0x0dd6,
        last: 0x0dd6
    },
    {
        first: 0x0e31,
        last: 0x0e31
    },
    {
        first: 0x0e34,
        last: 0x0e3a
    },
    {
        first: 0x0e47,
        last: 0x0e4e
    },
    {
        first: 0x0eb1,
        last: 0x0eb1
    },
    {
        first: 0x0eb4,
        last: 0x0eb9
    },
    {
        first: 0x0ebb,
        last: 0x0ebc
    },
    {
        first: 0x0ec8,
        last: 0x0ecd
    },
    {
        first: 0x0f18,
        last: 0x0f19
    },
    {
        first: 0x0f35,
        last: 0x0f35
    },
    {
        first: 0x0f37,
        last: 0x0f37
    },
    {
        first: 0x0f39,
        last: 0x0f39
    },
    {
        first: 0x0f71,
        last: 0x0f7e
    },
    {
        first: 0x0f80,
        last: 0x0f84
    },
    {
        first: 0x0f86,
        last: 0x0f87
    },
    {
        first: 0x0f90,
        last: 0x0f97
    },
    {
        first: 0x0f99,
        last: 0x0fbc
    },
    {
        first: 0x0fc6,
        last: 0x0fc6
    },
    {
        first: 0x102d,
        last: 0x1030
    },
    {
        first: 0x1032,
        last: 0x1032
    },
    {
        first: 0x1036,
        last: 0x1037
    },
    {
        first: 0x1039,
        last: 0x1039
    },
    {
        first: 0x1058,
        last: 0x1059
    },
    {
        first: 0x1160,
        last: 0x11ff
    },
    {
        first: 0x135f,
        last: 0x135f
    },
    {
        first: 0x1712,
        last: 0x1714
    },
    {
        first: 0x1732,
        last: 0x1734
    },
    {
        first: 0x1752,
        last: 0x1753
    },
    {
        first: 0x1772,
        last: 0x1773
    },
    {
        first: 0x17b4,
        last: 0x17b5
    },
    {
        first: 0x17b7,
        last: 0x17bd
    },
    {
        first: 0x17c6,
        last: 0x17c6
    },
    {
        first: 0x17c9,
        last: 0x17d3
    },
    {
        first: 0x17dd,
        last: 0x17dd
    },
    {
        first: 0x180b,
        last: 0x180d
    },
    {
        first: 0x18a9,
        last: 0x18a9
    },
    {
        first: 0x1920,
        last: 0x1922
    },
    {
        first: 0x1927,
        last: 0x1928
    },
    {
        first: 0x1932,
        last: 0x1932
    },
    {
        first: 0x1939,
        last: 0x193b
    },
    {
        first: 0x1a17,
        last: 0x1a18
    },
    {
        first: 0x1b00,
        last: 0x1b03
    },
    {
        first: 0x1b34,
        last: 0x1b34
    },
    {
        first: 0x1b36,
        last: 0x1b3a
    },
    {
        first: 0x1b3c,
        last: 0x1b3c
    },
    {
        first: 0x1b42,
        last: 0x1b42
    },
    {
        first: 0x1b6b,
        last: 0x1b73
    },
    {
        first: 0x1dc0,
        last: 0x1dca
    },
    {
        first: 0x1dfe,
        last: 0x1dff
    },
    {
        first: 0x200b,
        last: 0x200f
    },
    {
        first: 0x202a,
        last: 0x202e
    },
    {
        first: 0x2060,
        last: 0x2063
    },
    {
        first: 0x206a,
        last: 0x206f
    },
    {
        first: 0x20d0,
        last: 0x20ef
    },
    {
        first: 0x302a,
        last: 0x302f
    },
    {
        first: 0x3099,
        last: 0x309a
    },
    {
        first: 0xa806,
        last: 0xa806
    },
    {
        first: 0xa80b,
        last: 0xa80b
    },
    {
        first: 0xa825,
        last: 0xa826
    },
    {
        first: 0xfb1e,
        last: 0xfb1e
    },
    {
        first: 0xfe00,
        last: 0xfe0f
    },
    {
        first: 0xfe20,
        last: 0xfe23
    },
    {
        first: 0xfeff,
        last: 0xfeff
    },
    {
        first: 0xfff9,
        last: 0xfffb
    },
    {
        first: 0x10a01,
        last: 0x10a03
    },
    {
        first: 0x10a05,
        last: 0x10a06
    },
    {
        first: 0x10a0c,
        last: 0x10a0f
    },
    {
        first: 0x10a38,
        last: 0x10a3a
    },
    {
        first: 0x10a3f,
        last: 0x10a3f
    },
    {
        first: 0x1d167,
        last: 0x1d169
    },
    {
        first: 0x1d173,
        last: 0x1d182
    },
    {
        first: 0x1d185,
        last: 0x1d18b
    },
    {
        first: 0x1d1aa,
        last: 0x1d1ad
    },
    {
        first: 0x1d242,
        last: 0x1d244
    },
    {
        first: 0xe0001,
        last: 0xe0001
    },
    {
        first: 0xe0020,
        last: 0xe007f
    },
    {
        first: 0xe0100,
        last: 0xe01ef
    }
];
exports.default = combining;
}),
"[project]/node_modules/simple-wcswidth/dist/src/binary-search.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* auxiliary function for binary search in interval table */ const bisearch = (ucs, table, tableSize)=>{
    let min = 0;
    let mid;
    let max = tableSize;
    if (ucs < table[0].first || ucs > table[max].last) return 0;
    while(max >= min){
        mid = Math.floor((min + max) / 2);
        if (ucs > table[mid].last) {
            min = mid + 1;
        } else if (ucs < table[mid].first) {
            max = mid - 1;
        } else {
            return 1;
        }
    }
    return 0;
};
exports.default = bisearch;
}),
"[project]/node_modules/simple-wcswidth/dist/src/wcwidth.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const non_spacing_chars_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/simple-wcswidth/dist/src/non-spacing-chars.js [app-route] (ecmascript)"));
const binary_search_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/simple-wcswidth/dist/src/binary-search.js [app-route] (ecmascript)"));
/* The following two functions define the column width of an ISO 10646
 * character as follows:
 *
 *    - The null character (U+0000) has a column width of 0.
 *
 *    - Other C0/C1 control characters and DEL will lead to a return
 *      value of -1.
 *
 *    - Non-spacing and enclosing combining characters (general
 *      category code Mn or Me in the Unicode database) have a
 *      column width of 0.
 *
 *    - SOFT HYPHEN (U+00AD) has a column width of 1.
 *
 *    - Other format characters (general category code Cf in the Unicode
 *      database) and ZERO WIDTH SPACE (U+200B) have a column width of 0.
 *
 *    - Hangul Jamo medial vowels and final consonants (U+1160-U+11FF)
 *      have a column width of 0.
 *
 *    - Spacing characters in the East Asian Wide (W) or East Asian
 *      Full-width (F) category as defined in Unicode Technical
 *      Report #11 have a column width of 2.
 *
 *    - All remaining characters (including all printable
 *      ISO 8859-1 and WGL4 characters, Unicode control characters,
 *      etc.) have a column width of 1.
 *
 * This implementation assumes that wchar_t characters are encoded
 * in ISO 10646.
 */ const mk_wcwidth = (ucs)=>{
    /* test for 8-bit control characters */ if (ucs === 0) {
        return 0;
    }
    if (ucs < 32 || ucs >= 0x7f && ucs < 0xa0) {
        return -1;
    }
    /* binary search in table of non-spacing characters */ if ((0, binary_search_1.default)(ucs, non_spacing_chars_1.default, non_spacing_chars_1.default.length - 1)) {
        return 0;
    }
    /* if we arrive here, ucs is not a combining or C0/C1 control character */ return 1 + Number(ucs >= 0x1100 && (ucs <= 0x115f /* Hangul Jamo init. consonants */  || ucs === 0x2329 || ucs === 0x232a || ucs >= 0x2e80 && ucs <= 0xa4cf && ucs !== 0x303f || ucs >= 0xac00 && ucs <= 0xd7a3 || ucs >= 0xf900 && ucs <= 0xfaff || ucs >= 0xfe10 && ucs <= 0xfe19 || ucs >= 0xfe30 && ucs <= 0xfe6f || ucs >= 0xff00 && ucs <= 0xff60 || ucs >= 0xffe0 && ucs <= 0xffe6 || ucs >= 0x20000 && ucs <= 0x2fffd || ucs >= 0x30000 && ucs <= 0x3fffd));
};
exports.default = mk_wcwidth;
}),
"[project]/node_modules/simple-wcswidth/dist/src/wcswidth.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const wcwidth_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/simple-wcswidth/dist/src/wcwidth.js [app-route] (ecmascript)"));
const mk_wcswidth = (pwcs)=>{
    let width = 0;
    // eslint-disable-next-line no-plusplus
    for(let i = 0; i < pwcs.length; i++){
        const charCode = pwcs.charCodeAt(i);
        const w = (0, wcwidth_1.default)(charCode);
        if (w < 0) {
            return -1;
        }
        width += w;
    }
    return width;
};
exports.default = mk_wcswidth;
}),
"[project]/node_modules/simple-wcswidth/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wcswidth = exports.wcwidth = void 0;
const wcswidth_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/simple-wcswidth/dist/src/wcswidth.js [app-route] (ecmascript)"));
exports.wcswidth = wcswidth_1.default;
const wcwidth_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/simple-wcswidth/dist/src/wcwidth.js [app-route] (ecmascript)"));
exports.wcwidth = wcwidth_1.default;
}),
"[project]/node_modules/@esbuild/darwin-arm64/bin/esbuild [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/node_modules/@esbuild/darwin-arm64/bin/esbuild'\n\nfailed to convert rope into string\n\nCaused by:\n- invalid utf-8 sequence of 1 bytes from index 0");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/node_modules/@esbuild/darwin-arm64/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"@esbuild/darwin-arm64","version":"0.21.5","description":"The macOS ARM 64-bit binary for esbuild, a JavaScript bundler.","repository":{"type":"git","url":"git+https://github.com/evanw/esbuild.git"},"license":"MIT","preferUnplugged":true,"engines":{"node":">=12"},"os":["darwin"],"cpu":["arm64"]});}),
"[project]/node_modules/esbuild/lib/main.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// lib/npm/node.ts
var node_exports = {};
__export(node_exports, {
    analyzeMetafile: ()=>analyzeMetafile,
    analyzeMetafileSync: ()=>analyzeMetafileSync,
    build: ()=>build,
    buildSync: ()=>buildSync,
    context: ()=>context,
    default: ()=>node_default,
    formatMessages: ()=>formatMessages,
    formatMessagesSync: ()=>formatMessagesSync,
    initialize: ()=>initialize,
    stop: ()=>stop,
    transform: ()=>transform,
    transformSync: ()=>transformSync,
    version: ()=>version
});
module.exports = __toCommonJS(node_exports);
// lib/shared/stdio_protocol.ts
function encodePacket(packet) {
    let visit = (value)=>{
        if (value === null) {
            bb.write8(0);
        } else if (typeof value === "boolean") {
            bb.write8(1);
            bb.write8(+value);
        } else if (typeof value === "number") {
            bb.write8(2);
            bb.write32(value | 0);
        } else if (typeof value === "string") {
            bb.write8(3);
            bb.write(encodeUTF8(value));
        } else if (value instanceof Uint8Array) {
            bb.write8(4);
            bb.write(value);
        } else if (value instanceof Array) {
            bb.write8(5);
            bb.write32(value.length);
            for (let item of value){
                visit(item);
            }
        } else {
            let keys = Object.keys(value);
            bb.write8(6);
            bb.write32(keys.length);
            for (let key of keys){
                bb.write(encodeUTF8(key));
                visit(value[key]);
            }
        }
    };
    let bb = new ByteBuffer();
    bb.write32(0);
    bb.write32(packet.id << 1 | +!packet.isRequest);
    visit(packet.value);
    writeUInt32LE(bb.buf, bb.len - 4, 0);
    return bb.buf.subarray(0, bb.len);
}
function decodePacket(bytes) {
    let visit = ()=>{
        switch(bb.read8()){
            case 0:
                return null;
            case 1:
                return !!bb.read8();
            case 2:
                return bb.read32();
            case 3:
                return decodeUTF8(bb.read());
            case 4:
                return bb.read();
            case 5:
                {
                    let count = bb.read32();
                    let value2 = [];
                    for(let i = 0; i < count; i++){
                        value2.push(visit());
                    }
                    return value2;
                }
            case 6:
                {
                    let count = bb.read32();
                    let value2 = {};
                    for(let i = 0; i < count; i++){
                        value2[decodeUTF8(bb.read())] = visit();
                    }
                    return value2;
                }
            default:
                throw new Error("Invalid packet");
        }
    };
    let bb = new ByteBuffer(bytes);
    let id = bb.read32();
    let isRequest = (id & 1) === 0;
    id >>>= 1;
    let value = visit();
    if (bb.ptr !== bytes.length) {
        throw new Error("Invalid packet");
    }
    return {
        id,
        isRequest,
        value
    };
}
var ByteBuffer = class {
    constructor(buf = new Uint8Array(1024)){
        this.buf = buf;
        this.len = 0;
        this.ptr = 0;
    }
    _write(delta) {
        if (this.len + delta > this.buf.length) {
            let clone = new Uint8Array((this.len + delta) * 2);
            clone.set(this.buf);
            this.buf = clone;
        }
        this.len += delta;
        return this.len - delta;
    }
    write8(value) {
        let offset = this._write(1);
        this.buf[offset] = value;
    }
    write32(value) {
        let offset = this._write(4);
        writeUInt32LE(this.buf, value, offset);
    }
    write(bytes) {
        let offset = this._write(4 + bytes.length);
        writeUInt32LE(this.buf, bytes.length, offset);
        this.buf.set(bytes, offset + 4);
    }
    _read(delta) {
        if (this.ptr + delta > this.buf.length) {
            throw new Error("Invalid packet");
        }
        this.ptr += delta;
        return this.ptr - delta;
    }
    read8() {
        return this.buf[this._read(1)];
    }
    read32() {
        return readUInt32LE(this.buf, this._read(4));
    }
    read() {
        let length = this.read32();
        let bytes = new Uint8Array(length);
        let ptr = this._read(bytes.length);
        bytes.set(this.buf.subarray(ptr, ptr + length));
        return bytes;
    }
};
var encodeUTF8;
var decodeUTF8;
var encodeInvariant;
if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
    let encoder = new TextEncoder();
    let decoder = new TextDecoder();
    encodeUTF8 = (text)=>encoder.encode(text);
    decodeUTF8 = (bytes)=>decoder.decode(bytes);
    encodeInvariant = 'new TextEncoder().encode("")';
} else if (typeof Buffer !== "undefined") {
    encodeUTF8 = (text)=>Buffer.from(text);
    decodeUTF8 = (bytes)=>{
        let { buffer, byteOffset, byteLength } = bytes;
        return Buffer.from(buffer, byteOffset, byteLength).toString();
    };
    encodeInvariant = 'Buffer.from("")';
} else {
    throw new Error("No UTF-8 codec found");
}
if (!(encodeUTF8("") instanceof Uint8Array)) throw new Error(`Invariant violation: "${encodeInvariant} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);
function readUInt32LE(buffer, offset) {
    return buffer[offset++] | buffer[offset++] << 8 | buffer[offset++] << 16 | buffer[offset++] << 24;
}
function writeUInt32LE(buffer, value, offset) {
    buffer[offset++] = value;
    buffer[offset++] = value >> 8;
    buffer[offset++] = value >> 16;
    buffer[offset++] = value >> 24;
}
// lib/shared/common.ts
var quote = JSON.stringify;
var buildLogLevelDefault = "warning";
var transformLogLevelDefault = "silent";
function validateTarget(target) {
    validateStringValue(target, "target");
    if (target.indexOf(",") >= 0) throw new Error(`Invalid target: ${target}`);
    return target;
}
var canBeAnything = ()=>null;
var mustBeBoolean = (value)=>typeof value === "boolean" ? null : "a boolean";
var mustBeString = (value)=>typeof value === "string" ? null : "a string";
var mustBeRegExp = (value)=>value instanceof RegExp ? null : "a RegExp object";
var mustBeInteger = (value)=>typeof value === "number" && value === (value | 0) ? null : "an integer";
var mustBeFunction = (value)=>typeof value === "function" ? null : "a function";
var mustBeArray = (value)=>Array.isArray(value) ? null : "an array";
var mustBeObject = (value)=>typeof value === "object" && value !== null && !Array.isArray(value) ? null : "an object";
var mustBeEntryPoints = (value)=>typeof value === "object" && value !== null ? null : "an array or an object";
var mustBeWebAssemblyModule = (value)=>value instanceof WebAssembly.Module ? null : "a WebAssembly.Module";
var mustBeObjectOrNull = (value)=>typeof value === "object" && !Array.isArray(value) ? null : "an object or null";
var mustBeStringOrBoolean = (value)=>typeof value === "string" || typeof value === "boolean" ? null : "a string or a boolean";
var mustBeStringOrObject = (value)=>typeof value === "string" || typeof value === "object" && value !== null && !Array.isArray(value) ? null : "a string or an object";
var mustBeStringOrArray = (value)=>typeof value === "string" || Array.isArray(value) ? null : "a string or an array";
var mustBeStringOrUint8Array = (value)=>typeof value === "string" || value instanceof Uint8Array ? null : "a string or a Uint8Array";
var mustBeStringOrURL = (value)=>typeof value === "string" || value instanceof URL ? null : "a string or a URL";
function getFlag(object, keys, key, mustBeFn) {
    let value = object[key];
    keys[key + ""] = true;
    if (value === void 0) return void 0;
    let mustBe = mustBeFn(value);
    if (mustBe !== null) throw new Error(`${quote(key)} must be ${mustBe}`);
    return value;
}
function checkForInvalidFlags(object, keys, where) {
    for(let key in object){
        if (!(key in keys)) {
            throw new Error(`Invalid option ${where}: ${quote(key)}`);
        }
    }
}
function validateInitializeOptions(options) {
    let keys = /* @__PURE__ */ Object.create(null);
    let wasmURL = getFlag(options, keys, "wasmURL", mustBeStringOrURL);
    let wasmModule = getFlag(options, keys, "wasmModule", mustBeWebAssemblyModule);
    let worker = getFlag(options, keys, "worker", mustBeBoolean);
    checkForInvalidFlags(options, keys, "in initialize() call");
    return {
        wasmURL,
        wasmModule,
        worker
    };
}
function validateMangleCache(mangleCache) {
    let validated;
    if (mangleCache !== void 0) {
        validated = /* @__PURE__ */ Object.create(null);
        for(let key in mangleCache){
            let value = mangleCache[key];
            if (typeof value === "string" || value === false) {
                validated[key] = value;
            } else {
                throw new Error(`Expected ${quote(key)} in mangle cache to map to either a string or false`);
            }
        }
    }
    return validated;
}
function pushLogFlags(flags, options, keys, isTTY2, logLevelDefault) {
    let color = getFlag(options, keys, "color", mustBeBoolean);
    let logLevel = getFlag(options, keys, "logLevel", mustBeString);
    let logLimit = getFlag(options, keys, "logLimit", mustBeInteger);
    if (color !== void 0) flags.push(`--color=${color}`);
    else if (isTTY2) flags.push(`--color=true`);
    flags.push(`--log-level=${logLevel || logLevelDefault}`);
    flags.push(`--log-limit=${logLimit || 0}`);
}
function validateStringValue(value, what, key) {
    if (typeof value !== "string") {
        throw new Error(`Expected value for ${what}${key !== void 0 ? " " + quote(key) : ""} to be a string, got ${typeof value} instead`);
    }
    return value;
}
function pushCommonFlags(flags, options, keys) {
    let legalComments = getFlag(options, keys, "legalComments", mustBeString);
    let sourceRoot = getFlag(options, keys, "sourceRoot", mustBeString);
    let sourcesContent = getFlag(options, keys, "sourcesContent", mustBeBoolean);
    let target = getFlag(options, keys, "target", mustBeStringOrArray);
    let format = getFlag(options, keys, "format", mustBeString);
    let globalName = getFlag(options, keys, "globalName", mustBeString);
    let mangleProps = getFlag(options, keys, "mangleProps", mustBeRegExp);
    let reserveProps = getFlag(options, keys, "reserveProps", mustBeRegExp);
    let mangleQuoted = getFlag(options, keys, "mangleQuoted", mustBeBoolean);
    let minify = getFlag(options, keys, "minify", mustBeBoolean);
    let minifySyntax = getFlag(options, keys, "minifySyntax", mustBeBoolean);
    let minifyWhitespace = getFlag(options, keys, "minifyWhitespace", mustBeBoolean);
    let minifyIdentifiers = getFlag(options, keys, "minifyIdentifiers", mustBeBoolean);
    let lineLimit = getFlag(options, keys, "lineLimit", mustBeInteger);
    let drop = getFlag(options, keys, "drop", mustBeArray);
    let dropLabels = getFlag(options, keys, "dropLabels", mustBeArray);
    let charset = getFlag(options, keys, "charset", mustBeString);
    let treeShaking = getFlag(options, keys, "treeShaking", mustBeBoolean);
    let ignoreAnnotations = getFlag(options, keys, "ignoreAnnotations", mustBeBoolean);
    let jsx = getFlag(options, keys, "jsx", mustBeString);
    let jsxFactory = getFlag(options, keys, "jsxFactory", mustBeString);
    let jsxFragment = getFlag(options, keys, "jsxFragment", mustBeString);
    let jsxImportSource = getFlag(options, keys, "jsxImportSource", mustBeString);
    let jsxDev = getFlag(options, keys, "jsxDev", mustBeBoolean);
    let jsxSideEffects = getFlag(options, keys, "jsxSideEffects", mustBeBoolean);
    let define = getFlag(options, keys, "define", mustBeObject);
    let logOverride = getFlag(options, keys, "logOverride", mustBeObject);
    let supported = getFlag(options, keys, "supported", mustBeObject);
    let pure = getFlag(options, keys, "pure", mustBeArray);
    let keepNames = getFlag(options, keys, "keepNames", mustBeBoolean);
    let platform = getFlag(options, keys, "platform", mustBeString);
    let tsconfigRaw = getFlag(options, keys, "tsconfigRaw", mustBeStringOrObject);
    if (legalComments) flags.push(`--legal-comments=${legalComments}`);
    if (sourceRoot !== void 0) flags.push(`--source-root=${sourceRoot}`);
    if (sourcesContent !== void 0) flags.push(`--sources-content=${sourcesContent}`);
    if (target) {
        if (Array.isArray(target)) flags.push(`--target=${Array.from(target).map(validateTarget).join(",")}`);
        else flags.push(`--target=${validateTarget(target)}`);
    }
    if (format) flags.push(`--format=${format}`);
    if (globalName) flags.push(`--global-name=${globalName}`);
    if (platform) flags.push(`--platform=${platform}`);
    if (tsconfigRaw) flags.push(`--tsconfig-raw=${typeof tsconfigRaw === "string" ? tsconfigRaw : JSON.stringify(tsconfigRaw)}`);
    if (minify) flags.push("--minify");
    if (minifySyntax) flags.push("--minify-syntax");
    if (minifyWhitespace) flags.push("--minify-whitespace");
    if (minifyIdentifiers) flags.push("--minify-identifiers");
    if (lineLimit) flags.push(`--line-limit=${lineLimit}`);
    if (charset) flags.push(`--charset=${charset}`);
    if (treeShaking !== void 0) flags.push(`--tree-shaking=${treeShaking}`);
    if (ignoreAnnotations) flags.push(`--ignore-annotations`);
    if (drop) for (let what of drop)flags.push(`--drop:${validateStringValue(what, "drop")}`);
    if (dropLabels) flags.push(`--drop-labels=${Array.from(dropLabels).map((what)=>validateStringValue(what, "dropLabels")).join(",")}`);
    if (mangleProps) flags.push(`--mangle-props=${mangleProps.source}`);
    if (reserveProps) flags.push(`--reserve-props=${reserveProps.source}`);
    if (mangleQuoted !== void 0) flags.push(`--mangle-quoted=${mangleQuoted}`);
    if (jsx) flags.push(`--jsx=${jsx}`);
    if (jsxFactory) flags.push(`--jsx-factory=${jsxFactory}`);
    if (jsxFragment) flags.push(`--jsx-fragment=${jsxFragment}`);
    if (jsxImportSource) flags.push(`--jsx-import-source=${jsxImportSource}`);
    if (jsxDev) flags.push(`--jsx-dev`);
    if (jsxSideEffects) flags.push(`--jsx-side-effects`);
    if (define) {
        for(let key in define){
            if (key.indexOf("=") >= 0) throw new Error(`Invalid define: ${key}`);
            flags.push(`--define:${key}=${validateStringValue(define[key], "define", key)}`);
        }
    }
    if (logOverride) {
        for(let key in logOverride){
            if (key.indexOf("=") >= 0) throw new Error(`Invalid log override: ${key}`);
            flags.push(`--log-override:${key}=${validateStringValue(logOverride[key], "log override", key)}`);
        }
    }
    if (supported) {
        for(let key in supported){
            if (key.indexOf("=") >= 0) throw new Error(`Invalid supported: ${key}`);
            const value = supported[key];
            if (typeof value !== "boolean") throw new Error(`Expected value for supported ${quote(key)} to be a boolean, got ${typeof value} instead`);
            flags.push(`--supported:${key}=${value}`);
        }
    }
    if (pure) for (let fn of pure)flags.push(`--pure:${validateStringValue(fn, "pure")}`);
    if (keepNames) flags.push(`--keep-names`);
}
function flagsForBuildOptions(callName, options, isTTY2, logLevelDefault, writeDefault) {
    var _a2;
    let flags = [];
    let entries = [];
    let keys = /* @__PURE__ */ Object.create(null);
    let stdinContents = null;
    let stdinResolveDir = null;
    pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
    pushCommonFlags(flags, options, keys);
    let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
    let bundle = getFlag(options, keys, "bundle", mustBeBoolean);
    let splitting = getFlag(options, keys, "splitting", mustBeBoolean);
    let preserveSymlinks = getFlag(options, keys, "preserveSymlinks", mustBeBoolean);
    let metafile = getFlag(options, keys, "metafile", mustBeBoolean);
    let outfile = getFlag(options, keys, "outfile", mustBeString);
    let outdir = getFlag(options, keys, "outdir", mustBeString);
    let outbase = getFlag(options, keys, "outbase", mustBeString);
    let tsconfig = getFlag(options, keys, "tsconfig", mustBeString);
    let resolveExtensions = getFlag(options, keys, "resolveExtensions", mustBeArray);
    let nodePathsInput = getFlag(options, keys, "nodePaths", mustBeArray);
    let mainFields = getFlag(options, keys, "mainFields", mustBeArray);
    let conditions = getFlag(options, keys, "conditions", mustBeArray);
    let external = getFlag(options, keys, "external", mustBeArray);
    let packages = getFlag(options, keys, "packages", mustBeString);
    let alias = getFlag(options, keys, "alias", mustBeObject);
    let loader = getFlag(options, keys, "loader", mustBeObject);
    let outExtension = getFlag(options, keys, "outExtension", mustBeObject);
    let publicPath = getFlag(options, keys, "publicPath", mustBeString);
    let entryNames = getFlag(options, keys, "entryNames", mustBeString);
    let chunkNames = getFlag(options, keys, "chunkNames", mustBeString);
    let assetNames = getFlag(options, keys, "assetNames", mustBeString);
    let inject = getFlag(options, keys, "inject", mustBeArray);
    let banner = getFlag(options, keys, "banner", mustBeObject);
    let footer = getFlag(options, keys, "footer", mustBeObject);
    let entryPoints = getFlag(options, keys, "entryPoints", mustBeEntryPoints);
    let absWorkingDir = getFlag(options, keys, "absWorkingDir", mustBeString);
    let stdin = getFlag(options, keys, "stdin", mustBeObject);
    let write = (_a2 = getFlag(options, keys, "write", mustBeBoolean)) != null ? _a2 : writeDefault;
    let allowOverwrite = getFlag(options, keys, "allowOverwrite", mustBeBoolean);
    let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
    keys.plugins = true;
    checkForInvalidFlags(options, keys, `in ${callName}() call`);
    if (sourcemap) flags.push(`--sourcemap${sourcemap === true ? "" : `=${sourcemap}`}`);
    if (bundle) flags.push("--bundle");
    if (allowOverwrite) flags.push("--allow-overwrite");
    if (splitting) flags.push("--splitting");
    if (preserveSymlinks) flags.push("--preserve-symlinks");
    if (metafile) flags.push(`--metafile`);
    if (outfile) flags.push(`--outfile=${outfile}`);
    if (outdir) flags.push(`--outdir=${outdir}`);
    if (outbase) flags.push(`--outbase=${outbase}`);
    if (tsconfig) flags.push(`--tsconfig=${tsconfig}`);
    if (packages) flags.push(`--packages=${packages}`);
    if (resolveExtensions) {
        let values = [];
        for (let value of resolveExtensions){
            validateStringValue(value, "resolve extension");
            if (value.indexOf(",") >= 0) throw new Error(`Invalid resolve extension: ${value}`);
            values.push(value);
        }
        flags.push(`--resolve-extensions=${values.join(",")}`);
    }
    if (publicPath) flags.push(`--public-path=${publicPath}`);
    if (entryNames) flags.push(`--entry-names=${entryNames}`);
    if (chunkNames) flags.push(`--chunk-names=${chunkNames}`);
    if (assetNames) flags.push(`--asset-names=${assetNames}`);
    if (mainFields) {
        let values = [];
        for (let value of mainFields){
            validateStringValue(value, "main field");
            if (value.indexOf(",") >= 0) throw new Error(`Invalid main field: ${value}`);
            values.push(value);
        }
        flags.push(`--main-fields=${values.join(",")}`);
    }
    if (conditions) {
        let values = [];
        for (let value of conditions){
            validateStringValue(value, "condition");
            if (value.indexOf(",") >= 0) throw new Error(`Invalid condition: ${value}`);
            values.push(value);
        }
        flags.push(`--conditions=${values.join(",")}`);
    }
    if (external) for (let name of external)flags.push(`--external:${validateStringValue(name, "external")}`);
    if (alias) {
        for(let old in alias){
            if (old.indexOf("=") >= 0) throw new Error(`Invalid package name in alias: ${old}`);
            flags.push(`--alias:${old}=${validateStringValue(alias[old], "alias", old)}`);
        }
    }
    if (banner) {
        for(let type in banner){
            if (type.indexOf("=") >= 0) throw new Error(`Invalid banner file type: ${type}`);
            flags.push(`--banner:${type}=${validateStringValue(banner[type], "banner", type)}`);
        }
    }
    if (footer) {
        for(let type in footer){
            if (type.indexOf("=") >= 0) throw new Error(`Invalid footer file type: ${type}`);
            flags.push(`--footer:${type}=${validateStringValue(footer[type], "footer", type)}`);
        }
    }
    if (inject) for (let path3 of inject)flags.push(`--inject:${validateStringValue(path3, "inject")}`);
    if (loader) {
        for(let ext in loader){
            if (ext.indexOf("=") >= 0) throw new Error(`Invalid loader extension: ${ext}`);
            flags.push(`--loader:${ext}=${validateStringValue(loader[ext], "loader", ext)}`);
        }
    }
    if (outExtension) {
        for(let ext in outExtension){
            if (ext.indexOf("=") >= 0) throw new Error(`Invalid out extension: ${ext}`);
            flags.push(`--out-extension:${ext}=${validateStringValue(outExtension[ext], "out extension", ext)}`);
        }
    }
    if (entryPoints) {
        if (Array.isArray(entryPoints)) {
            for(let i = 0, n = entryPoints.length; i < n; i++){
                let entryPoint = entryPoints[i];
                if (typeof entryPoint === "object" && entryPoint !== null) {
                    let entryPointKeys = /* @__PURE__ */ Object.create(null);
                    let input = getFlag(entryPoint, entryPointKeys, "in", mustBeString);
                    let output = getFlag(entryPoint, entryPointKeys, "out", mustBeString);
                    checkForInvalidFlags(entryPoint, entryPointKeys, "in entry point at index " + i);
                    if (input === void 0) throw new Error('Missing property "in" for entry point at index ' + i);
                    if (output === void 0) throw new Error('Missing property "out" for entry point at index ' + i);
                    entries.push([
                        output,
                        input
                    ]);
                } else {
                    entries.push([
                        "",
                        validateStringValue(entryPoint, "entry point at index " + i)
                    ]);
                }
            }
        } else {
            for(let key in entryPoints){
                entries.push([
                    key,
                    validateStringValue(entryPoints[key], "entry point", key)
                ]);
            }
        }
    }
    if (stdin) {
        let stdinKeys = /* @__PURE__ */ Object.create(null);
        let contents = getFlag(stdin, stdinKeys, "contents", mustBeStringOrUint8Array);
        let resolveDir = getFlag(stdin, stdinKeys, "resolveDir", mustBeString);
        let sourcefile = getFlag(stdin, stdinKeys, "sourcefile", mustBeString);
        let loader2 = getFlag(stdin, stdinKeys, "loader", mustBeString);
        checkForInvalidFlags(stdin, stdinKeys, 'in "stdin" object');
        if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
        if (loader2) flags.push(`--loader=${loader2}`);
        if (resolveDir) stdinResolveDir = resolveDir;
        if (typeof contents === "string") stdinContents = encodeUTF8(contents);
        else if (contents instanceof Uint8Array) stdinContents = contents;
    }
    let nodePaths = [];
    if (nodePathsInput) {
        for (let value of nodePathsInput){
            value += "";
            nodePaths.push(value);
        }
    }
    return {
        entries,
        flags,
        write,
        stdinContents,
        stdinResolveDir,
        absWorkingDir,
        nodePaths,
        mangleCache: validateMangleCache(mangleCache)
    };
}
function flagsForTransformOptions(callName, options, isTTY2, logLevelDefault) {
    let flags = [];
    let keys = /* @__PURE__ */ Object.create(null);
    pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
    pushCommonFlags(flags, options, keys);
    let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
    let sourcefile = getFlag(options, keys, "sourcefile", mustBeString);
    let loader = getFlag(options, keys, "loader", mustBeString);
    let banner = getFlag(options, keys, "banner", mustBeString);
    let footer = getFlag(options, keys, "footer", mustBeString);
    let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
    checkForInvalidFlags(options, keys, `in ${callName}() call`);
    if (sourcemap) flags.push(`--sourcemap=${sourcemap === true ? "external" : sourcemap}`);
    if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
    if (loader) flags.push(`--loader=${loader}`);
    if (banner) flags.push(`--banner=${banner}`);
    if (footer) flags.push(`--footer=${footer}`);
    return {
        flags,
        mangleCache: validateMangleCache(mangleCache)
    };
}
function createChannel(streamIn) {
    const requestCallbacksByKey = {};
    const closeData = {
        didClose: false,
        reason: ""
    };
    let responseCallbacks = {};
    let nextRequestID = 0;
    let nextBuildKey = 0;
    let stdout = new Uint8Array(16 * 1024);
    let stdoutUsed = 0;
    let readFromStdout = (chunk)=>{
        let limit = stdoutUsed + chunk.length;
        if (limit > stdout.length) {
            let swap = new Uint8Array(limit * 2);
            swap.set(stdout);
            stdout = swap;
        }
        stdout.set(chunk, stdoutUsed);
        stdoutUsed += chunk.length;
        let offset = 0;
        while(offset + 4 <= stdoutUsed){
            let length = readUInt32LE(stdout, offset);
            if (offset + 4 + length > stdoutUsed) {
                break;
            }
            offset += 4;
            handleIncomingPacket(stdout.subarray(offset, offset + length));
            offset += length;
        }
        if (offset > 0) {
            stdout.copyWithin(0, offset, stdoutUsed);
            stdoutUsed -= offset;
        }
    };
    let afterClose = (error)=>{
        closeData.didClose = true;
        if (error) closeData.reason = ": " + (error.message || error);
        const text = "The service was stopped" + closeData.reason;
        for(let id in responseCallbacks){
            responseCallbacks[id](text, null);
        }
        responseCallbacks = {};
    };
    let sendRequest = (refs, value, callback)=>{
        if (closeData.didClose) return callback("The service is no longer running" + closeData.reason, null);
        let id = nextRequestID++;
        responseCallbacks[id] = (error, response)=>{
            try {
                callback(error, response);
            } finally{
                if (refs) refs.unref();
            }
        };
        if (refs) refs.ref();
        streamIn.writeToStdin(encodePacket({
            id,
            isRequest: true,
            value
        }));
    };
    let sendResponse = (id, value)=>{
        if (closeData.didClose) throw new Error("The service is no longer running" + closeData.reason);
        streamIn.writeToStdin(encodePacket({
            id,
            isRequest: false,
            value
        }));
    };
    let handleRequest = async (id, request)=>{
        try {
            if (request.command === "ping") {
                sendResponse(id, {});
                return;
            }
            if (typeof request.key === "number") {
                const requestCallbacks = requestCallbacksByKey[request.key];
                if (!requestCallbacks) {
                    return;
                }
                const callback = requestCallbacks[request.command];
                if (callback) {
                    await callback(id, request);
                    return;
                }
            }
            throw new Error(`Invalid command: ` + request.command);
        } catch (e) {
            const errors = [
                extractErrorMessageV8(e, streamIn, null, void 0, "")
            ];
            try {
                sendResponse(id, {
                    errors
                });
            } catch  {}
        }
    };
    let isFirstPacket = true;
    let handleIncomingPacket = (bytes)=>{
        if (isFirstPacket) {
            isFirstPacket = false;
            let binaryVersion = String.fromCharCode(...bytes);
            if (binaryVersion !== "0.21.5") {
                throw new Error(`Cannot start service: Host version "${"0.21.5"}" does not match binary version ${quote(binaryVersion)}`);
            }
            return;
        }
        let packet = decodePacket(bytes);
        if (packet.isRequest) {
            handleRequest(packet.id, packet.value);
        } else {
            let callback = responseCallbacks[packet.id];
            delete responseCallbacks[packet.id];
            if (packet.value.error) callback(packet.value.error, {});
            else callback(null, packet.value);
        }
    };
    let buildOrContext = ({ callName, refs, options, isTTY: isTTY2, defaultWD: defaultWD2, callback })=>{
        let refCount = 0;
        const buildKey = nextBuildKey++;
        const requestCallbacks = {};
        const buildRefs = {
            ref () {
                if (++refCount === 1) {
                    if (refs) refs.ref();
                }
            },
            unref () {
                if (--refCount === 0) {
                    delete requestCallbacksByKey[buildKey];
                    if (refs) refs.unref();
                }
            }
        };
        requestCallbacksByKey[buildKey] = requestCallbacks;
        buildRefs.ref();
        buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, buildRefs, streamIn, requestCallbacks, options, isTTY2, defaultWD2, (err, res)=>{
            try {
                callback(err, res);
            } finally{
                buildRefs.unref();
            }
        });
    };
    let transform2 = ({ callName, refs, input, options, isTTY: isTTY2, fs: fs3, callback })=>{
        const details = createObjectStash();
        let start = (inputPath)=>{
            try {
                if (typeof input !== "string" && !(input instanceof Uint8Array)) throw new Error('The input to "transform" must be a string or a Uint8Array');
                let { flags, mangleCache } = flagsForTransformOptions(callName, options, isTTY2, transformLogLevelDefault);
                let request = {
                    command: "transform",
                    flags,
                    inputFS: inputPath !== null,
                    input: inputPath !== null ? encodeUTF8(inputPath) : typeof input === "string" ? encodeUTF8(input) : input
                };
                if (mangleCache) request.mangleCache = mangleCache;
                sendRequest(refs, request, (error, response)=>{
                    if (error) return callback(new Error(error), null);
                    let errors = replaceDetailsInMessages(response.errors, details);
                    let warnings = replaceDetailsInMessages(response.warnings, details);
                    let outstanding = 1;
                    let next = ()=>{
                        if (--outstanding === 0) {
                            let result = {
                                warnings,
                                code: response.code,
                                map: response.map,
                                mangleCache: void 0,
                                legalComments: void 0
                            };
                            if ("legalComments" in response) result.legalComments = response == null ? void 0 : response.legalComments;
                            if (response.mangleCache) result.mangleCache = response == null ? void 0 : response.mangleCache;
                            callback(null, result);
                        }
                    };
                    if (errors.length > 0) return callback(failureErrorWithLog("Transform failed", errors, warnings), null);
                    if (response.codeFS) {
                        outstanding++;
                        fs3.readFile(response.code, (err, contents)=>{
                            if (err !== null) {
                                callback(err, null);
                            } else {
                                response.code = contents;
                                next();
                            }
                        });
                    }
                    if (response.mapFS) {
                        outstanding++;
                        fs3.readFile(response.map, (err, contents)=>{
                            if (err !== null) {
                                callback(err, null);
                            } else {
                                response.map = contents;
                                next();
                            }
                        });
                    }
                    next();
                });
            } catch (e) {
                let flags = [];
                try {
                    pushLogFlags(flags, options, {}, isTTY2, transformLogLevelDefault);
                } catch  {}
                const error = extractErrorMessageV8(e, streamIn, details, void 0, "");
                sendRequest(refs, {
                    command: "error",
                    flags,
                    error
                }, ()=>{
                    error.detail = details.load(error.detail);
                    callback(failureErrorWithLog("Transform failed", [
                        error
                    ], []), null);
                });
            }
        };
        if ((typeof input === "string" || input instanceof Uint8Array) && input.length > 1024 * 1024) {
            let next = start;
            start = ()=>fs3.writeFile(input, next);
        }
        start(null);
    };
    let formatMessages2 = ({ callName, refs, messages, options, callback })=>{
        if (!options) throw new Error(`Missing second argument in ${callName}() call`);
        let keys = {};
        let kind = getFlag(options, keys, "kind", mustBeString);
        let color = getFlag(options, keys, "color", mustBeBoolean);
        let terminalWidth = getFlag(options, keys, "terminalWidth", mustBeInteger);
        checkForInvalidFlags(options, keys, `in ${callName}() call`);
        if (kind === void 0) throw new Error(`Missing "kind" in ${callName}() call`);
        if (kind !== "error" && kind !== "warning") throw new Error(`Expected "kind" to be "error" or "warning" in ${callName}() call`);
        let request = {
            command: "format-msgs",
            messages: sanitizeMessages(messages, "messages", null, "", terminalWidth),
            isWarning: kind === "warning"
        };
        if (color !== void 0) request.color = color;
        if (terminalWidth !== void 0) request.terminalWidth = terminalWidth;
        sendRequest(refs, request, (error, response)=>{
            if (error) return callback(new Error(error), null);
            callback(null, response.messages);
        });
    };
    let analyzeMetafile2 = ({ callName, refs, metafile, options, callback })=>{
        if (options === void 0) options = {};
        let keys = {};
        let color = getFlag(options, keys, "color", mustBeBoolean);
        let verbose = getFlag(options, keys, "verbose", mustBeBoolean);
        checkForInvalidFlags(options, keys, `in ${callName}() call`);
        let request = {
            command: "analyze-metafile",
            metafile
        };
        if (color !== void 0) request.color = color;
        if (verbose !== void 0) request.verbose = verbose;
        sendRequest(refs, request, (error, response)=>{
            if (error) return callback(new Error(error), null);
            callback(null, response.result);
        });
    };
    return {
        readFromStdout,
        afterClose,
        service: {
            buildOrContext,
            transform: transform2,
            formatMessages: formatMessages2,
            analyzeMetafile: analyzeMetafile2
        }
    };
}
function buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, isTTY2, defaultWD2, callback) {
    const details = createObjectStash();
    const isContext = callName === "context";
    const handleError = (e, pluginName)=>{
        const flags = [];
        try {
            pushLogFlags(flags, options, {}, isTTY2, buildLogLevelDefault);
        } catch  {}
        const message = extractErrorMessageV8(e, streamIn, details, void 0, pluginName);
        sendRequest(refs, {
            command: "error",
            flags,
            error: message
        }, ()=>{
            message.detail = details.load(message.detail);
            callback(failureErrorWithLog(isContext ? "Context failed" : "Build failed", [
                message
            ], []), null);
        });
    };
    let plugins;
    if (typeof options === "object") {
        const value = options.plugins;
        if (value !== void 0) {
            if (!Array.isArray(value)) return handleError(new Error(`"plugins" must be an array`), "");
            plugins = value;
        }
    }
    if (plugins && plugins.length > 0) {
        if (streamIn.isSync) return handleError(new Error("Cannot use plugins in synchronous API calls"), "");
        handlePlugins(buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, plugins, details).then((result)=>{
            if (!result.ok) return handleError(result.error, result.pluginName);
            try {
                buildOrContextContinue(result.requestPlugins, result.runOnEndCallbacks, result.scheduleOnDisposeCallbacks);
            } catch (e) {
                handleError(e, "");
            }
        }, (e)=>handleError(e, ""));
        return;
    }
    try {
        buildOrContextContinue(null, (result, done)=>done([], []), ()=>{});
    } catch (e) {
        handleError(e, "");
    }
    function buildOrContextContinue(requestPlugins, runOnEndCallbacks, scheduleOnDisposeCallbacks) {
        const writeDefault = streamIn.hasFS;
        const { entries, flags, write, stdinContents, stdinResolveDir, absWorkingDir, nodePaths, mangleCache } = flagsForBuildOptions(callName, options, isTTY2, buildLogLevelDefault, writeDefault);
        if (write && !streamIn.hasFS) throw new Error(`The "write" option is unavailable in this environment`);
        const request = {
            command: "build",
            key: buildKey,
            entries,
            flags,
            write,
            stdinContents,
            stdinResolveDir,
            absWorkingDir: absWorkingDir || defaultWD2,
            nodePaths,
            context: isContext
        };
        if (requestPlugins) request.plugins = requestPlugins;
        if (mangleCache) request.mangleCache = mangleCache;
        const buildResponseToResult = (response, callback2)=>{
            const result = {
                errors: replaceDetailsInMessages(response.errors, details),
                warnings: replaceDetailsInMessages(response.warnings, details),
                outputFiles: void 0,
                metafile: void 0,
                mangleCache: void 0
            };
            const originalErrors = result.errors.slice();
            const originalWarnings = result.warnings.slice();
            if (response.outputFiles) result.outputFiles = response.outputFiles.map(convertOutputFiles);
            if (response.metafile) result.metafile = JSON.parse(response.metafile);
            if (response.mangleCache) result.mangleCache = response.mangleCache;
            if (response.writeToStdout !== void 0) console.log(decodeUTF8(response.writeToStdout).replace(/\n$/, ""));
            runOnEndCallbacks(result, (onEndErrors, onEndWarnings)=>{
                if (originalErrors.length > 0 || onEndErrors.length > 0) {
                    const error = failureErrorWithLog("Build failed", originalErrors.concat(onEndErrors), originalWarnings.concat(onEndWarnings));
                    return callback2(error, null, onEndErrors, onEndWarnings);
                }
                callback2(null, result, onEndErrors, onEndWarnings);
            });
        };
        let latestResultPromise;
        let provideLatestResult;
        if (isContext) requestCallbacks["on-end"] = (id, request2)=>new Promise((resolve)=>{
                buildResponseToResult(request2, (err, result, onEndErrors, onEndWarnings)=>{
                    const response = {
                        errors: onEndErrors,
                        warnings: onEndWarnings
                    };
                    if (provideLatestResult) provideLatestResult(err, result);
                    latestResultPromise = void 0;
                    provideLatestResult = void 0;
                    sendResponse(id, response);
                    resolve();
                });
            });
        sendRequest(refs, request, (error, response)=>{
            if (error) return callback(new Error(error), null);
            if (!isContext) {
                return buildResponseToResult(response, (err, res)=>{
                    scheduleOnDisposeCallbacks();
                    return callback(err, res);
                });
            }
            if (response.errors.length > 0) {
                return callback(failureErrorWithLog("Context failed", response.errors, response.warnings), null);
            }
            let didDispose = false;
            const result = {
                rebuild: ()=>{
                    if (!latestResultPromise) latestResultPromise = new Promise((resolve, reject)=>{
                        let settlePromise;
                        provideLatestResult = (err, result2)=>{
                            if (!settlePromise) settlePromise = ()=>err ? reject(err) : resolve(result2);
                        };
                        const triggerAnotherBuild = ()=>{
                            const request2 = {
                                command: "rebuild",
                                key: buildKey
                            };
                            sendRequest(refs, request2, (error2, response2)=>{
                                if (error2) {
                                    reject(new Error(error2));
                                } else if (settlePromise) {
                                    settlePromise();
                                } else {
                                    triggerAnotherBuild();
                                }
                            });
                        };
                        triggerAnotherBuild();
                    });
                    return latestResultPromise;
                },
                watch: (options2 = {})=>new Promise((resolve, reject)=>{
                        if (!streamIn.hasFS) throw new Error(`Cannot use the "watch" API in this environment`);
                        const keys = {};
                        checkForInvalidFlags(options2, keys, `in watch() call`);
                        const request2 = {
                            command: "watch",
                            key: buildKey
                        };
                        sendRequest(refs, request2, (error2)=>{
                            if (error2) reject(new Error(error2));
                            else resolve(void 0);
                        });
                    }),
                serve: (options2 = {})=>new Promise((resolve, reject)=>{
                        if (!streamIn.hasFS) throw new Error(`Cannot use the "serve" API in this environment`);
                        const keys = {};
                        const port = getFlag(options2, keys, "port", mustBeInteger);
                        const host = getFlag(options2, keys, "host", mustBeString);
                        const servedir = getFlag(options2, keys, "servedir", mustBeString);
                        const keyfile = getFlag(options2, keys, "keyfile", mustBeString);
                        const certfile = getFlag(options2, keys, "certfile", mustBeString);
                        const fallback = getFlag(options2, keys, "fallback", mustBeString);
                        const onRequest = getFlag(options2, keys, "onRequest", mustBeFunction);
                        checkForInvalidFlags(options2, keys, `in serve() call`);
                        const request2 = {
                            command: "serve",
                            key: buildKey,
                            onRequest: !!onRequest
                        };
                        if (port !== void 0) request2.port = port;
                        if (host !== void 0) request2.host = host;
                        if (servedir !== void 0) request2.servedir = servedir;
                        if (keyfile !== void 0) request2.keyfile = keyfile;
                        if (certfile !== void 0) request2.certfile = certfile;
                        if (fallback !== void 0) request2.fallback = fallback;
                        sendRequest(refs, request2, (error2, response2)=>{
                            if (error2) return reject(new Error(error2));
                            if (onRequest) {
                                requestCallbacks["serve-request"] = (id, request3)=>{
                                    onRequest(request3.args);
                                    sendResponse(id, {});
                                };
                            }
                            resolve(response2);
                        });
                    }),
                cancel: ()=>new Promise((resolve)=>{
                        if (didDispose) return resolve();
                        const request2 = {
                            command: "cancel",
                            key: buildKey
                        };
                        sendRequest(refs, request2, ()=>{
                            resolve();
                        });
                    }),
                dispose: ()=>new Promise((resolve)=>{
                        if (didDispose) return resolve();
                        didDispose = true;
                        const request2 = {
                            command: "dispose",
                            key: buildKey
                        };
                        sendRequest(refs, request2, ()=>{
                            resolve();
                            scheduleOnDisposeCallbacks();
                            refs.unref();
                        });
                    })
            };
            refs.ref();
            callback(null, result);
        });
    }
}
var handlePlugins = async (buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, initialOptions, plugins, details)=>{
    let onStartCallbacks = [];
    let onEndCallbacks = [];
    let onResolveCallbacks = {};
    let onLoadCallbacks = {};
    let onDisposeCallbacks = [];
    let nextCallbackID = 0;
    let i = 0;
    let requestPlugins = [];
    let isSetupDone = false;
    plugins = [
        ...plugins
    ];
    for (let item of plugins){
        let keys = {};
        if (typeof item !== "object") throw new Error(`Plugin at index ${i} must be an object`);
        const name = getFlag(item, keys, "name", mustBeString);
        if (typeof name !== "string" || name === "") throw new Error(`Plugin at index ${i} is missing a name`);
        try {
            let setup = getFlag(item, keys, "setup", mustBeFunction);
            if (typeof setup !== "function") throw new Error(`Plugin is missing a setup function`);
            checkForInvalidFlags(item, keys, `on plugin ${quote(name)}`);
            let plugin = {
                name,
                onStart: false,
                onEnd: false,
                onResolve: [],
                onLoad: []
            };
            i++;
            let resolve = (path3, options = {})=>{
                if (!isSetupDone) throw new Error('Cannot call "resolve" before plugin setup has completed');
                if (typeof path3 !== "string") throw new Error(`The path to resolve must be a string`);
                let keys2 = /* @__PURE__ */ Object.create(null);
                let pluginName = getFlag(options, keys2, "pluginName", mustBeString);
                let importer = getFlag(options, keys2, "importer", mustBeString);
                let namespace = getFlag(options, keys2, "namespace", mustBeString);
                let resolveDir = getFlag(options, keys2, "resolveDir", mustBeString);
                let kind = getFlag(options, keys2, "kind", mustBeString);
                let pluginData = getFlag(options, keys2, "pluginData", canBeAnything);
                let importAttributes = getFlag(options, keys2, "with", mustBeObject);
                checkForInvalidFlags(options, keys2, "in resolve() call");
                return new Promise((resolve2, reject)=>{
                    const request = {
                        command: "resolve",
                        path: path3,
                        key: buildKey,
                        pluginName: name
                    };
                    if (pluginName != null) request.pluginName = pluginName;
                    if (importer != null) request.importer = importer;
                    if (namespace != null) request.namespace = namespace;
                    if (resolveDir != null) request.resolveDir = resolveDir;
                    if (kind != null) request.kind = kind;
                    else throw new Error(`Must specify "kind" when calling "resolve"`);
                    if (pluginData != null) request.pluginData = details.store(pluginData);
                    if (importAttributes != null) request.with = sanitizeStringMap(importAttributes, "with");
                    sendRequest(refs, request, (error, response)=>{
                        if (error !== null) reject(new Error(error));
                        else resolve2({
                            errors: replaceDetailsInMessages(response.errors, details),
                            warnings: replaceDetailsInMessages(response.warnings, details),
                            path: response.path,
                            external: response.external,
                            sideEffects: response.sideEffects,
                            namespace: response.namespace,
                            suffix: response.suffix,
                            pluginData: details.load(response.pluginData)
                        });
                    });
                });
            };
            let promise = setup({
                initialOptions,
                resolve,
                onStart (callback) {
                    let registeredText = `This error came from the "onStart" callback registered here:`;
                    let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onStart");
                    onStartCallbacks.push({
                        name,
                        callback,
                        note: registeredNote
                    });
                    plugin.onStart = true;
                },
                onEnd (callback) {
                    let registeredText = `This error came from the "onEnd" callback registered here:`;
                    let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onEnd");
                    onEndCallbacks.push({
                        name,
                        callback,
                        note: registeredNote
                    });
                    plugin.onEnd = true;
                },
                onResolve (options, callback) {
                    let registeredText = `This error came from the "onResolve" callback registered here:`;
                    let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onResolve");
                    let keys2 = {};
                    let filter = getFlag(options, keys2, "filter", mustBeRegExp);
                    let namespace = getFlag(options, keys2, "namespace", mustBeString);
                    checkForInvalidFlags(options, keys2, `in onResolve() call for plugin ${quote(name)}`);
                    if (filter == null) throw new Error(`onResolve() call is missing a filter`);
                    let id = nextCallbackID++;
                    onResolveCallbacks[id] = {
                        name,
                        callback,
                        note: registeredNote
                    };
                    plugin.onResolve.push({
                        id,
                        filter: filter.source,
                        namespace: namespace || ""
                    });
                },
                onLoad (options, callback) {
                    let registeredText = `This error came from the "onLoad" callback registered here:`;
                    let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onLoad");
                    let keys2 = {};
                    let filter = getFlag(options, keys2, "filter", mustBeRegExp);
                    let namespace = getFlag(options, keys2, "namespace", mustBeString);
                    checkForInvalidFlags(options, keys2, `in onLoad() call for plugin ${quote(name)}`);
                    if (filter == null) throw new Error(`onLoad() call is missing a filter`);
                    let id = nextCallbackID++;
                    onLoadCallbacks[id] = {
                        name,
                        callback,
                        note: registeredNote
                    };
                    plugin.onLoad.push({
                        id,
                        filter: filter.source,
                        namespace: namespace || ""
                    });
                },
                onDispose (callback) {
                    onDisposeCallbacks.push(callback);
                },
                esbuild: streamIn.esbuild
            });
            if (promise) await promise;
            requestPlugins.push(plugin);
        } catch (e) {
            return {
                ok: false,
                error: e,
                pluginName: name
            };
        }
    }
    requestCallbacks["on-start"] = async (id, request)=>{
        let response = {
            errors: [],
            warnings: []
        };
        await Promise.all(onStartCallbacks.map(async ({ name, callback, note })=>{
            try {
                let result = await callback();
                if (result != null) {
                    if (typeof result !== "object") throw new Error(`Expected onStart() callback in plugin ${quote(name)} to return an object`);
                    let keys = {};
                    let errors = getFlag(result, keys, "errors", mustBeArray);
                    let warnings = getFlag(result, keys, "warnings", mustBeArray);
                    checkForInvalidFlags(result, keys, `from onStart() callback in plugin ${quote(name)}`);
                    if (errors != null) response.errors.push(...sanitizeMessages(errors, "errors", details, name, void 0));
                    if (warnings != null) response.warnings.push(...sanitizeMessages(warnings, "warnings", details, name, void 0));
                }
            } catch (e) {
                response.errors.push(extractErrorMessageV8(e, streamIn, details, note && note(), name));
            }
        }));
        sendResponse(id, response);
    };
    requestCallbacks["on-resolve"] = async (id, request)=>{
        let response = {}, name = "", callback, note;
        for (let id2 of request.ids){
            try {
                ({ name, callback, note } = onResolveCallbacks[id2]);
                let result = await callback({
                    path: request.path,
                    importer: request.importer,
                    namespace: request.namespace,
                    resolveDir: request.resolveDir,
                    kind: request.kind,
                    pluginData: details.load(request.pluginData),
                    with: request.with
                });
                if (result != null) {
                    if (typeof result !== "object") throw new Error(`Expected onResolve() callback in plugin ${quote(name)} to return an object`);
                    let keys = {};
                    let pluginName = getFlag(result, keys, "pluginName", mustBeString);
                    let path3 = getFlag(result, keys, "path", mustBeString);
                    let namespace = getFlag(result, keys, "namespace", mustBeString);
                    let suffix = getFlag(result, keys, "suffix", mustBeString);
                    let external = getFlag(result, keys, "external", mustBeBoolean);
                    let sideEffects = getFlag(result, keys, "sideEffects", mustBeBoolean);
                    let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
                    let errors = getFlag(result, keys, "errors", mustBeArray);
                    let warnings = getFlag(result, keys, "warnings", mustBeArray);
                    let watchFiles = getFlag(result, keys, "watchFiles", mustBeArray);
                    let watchDirs = getFlag(result, keys, "watchDirs", mustBeArray);
                    checkForInvalidFlags(result, keys, `from onResolve() callback in plugin ${quote(name)}`);
                    response.id = id2;
                    if (pluginName != null) response.pluginName = pluginName;
                    if (path3 != null) response.path = path3;
                    if (namespace != null) response.namespace = namespace;
                    if (suffix != null) response.suffix = suffix;
                    if (external != null) response.external = external;
                    if (sideEffects != null) response.sideEffects = sideEffects;
                    if (pluginData != null) response.pluginData = details.store(pluginData);
                    if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
                    if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
                    if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
                    if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
                    break;
                }
            } catch (e) {
                response = {
                    id: id2,
                    errors: [
                        extractErrorMessageV8(e, streamIn, details, note && note(), name)
                    ]
                };
                break;
            }
        }
        sendResponse(id, response);
    };
    requestCallbacks["on-load"] = async (id, request)=>{
        let response = {}, name = "", callback, note;
        for (let id2 of request.ids){
            try {
                ({ name, callback, note } = onLoadCallbacks[id2]);
                let result = await callback({
                    path: request.path,
                    namespace: request.namespace,
                    suffix: request.suffix,
                    pluginData: details.load(request.pluginData),
                    with: request.with
                });
                if (result != null) {
                    if (typeof result !== "object") throw new Error(`Expected onLoad() callback in plugin ${quote(name)} to return an object`);
                    let keys = {};
                    let pluginName = getFlag(result, keys, "pluginName", mustBeString);
                    let contents = getFlag(result, keys, "contents", mustBeStringOrUint8Array);
                    let resolveDir = getFlag(result, keys, "resolveDir", mustBeString);
                    let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
                    let loader = getFlag(result, keys, "loader", mustBeString);
                    let errors = getFlag(result, keys, "errors", mustBeArray);
                    let warnings = getFlag(result, keys, "warnings", mustBeArray);
                    let watchFiles = getFlag(result, keys, "watchFiles", mustBeArray);
                    let watchDirs = getFlag(result, keys, "watchDirs", mustBeArray);
                    checkForInvalidFlags(result, keys, `from onLoad() callback in plugin ${quote(name)}`);
                    response.id = id2;
                    if (pluginName != null) response.pluginName = pluginName;
                    if (contents instanceof Uint8Array) response.contents = contents;
                    else if (contents != null) response.contents = encodeUTF8(contents);
                    if (resolveDir != null) response.resolveDir = resolveDir;
                    if (pluginData != null) response.pluginData = details.store(pluginData);
                    if (loader != null) response.loader = loader;
                    if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
                    if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
                    if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
                    if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
                    break;
                }
            } catch (e) {
                response = {
                    id: id2,
                    errors: [
                        extractErrorMessageV8(e, streamIn, details, note && note(), name)
                    ]
                };
                break;
            }
        }
        sendResponse(id, response);
    };
    let runOnEndCallbacks = (result, done)=>done([], []);
    if (onEndCallbacks.length > 0) {
        runOnEndCallbacks = (result, done)=>{
            (async ()=>{
                const onEndErrors = [];
                const onEndWarnings = [];
                for (const { name, callback, note } of onEndCallbacks){
                    let newErrors;
                    let newWarnings;
                    try {
                        const value = await callback(result);
                        if (value != null) {
                            if (typeof value !== "object") throw new Error(`Expected onEnd() callback in plugin ${quote(name)} to return an object`);
                            let keys = {};
                            let errors = getFlag(value, keys, "errors", mustBeArray);
                            let warnings = getFlag(value, keys, "warnings", mustBeArray);
                            checkForInvalidFlags(value, keys, `from onEnd() callback in plugin ${quote(name)}`);
                            if (errors != null) newErrors = sanitizeMessages(errors, "errors", details, name, void 0);
                            if (warnings != null) newWarnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
                        }
                    } catch (e) {
                        newErrors = [
                            extractErrorMessageV8(e, streamIn, details, note && note(), name)
                        ];
                    }
                    if (newErrors) {
                        onEndErrors.push(...newErrors);
                        try {
                            result.errors.push(...newErrors);
                        } catch  {}
                    }
                    if (newWarnings) {
                        onEndWarnings.push(...newWarnings);
                        try {
                            result.warnings.push(...newWarnings);
                        } catch  {}
                    }
                }
                done(onEndErrors, onEndWarnings);
            })();
        };
    }
    let scheduleOnDisposeCallbacks = ()=>{
        for (const cb of onDisposeCallbacks){
            setTimeout(()=>cb(), 0);
        }
    };
    isSetupDone = true;
    return {
        ok: true,
        requestPlugins,
        runOnEndCallbacks,
        scheduleOnDisposeCallbacks
    };
};
function createObjectStash() {
    const map = /* @__PURE__ */ new Map();
    let nextID = 0;
    return {
        load (id) {
            return map.get(id);
        },
        store (value) {
            if (value === void 0) return -1;
            const id = nextID++;
            map.set(id, value);
            return id;
        }
    };
}
function extractCallerV8(e, streamIn, ident) {
    let note;
    let tried = false;
    return ()=>{
        if (tried) return note;
        tried = true;
        try {
            let lines = (e.stack + "").split("\n");
            lines.splice(1, 1);
            let location = parseStackLinesV8(streamIn, lines, ident);
            if (location) {
                note = {
                    text: e.message,
                    location
                };
                return note;
            }
        } catch  {}
    };
}
function extractErrorMessageV8(e, streamIn, stash, note, pluginName) {
    let text = "Internal error";
    let location = null;
    try {
        text = (e && e.message || e) + "";
    } catch  {}
    try {
        location = parseStackLinesV8(streamIn, (e.stack + "").split("\n"), "");
    } catch  {}
    return {
        id: "",
        pluginName,
        text,
        location,
        notes: note ? [
            note
        ] : [],
        detail: stash ? stash.store(e) : -1
    };
}
function parseStackLinesV8(streamIn, lines, ident) {
    let at = "    at ";
    if (streamIn.readFileSync && !lines[0].startsWith(at) && lines[1].startsWith(at)) {
        for(let i = 1; i < lines.length; i++){
            let line = lines[i];
            if (!line.startsWith(at)) continue;
            line = line.slice(at.length);
            while(true){
                let match = /^(?:new |async )?\S+ \((.*)\)$/.exec(line);
                if (match) {
                    line = match[1];
                    continue;
                }
                match = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(line);
                if (match) {
                    line = match[1];
                    continue;
                }
                match = /^(\S+):(\d+):(\d+)$/.exec(line);
                if (match) {
                    let contents;
                    try {
                        contents = streamIn.readFileSync(match[1], "utf8");
                    } catch  {
                        break;
                    }
                    let lineText = contents.split(/\r\n|\r|\n|\u2028|\u2029/)[+match[2] - 1] || "";
                    let column = +match[3] - 1;
                    let length = lineText.slice(column, column + ident.length) === ident ? ident.length : 0;
                    return {
                        file: match[1],
                        namespace: "file",
                        line: +match[2],
                        column: encodeUTF8(lineText.slice(0, column)).length,
                        length: encodeUTF8(lineText.slice(column, column + length)).length,
                        lineText: lineText + "\n" + lines.slice(1).join("\n"),
                        suggestion: ""
                    };
                }
                break;
            }
        }
    }
    return null;
}
function failureErrorWithLog(text, errors, warnings) {
    let limit = 5;
    text += errors.length < 1 ? "" : ` with ${errors.length} error${errors.length < 2 ? "" : "s"}:` + errors.slice(0, limit + 1).map((e, i)=>{
        if (i === limit) return "\n...";
        if (!e.location) return `
error: ${e.text}`;
        let { file, line, column } = e.location;
        let pluginText = e.pluginName ? `[plugin: ${e.pluginName}] ` : "";
        return `
${file}:${line}:${column}: ERROR: ${pluginText}${e.text}`;
    }).join("");
    let error = new Error(text);
    for (const [key, value] of [
        [
            "errors",
            errors
        ],
        [
            "warnings",
            warnings
        ]
    ]){
        Object.defineProperty(error, key, {
            configurable: true,
            enumerable: true,
            get: ()=>value,
            set: (value2)=>Object.defineProperty(error, key, {
                    configurable: true,
                    enumerable: true,
                    value: value2
                })
        });
    }
    return error;
}
function replaceDetailsInMessages(messages, stash) {
    for (const message of messages){
        message.detail = stash.load(message.detail);
    }
    return messages;
}
function sanitizeLocation(location, where, terminalWidth) {
    if (location == null) return null;
    let keys = {};
    let file = getFlag(location, keys, "file", mustBeString);
    let namespace = getFlag(location, keys, "namespace", mustBeString);
    let line = getFlag(location, keys, "line", mustBeInteger);
    let column = getFlag(location, keys, "column", mustBeInteger);
    let length = getFlag(location, keys, "length", mustBeInteger);
    let lineText = getFlag(location, keys, "lineText", mustBeString);
    let suggestion = getFlag(location, keys, "suggestion", mustBeString);
    checkForInvalidFlags(location, keys, where);
    if (lineText) {
        const relevantASCII = lineText.slice(0, (column && column > 0 ? column : 0) + (length && length > 0 ? length : 0) + (terminalWidth && terminalWidth > 0 ? terminalWidth : 80));
        if (!/[\x7F-\uFFFF]/.test(relevantASCII) && !/\n/.test(lineText)) {
            lineText = relevantASCII;
        }
    }
    return {
        file: file || "",
        namespace: namespace || "",
        line: line || 0,
        column: column || 0,
        length: length || 0,
        lineText: lineText || "",
        suggestion: suggestion || ""
    };
}
function sanitizeMessages(messages, property, stash, fallbackPluginName, terminalWidth) {
    let messagesClone = [];
    let index = 0;
    for (const message of messages){
        let keys = {};
        let id = getFlag(message, keys, "id", mustBeString);
        let pluginName = getFlag(message, keys, "pluginName", mustBeString);
        let text = getFlag(message, keys, "text", mustBeString);
        let location = getFlag(message, keys, "location", mustBeObjectOrNull);
        let notes = getFlag(message, keys, "notes", mustBeArray);
        let detail = getFlag(message, keys, "detail", canBeAnything);
        let where = `in element ${index} of "${property}"`;
        checkForInvalidFlags(message, keys, where);
        let notesClone = [];
        if (notes) {
            for (const note of notes){
                let noteKeys = {};
                let noteText = getFlag(note, noteKeys, "text", mustBeString);
                let noteLocation = getFlag(note, noteKeys, "location", mustBeObjectOrNull);
                checkForInvalidFlags(note, noteKeys, where);
                notesClone.push({
                    text: noteText || "",
                    location: sanitizeLocation(noteLocation, where, terminalWidth)
                });
            }
        }
        messagesClone.push({
            id: id || "",
            pluginName: pluginName || fallbackPluginName,
            text: text || "",
            location: sanitizeLocation(location, where, terminalWidth),
            notes: notesClone,
            detail: stash ? stash.store(detail) : -1
        });
        index++;
    }
    return messagesClone;
}
function sanitizeStringArray(values, property) {
    const result = [];
    for (const value of values){
        if (typeof value !== "string") throw new Error(`${quote(property)} must be an array of strings`);
        result.push(value);
    }
    return result;
}
function sanitizeStringMap(map, property) {
    const result = /* @__PURE__ */ Object.create(null);
    for(const key in map){
        const value = map[key];
        if (typeof value !== "string") throw new Error(`key ${quote(key)} in object ${quote(property)} must be a string`);
        result[key] = value;
    }
    return result;
}
function convertOutputFiles({ path: path3, contents, hash }) {
    let text = null;
    return {
        path: path3,
        contents,
        hash,
        get text () {
            const binary = this.contents;
            if (text === null || binary !== contents) {
                contents = binary;
                text = decodeUTF8(binary);
            }
            return text;
        }
    };
}
// lib/npm/node-platform.ts
var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var ESBUILD_BINARY_PATH = process.env.ESBUILD_BINARY_PATH || ESBUILD_BINARY_PATH;
var isValidBinaryPath = (x)=>!!x && x !== "/usr/bin/esbuild";
var packageDarwin_arm64 = "@esbuild/darwin-arm64";
var packageDarwin_x64 = "@esbuild/darwin-x64";
var knownWindowsPackages = {
    "win32 arm64 LE": "@esbuild/win32-arm64",
    "win32 ia32 LE": "@esbuild/win32-ia32",
    "win32 x64 LE": "@esbuild/win32-x64"
};
var knownUnixlikePackages = {
    "aix ppc64 BE": "@esbuild/aix-ppc64",
    "android arm64 LE": "@esbuild/android-arm64",
    "darwin arm64 LE": "@esbuild/darwin-arm64",
    "darwin x64 LE": "@esbuild/darwin-x64",
    "freebsd arm64 LE": "@esbuild/freebsd-arm64",
    "freebsd x64 LE": "@esbuild/freebsd-x64",
    "linux arm LE": "@esbuild/linux-arm",
    "linux arm64 LE": "@esbuild/linux-arm64",
    "linux ia32 LE": "@esbuild/linux-ia32",
    "linux mips64el LE": "@esbuild/linux-mips64el",
    "linux ppc64 LE": "@esbuild/linux-ppc64",
    "linux riscv64 LE": "@esbuild/linux-riscv64",
    "linux s390x BE": "@esbuild/linux-s390x",
    "linux x64 LE": "@esbuild/linux-x64",
    "linux loong64 LE": "@esbuild/linux-loong64",
    "netbsd x64 LE": "@esbuild/netbsd-x64",
    "openbsd x64 LE": "@esbuild/openbsd-x64",
    "sunos x64 LE": "@esbuild/sunos-x64"
};
var knownWebAssemblyFallbackPackages = {
    "android arm LE": "@esbuild/android-arm",
    "android x64 LE": "@esbuild/android-x64"
};
function pkgAndSubpathForCurrentPlatform() {
    let pkg;
    let subpath;
    let isWASM = false;
    let platformKey = `${process.platform} ${os.arch()} ${os.endianness()}`;
    if (platformKey in knownWindowsPackages) {
        pkg = knownWindowsPackages[platformKey];
        subpath = "esbuild.exe";
    } else if (platformKey in knownUnixlikePackages) {
        pkg = knownUnixlikePackages[platformKey];
        subpath = "bin/esbuild";
    } else if (platformKey in knownWebAssemblyFallbackPackages) {
        pkg = knownWebAssemblyFallbackPackages[platformKey];
        subpath = "bin/esbuild";
        isWASM = true;
    } else {
        throw new Error(`Unsupported platform: ${platformKey}`);
    }
    return {
        pkg,
        subpath,
        isWASM
    };
}
function pkgForSomeOtherPlatform() {
    const libMainJS = "[project]/node_modules/esbuild/lib/main.js [app-route] (ecmascript)";
    const nodeModulesDirectory = path.dirname(path.dirname(path.dirname(libMainJS)));
    if (path.basename(nodeModulesDirectory) === "node_modules") {
        for(const unixKey in knownUnixlikePackages){
            try {
                const pkg = knownUnixlikePackages[unixKey];
                if (fs.existsSync(path.join(nodeModulesDirectory, pkg))) return pkg;
            } catch  {}
        }
        for(const windowsKey in knownWindowsPackages){
            try {
                const pkg = knownWindowsPackages[windowsKey];
                if (fs.existsSync(path.join(nodeModulesDirectory, pkg))) return pkg;
            } catch  {}
        }
    }
    return null;
}
function downloadedBinPath(pkg, subpath) {
    const esbuildLibDir = path.dirname("[project]/node_modules/esbuild/lib/main.js [app-route] (ecmascript)");
    return path.join(esbuildLibDir, `downloaded-${pkg.replace("/", "-")}-${path.basename(subpath)}`);
}
function generateBinPath() {
    if (isValidBinaryPath(ESBUILD_BINARY_PATH)) {
        if (!fs.existsSync(ESBUILD_BINARY_PATH)) {
            console.warn(`[esbuild] Ignoring bad configuration: ESBUILD_BINARY_PATH=${ESBUILD_BINARY_PATH}`);
        } else {
            return {
                binPath: ESBUILD_BINARY_PATH,
                isWASM: false
            };
        }
    }
    const { pkg, subpath, isWASM } = pkgAndSubpathForCurrentPlatform();
    let binPath;
    try {
        binPath = __turbopack_context__.f({
            "@esbuild/darwin-arm64/README.md": {
                id: ()=>(()=>{
                        const e = new Error("Cannot find module 'unknown module type'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    })(),
                module: ()=>(()=>{
                        const e = new Error("Cannot find module 'unknown module type'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    })()
            },
            "@esbuild/darwin-arm64/bin/esbuild": {
                id: ()=>"[project]/node_modules/@esbuild/darwin-arm64/bin/esbuild [app-route] (ecmascript)",
                module: ()=>__turbopack_context__.r("[project]/node_modules/@esbuild/darwin-arm64/bin/esbuild [app-route] (ecmascript)")
            },
            "@esbuild/darwin-arm64/package.json": {
                id: ()=>"[project]/node_modules/@esbuild/darwin-arm64/package.json (json)",
                module: ()=>__turbopack_context__.r("[project]/node_modules/@esbuild/darwin-arm64/package.json (json)")
            },
            "@esbuild/darwin-arm64/package": {
                id: ()=>"[project]/node_modules/@esbuild/darwin-arm64/package.json (json)",
                module: ()=>__turbopack_context__.r("[project]/node_modules/@esbuild/darwin-arm64/package.json (json)")
            }
        }).resolve(`${pkg}/${subpath}`);
    } catch (e1) {
        binPath = downloadedBinPath(pkg, subpath);
        if (!fs.existsSync(binPath)) {
            try {
                (()=>{
                    const e = new Error("Cannot find module 'unknown'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                })();
            } catch  {
                const otherPkg = pkgForSomeOtherPlatform();
                if (otherPkg) {
                    let suggestions = `
Specifically the "${otherPkg}" package is present but this platform
needs the "${pkg}" package instead. People often get into this
situation by installing esbuild on Windows or macOS and copying "node_modules"
into a Docker image that runs Linux, or by copying "node_modules" between
Windows and WSL environments.

If you are installing with npm, you can try not copying the "node_modules"
directory when you copy the files over, and running "npm ci" or "npm install"
on the destination platform after the copy. Or you could consider using yarn
instead of npm which has built-in support for installing a package on multiple
platforms simultaneously.

If you are installing with yarn, you can try listing both this platform and the
other platform in your ".yarnrc.yml" file using the "supportedArchitectures"
feature: https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
Keep in mind that this means multiple copies of esbuild will be present.
`;
                    if (pkg === packageDarwin_x64 && otherPkg === packageDarwin_arm64 || pkg === packageDarwin_arm64 && otherPkg === packageDarwin_x64) {
                        suggestions = `
Specifically the "${otherPkg}" package is present but this platform
needs the "${pkg}" package instead. People often get into this
situation by installing esbuild with npm running inside of Rosetta 2 and then
trying to use it with node running outside of Rosetta 2, or vice versa (Rosetta
2 is Apple's on-the-fly x86_64-to-arm64 translation service).

If you are installing with npm, you can try ensuring that both npm and node are
not running under Rosetta 2 and then reinstalling esbuild. This likely involves
changing how you installed npm and/or node. For example, installing node with
the universal installer here should work: https://nodejs.org/en/download/. Or
you could consider using yarn instead of npm which has built-in support for
installing a package on multiple platforms simultaneously.

If you are installing with yarn, you can try listing both "arm64" and "x64"
in your ".yarnrc.yml" file using the "supportedArchitectures" feature:
https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
Keep in mind that this means multiple copies of esbuild will be present.
`;
                    }
                    throw new Error(`
You installed esbuild for another platform than the one you're currently using.
This won't work because esbuild is written with native code and needs to
install a platform-specific binary executable.
${suggestions}
Another alternative is to use the "esbuild-wasm" package instead, which works
the same way on all platforms. But it comes with a heavy performance cost and
can sometimes be 10x slower than the "esbuild" package, so you may also not
want to do that.
`);
                }
                throw new Error(`The package "${pkg}" could not be found, and is needed by esbuild.

If you are installing esbuild with npm, make sure that you don't specify the
"--no-optional" or "--omit=optional" flags. The "optionalDependencies" feature
of "package.json" is used by esbuild to install the correct binary executable
for your current platform.`);
            }
            throw e1;
        }
    }
    if (/\.zip\//.test(binPath)) {
        let pnpapi;
        try {
            pnpapi = __turbopack_context__.r("[externals]/pnpapi [external] (pnpapi, cjs)");
        } catch (e) {}
        if (pnpapi) {
            const root = pnpapi.getPackageInformation(pnpapi.topLevel).packageLocation;
            const binTargetPath = path.join(root, "node_modules", ".cache", "esbuild", `pnpapi-${pkg.replace("/", "-")}-${"0.21.5"}-${path.basename(subpath)}`);
            if (!fs.existsSync(binTargetPath)) {
                fs.mkdirSync(path.dirname(binTargetPath), {
                    recursive: true
                });
                fs.copyFileSync(binPath, binTargetPath);
                fs.chmodSync(binTargetPath, 493);
            }
            return {
                binPath: binTargetPath,
                isWASM
            };
        }
    }
    return {
        binPath,
        isWASM
    };
}
// lib/npm/node.ts
var child_process = __turbopack_context__.r("[externals]/child_process [external] (child_process, cjs)");
var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
var path2 = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var fs2 = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var os2 = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
var tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
var worker_threads;
if (process.env.ESBUILD_WORKER_THREADS !== "0") {
    try {
        worker_threads = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
    } catch  {}
    let [major, minor] = process.versions.node.split(".");
    if (// <v12.17.0 does not work
    +major < 12 || +major === 12 && +minor < 17 || +major === 13 && +minor < 13) {
        worker_threads = void 0;
    }
}
var _a;
var isInternalWorkerThread = ((_a = worker_threads == null ? void 0 : worker_threads.workerData) == null ? void 0 : _a.esbuildVersion) === "0.21.5";
var esbuildCommandAndArgs = ()=>{
    if ((!ESBUILD_BINARY_PATH || false) && (path2.basename(("TURBOPACK compile-time value", "/ROOT/node_modules/esbuild/lib/main.js")) !== "main.js" || path2.basename(("TURBOPACK compile-time value", "/ROOT/node_modules/esbuild/lib")) !== "lib")) {
        throw new Error(`The esbuild JavaScript API cannot be bundled. Please mark the "esbuild" package as external so it's not included in the bundle.

More information: The file containing the code for esbuild's JavaScript API (${("TURBOPACK compile-time value", "/ROOT/node_modules/esbuild/lib/main.js")}) does not appear to be inside the esbuild package on the file system, which usually means that the esbuild package was bundled into another file. This is problematic because the API needs to run a binary executable inside the esbuild package which is located using a relative path from the API code to the executable. If the esbuild package is bundled, the relative path will be incorrect and the executable won't be found.`);
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        const { binPath, isWASM } = generateBinPath();
        if (isWASM) {
            return [
                "node",
                [
                    binPath
                ]
            ];
        } else {
            return [
                binPath,
                []
            ];
        }
    }
};
var isTTY = ()=>tty.isatty(2);
var fsSync = {
    readFile (tempFile, callback) {
        try {
            let contents = fs2.readFileSync(tempFile, "utf8");
            try {
                fs2.unlinkSync(tempFile);
            } catch  {}
            callback(null, contents);
        } catch (err) {
            callback(err, null);
        }
    },
    writeFile (contents, callback) {
        try {
            let tempFile = randomFileName();
            fs2.writeFileSync(tempFile, contents);
            callback(tempFile);
        } catch  {
            callback(null);
        }
    }
};
var fsAsync = {
    readFile (tempFile, callback) {
        try {
            fs2.readFile(tempFile, "utf8", (err, contents)=>{
                try {
                    fs2.unlink(tempFile, ()=>callback(err, contents));
                } catch  {
                    callback(err, contents);
                }
            });
        } catch (err) {
            callback(err, null);
        }
    },
    writeFile (contents, callback) {
        try {
            let tempFile = randomFileName();
            fs2.writeFile(tempFile, contents, (err)=>err !== null ? callback(null) : callback(tempFile));
        } catch  {
            callback(null);
        }
    }
};
var version = "0.21.5";
var build = (options)=>ensureServiceIsRunning().build(options);
var context = (buildOptions)=>ensureServiceIsRunning().context(buildOptions);
var transform = (input, options)=>ensureServiceIsRunning().transform(input, options);
var formatMessages = (messages, options)=>ensureServiceIsRunning().formatMessages(messages, options);
var analyzeMetafile = (messages, options)=>ensureServiceIsRunning().analyzeMetafile(messages, options);
var buildSync = (options)=>{
    if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.buildSync(options);
    }
    let result;
    runServiceSync((service)=>service.buildOrContext({
            callName: "buildSync",
            refs: null,
            options,
            isTTY: isTTY(),
            defaultWD,
            callback: (err, res)=>{
                if (err) throw err;
                result = res;
            }
        }));
    return result;
};
var transformSync = (input, options)=>{
    if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.transformSync(input, options);
    }
    let result;
    runServiceSync((service)=>service.transform({
            callName: "transformSync",
            refs: null,
            input,
            options: options || {},
            isTTY: isTTY(),
            fs: fsSync,
            callback: (err, res)=>{
                if (err) throw err;
                result = res;
            }
        }));
    return result;
};
var formatMessagesSync = (messages, options)=>{
    if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.formatMessagesSync(messages, options);
    }
    let result;
    runServiceSync((service)=>service.formatMessages({
            callName: "formatMessagesSync",
            refs: null,
            messages,
            options,
            callback: (err, res)=>{
                if (err) throw err;
                result = res;
            }
        }));
    return result;
};
var analyzeMetafileSync = (metafile, options)=>{
    if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.analyzeMetafileSync(metafile, options);
    }
    let result;
    runServiceSync((service)=>service.analyzeMetafile({
            callName: "analyzeMetafileSync",
            refs: null,
            metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
            options,
            callback: (err, res)=>{
                if (err) throw err;
                result = res;
            }
        }));
    return result;
};
var stop = ()=>{
    if (stopService) stopService();
    if (workerThreadService) workerThreadService.stop();
    return Promise.resolve();
};
var initializeWasCalled = false;
var initialize = (options)=>{
    options = validateInitializeOptions(options || {});
    if (options.wasmURL) throw new Error(`The "wasmURL" option only works in the browser`);
    if (options.wasmModule) throw new Error(`The "wasmModule" option only works in the browser`);
    if (options.worker) throw new Error(`The "worker" option only works in the browser`);
    if (initializeWasCalled) throw new Error('Cannot call "initialize" more than once');
    ensureServiceIsRunning();
    initializeWasCalled = true;
    return Promise.resolve();
};
var defaultWD = process.cwd();
var longLivedService;
var stopService;
var ensureServiceIsRunning = ()=>{
    if (longLivedService) return longLivedService;
    let [command, args] = esbuildCommandAndArgs();
    let child = child_process.spawn(command, args.concat(`--service=${"0.21.5"}`, "--ping"), {
        windowsHide: true,
        stdio: [
            "pipe",
            "pipe",
            "inherit"
        ],
        cwd: defaultWD
    });
    let { readFromStdout, afterClose, service } = createChannel({
        writeToStdin (bytes) {
            child.stdin.write(bytes, (err)=>{
                if (err) afterClose(err);
            });
        },
        readFileSync: fs2.readFileSync,
        isSync: false,
        hasFS: true,
        esbuild: node_exports
    });
    child.stdin.on("error", afterClose);
    child.on("error", afterClose);
    const stdin = child.stdin;
    const stdout = child.stdout;
    stdout.on("data", readFromStdout);
    stdout.on("end", afterClose);
    stopService = ()=>{
        stdin.destroy();
        stdout.destroy();
        child.kill();
        initializeWasCalled = false;
        longLivedService = void 0;
        stopService = void 0;
    };
    let refCount = 0;
    child.unref();
    if (stdin.unref) {
        stdin.unref();
    }
    if (stdout.unref) {
        stdout.unref();
    }
    const refs = {
        ref () {
            if (++refCount === 1) child.ref();
        },
        unref () {
            if (--refCount === 0) child.unref();
        }
    };
    longLivedService = {
        build: (options)=>new Promise((resolve, reject)=>{
                service.buildOrContext({
                    callName: "build",
                    refs,
                    options,
                    isTTY: isTTY(),
                    defaultWD,
                    callback: (err, res)=>err ? reject(err) : resolve(res)
                });
            }),
        context: (options)=>new Promise((resolve, reject)=>service.buildOrContext({
                    callName: "context",
                    refs,
                    options,
                    isTTY: isTTY(),
                    defaultWD,
                    callback: (err, res)=>err ? reject(err) : resolve(res)
                })),
        transform: (input, options)=>new Promise((resolve, reject)=>service.transform({
                    callName: "transform",
                    refs,
                    input,
                    options: options || {},
                    isTTY: isTTY(),
                    fs: fsAsync,
                    callback: (err, res)=>err ? reject(err) : resolve(res)
                })),
        formatMessages: (messages, options)=>new Promise((resolve, reject)=>service.formatMessages({
                    callName: "formatMessages",
                    refs,
                    messages,
                    options,
                    callback: (err, res)=>err ? reject(err) : resolve(res)
                })),
        analyzeMetafile: (metafile, options)=>new Promise((resolve, reject)=>service.analyzeMetafile({
                    callName: "analyzeMetafile",
                    refs,
                    metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
                    options,
                    callback: (err, res)=>err ? reject(err) : resolve(res)
                }))
    };
    return longLivedService;
};
var runServiceSync = (callback)=>{
    let [command, args] = esbuildCommandAndArgs();
    let stdin = new Uint8Array();
    let { readFromStdout, afterClose, service } = createChannel({
        writeToStdin (bytes) {
            if (stdin.length !== 0) throw new Error("Must run at most one command");
            stdin = bytes;
        },
        isSync: true,
        hasFS: true,
        esbuild: node_exports
    });
    callback(service);
    let stdout = child_process.execFileSync(command, args.concat(`--service=${"0.21.5"}`), {
        cwd: defaultWD,
        windowsHide: true,
        input: stdin,
        // We don't know how large the output could be. If it's too large, the
        // command will fail with ENOBUFS. Reserve 16mb for now since that feels
        // like it should be enough. Also allow overriding this with an environment
        // variable.
        maxBuffer: +process.env.ESBUILD_MAX_BUFFER || 16 * 1024 * 1024
    });
    readFromStdout(stdout);
    afterClose(null);
};
var randomFileName = ()=>{
    return path2.join(os2.tmpdir(), `esbuild-${crypto.randomBytes(32).toString("hex")}`);
};
var workerThreadService = null;
var startWorkerThreadService = (worker_threads2)=>{
    let { port1: mainPort, port2: workerPort } = new worker_threads2.MessageChannel();
    let worker = new worker_threads2.Worker(("TURBOPACK compile-time value", "/ROOT/node_modules/esbuild/lib/main.js"), {
        workerData: {
            workerPort,
            defaultWD,
            esbuildVersion: "0.21.5"
        },
        transferList: [
            workerPort
        ],
        // From node's documentation: https://nodejs.org/api/worker_threads.html
        //
        //   Take care when launching worker threads from preload scripts (scripts loaded
        //   and run using the `-r` command line flag). Unless the `execArgv` option is
        //   explicitly set, new Worker threads automatically inherit the command line flags
        //   from the running process and will preload the same preload scripts as the main
        //   thread. If the preload script unconditionally launches a worker thread, every
        //   thread spawned will spawn another until the application crashes.
        //
        execArgv: []
    });
    let nextID = 0;
    let fakeBuildError = (text)=>{
        let error = new Error(`Build failed with 1 error:
error: ${text}`);
        let errors = [
            {
                id: "",
                pluginName: "",
                text,
                location: null,
                notes: [],
                detail: void 0
            }
        ];
        error.errors = errors;
        error.warnings = [];
        return error;
    };
    let validateBuildSyncOptions = (options)=>{
        if (!options) return;
        let plugins = options.plugins;
        if (plugins && plugins.length > 0) throw fakeBuildError(`Cannot use plugins in synchronous API calls`);
    };
    let applyProperties = (object, properties)=>{
        for(let key in properties){
            object[key] = properties[key];
        }
    };
    let runCallSync = (command, args)=>{
        let id = nextID++;
        let sharedBuffer = new SharedArrayBuffer(8);
        let sharedBufferView = new Int32Array(sharedBuffer);
        let msg = {
            sharedBuffer,
            id,
            command,
            args
        };
        worker.postMessage(msg);
        let status = Atomics.wait(sharedBufferView, 0, 0);
        if (status !== "ok" && status !== "not-equal") throw new Error("Internal error: Atomics.wait() failed: " + status);
        let { message: { id: id2, resolve, reject, properties } } = worker_threads2.receiveMessageOnPort(mainPort);
        if (id !== id2) throw new Error(`Internal error: Expected id ${id} but got id ${id2}`);
        if (reject) {
            applyProperties(reject, properties);
            throw reject;
        }
        return resolve;
    };
    worker.unref();
    return {
        buildSync (options) {
            validateBuildSyncOptions(options);
            return runCallSync("build", [
                options
            ]);
        },
        transformSync (input, options) {
            return runCallSync("transform", [
                input,
                options
            ]);
        },
        formatMessagesSync (messages, options) {
            return runCallSync("formatMessages", [
                messages,
                options
            ]);
        },
        analyzeMetafileSync (metafile, options) {
            return runCallSync("analyzeMetafile", [
                metafile,
                options
            ]);
        },
        stop () {
            worker.terminate();
            workerThreadService = null;
        }
    };
};
var startSyncServiceWorker = ()=>{
    let workerPort = worker_threads.workerData.workerPort;
    let parentPort = worker_threads.parentPort;
    let extractProperties = (object)=>{
        let properties = {};
        if (object && typeof object === "object") {
            for(let key in object){
                properties[key] = object[key];
            }
        }
        return properties;
    };
    try {
        let service = ensureServiceIsRunning();
        defaultWD = worker_threads.workerData.defaultWD;
        parentPort.on("message", (msg)=>{
            (async ()=>{
                let { sharedBuffer, id, command, args } = msg;
                let sharedBufferView = new Int32Array(sharedBuffer);
                try {
                    switch(command){
                        case "build":
                            workerPort.postMessage({
                                id,
                                resolve: await service.build(args[0])
                            });
                            break;
                        case "transform":
                            workerPort.postMessage({
                                id,
                                resolve: await service.transform(args[0], args[1])
                            });
                            break;
                        case "formatMessages":
                            workerPort.postMessage({
                                id,
                                resolve: await service.formatMessages(args[0], args[1])
                            });
                            break;
                        case "analyzeMetafile":
                            workerPort.postMessage({
                                id,
                                resolve: await service.analyzeMetafile(args[0], args[1])
                            });
                            break;
                        default:
                            throw new Error(`Invalid command: ${command}`);
                    }
                } catch (reject) {
                    workerPort.postMessage({
                        id,
                        reject,
                        properties: extractProperties(reject)
                    });
                }
                Atomics.add(sharedBufferView, 0, 1);
                Atomics.notify(sharedBufferView, 0, Infinity);
            })();
        });
    } catch (reject) {
        parentPort.on("message", (msg)=>{
            let { sharedBuffer, id } = msg;
            let sharedBufferView = new Int32Array(sharedBuffer);
            workerPort.postMessage({
                id,
                reject,
                properties: extractProperties(reject)
            });
            Atomics.add(sharedBufferView, 0, 1);
            Atomics.notify(sharedBufferView, 0, Infinity);
        });
    }
};
if (isInternalWorkerThread) {
    startSyncServiceWorker();
}
var node_default = node_exports;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    analyzeMetafile,
    analyzeMetafileSync,
    build,
    buildSync,
    context,
    formatMessages,
    formatMessagesSync,
    initialize,
    stop,
    transform,
    transformSync,
    version
});
}),
"[project]/node_modules/ms/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/node_modules/debug/src/common.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/node_modules/ms/index.js [app-route] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        const len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) {
                continue;
            }
            namespaces = split[i].replace(/\*/g, '.*?');
            if (namespaces[0] === '-') {
                createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
            } else {
                createDebug.names.push(new RegExp('^' + namespaces + '$'));
            }
        }
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        if (name[name.length - 1] === '*') {
            return true;
        }
        let i;
        let len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) {
                return false;
            }
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/ function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/node_modules/debug/src/node.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/node_modules/supports-color/index.js [app-route] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/common.js [app-route] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/node_modules/debug/src/browser.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/common.js [app-route] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/node_modules/debug/src/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/browser.js [app-route] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/node.js [app-route] (ecmascript)");
}
}),
"[project]/node_modules/has-flag/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/node_modules/supports-color/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/node_modules/has-flag/index.js [app-route] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ('CI' in env) {
        if ([
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE'
        ].some((sign)=>sign in env) || env.CI_NAME === 'codeship') {
            return 1;
        }
        return min;
    }
    if ('TEAMCITY_VERSION' in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === 'truecolor') {
        return 3;
    }
    if ('TERM_PROGRAM' in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch(env.TERM_PROGRAM){
            case 'iTerm.app':
                return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ('COLORTERM' in env) {
        return 1;
    }
    return min;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("pg-587764f78a6c7a9c");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/dequal/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dequal",
    ()=>dequal
]);
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
    for (key of iter.keys()){
        if (dequal(key, tar)) return key;
    }
}
function dequal(foo, bar) {
    var ctor, len, tmp;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (ctor === Set) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len;
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!bar.has(tmp)) return false;
            }
            return true;
        }
        if (ctor === Map) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len[0];
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!dequal(len[1], bar.get(tmp))) {
                    return false;
                }
            }
            return true;
        }
        if (ctor === ArrayBuffer) {
            foo = new Uint8Array(foo);
            bar = new Uint8Array(bar);
        } else if (ctor === DataView) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo.getInt8(len) === bar.getInt8(len));
            }
            return len === -1;
        }
        if (ArrayBuffer.isView(foo)) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo[len] === bar[len]);
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
}),
"[project]/node_modules/@payloadcms/db-postgres/dist/connect.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "connect",
    ()=>connect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$pushDevSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/utilities/pushDevSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/node-postgres/driver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/db.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const connectWithReconnect = async function({ adapter, pool, reconnect = false }) {
    let result;
    if (!reconnect) {
        result = await pool.connect();
    } else {
        try {
            result = await pool.connect();
        } catch (ignore) {
            setTimeout(()=>{
                adapter.payload.logger.info('Reconnecting to postgres');
                void connectWithReconnect({
                    adapter,
                    pool,
                    reconnect: true
                });
            }, 1000);
        }
    }
    if (!result) {
        return;
    }
    result.prependListener('error', (err)=>{
        try {
            if (err.code === 'ECONNRESET') {
                void connectWithReconnect({
                    adapter,
                    pool,
                    reconnect: true
                });
            }
        } catch (ignore) {
        // swallow error
        }
    });
};
const connect = async function connect(options = {
    hotReload: false
}) {
    const { hotReload } = options;
    try {
        if (!this.pool) {
            this.pool = new this.pg.Pool(this.poolOptions);
            await connectWithReconnect({
                adapter: this,
                pool: this.pool
            });
        }
        const logger = this.logger || false;
        this.drizzle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])({
            client: this.pool,
            logger,
            schema: this.schema
        });
        if (this.readReplicaOptions) {
            const readReplicas = this.readReplicaOptions.map((connectionString)=>{
                const options = {
                    ...this.poolOptions,
                    connectionString
                };
                const pool = new this.pg.Pool(options);
                void connectWithReconnect({
                    adapter: this,
                    pool
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])({
                    client: pool,
                    logger,
                    schema: this.schema
                });
            });
            const myReplicas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withReplicas"])(this.drizzle, readReplicas);
            this.drizzle = myReplicas;
        }
        if (!hotReload) {
            if (process.env.PAYLOAD_DROP_DATABASE === 'true') {
                this.payload.logger.info(`---- DROPPING TABLES SCHEMA(${this.schemaName || 'public'}) ----`);
                await this.dropDatabase({
                    adapter: this
                });
                this.payload.logger.info('---- DROPPED TABLES ----');
            }
        }
    } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        if (err.message?.match(/database .* does not exist/i) && !this.disableCreateDatabase) {
            // capitalize first char of the err msg
            this.payload.logger.info(`${err.message.charAt(0).toUpperCase() + err.message.slice(1)}, creating...`);
            const isCreated = await this.createDatabase();
            if (isCreated && this.connect) {
                await this.connect(options);
                return;
            }
        } else {
            this.payload.logger.error({
                err,
                msg: `Error: cannot connect to Postgres. Details: ${err.message}`
            });
        }
        if (typeof this.rejectInitializing === 'function') {
            this.rejectInitializing();
        }
        throw new Error(`Error: cannot connect to Postgres: ${err.message}`);
    }
    await this.createExtensions();
    // Only push schema if not in production
    if (("TURBOPACK compile-time value", "development") !== 'production' && process.env.PAYLOAD_MIGRATING !== 'true' && this.push !== false) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$pushDevSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pushDevSchema"])(this);
    }
    if (typeof this.resolveInitializing === 'function') {
        this.resolveInitializing();
    }
    if (("TURBOPACK compile-time value", "development") === 'production' && this.prodMigrations) //TURBOPACK unreachable
    ;
}; //# sourceMappingURL=connect.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/db-postgres/dist/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "postgresAdapter",
    ()=>postgresAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$beginTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/transactions/beginTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$buildCreateMigration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/utilities/buildCreateMigration.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/transactions/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$count$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/count.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$countGlobalVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/countGlobalVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$countVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/countVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/create.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$blocksToJsonMigrator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/utilities/blocksToJsonMigrator.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createGlobal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/createGlobal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createGlobalVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/createGlobalVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$createSchemaGenerator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/utilities/createSchemaGenerator.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/createVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteMany$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/deleteMany.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/deleteOne.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/deleteVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$destroy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/destroy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/find.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findDistinct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/findDistinct.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findGlobal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/findGlobal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findGlobalVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/findGlobalVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/findOne.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/findVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/migrate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateDown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/migrateDown.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateFresh$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/migrateFresh.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateRefresh$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/migrateRefresh.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateReset$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/migrateReset.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/migrateStatus.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$operatorMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/queries/operatorMap.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queryDrafts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/queryDrafts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$rollbackTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/transactions/rollbackTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateGlobal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/updateGlobal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateGlobalVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/updateGlobalVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateJobs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/updateJobs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateMany$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/updateMany.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/updateOne.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/updateVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/upsert.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$columnToCodeConverter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/columnToCodeConverter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$countDistinct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/countDistinct.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createDatabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/createDatabase.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createExtensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/createExtensions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createJSONQuery$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/createJSONQuery/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$defaultSnapshot$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/defaultSnapshot.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$deleteWhere$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/deleteWhere.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$dropDatabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/dropDatabase.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$execute$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/execute.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$init$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/init.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$insert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/insert.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$requireDrizzleKit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/requireDrizzleKit.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/enum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/schema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$createDatabaseAdapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/payload/dist/database/createDatabaseAdapter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$defaultBeginTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/payload/dist/database/defaultBeginTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$findMigrationDir$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/payload/dist/database/migrations/findMigrationDir.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$dist$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/db-postgres/dist/connect.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$dist$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$dist$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/@payloadcms/db-postgres/dist/index.js")}`;
    }
};
;
;
;
;
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
function postgresAdapter(args) {
    const postgresIDType = args.idType || 'serial';
    const payloadIDType = postgresIDType === 'serial' ? 'number' : 'text';
    const allowIDOnCreate = args.allowIDOnCreate ?? false;
    function adapter({ payload }) {
        const migrationDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$findMigrationDir$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findMigrationDir"])(args.migrationDir);
        let resolveInitializing;
        let rejectInitializing;
        let adapterSchema;
        const initializing = new Promise((res, rej)=>{
            resolveInitializing = res;
            rejectInitializing = rej;
        });
        if (args.schemaName) {
            adapterSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgSchema"])(args.schemaName);
        } else {
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            adapterSchema = {
                enum: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgEnum"],
                table: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"]
            };
        }
        const extensions = (args.extensions ?? []).reduce((acc, name)=>{
            acc[name] = true;
            return acc;
        }, {});
        const sanitizeStatements = ({ sqlExecute, statements })=>{
            return `${sqlExecute}\n ${statements.join('\n')}\`)`;
        };
        const executeMethod = 'execute';
        const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$createDatabaseAdapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDatabaseAdapter"])({
            name: 'postgres',
            afterSchemaInit: args.afterSchemaInit ?? [],
            allowIDOnCreate,
            beforeSchemaInit: args.beforeSchemaInit ?? [],
            blocksAsJSON: args.blocksAsJSON ?? false,
            createDatabase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createDatabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDatabase"],
            createExtensions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createExtensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createExtensions"],
            createMigration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$buildCreateMigration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildCreateMigration"])({
                executeMethod,
                filename,
                sanitizeStatements
            }),
            defaultDrizzleSnapshot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$defaultSnapshot$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultDrizzleSnapshot"],
            disableCreateDatabase: args.disableCreateDatabase ?? false,
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            drizzle: undefined,
            enums: {},
            extensions,
            features: {
                json: true
            },
            fieldConstraints: {},
            findDistinct: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findDistinct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findDistinct"],
            generateSchema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$createSchemaGenerator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSchemaGenerator"])({
                columnToCodeConverter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$columnToCodeConverter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["columnToCodeConverter"],
                corePackageSuffix: 'pg-core',
                defaultOutputFile: args.generateSchemaOutputFile,
                enumImport: 'pgEnum',
                schemaImport: 'pgSchema',
                tableImport: 'pgTable'
            }),
            idType: postgresIDType,
            initializing,
            localesSuffix: args.localesSuffix || '_locales',
            logger: args.logger,
            operators: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$operatorMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operatorMap"],
            pg: args.pg || __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"],
            pgSchema: adapterSchema,
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            pool: undefined,
            poolOptions: args.pool,
            prodMigrations: args.prodMigrations,
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            push: args.push,
            readReplicaOptions: args.readReplicas,
            relations: {},
            relationshipsSuffix: args.relationshipsSuffix || '_rels',
            schema: {},
            schemaName: args.schemaName,
            sessions: {},
            tableNameMap: new Map(),
            tables: {},
            tablesFilter: args.tablesFilter,
            transactionOptions: args.transactionOptions || undefined,
            versionsSuffix: args.versionsSuffix || '_v',
            // DatabaseAdapter
            beginTransaction: args.transactionOptions === false ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$defaultBeginTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultBeginTransaction"])() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$beginTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["beginTransaction"],
            commitTransaction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"],
            connect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$dist$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connect"],
            count: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$count$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["count"],
            countDistinct: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$countDistinct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countDistinct"],
            countGlobalVersions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$countGlobalVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countGlobalVersions"],
            countVersions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$countVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countVersions"],
            create: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["create"],
            createGlobal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createGlobal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGlobal"],
            createGlobalVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createGlobalVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGlobalVersion"],
            createJSONQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createJSONQuery$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createJSONQuery"],
            createVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createVersion"],
            defaultIDType: payloadIDType,
            deleteMany: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteMany$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteMany"],
            deleteOne: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteOne"],
            deleteVersions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteVersions"],
            deleteWhere: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$deleteWhere$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteWhere"],
            destroy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$destroy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["destroy"],
            dropDatabase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$dropDatabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dropDatabase"],
            execute: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$execute$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["execute"],
            find: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["find"],
            findGlobal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findGlobal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findGlobal"],
            findGlobalVersions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findGlobalVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findGlobalVersions"],
            findOne: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findOne"],
            findVersions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findVersions"],
            foreignKeys: new Set(),
            indexes: new Set(),
            init: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$init$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["init"],
            insert: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$insert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["insert"],
            migrate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrate"],
            migrateDown: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateDown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrateDown"],
            migrateFresh: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateFresh$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrateFresh"],
            migrateRefresh: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateRefresh$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrateRefresh"],
            migrateReset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateReset$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrateReset"],
            migrateStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrateStatus"],
            migrationDir,
            packageName: '@payloadcms/db-postgres',
            payload,
            queryDrafts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queryDrafts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryDrafts"],
            rawRelations: {},
            rawTables: {},
            updateJobs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateJobs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateJobs"],
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            rejectInitializing,
            requireDrizzleKit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$requireDrizzleKit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireDrizzleKit"],
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            resolveInitializing,
            rollbackTransaction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$rollbackTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rollbackTransaction"],
            updateGlobal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateGlobal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateGlobal"],
            updateGlobalVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateGlobalVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateGlobalVersion"],
            updateMany: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateMany$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateMany"],
            updateOne: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateOne"],
            updateVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateVersion"],
            upsert: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["upsert"]
        });
        adapter.blocksToJsonMigrator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$blocksToJsonMigrator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createBlocksToJsonMigrator"])({
            adapter: adapter,
            executeMethod,
            sanitizeStatements
        });
        return adapter;
    }
    return {
        name: 'postgres',
        allowIDOnCreate,
        defaultIDType: payloadIDType,
        init: adapter
    };
}
;
;
 //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4f18e7a8._.js.map